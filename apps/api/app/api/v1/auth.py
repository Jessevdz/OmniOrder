from fastapi import APIRouter, Depends, HTTPException, status, Request
from sqlalchemy.orm import Session
from sqlalchemy import text
from fastapi.security import OAuth2PasswordRequestForm
from app.db.session import get_db
from app.db.models import Tenant, User
from app.core.security import verify_password, create_access_token
from app.schemas.auth import Token
from datetime import timedelta
from app.core.config import settings

router = APIRouter()


def get_tenant_by_host(request: Request, db: Session) -> Tenant:
    host = request.headers.get("host", "").split(":")[0]
    tenant = db.query(Tenant).filter(Tenant.domain == host).first()
    if not tenant:
        raise HTTPException(status_code=404, detail=f"No tenant found for: {host}")
    return tenant


@router.post("/login", response_model=Token)
def login_access_token(
    request: Request,
    form_data: OAuth2PasswordRequestForm = Depends(),
    db: Session = Depends(get_db),
):
    """
    OAuth2 compatible token login, getting the user from the specific Tenant DB
    """
    # 1. Resolve Tenant
    tenant = get_tenant_by_host(request, db)

    # 2. Switch Context
    db.execute(text(f"SET search_path TO {tenant.schema_name}, public"))

    # 3. Authenticate User
    user = db.query(User).filter(User.email == form_data.username).first()

    if not user or not verify_password(form_data.password, user.hashed_password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect email or password",
            headers={"WWW-Authenticate": "Bearer"},
        )

    access_token_expires = timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        subject=user.email, expires_delta=access_token_expires
    )

    return {"access_token": access_token, "token_type": "bearer"}
