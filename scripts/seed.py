import requests
import sys
import time

# --- Configuration ---
# The gateway to the API (Nginx or direct)
BASE_URL = "http://localhost:8000/api/v1"

# Domain Configs
ADMIN_HOST = "admin.omniorder.localhost"

# Tenants to Create
SEEDS = [
    {
        "name": "Pizza Hut",
        "domain": "pizza.localhost",
        "primary_color": "#e11d48",  # Red
        "font_family": "Oswald",
        "seed_data": True,  # This tells the API to create default Burgers/Fries
    },
    {
        "name": "Burger King",
        "domain": "burger.localhost",
        "primary_color": "#2563eb",  # Blue
        "font_family": "Inter",
        "seed_data": True,
    },
]

# Modifiers to attach to the default seeded items
MODIFIER_KV = {
    "The OmniBurger": [
        {
            "name": "Cook Temperature",
            "min_selection": 1,
            "max_selection": 1,
            "options": [
                {"name": "Rare", "price_adjustment": 0},
                {"name": "Medium", "price_adjustment": 0},
                {"name": "Well Done", "price_adjustment": 0},
            ],
        },
        {
            "name": "Add-ons",
            "min_selection": 0,
            "max_selection": 3,
            "options": [
                {"name": "Extra Cheese", "price_adjustment": 100},
                {"name": "Bacon", "price_adjustment": 200},
            ],
        },
    ],
    "Truffle Fries": [
        {
            "name": "Size",
            "min_selection": 1,
            "max_selection": 1,
            "options": [
                {"name": "Regular", "price_adjustment": 0},
                {"name": "Large", "price_adjustment": 250},
            ],
        }
    ],
    "Vanilla Shake": [
        {
            "name": "Toppings",
            "min_selection": 0,
            "max_selection": 2,
            "options": [
                {"name": "Whipped Cream", "price_adjustment": 0},
                {"name": "Cherry", "price_adjustment": 0},
            ],
        }
    ],
}


def log(msg, type="info"):
    icons = {"info": "🔹", "success": "✅", "error": "❌", "warn": "⚠️"}
    print(f"{icons.get(type, '')} {msg}")


def get_token_from_user():
    print("\n🔐 AUTHENTICATION REQUIRED")
    print("---------------------------------------------------------")
    print("Since we now use OIDC (Authentik), this script cannot auto-login.")
    print("1. Go to http://admin.omniorder.localhost/admin/login")
    print("2. Login via Authentik with your Super Admin user.")
    print("3. Open Developer Tools (F12) -> Network Tab.")
    print(
        "4. Refresh or make a request. Look for the 'Authorization: Bearer <token>' header."
    )
    print("---------------------------------------------------------")
    token = input("Paste your Access Token (starts with ey...): ").strip()

    if not token:
        log("Token required to proceed.", "error")
        sys.exit(1)

    # Simple heuristic check
    if not token.startswith("ey"):
        log("That doesn't look like a JWT. It should start with 'ey'.", "warn")
        confirm = input("Try anyway? (y/n): ")
        if confirm.lower() != "y":
            sys.exit(1)

    return token


def provision_tenant(token, payload):
    """
    Calls /sys/provision on the ADMIN host.
    """
    url = f"{BASE_URL}/sys/provision"
    headers = {
        "Authorization": f"Bearer {token}",
        "Content-Type": "application/json",
        "Host": ADMIN_HOST,  # Critical: Identifies request as Super Admin context
    }

    log(f"Provisioning {payload['name']} ({payload['domain']})...")

    try:
        res = requests.post(url, json=payload, headers=headers)
        if res.status_code == 200:
            log(f"Tenant Created! Schema: {res.json()['schema_name']}", "success")
            return True
        elif res.status_code == 400:
            log("Tenant already exists. Skipping provision.", "warn")
            return True
        elif res.status_code == 401:
            log("Unauthorized. Token invalid or expired.", "error")
            sys.exit(1)
        elif res.status_code == 403:
            log("Forbidden. Your user is not in SUPER_ADMINS list.", "error")
            sys.exit(1)
        else:
            log(f"Provision Error: {res.text}", "error")
            return False
    except Exception as e:
        log(f"Connection Error: {e}", "error")
        return False


def seed_modifiers(token, tenant):
    """
    Switch context to the Tenant Domain and add modifiers.
    """
    domain = tenant["domain"]
    headers = {
        "Authorization": f"Bearer {token}",
        "Host": domain,  # Critical: Target the specific tenant schema
    }

    log(f"Seeding modifiers for {domain}...", "info")

    # 1. Fetch Items to find UUIDs
    try:
        res = requests.get(f"{BASE_URL}/admin/items", headers=headers)
        if res.status_code != 200:
            log(f"Failed to fetch items: {res.status_code}", "error")
            return

        items = res.json()
    except Exception as e:
        log(f"Error fetching items: {e}", "error")
        return

    count = 0

    for item in items:
        # If this item has a config in MODIFIER_KV
        if item["name"] in MODIFIER_KV:
            # Check if it already has modifiers (simple check)
            if item.get("modifier_groups") and len(item["modifier_groups"]) > 0:
                continue

            configs = MODIFIER_KV[item["name"]]

            for group_def in configs:
                # Create Modifier Group
                try:
                    m_res = requests.post(
                        f"{BASE_URL}/admin/items/{item['id']}/modifiers",
                        headers=headers,
                        json=group_def,
                    )
                    if m_res.status_code == 200:
                        count += 1
                except Exception as e:
                    log(f"Failed to add modifier: {e}", "error")

    if count > 0:
        log(f"Added {count} modifier groups.", "success")
    else:
        log("No new modifiers needed.", "info")


def main():
    print("========================================")
    print("   OMNIORDER SEEDER (OIDC ENABLED)")
    print("========================================")

    # 1. Get Token
    token = get_token_from_user()

    # 2. Iterate
    for tenant in SEEDS:
        print(f"\n--- Processing {tenant['name']} ---")

        # A. Provision (Create Schema & Default Items)
        success = provision_tenant(token, tenant)

        if success:
            # B. Seed Modifiers (Enrich Data)
            seed_modifiers(token, tenant)

    print("\n========================================")
    print("   SEEDING COMPLETE")
    print("========================================")
    print("1. Visit http://pizza.localhost")
    print("2. Visit http://burger.localhost")
    print("3. Check http://pizza.localhost/kitchen")


if __name__ == "__main__":
    try:
        requests.get(BASE_URL)
    except:
        print("❌ API is not running at http://localhost:8000")
        sys.exit(1)

    main()
