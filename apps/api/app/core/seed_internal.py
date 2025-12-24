import uuid
import logging
from sqlalchemy.orm import Session
from sqlalchemy import text

from app.db.models import (
    Tenant,
    Category,
    MenuItem,
    ModifierGroup,
    ModifierOption,
    Order,
)
from app.db.base import Base
from app.core.config import settings

logger = logging.getLogger(__name__)

# --- STATIC UUIDs FOR DEMO CONSISTENCY ---
# We use fixed IDs so that a user browsing the generic demo menu can seamlessly
# transition to a personalized demo session without their cart becoming invalid.
DEMO_IDS = {
    "cat_specials": "a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11",
    "item_burger": "b1eebc99-9c0b-4ef8-bb6d-6bb9bd380b11",
    "item_salmon": "b2eebc99-9c0b-4ef8-bb6d-6bb9bd380b22",
    "item_risotto": "b3eebc99-9c0b-4ef8-bb6d-6bb9bd380b33",
    "cat_mains": "a1eebc99-9c0b-4ef8-bb6d-6bb9bd380a22",
    "item_calamari": "c1eebc99-9c0b-4ef8-bb6d-6bb9bd380c11",
    "item_fries": "c2eebc99-9c0b-4ef8-bb6d-6bb9bd380c22",
    "item_sprouts": "c3eebc99-9c0b-4ef8-bb6d-6bb9bd380c33",
    "cat_drinks": "a2eebc99-9c0b-4ef8-bb6d-6bb9bd380a33",
    "item_yuzu": "d1eebc99-9c0b-4ef8-bb6d-6bb9bd380d11",
    "item_nitro": "d2eebc99-9c0b-4ef8-bb6d-6bb9bd380d22",
}

# --- HIGH FIDELITY DEMO DATA ---
DEMO_TENANT_SEED = {
    "name": "Bistro Stelly",
    "domain": settings.DEMO_DOMAIN,
    "schema_name": settings.DEMO_SCHEMA,
    "theme_config": {
        "preset": "stelly",
        "primary_color": "#2563EB",
        "font_family": "Inter",
        "address": "101 Demo Lane, Tech City",
        "email": "demo@stelly.localhost",
        "phone": "(555) 019-2834",
        "operating_hours": [
            {"label": "Mon-Fri", "time": "11:00 AM - 10:00 PM"},
            {"label": "Weekends", "time": "10:00 AM - 11:00 PM"},
        ],
    },
    "categories": [
        {
            "id": DEMO_IDS["cat_specials"],
            "name": "Specialiteiten",
            "rank": 0,
            "items": [
                {
                    "id": DEMO_IDS["item_burger"],
                    "name": "The Iron Skillet Burger",
                    "desc": "Double wagyu smash patties, aged gruyere, caramelized onion jam, and truffle aioli on a toasted brioche bun.",
                    "price": 1800,
                    "img": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
                    "modifiers": [
                        {
                            "name": "Preparation",
                            "min": 1,
                            "max": 1,
                            "opts": [
                                {"name": "Medium Rare", "price": 0},
                                {"name": "Medium", "price": 0},
                                {"name": "Medium Well", "price": 0},
                            ],
                        },
                        {
                            "name": "Add-ons",
                            "min": 0,
                            "max": 3,
                            "opts": [
                                {"name": "Applewood Bacon", "price": 250},
                                {"name": "Fried Egg", "price": 150},
                                {"name": "Avocado", "price": 200},
                            ],
                        },
                    ],
                },
                {
                    "id": DEMO_IDS["item_salmon"],
                    "name": "Miso Glazed Salmon",
                    "desc": "Sustainably sourced Atlantic salmon, forbidden rice, sesame cucumber salad, and a ginger-soy reduction.",
                    "price": 2400,
                    "img": "https://images.unsplash.com/photo-1759502832625-a6ce1d780dde?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    "modifiers": [],
                },
                {
                    "id": DEMO_IDS["item_risotto"],
                    "name": "Truffle Mushroom Risotto",
                    "desc": "Arborio rice, wild mushrooms, white truffle oil, 24-month parmesan, and fresh herbs.",
                    "price": 2100,
                    "img": "https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=800&q=80",
                    "modifiers": [],
                },
            ],
        },
        {
            "id": DEMO_IDS["cat_mains"],
            "name": "Hoofdgerechten",
            "rank": 1,
            "items": [
                {
                    "id": DEMO_IDS["item_calamari"],
                    "name": "Crispy Calamari",
                    "desc": "Flash-fried Rhode Island squid, served with spicy marinara and charred lemon.",
                    "price": 1400,
                    "img": "https://images.unsplash.com/photo-1604909052743-94e838986d24?auto=format&fit=crop&w=800&q=80",
                    "modifiers": [],
                },
                {
                    "id": DEMO_IDS["item_fries"],
                    "name": "Parmesan Truffle Fries",
                    "desc": "Hand-cut kennebec potatoes, tossed in white truffle oil and herbs.",
                    "price": 900,
                    "img": "https://plus.unsplash.com/premium_photo-1672498329467-b27e2a97d29b?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    "modifiers": [
                        {
                            "name": "Dipping Sauces",
                            "min": 0,
                            "max": 2,
                            "opts": [
                                {"name": "Garlic Aioli", "price": 50},
                                {"name": "Spicy Mayo", "price": 50},
                                {"name": "Ketchup", "price": 0},
                            ],
                        }
                    ],
                },
                {
                    "id": DEMO_IDS["item_sprouts"],
                    "name": "Charred Brussels Sprouts",
                    "desc": "Pan-seared with balsamic glaze, pancetta, and toasted pecans.",
                    "price": 1100,
                    "img": "https://images.unsplash.com/photo-1432139555190-58524dae6a55?auto=format&fit=crop&w=800&q=80",
                    "modifiers": [],
                },
            ],
        },
        {
            "id": DEMO_IDS["cat_drinks"],
            "name": "Dranken",
            "rank": 2,
            "items": [
                {
                    "id": DEMO_IDS["item_yuzu"],
                    "name": "Yuzu Basil Smash",
                    "desc": "Fresh yuzu juice, thai basil, sparkling mineral water, cane sugar. (Non-Alcoholic)",
                    "price": 650,
                    "img": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
                    "modifiers": [],
                },
                {
                    "id": DEMO_IDS["item_nitro"],
                    "name": "Cold Brew Nitro",
                    "desc": "Single-origin beans steeped for 24 hours, infused with nitrogen for a creamy texture.",
                    "price": 550,
                    "img": "https://images.unsplash.com/photo-1558122104-355edad709f6?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    "modifiers": [
                        {
                            "name": "Milk Options",
                            "min": 0,
                            "max": 1,
                            "opts": [
                                {"name": "Oat Milk", "price": 100},
                                {"name": "Almond Milk", "price": 100},
                                {"name": "Whole Milk", "price": 0},
                            ],
                        }
                    ],
                },
            ],
        },
    ],
}

# --- OTHER TENANTS ---
OTHER_SEEDS = [
    {
        "name": "Pizza Hut",
        "domain": "pizza.localhost",
        "schema_name": "tenant_pizza",
        "theme_config": {
            "preset": "mono-luxe",
            "primary_color": "#e11d48",
            "font_family": "Oswald",
        },
        "categories": [
            {
                "name": "Pizzas",
                "rank": 0,
                "items": [
                    {
                        "name": "Pepperoni Feast",
                        "desc": "Double pepperoni, extra mozzarella.",
                        "price": 1800,
                        "img": "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=800&q=80",
                        "modifiers": [],
                    }
                ],
            }
        ],
    },
    {
        "name": "Burger King",
        "domain": "burger.localhost",
        "schema_name": "tenant_burger",
        "theme_config": {
            "preset": "fresh-market",
            "primary_color": "#2563eb",
            "font_family": "Inter",
        },
        "categories": [
            {
                "name": "Burgers",
                "rank": 0,
                "items": [
                    {
                        "name": "Whopper",
                        "desc": "Flame grilled beef patty.",
                        "price": 850,
                        "img": "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
                        "modifiers": [],
                    }
                ],
            }
        ],
    },
]

SEEDS = [DEMO_TENANT_SEED, *OTHER_SEEDS]


def provision_tenant_internal(
    db: Session, seed_data: dict, engine, skip_public_record: bool = False
):
    """
    Provisions a tenant. Checks if tables exist and creates them if needed.
    """
    schema = seed_data["schema_name"]
    is_demo = seed_data["domain"] == settings.DEMO_DOMAIN

    # 1. Tenant Record (Public)
    if not skip_public_record:
        db.execute(text("SET search_path TO public"))
        existing = db.query(Tenant).filter(Tenant.domain == seed_data["domain"]).first()

        if existing:
            logger.info(f"Tenant {seed_data['name']} record exists.")
            if is_demo:
                existing.theme_config = seed_data["theme_config"]
                db.commit()
        else:
            logger.info(f"Creating Tenant Record: {seed_data['name']}")
            new_tenant = Tenant(
                name=seed_data["name"],
                domain=seed_data["domain"],
                schema_name=schema,
                theme_config=seed_data["theme_config"],
            )
            db.add(new_tenant)
            db.commit()

    # 2. Schema Creation
    if is_demo and not skip_public_record:
        # For the generic demo tenant, we are resilient.
        try:
            db.execute(text(f"CREATE SCHEMA IF NOT EXISTS {schema}"))
            db.commit()
        except Exception as e:
            logger.error(f"Schema op failed: {e}")
    else:
        try:
            db.execute(text(f"CREATE SCHEMA IF NOT EXISTS {schema}"))
            db.commit()
        except Exception as e:
            logger.error(f"Failed to create schema {schema}: {e}")
            return

    # 3. Table Creation
    try:
        with engine.begin() as connection:
            connection.execute(text(f"SET search_path TO {schema}"))
            tenant_tables = [
                t for t in Base.metadata.sorted_tables if t.schema != "public"
            ]
            Base.metadata.create_all(bind=connection, tables=tenant_tables)
    except Exception as e:
        logger.error(f"Failed to create tables for {schema}: {e}")
        return

    # 4. Data Seeding
    db.execute(text(f"SET search_path TO {schema}"))

    # If data exists, skip (unless we want to force updates, but keep it simple)
    if db.query(Category).count() > 0:
        return

    logger.info(f"Seeding Data for {schema}...")

    for i, cat_data in enumerate(seed_data["categories"]):
        # Use provided static ID if available, else new UUID
        cat_id = cat_data.get("id") or uuid.uuid4()

        category = Category(
            id=cat_id, name=cat_data["name"], rank=cat_data.get("rank", i)
        )
        db.add(category)
        db.flush()

        for item_data in cat_data["items"]:
            # Use provided static ID if available
            item_id = item_data.get("id") or uuid.uuid4()

            item = MenuItem(
                id=item_id,
                name=item_data["name"],
                description=item_data.get("desc"),
                price=item_data["price"],
                image_url=item_data.get("img"),
                category_id=category.id,
            )
            db.add(item)
            db.flush()

            if "modifiers" in item_data:
                for mod_grp in item_data["modifiers"]:
                    grp = ModifierGroup(
                        item_id=item.id,
                        name=mod_grp["name"],
                        min_selection=mod_grp["min"],
                        max_selection=mod_grp["max"],
                    )
                    db.add(grp)
                    db.flush()

                    for opt in mod_grp["opts"]:
                        db.add(
                            ModifierOption(
                                group_id=grp.id,
                                name=opt["name"],
                                price_adjustment=opt["price"],
                            )
                        )

    db.commit()
    logger.info(f"Seeding complete for {schema}")


def init_db(db: Session, engine):
    for seed in SEEDS:
        try:
            provision_tenant_internal(db, seed, engine)
        except Exception as e:
            logger.error(f"Error seeding {seed['name']}: {e}")
            db.rollback()
