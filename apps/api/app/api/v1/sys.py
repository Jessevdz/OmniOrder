from fastapi import APIRouter, HTTPException, Depends
from sqlalchemy.orm import Session
from sqlalchemy import text
from app.db.session import get_db
from app.db.models import Tenant, User  # Import User
from app.schemas.provision import TenantCreateRequest, TenantResponse
from app.core.security import get_password_hash  # Import hashing
import re

router = APIRouter()


@router.post("/provision", response_model=TenantResponse)
def provision_tenant(payload: TenantCreateRequest, db: Session = Depends(get_db)):

    # ... [Step 1: Check Domain & Create Tenant Record code remains the same] ...
    clean_name = re.sub(r"[^a-zA-Z0-9]", "", payload.name.lower())
    schema_name = f"tenant_{clean_name}"

    existing = db.query(Tenant).filter(Tenant.domain == payload.domain).first()
    if existing:
        raise HTTPException(status_code=400, detail="Domain already taken")

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
        # Cleanup
        db.delete(new_tenant)
        db.commit()
        raise HTTPException(status_code=500, detail=f"Failed to create schema: {e}")

    # 4. Create Tables & Default Admin
    from app.db.base import Base
    from app.db.session import engine

    tenant_tables = [
        table for table in Base.metadata.sorted_tables if table.schema != "public"
    ]

    try:
        with engine.begin() as connection:
            # Context Switch
            connection.execute(text(f"SET search_path TO {schema_name}"))

            # A. Create Tables
            Base.metadata.create_all(bind=connection, tables=tenant_tables)

            # B. Create Default Admin User
            # Logic: admin@{domain} / 'password'
            admin_email = f"admin@{payload.domain}"
            hashed_pwd = get_password_hash("password")

            # Use raw SQL insert inside the connection block to ensure it hits the right schema
            # (ORM Session is tricky inside engine.begin())
            connection.execute(
                text(
                    """
                    INSERT INTO users (id, email, hashed_password, full_name, role)
                    VALUES (:id, :email, :pwd, :name, 'admin')
                    """
                ),
                {
                    "id": User().id,  # Generate UUID via model default simulation or python uuid
                    "email": admin_email,
                    "pwd": hashed_pwd,
                    "name": "Super Admin",
                },
            )

    except Exception as e:
        # Cleanup if table creation fails
        db.delete(new_tenant)
        db.commit()
        db.execute(text(f"DROP SCHEMA IF EXISTS {schema_name} CASCADE"))
        db.commit()
        raise HTTPException(status_code=500, detail=f"Table creation failed: {e}")

    return TenantResponse(
        id=str(new_tenant.id),
        schema_name=schema_name,
        message=f"Tenant created. Admin: {f'admin@{payload.domain}'} / 'password'",
    )
