from fastapi import APIRouter, HTTPException, Depends
from sqlalchemy.orm import Session
from sqlalchemy import text
from app.db.session import get_db
from app.db.models import Tenant, User
from app.schemas.provision import TenantCreateRequest, TenantResponse
from app.core.security import get_password_hash
import re

router = APIRouter()


@router.post("/provision", response_model=TenantResponse)
def provision_tenant(payload: TenantCreateRequest, db: Session = Depends(get_db)):
    # 1. Clean & Check Domain
    clean_name = re.sub(r"[^a-zA-Z0-9]", "", payload.name.lower())
    schema_name = f"tenant_{clean_name}"

    existing = db.query(Tenant).filter(Tenant.domain == payload.domain).first()
    if existing:
        raise HTTPException(status_code=400, detail="Domain already taken")

    # 2. Create Tenant Record (with Font in theme_config)
    new_tenant = Tenant(
        name=payload.name,
        domain=payload.domain,
        schema_name=schema_name,
        theme_config={
            "primary_color": payload.primary_color,
            "font_family": payload.font_family,
        },
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
            connection.execute(text(f"SET search_path TO {schema_name}"))
            Base.metadata.create_all(bind=connection, tables=tenant_tables)

            # Create Default Admin
            admin_email = f"admin@{payload.domain}"
            hashed_pwd = get_password_hash("password")

            connection.execute(
                text(
                    """
                    INSERT INTO users (id, email, hashed_password, full_name, role)
                    VALUES (:id, :email, :pwd, :name, 'admin')
                    """
                ),
                {
                    "id": User().id,
                    "email": admin_email,
                    "pwd": hashed_pwd,
                    "name": "Super Admin",
                },
            )

    except Exception as e:
        # Rollback everything if provisioning fails
        db.delete(new_tenant)
        db.commit()
        db.execute(text(f"DROP SCHEMA IF EXISTS {schema_name} CASCADE"))
        db.commit()
        raise HTTPException(status_code=500, detail=f"Table creation failed: {e}")

    return TenantResponse(
        id=str(new_tenant.id),
        schema_name=schema_name,
        message=f"Tenant created. Admin: {admin_email} / 'password'",
    )
