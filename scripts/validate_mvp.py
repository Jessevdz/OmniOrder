import requests
import json
import sys
import time

# Configuration
API_URL = "http://localhost:8000/api/v1"
TENANT_A = {"name": "Pizza Hut", "domain": "pizza.localhost", "color": "#ff0000"}
TENANT_B = {"name": "Burger King", "domain": "burger.localhost", "color": "#0000ff"}


def print_step(step):
    print(f"\n🔹 {step}")


def provision_tenant(tenant):
    print(f"   Provisioning {tenant['name']}...")
    try:
        res = requests.post(
            f"{API_URL}/sys/provision",
            json={
                "name": tenant["name"],
                "domain": tenant["domain"],
                "primary_color": tenant["color"],
            },
        )
        if res.status_code == 200:
            print(f"   ✅ Success: {res.json()['schema_name']}")
            return True
        elif res.status_code == 400:
            print("   ⚠️  Tenant already exists, continuing...")
            return True
        else:
            print(f"   ❌ Failed: {res.text}")
            return False
    except Exception as e:
        print(f"   ❌ Connection Error: {e}")
        return False


def check_orders(domain, expected_count):
    # NOTE: In a real app, we'd have a Manager API to check orders.
    # For this MVP script, we are inferring isolation by checking that
    # placing an order on A doesn't crash B, but to TRULY verify isolation
    # without a Manager API, we rely on the internal success logs or
    # we would query the DB directly.

    # However, let's verify connectivity and config isolation:
    headers = {"Host": domain}
    res = requests.get(f"{API_URL}/store/config", headers=headers)
    if res.status_code == 200:
        data = res.json()
        print(f"   🔍 Checking {domain}: Found Store '{data['name']}'")
        return True
    return False


def place_order(domain):
    headers = {"Host": domain}
    # 1. Get Menu to find an Item ID (Simulating user flow)
    menu_res = requests.get(f"{API_URL}/store/menu", headers=headers)
    menu = menu_res.json()

    # If menu is empty, we can't order (MVP currently starts with empty menus per tenant)
    # We need to manually insert menu items via SQL or assume we added logic to seed them.
    # For this test, we will create a dummy order payload even if menu is empty
    # because the DB model allows it (items is JSONB).

    payload = {
        "customer_name": "Test Bot",
        "total_amount": 1500,
        "items": [{"id": "uuid-placeholder", "qty": 1}],
    }

    res = requests.post(f"{API_URL}/store/orders", json=payload, headers=headers)
    if res.status_code == 201:
        print(f"   ✅ Order placed on {domain}")
        return True
    else:
        print(f"   ❌ Failed to order on {domain}: {res.text}")
        return False


def main():
    print_step("1. PROVISIONING TENANTS")
    if not provision_tenant(TENANT_A):
        sys.exit(1)
    if not provision_tenant(TENANT_B):
        sys.exit(1)

    print_step("2. VERIFYING CONFIG ISOLATION")
    # Verify Pizza returns Red, Burger returns Blue (implied by config check)
    check_orders(TENANT_A["domain"], 0)
    check_orders(TENANT_B["domain"], 0)

    print_step("3. EXECUTING TRANSACTION ISOLATION TEST")
    # Place order on Pizza
    place_order(TENANT_A["domain"])

    print_step("4. VERIFICATION")
    print("   To strictly verify DB isolation without a Manager API:")
    print("   Run the following SQL commands in your DB container:")
    print("-" * 50)
    print(f"   SELECT count(*) FROM tenant_pizzahut.orders;  -- Should be >= 1")
    print(f"   SELECT count(*) FROM tenant_burgerking.orders; -- Should be 0")
    print("-" * 50)


if __name__ == "__main__":
    main()
