from fastapi import APIRouter, HTTPException, Depends
from sqlalchemy.orm import Session
from sqlalchemy import text
from app.db.session import get_db
from app.db.models import Tenant
from app.schemas.provision import TenantCreateRequest, TenantResponse
import re

router = APIRouter()


@router.post("/provision", response_model=TenantResponse)
def provision_tenant(payload: TenantCreateRequest, db: Session = Depends(get_db)):
    """
    1. Create Tenant Record in public.tenants
    2. Create PostgreSQL Schema
    3. (MVP Only) Sync Run Migrations for this specific tenant logic
    """

    # 1. Generate clean schema name (e.g., "tenant_pizza_hut")
    clean_name = re.sub(r"[^a-zA-Z0-9]", "", payload.name.lower())
    schema_name = f"tenant_{clean_name}"

    # Check if domain exists
    existing = db.query(Tenant).filter(Tenant.domain == payload.domain).first()
    if existing:
        # If it exists, we assume success for MVP idempotency (or return 400)
        # Returning 400 to match your script's "Tenant already exists" check
        raise HTTPException(status_code=400, detail="Domain already taken")

    # 2. Create Record
    new_tenant = Tenant(
        name=payload.name,
        domain=payload.domain,
        schema_name=schema_name,
        theme_config={"primary_color": payload.primary_color},
    )
    db.add(new_tenant)

    try:
        db.commit()
        db.refresh(new_tenant)
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=500, detail=str(e))

    # 3. Create Schema (Raw SQL)
    try:
        db.execute(text(f"CREATE SCHEMA IF NOT EXISTS {schema_name}"))
        db.commit()
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to create schema: {e}")

    # 4. Create Tables in Schema
    # FIX: Use engine.begin() + SET search_path instead of invalid 'schema' arg
    from app.db.base import Base
    from app.db.session import engine

    # Filter only tenant tables (those without schema='public')
    tenant_tables = [
        table for table in Base.metadata.sorted_tables if table.schema != "public"
    ]

    try:
        with engine.begin() as connection:
            # Context Switch: Force this connection to look at the new schema
            connection.execute(text(f"SET search_path TO {schema_name}"))

            # Create tables. Because search_path is set, and models have schema=None,
            # they will be created inside 'tenant_xxx'.
            Base.metadata.create_all(bind=connection, tables=tenant_tables)

    except Exception as e:
        # Cleanup if table creation fails
        db.delete(new_tenant)
        db.commit()
        raise HTTPException(status_code=500, detail=f"Table creation failed: {e}")

    return TenantResponse(
        id=str(new_tenant.id),
        schema_name=schema_name,
        message="Tenant provisioned successfully",
    )
