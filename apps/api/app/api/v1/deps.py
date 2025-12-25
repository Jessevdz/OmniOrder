from fastapi import Depends, HTTPException, status, Request
from fastapi.security import OAuth2PasswordBearer
from sqlalchemy.orm import Session
from sqlalchemy import text
from jose import jwt, JWTError
from typing import Dict, Any
from app.db.session import get_db
from app.core.config import settings
from app.db.models import Tenant

# Simplified OAuth2 scheme
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")


async def get_current_user(
    request: Request, token: str = Depends(oauth2_scheme), db: Session = Depends(get_db)
) -> Dict[str, Any]:
    """
    Validates a locally signed Magic Token (HS256).
    Resolves Tenant Context (Schema) based on Host Header or Token Claims.
    """

    # --- 1. Validate Token (Local Only) ---
    try:
        payload = jwt.decode(
            token, settings.SECRET_KEY, algorithms=[settings.ALGORITHM]
        )
    except JWTError:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid Authentication Token",
            headers={"WWW-Authenticate": "Bearer"},
        )

    # --- 2. Tenant Context Resolution ---
    host = request.headers.get("host", "").split(":")[0]

    # Initialize Tenant/Schema vars
    tenant = None
    target_schema = "public"

    # Check for specific schema claim (Dynamic Demo Logic)
    forced_schema = payload.get("target_schema")

    # A. Check for DEMO Override
    if host == settings.DEMO_DOMAIN:
        if forced_schema:
            # The user has a personal sandbox assigned via their token
            target_schema = forced_schema
        else:
            # Fallback to the generic read-only demo
            target_schema = settings.DEMO_SCHEMA

    else:
        # B. Standard Lookup (for pizza.localhost, etc.)
        db.execute(text("SET search_path TO public"))
        tenant = db.query(Tenant).filter(Tenant.domain == host).first()
        if tenant:
            target_schema = tenant.schema_name

    # --- 3. Authorization & Context Switch ---

    # Super Admin Check
    is_superuser = (
        payload.get("sub") == "demo_admin"
        or payload.get("email") in settings.SUPER_ADMINS
    )

    # Apply Database Schema Context
    if (
        tenant
        or target_schema.startswith("demo_")
        or target_schema == settings.DEMO_SCHEMA
    ):
        db.execute(text(f"SET search_path TO {target_schema}, public"))
        current_schema = target_schema
    elif is_superuser and target_schema == "public":
        # Admin managing public tables
        db.execute(text("SET search_path TO public"))
        current_schema = "public"
    else:
        # Unknown host
        raise HTTPException(
            status_code=404, detail=f"Tenant not found for host: {host}"
        )

    return {
        "id": payload.get("sub"),
        "email": payload.get("email"),
        "name": payload.get("name"),
        "schema": current_schema,
        "is_superuser": is_superuser,
    }
