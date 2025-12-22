"""
Note: You will need your Authentik API Token. Y
ou can get this by going to Authentik Admin -> Directory -> Tokens -> Create Static Token (associated with akadmin).
"""

import requests

# CONFIGURATION
AUTHENTIK_URL = "http://auth.localhost/api/v3"
AUTHENTIK_TOKEN = "Bearer EVqqNkwqlSJWpzqMaodEJnKdJPUgJACvxiCQ9TPxrVQCSS1qQNCu6eiSEkLs"

USERS_TO_CREATE = [
    {
        "username": "pizza_admin",
        "name": "Pizza Manager",
        "email": "admin@pizza.localhost",
        "password": "password",
    },
    {
        "username": "burger_admin",
        "name": "Burger Manager",
        "email": "admin@burger.localhost",
        "password": "password",
    },
]


def create_user(user_data):
    headers = {"Authorization": AUTHENTIK_TOKEN, "Content-Type": "application/json"}

    # 1. Create Core User
    print(f"Creating user {user_data['username']}...")
    res = requests.post(
        f"{AUTHENTIK_URL}/core/users/",
        headers=headers,
        json={
            "username": user_data["username"],
            "name": user_data["name"],
            "email": user_data["email"],
        },
    )

    if res.status_code == 400 and "already exists" in res.text:
        print(f" -> User {user_data['username']} already exists. Skipping.")
        # We need the ID to set the password, so we fetch the user
        user_id = requests.get(
            f"{AUTHENTIK_URL}/core/users/?username={user_data['username']}",
            headers=headers,
        ).json()["results"][0]["pk"]
    elif res.status_code == 201:
        user_id = res.json()["pk"]
        print(" -> Success.")
    else:
        print(f" -> Error: {res.text}")
        return

    # 2. Set Password
    print(f" -> Setting password...")
    res = requests.post(
        f"{AUTHENTIK_URL}/core/users/{user_id}/set_password/",
        headers=headers,
        json={"password": user_data["password"]},
    )
    if res.status_code == 200:
        print(" -> Password set.")
    else:
        print(f" -> Password Error: {res.text}")


if __name__ == "__main__":
    for user in USERS_TO_CREATE:
        create_user(user)
