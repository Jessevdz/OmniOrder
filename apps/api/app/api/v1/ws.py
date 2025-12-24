from fastapi import APIRouter, WebSocket, WebSocketDisconnect, Depends, Query
from sqlalchemy.orm import Session
from app.db.session import get_db
from app.db.models import Tenant
from app.core.socket import manager
from app.core.config import settings
from jose import jwt, JWTError
import logging

router = APIRouter()
logger = logging.getLogger("uvicorn")


@router.websocket("/kitchen")
async def websocket_endpoint(
    websocket: WebSocket,
    token: str = Query(None),  # <--- Accept Token via Query Param
    db: Session = Depends(get_db),
):
    """
    KDS WebSocket Endpoint with Isolation Logic.
    """
    # 1. Resolve Tenant / Schema
    host = websocket.headers.get("host", "").split(":")[0]
    schema_name = None

    # --- CASE A: DEMO ENVIRONMENT ---
    if host == settings.DEMO_DOMAIN:
        # We MUST have a token to separate users in the demo environment
        if not token:
            logger.warning(
                f"WS Connection rejected: Demo requires token for isolation."
            )
            await websocket.close(code=4003, reason="Authentication required")
            return

        try:
            # Decode the Magic Token (HS256)
            payload = jwt.decode(token, settings.SECRET_KEY, algorithms=["HS256"])

            # Extract the unique ephemeral schema (e.g. "demo_8f3a...")
            target_schema = payload.get("target_schema")

            if not target_schema:
                # Fallback to generic demo if claim is missing (shouldn't happen with valid tokens)
                schema_name = settings.DEMO_SCHEMA
            else:
                schema_name = target_schema

        except JWTError:
            logger.warning(f"WS Connection rejected: Invalid Token")
            await websocket.close(code=4003, reason="Invalid Token")
            return

    # --- CASE B: STANDARD TENANT (Subdomain/Custom Domain) ---
    else:
        tenant = db.query(Tenant).filter(Tenant.domain == host).first()
        if not tenant:
            logger.warning(f"WS Connection rejected: Unknown Host {host}")
            await websocket.close(code=4000, reason="Tenant not found")
            return
        schema_name = tenant.schema_name

    # 2. Connect
    # The ConnectionManager will now use the unique 'demo_xyz' schema as the key,
    # ensuring User A's order updates don't broadcast to User B.
    await manager.connect(schema_name, websocket)
    logger.info(f"KDS Connected: {schema_name} [{host}]")

    try:
        # 3. Keep connection alive
        while True:
            await websocket.receive_text()
    except WebSocketDisconnect:
        manager.disconnect(schema_name, websocket)
        logger.info(f"KDS Disconnected: {schema_name}")
