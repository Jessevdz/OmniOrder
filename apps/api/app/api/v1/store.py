from fastapi import APIRouter, Depends, Request, HTTPException
from sqlalchemy.orm import Session, joinedload
from sqlalchemy import text
from app.db.session import get_db
from app.db.models import Tenant, MenuItem, Order, Category
from app.schemas.menu import CategoryWithItems
from app.core.socket import manager
from pydantic import BaseModel
from typing import List
from datetime import datetime

router = APIRouter()


# --- Schemas ---
class TenantConfigResponse(BaseModel):
    name: str
    primary_color: str
    font_family: str = "Inter"
    currency: str = "$"


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
        name=tenant.name,
        primary_color=theme.get("primary_color", "#000000"),
        font_family=theme.get("font_family", "Inter"),
    )


@router.get("/menu", response_model=List[CategoryWithItems])
def get_store_menu(request: Request, db: Session = Depends(get_db)):
    tenant = get_tenant_by_host(request, db)
    db.execute(text(f"SET search_path TO {tenant.schema_name}, public"))

    categories = (
        db.query(Category)
        .options(joinedload(Category.items))
        .order_by(Category.rank.asc())
        .all()
    )
    return categories


@router.post("/orders", response_model=OrderResponse, status_code=201)
async def create_store_order(  # <--- Made Async
    payload: OrderCreateRequest, request: Request, db: Session = Depends(get_db)
):
    tenant = get_tenant_by_host(request, db)
    db.execute(text(f"SET search_path TO {tenant.schema_name}, public"))

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
    except Exception:
        db.rollback()
        raise HTTPException(status_code=500, detail="Failed to place order")

    # Broadcast to KDS (Kitchen Display System)
    # We broadcast the full order details so the KDS can render it immediately
    await manager.broadcast_to_tenant(
        tenant.schema_name,
        {
            "event": "new_order",
            "order": {
                "id": str(new_order.id),
                "customer_name": new_order.customer_name,
                "total_amount": new_order.total_amount,
                "items": new_order.items,
                "status": new_order.status,
                "created_at": str(datetime.now()),
            },
        },
    )

    return OrderResponse(
        id=str(new_order.id),
        status=new_order.status,
        message="Order placed successfully",
    )
