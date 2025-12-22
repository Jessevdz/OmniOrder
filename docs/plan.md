# OmniOrder MVP: Vision & Product Strategy

### The Goal

To create a high-fidelity **"Sales Demo Environment"** that proves OmniOrder’s unique value proposition: **SaaS scalability with Agency-grade customization.**

### The Experience We Are Building

This MVP will demonstrate a live, multi-tenant ecosystem running locally but architected for Azure.

1. **The "Chameleon" Storefront (Client View):**
* A user visits `pizza.localhost` and sees a Red/Black "Mono Luxe" steakhouse interface.
* A user visits `burger.localhost` and sees a Green/Orange "Fresh Market" juice bar interface.
* **Key Demo Moment:** Showcasing how the *exact same React codebase* renders two completely different visual experiences based purely on the domain name.


2. **The "Cockpit" KDS (Kitchen View):**
* A real-time kitchen display that updates instantly via WebSockets when an order is placed on the storefront.
* Demonstrates operational efficiency and "No-Refresh" reliability.


3. **The "Sovereign" Admin (Tenant View):**
* **New:** Secured via **Authentik (SSO)**.
* Demonstrates that each tenant has their own isolated database schema and secure login context, mimicking an Enterprise environment.


4. **The Infrastructure (Azure Mimicry):**
* **Nginx** acts as **Azure Front Door**, routing traffic and managing SSL/Host headers.
* **MinIO** acts as **Azure Blob Storage**, serving assets via signed/public URLs.
* **Authentik** acts as **Azure AD / External IdP**, handling OIDC authentication.



---

# Implementation Plan

## Phase 1: Infrastructure & Identity (Authentik Integration)

We will replace the local password hashing logic with a centralized Identity Provider. This elevates the product from "Student Project" to "Enterprise Platform."

### 1.1 Update `docker-compose.yml`

Add Authentik services (Server, Worker) and a Redis instance dedicated to it.

```yaml
  # ... existing services ...

  # Identity Provider (Authentik)
  authentik-server:
    image: ghcr.io/goauthentik/server:2023.10.0
    command: server
    environment:
      AUTHENTIK_REDIS__HOST: redis
      AUTHENTIK_POSTGRESQL__HOST: db
      AUTHENTIK_POSTGRESQL__NAME: omniorder # Use same DB server, distinct DB logic handled internally
      AUTHENTIK_POSTGRESQL__USER: postgres
      AUTHENTIK_POSTGRESQL__PASSWORD: postgres
      AUTHENTIK_SECRET_KEY: "generate_a_strong_key_here"
    ports:
      - "9000:9000"
      - "9443:9443"
    depends_on:
      - db
      - redis

  authentik-worker:
    image: ghcr.io/goauthentik/server:2023.10.0
    command: worker
    environment:
      AUTHENTIK_REDIS__HOST: redis
      AUTHENTIK_POSTGRESQL__HOST: db
      AUTHENTIK_POSTGRESQL__NAME: omniorder
      AUTHENTIK_POSTGRESQL__USER: postgres
      AUTHENTIK_POSTGRESQL__PASSWORD: postgres
      AUTHENTIK_SECRET_KEY: "generate_a_strong_key_here"
    depends_on:
      - db
      - redis

```

### 1.2 Configure Nginx for IdP Routing

Update `infra/nginx/nginx.conf` to handle `auth.localhost`. This simulates a dedicated auth domain.

```nginx
# Add inside http block
server {
    listen 80;
    server_name auth.localhost;

    location / {
        proxy_pass http://authentik-server:9000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }
}

```

### 1.3 Authentik Bootstrap (Manual Step for Demo)

1. Boot the stack.
2. Go to `http://auth.localhost/if/flow/initial-setup/`.
3. Create the admin account.
4. **Create an Application:** "OmniOrder"
5. **Create a Provider:** "OAuth2/OpenID Provider".
* Redirect URI: `http://admin.omniorder.localhost/auth/callback` (and tenant domains if necessary, or use a wildcard `http://*.localhost/auth/callback`).
* *Note:* For this MVP, we will centralize Admin login on `admin.omniorder.localhost` to simplify redirect URIs.



---

## Phase 2: Backend Authentication Refactor

We will rip out the local `bcrypt` logic and replace it with stateless JWT validation.

### 2.1 Install Dependencies

Add to `apps/api/requirements.txt`:

```text
python-jose[cryptography]
httpx  # For fetching JWKS

```

### 2.2 Update `apps/api/app/core/config.py`

Add OIDC configuration.

```python
class Settings(BaseSettings):
    # ... existing ...
    OIDC_DOMAIN: str = "http://auth.localhost"
    OIDC_CLIENT_ID: str = "omniorder-api" # From Authentik
    OIDC_AUDIENCE: str = "omniorder-api"
    JWKS_URL: str = "http://authentik-server:9000/application/o/omniorder/jwks/" # Internal Docker URL

```

### 2.3 Rewrite `apps/api/app/api/v1/deps.py`

The `get_current_user` dependency now validates the Authentik Token.

```python
from fastapi import Depends, HTTPException, status, Request
from fastapi.security import OAuth2PasswordBearer
from jose import jwt
from app.core.config import settings
import httpx

# The frontend will send the token in the header
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="auth_flow_handled_by_frontend")

async def get_jwks():
    async with httpx.AsyncClient() as client:
        # Fetch public keys from Authentik
        resp = await client.get(settings.JWKS_URL)
        return resp.json()

async def get_current_user(
    request: Request, 
    token: str = Depends(oauth2_scheme)
):
    # 1. Validation (Verify signature using JWKS)
    # In prod, cache the JWKS result
    jwks = await get_jwks()
    
    try:
        payload = jwt.decode(
            token, 
            jwks, 
            algorithms=["RS256"], 
            audience=settings.OIDC_AUDIENCE,
            options={"verify_at_hash": False}
        )
    except Exception as e:
        raise HTTPException(status_code=401, detail="Invalid Authentication Token")

    # 2. Authorization (Context Check)
    # Does this user have access to the requested Tenant (Host)?
    
    host = request.headers.get("host", "").split(":")[0]
    # Logic: 
    # A. Super Admin (admin.omniorder.localhost) -> Check 'is_superuser' claim
    # B. Tenant Admin (pizza.localhost) -> Check if email/group maps to tenant
    
    # For MVP Demo: We blindly trust valid tokens, but we resolve the Schema 
    # to ensure they are operating on the correct DB data.
    
    from app.db.session import SessionLocal
    from app.db.models import Tenant
    from sqlalchemy import text
    
    db = SessionLocal()
    tenant = db.query(Tenant).filter(Tenant.domain == host).first()
    db.close()

    if not tenant and host != "admin.omniorder.localhost":
         raise HTTPException(status_code=404, detail="Tenant context not found")

    # Return a User Object (Simulated from Token)
    return {
        "id": payload.get("sub"),
        "email": payload.get("email"),
        "name": payload.get("name"),
        "schema": tenant.schema_name if tenant else "public"
    }

```

---

## Phase 3: Frontend Identity Integration

The React app needs to initiate the OIDC flow instead of using a custom login form.

### 3.1 Install OIDC Client

```bash
cd apps/web && npm install react-oidc-context oidc-client-ts

```

### 3.2 Update `AuthProvider` (`apps/web/src/context/AuthContext.tsx`)

Wrap the application in `AuthProvider` from `react-oidc-context`.

```tsx
import { AuthProvider as OIDCProvider } from "react-oidc-context";

const oidcConfig = {
  authority: "http://auth.localhost/application/o/omniorder/",
  client_id: "omniorder-web",
  redirect_uri: window.location.origin + "/admin/dashboard", // Simplified for MVP
  onSigninCallback: () => {
      // Remove query params to clean URL
      window.history.replaceState({}, document.title, window.location.pathname);
  }
};

export const AuthProvider = ({ children }) => (
    <OIDCProvider {...oidcConfig}>
        {children}
    </OIDCProvider>
);

```

### 3.3 Create a "Login with SSO" Page

Replace `apps/web/src/pages/admin/Login.tsx` with a redirector.

```tsx
import { useAuth } from "react-oidc-context";

export function LoginPage() {
    const auth = useAuth();

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="text-center space-y-6">
                <h1 className="text-3xl font-bold">OmniOrder Admin</h1>
                <button 
                    onClick={() => auth.signinRedirect()}
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700"
                >
                    Sign in with Corporate SSO
                </button>
            </div>
        </div>
    );
}

```

---

## Phase 4: Completing the Tenant & KDS Features

Ensure the "Active Usage" loop works perfectly.

### 4.1 "Schema-Aware" KDS (`apps/api/app/api/v1/ws.py`)

Ensure WebSockets respect the authentication.

* **Challenge:** WebSockets cannot easily send headers.
* **Solution (MVP):** Pass the token in the Query Param: `ws://...?token=xyz`.
* **Update:** Modify `ws.py` to accept `token` query param, validate it using the same logic as `deps.py`, and *then* connect to the Tenant's broadcast channel.

### 4.2 KDS UI Polish (`KitchenDisplay.tsx`)

* Implement the **Wake Lock API** (already in code, verify functionality).
* Add a visual "Offline/Disconnected" banner if WebSocket drops.
* Ensure the "Order Bump" (moving from Pending -> Ready) updates the UI instantly without refresh.

### 4.3 Image Uploads (`storage.py`)

* Ensure `MinIO` public bucket policy is set in `docker-compose` (using the `minio-setup` container is best practice).
* **Azure Mimicry:** The API should return a full URL: `http://localhost:9000/omniorder-assets/filename.jpg`.
* Verify the React `ItemDetailModal` renders this correctly.

---

## Phase 5: Demo Script & Validation

### 5.1 The "Golden Path" Demo Script

1. **Open `admin.omniorder.localhost`:**
* Login via Authentik (Super Admin).
* Create a new Tenant: "Taco Bell" -> `taco.localhost`.
* (Backend creates `tenant_taco` schema).


2. **Open `taco.localhost`:**
* See the public storefront. It's empty but branded (Default Mono Luxe).


3. **Login to `taco.localhost/admin`:**
* Login via Authentik.
* Go to **Menu Builder**. Add "Crunchwrap". Upload an image.
* Go to **Settings**. Change Preset to "Tech Ocean" (Dark mode).


4. **Open `taco.localhost` (Incognito):**
* See the new Dark Mode theme. See the "Crunchwrap".
* Add to Cart -> Checkout ("Guest User").


5. **Open `taco.localhost/kitchen` (Tablet View):**
* **Ding!** The order appears instantly on the KDS.
* Chef taps "Preparing" -> "Ready".


6. **Back to Customer View:**
* The "Order Status Banner" updates to "Ready for Pickup".



### 5.2 Validation Script Update

Update `scripts/seed.py` to:

1. Create users in Authentik via API (optional, or just log instructions).
2. Still use the API for data seeding, but perhaps skip the auth seeding if we rely on SSO.


Here is the additional **Phase 6** to be appended to the Implementation Plan. This phase focuses on the "Day 2" operations—ensuring the environment boots up correctly every time and can be reset instantly between sales calls.

---

## Phase 6: Stability, Automation & "Demo Mode"

To ensure the demo doesn't fail during a live presentation due to missing buckets, CORS errors, or dirty data, we will implement the following hardening scripts.

### 6.1 Automate Asset Storage (MinIO)

We cannot rely on manual bucket creation. We will add a transient "setup" container that runs once on boot to configure the object storage.

**Update `docker-compose.yml`:**
Uncomment and harden the `minio-setup` service.

```yaml
  minio-setup:
    image: minio/mc
    depends_on:
      - minio
    entrypoint: >
      /bin/sh -c "
      # 1. Wait for MinIO to be ready
      until (/usr/bin/mc alias set myminio http://minio:9000 minioadmin minioadmin) do echo '...waiting for MinIO...' && sleep 1; done;
      
      # 2. Create the bucket if it doesn't exist
      /usr/bin/mc mb myminio/omniorder-assets --ignore-existing;
      
      # 3. Set policy to public (Critical for frontend access)
      /usr/bin/mc anonymous set download myminio/omniorder-assets;
      
      echo 'MinIO Configured Successfully';
      exit 0;
      "

```

### 6.2 Hardening CORS for Subdomains

Since we are using `pizza.localhost`, `burger.localhost`, etc., standard CORS rules will block API calls. We must enable Regex origins.

**Update `apps/api/app/main.py`:**

```python
# ... imports
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title=settings.PROJECT_NAME)

# Allow any subdomain of localhost
app.add_middleware(
    CORSMiddleware,
    allow_origin_regex="http://.*\.localhost", # Regex to match http://pizza.localhost, etc.
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

```

### 6.3 The "Super Admin" Config

Since we removed the local `users` table check for the `/provision` endpoint, we need a way to authorize the "Sales Engineer" to create new tenants.

**Update `apps/api/app/core/config.py`:**

```python
class Settings(BaseSettings):
    # ... existing config ...
    
    # Comma separated list of emails allowed to provision tenants
    SUPER_ADMINS: list[str] = ["demo@omniorder.localhost", "admin@omniorder.localhost"]

```

**Update `apps/api/app/api/v1/sys.py`:**

```python
from app.core.config import settings

@router.post("/provision")
def provision_tenant(
    payload: TenantCreateRequest, 
    current_user: dict = Depends(get_current_user), # From new OIDC deps
    db: Session = Depends(get_db)
):
    # simple email check for MVP
    if current_user["email"] not in settings.SUPER_ADMINS:
        raise HTTPException(status_code=403, detail="Only Super Admins can provision tenants.")
    
    # ... rest of provisioning logic

```

### 6.4 The "Demo Reset" Script

This is critical for sales. You finish a demo with "Pizza Hut," the database is full of test orders, and you have a new call in 10 minutes.

Create `scripts/reset_demo.py`:

```python
import psycopg2
from psycopg2.extensions import ISOLATION_LEVEL_AUTOCOMMIT

# Config (match docker-compose)
DB_CONFIG = {
    "dbname": "omniorder",
    "user": "postgres",
    "password": "postgres",
    "host": "localhost",
    "port": "5432"
}

def reset_db():
    print("🔥 NUKING ALL TENANT DATA...")
    
    try:
        conn = psycopg2.connect(**DB_CONFIG)
        conn.set_isolation_level(ISOLATION_LEVEL_AUTOCOMMIT)
        cur = conn.cursor()

        # 1. Find all tenant schemas
        cur.execute("SELECT schema_name FROM information_schema.schemata WHERE schema_name LIKE 'tenant_%';")
        schemas = [row[0] for row in cur.fetchall()]

        # 2. Drop each schema
        for schema in schemas:
            print(f"   -> Dropping schema: {schema}")
            cur.execute(f"DROP SCHEMA IF EXISTS {schema} CASCADE;")

        # 3. Truncate public tenants table
        print("   -> Clearing public registry...")
        cur.execute("TRUNCATE TABLE public.tenants CASCADE;")

        print("✅ Database reset complete. Authentik config preserved.")
        
    except Exception as e:
        print(f"❌ Error: {e}")
    finally:
        if conn: conn.close()

if __name__ == "__main__":
    confirm = input("This will DELETE ALL TENANTS. Are you sure? (y/n): ")
    if confirm.lower() == 'y':
        reset_db()

```

### 6.5 Configuring Authentik Redirects (The "Regex" Trick)

In the Authentik UI (Provider Settings), instead of adding every single possible tenant URL (`http://pizza.localhost`, `http://burger.localhost`...), use a regex redirect URI.

* **Redirect URI:** `http://.*\.localhost/.*`
* *Note:* Ensure "Strict URL Checking" is disabled or configured to allow this regex pattern in your Authentik Provider settings. This allows you to spin up `random-name.localhost` during a demo and have SSO work instantly without reconfiguring the IdP.

---

### Revised Checklist for Demo Readiness

1. [ ] **Boot:** `docker-compose up --build -d`
2. [ ] **Assets:** Check logs for `minio-setup` to ensure "MinIO Configured Successfully".
3. **Identity:**
* Login to `auth.localhost`.
* Setup OIDC Provider with Client ID `omniorder-web` and Redirect Regex `http://.*\.localhost/.*`.


4. [ ] **Reset:** Run `python scripts/reset_demo.py` to ensure a clean slate.
5. [ ] **Seed:** Run `python scripts/seed.py` (updated to skip auth creation, only data).
6. [ ] **Verify:**
* Visit `pizza.localhost` -> Red Theme?
* Visit `burger.localhost` -> Blue Theme?
* Login to Admin -> Redirects to Authentik?
* Upload Image -> Loads from `localhost:9000`?