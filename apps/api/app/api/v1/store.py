from fastapi import APIRouter, Depends, Request, HTTPException
from sqlalchemy.orm import Session
from sqlalchemy import text
from app.db.session import get_db
from app.db.models import Tenant, MenuItem, Order
from pydantic import BaseModel
from typing import List, Dict, Any

router = APIRouter()


# --- Schemas ---
class TenantConfigResponse(BaseModel):
    name: str
    primary_color: str
    currency: str = "$"


class MenuItemResponse(BaseModel):
    id: str
    name: str
    price: int
    is_available: bool

    class Config:
        from_attributes = True


class OrderItemSchema(BaseModel):
    id: str
    qty: int


class OrderCreateRequest(BaseModel):
    customer_name: str
    items: List[OrderItemSchema]
    total_amount: int


class OrderResponse(BaseModel):
    id: str
    status: str
    message: str


# --- Helpers ---
def get_tenant_by_host(request: Request, db: Session) -> Tenant:
    host = request.headers.get("host", "").split(":")[0]
    tenant = db.query(Tenant).filter(Tenant.domain == host).first()
    if not tenant:
        raise HTTPException(status_code=404, detail=f"No tenant found for: {host}")
    return tenant


# --- Endpoints ---


@router.get("/config", response_model=TenantConfigResponse)
def get_store_config(request: Request, db: Session = Depends(get_db)):
    tenant = get_tenant_by_host(request, db)
    theme = tenant.theme_config or {}
    return TenantConfigResponse(
        name=tenant.name, primary_color=theme.get("primary_color", "#000000")
    )


@router.get("/menu", response_model=List[MenuItemResponse])
def get_store_menu(request: Request, db: Session = Depends(get_db)):
    tenant = get_tenant_by_host(request, db)
    # Context Switch: Read from Tenant Schema
    db.execute(text(f"SET search_path TO {tenant.schema_name}, public"))
    return db.query(MenuItem).filter(MenuItem.is_available == True).all()


@router.post("/orders", response_model=OrderResponse, status_code=201)
def create_store_order(
    payload: OrderCreateRequest, request: Request, db: Session = Depends(get_db)
):
    """
    Creates an order in the specific Tenant Schema.
    """
    # 1. Resolve Tenant
    tenant = get_tenant_by_host(request, db)

    # 2. Context Switch: Write to Tenant Schema
    db.execute(text(f"SET search_path TO {tenant.schema_name}, public"))

    # 3. Create Order
    # In a real app, we would re-calculate total_amount from DB prices here for security.
    new_order = Order(
        customer_name=payload.customer_name,
        total_amount=payload.total_amount,
        items=[item.model_dump() for item in payload.items],
        status="PENDING",
    )

    db.add(new_order)

    try:
        db.commit()
        db.refresh(new_order)
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=500, detail="Failed to place order")

    return OrderResponse(
        id=str(new_order.id),
        status=new_order.status,
        message="Order placed successfully",
    )
