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
    # WARNING: Vulnerable to injection if schema_name wasn't sanitized.
    # Since we sanitize `clean_name` strictly above, this is acceptable for MVP.
    try:
        db.execute(text(f"CREATE SCHEMA IF NOT EXISTS {schema_name}"))
        db.commit()
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to create schema: {e}")

    # 4. Create Tables in Schema
    # In a full production app, we would call Alembic here.
    # For this MVP, to keep it simple and avoid subprocess calls,
    # we will use SQLAlchemy's create_all with the specific schema.
    from app.db.base import Base
    from app.db.session import engine

    # Filter only tenant tables (those without schema='public')
    tenant_tables = [
        table for table in Base.metadata.sorted_tables if table.schema != "public"
    ]

    # Create them specifically in the new schema
    Base.metadata.create_all(bind=engine, tables=tenant_tables, schema=schema_name)

    return TenantResponse(
        id=str(new_tenant.id),
        schema_name=schema_name,
        message="Tenant provisioned successfully",
    )
