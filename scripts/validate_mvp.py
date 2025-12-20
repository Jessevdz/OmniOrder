import requests
import json
import sys
import time

# Configuration
API_URL = "http://localhost:8000/api/v1"
# Phase 4: Added Seed Data flag check
TENANT_A = {
    "name": "Pizza Hut",
    "domain": "pizza.localhost",
    "color": "#e11d48",
    "seed": True,
}
TENANT_B = {
    "name": "Burger King",
    "domain": "burger.localhost",
    "color": "#2563eb",
    "seed": True,
}


def print_step(step):
    print(f"\n🔹 {step}")


def provision_tenant(tenant):
    print(f"    Provisioning {tenant['name']}...")
    try:
        res = requests.post(
            f"{API_URL}/sys/provision",
            json={
                "name": tenant["name"],
                "domain": tenant["domain"],
                "primary_color": tenant["color"],
                "seed_data": tenant["seed"],
            },
        )
        if res.status_code == 200:
            print(f"    ✅ Success: {res.json()['schema_name']}")
            return True
        elif res.status_code == 400:
            print("    ⚠️  Tenant already exists, continuing...")
            return True
        else:
            print(f"    ❌ Failed: {res.text}")
            return False
    except Exception as e:
        print(f"    ❌ Connection Error: {e}")
        return False


def check_menu_seeding(domain):
    """
    Phase 4 Check: Verify menu is not empty.
    """
    headers = {"Host": domain}
    try:
        res = requests.get(f"{API_URL}/store/menu", headers=headers)
        data = res.json()

        total_items = sum(len(cat["items"]) for cat in data)

        if total_items > 0:
            print(
                f"    ✅ Menu Seeding Verified on {domain}: Found {total_items} items."
            )
            # Return the first item ID for the order test
            return data[0]["items"][0]["id"]
        else:
            print(f"    ❌ Menu is empty on {domain} (Seeding Failed).")
            return None
    except Exception as e:
        print(f"    ❌ Failed to fetch menu: {e}")
        return None


def place_order(domain, item_id):
    if not item_id:
        print(f"    ❌ Skipping order on {domain}: No items found.")
        return False

    headers = {"Host": domain}
    payload = {
        "customer_name": "Test Bot",
        "total_amount": 1500,
        "items": [{"id": item_id, "qty": 1}],
    }

    res = requests.post(f"{API_URL}/store/orders", json=payload, headers=headers)
    if res.status_code == 201:
        print(f"    ✅ Order placed on {domain}")
        return True
    else:
        print(f"    ❌ Failed to order on {domain}: {res.text}")
        return False


def main():
    print_step("1. PROVISIONING TENANTS (WITH SEEDING)")
    if not provision_tenant(TENANT_A):
        sys.exit(1)
    if not provision_tenant(TENANT_B):
        sys.exit(1)

    print_step("2. VERIFYING SEEDED CONTENT")
    # Check if menus exist and get an item ID to order
    item_a = check_menu_seeding(TENANT_A["domain"])
    item_b = check_menu_seeding(TENANT_B["domain"])

    print_step("3. EXECUTING ISOLATION TEST")
    # Place order on Pizza
    place_order(TENANT_A["domain"], item_a)

    print_step("4. VERIFICATION")
    print("    To strictly verify DB isolation without a Manager API:")
    print("    Run the following SQL commands in your DB container:")
    print("-" * 50)
    print(f"    SELECT count(*) FROM tenant_pizzahut.orders;  -- Should be >= 1")
    print(f"    SELECT count(*) FROM tenant_burgerking.orders; -- Should be 0")
    print("-" * 50)


if __name__ == "__main__":
    main()
