import requests
import sys

# --- CONFIGURATION ---
AUTHENTIK_URL = "http://auth.localhost/api/v3"
# 1. Log into Authentik as akadmin
# 2. Go to Directory -> Token & App Passwords -> Create -> User: akadmin -> Identifier: bootstrapper
# 3. Copy the token here:
API_TOKEN = "Bearer EVqqNkwqlSJWpzqMaodEJnKdJPUgJACvxiCQ9TPxrVQCSS1qQNCu6eiSEkLs"

APP_SLUG = "omniorder"
PROVIDER_NAME = "OmniOrder Provider"
CLIENT_ID = "omniorder-web"

# Multi-Tenant Groups to Create
GROUPS = ["Super Admins", "Pizza Hut Staff", "Burger King Staff"]

# Users to seed
USERS = [
    {
        "username": "jesse_admin",
        "name": "Jesse SuperAdmin",
        "email": "jesse_vdz@hotmail.com",
        "password": "password",
        "group": "Super Admins",
    },
    {
        "username": "pizza_manager",
        "name": "Pizza Manager",
        "email": "manager@pizza.localhost",
        "password": "password",
        "group": "Pizza Hut Staff",
    },
    {
        "username": "burger_manager",
        "name": "Burger Manager",
        "email": "manager@burger.localhost",
        "password": "password",
        "group": "Burger King Staff",
    },
]

# --- HELPERS ---
headers = {
    "Authorization": API_TOKEN,
    "Content-Type": "application/json",
    "Accept": "application/json",
}


def get_id(endpoint, name_field, value):
    """Finds an object ID by name/slug to ensure idempotency."""
    res = requests.get(
        f"{AUTHENTIK_URL}{endpoint}", headers=headers, params={name_field: value}
    )
    if res.status_code == 200:
        data = res.json()
        if data["results"]:
            return data["results"][0]["pk"]
    return None


def get_default_scopes():
    """Fetches IDs for standard OIDC scopes (email, profile, openid)."""
    scope_ids = []
    for name in ["email", "profile", "openid"]:
        sid = get_id("/propertymappings/scope/", "name", name)
        if sid:
            scope_ids.append(sid)
    return scope_ids


# --- MAIN FLOW ---


def run():
    print(f"🚀 Starting Authentik Bootstrap at {AUTHENTIK_URL}...")

    # 1. Create Custom Scope Mapping (Injects Groups into Token)
    print("--- 1. Configuring Scope Mapping ---")
    mapping_name = "Group Access Scope"
    mapping_id = get_id("/propertymappings/scope/", "name", mapping_name)

    if not mapping_id:
        expression = "return {'groups': [g.name for g in request.user.ak_groups.all()]}"
        res = requests.post(
            f"{AUTHENTIK_URL}/propertymappings/provider/scope/",
            headers=headers,
            json={
                "name": mapping_name,
                "scope_name": "groups",
                "expression": expression,
            },
        )
        if res.status_code == 201:
            mapping_id = res.json()["pk"]
            print(f"✅ Created Scope Mapping: {mapping_name}")
        else:
            print(res)
            print(f"❌ Failed to create scope: {res.text}")
            sys.exit(1)
    else:
        print(f"⏩ Scope Mapping exists.")

    # 2. Create Provider
    print("\n--- 2. Configuring OAuth2 Provider ---")
    provider_id = get_id("/providers/oauth2/", "name", PROVIDER_NAME)

    # Gather all property mappings (Standard + Custom)
    all_scopes = get_default_scopes()
    all_scopes.append(mapping_id)

    if not provider_id:
        res = requests.post(
            f"{AUTHENTIK_URL}/providers/oauth2/",
            headers=headers,
            json={
                "name": PROVIDER_NAME,
                "client_id": CLIENT_ID,
                "client_type": "public",
                "authorization_flow": get_id(
                    "/flows/", "slug", "default-provider-authorization-implicit-consent"
                ),
                "authentication_flow": get_id(
                    "/flows/", "slug", "default-authentication-flow"
                ),
                "redirect_uris": "http://.*\\.localhost:5173/.*\nhttp://.*\\.localhost/.*",
                "property_mappings": all_scopes,
            },
        )
        if res.status_code == 201:
            provider_id = res.json()["pk"]
            print(f"✅ Created Provider: {PROVIDER_NAME}")
        else:
            print(f"❌ Failed to create provider: {res.text}")
            sys.exit(1)
    else:
        # Update scopes just in case
        requests.patch(
            f"{AUTHENTIK_URL}/providers/oauth2/{provider_id}/",
            headers=headers,
            json={"property_mappings": all_scopes},
        )
        print(f"⏩ Provider exists (Scopes updated).")

    # 3. Create Application
    print("\n--- 3. Configuring Application ---")
    app_id = get_id("/core/applications/", "slug", APP_SLUG)

    if not app_id:
        res = requests.post(
            f"{AUTHENTIK_URL}/core/applications/",
            headers=headers,
            json={
                "name": "OmniOrder",
                "slug": APP_SLUG,
                "provider": provider_id,
                "meta_launch_url": "http://admin.omniorder.localhost/platform",
            },
        )
        if res.status_code == 201:
            print(f"✅ Created Application: OmniOrder")
        else:
            print(f"❌ Failed to create application: {res.text}")
    else:
        print(f"⏩ Application exists.")

    # 4. Create Groups
    print("\n--- 4. Creating Groups ---")
    group_ids = {}
    for g_name in GROUPS:
        gid = get_id("/core/groups/", "name", g_name)
        if not gid:
            res = requests.post(
                f"{AUTHENTIK_URL}/core/groups/", headers=headers, json={"name": g_name}
            )
            gid = res.json()["pk"]
            print(f"✅ Created Group: {g_name}")
        else:
            print(f"⏩ Group exists: {g_name}")
        group_ids[g_name] = gid

    # 5. Create Users
    print("\n--- 5. Seeding Users ---")
    for u in USERS:
        uid = get_id("/core/users/", "username", u["username"])

        # Create
        if not uid:
            res = requests.post(
                f"{AUTHENTIK_URL}/core/users/",
                headers=headers,
                json={
                    "username": u["username"],
                    "name": u["name"],
                    "email": u["email"],
                },
            )
            if res.status_code != 201:
                print(f"❌ Failed to create user {u['username']}: {res.text}")
                continue
            uid = res.json()["pk"]
            print(f"✅ Created User: {u['username']}")

            # Set Password
            requests.post(
                f"{AUTHENTIK_URL}/core/users/{uid}/set_password/",
                headers=headers,
                json={"password": u["password"]},
            )
            print(f"   🔑 Password set")
        else:
            print(f"⏩ User exists: {u['username']}")

        # Assign to Group
        target_group_id = group_ids.get(u["group"])
        if target_group_id:
            requests.post(
                f"{AUTHENTIK_URL}/core/groups/{target_group_id}/add_user/",
                headers=headers,
                json={"pk": uid},
            )
            print(f"   busts Linked to group: {u['group']}")

    print("\n✨ Bootstrap Complete! You can now login.")


if __name__ == "__main__":
    run()
