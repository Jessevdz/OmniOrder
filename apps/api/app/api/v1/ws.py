from fastapi import APIRouter, WebSocket, WebSocketDisconnect, Depends
from sqlalchemy.orm import Session
from app.db.session import get_db
from app.db.models import Tenant
from app.core.socket import manager
import logging

router = APIRouter()
logger = logging.getLogger("uvicorn")


@router.websocket("/kitchen")
async def websocket_endpoint(websocket: WebSocket, db: Session = Depends(get_db)):
    """
    KDS WebSocket Endpoint.
    1. Extracts Host header to identify Tenant.
    2. Connects to the Tenant's broadcast channel.
    3. Listens (Keep-Alive).
    """
    # 1. Resolve Tenant
    # WebSockets headers are accessed differently than Request headers
    host = websocket.headers.get("host", "").split(":")[0]

    tenant = db.query(Tenant).filter(Tenant.domain == host).first()

    if not tenant:
        logger.warning(f"WS Connection rejected: Unknown Host {host}")
        await websocket.close(code=4000, reason="Tenant not found")
        return

    schema_name = tenant.schema_name

    # 2. Connect
    await manager.connect(schema_name, websocket)
    logger.info(f"KDS Connected: {schema_name}")

    try:
        # 3. Keep connection alive
        # We don't expect the KDS to send messages back in this MVP,
        # but we need to keep the loop running.
        while True:
            await websocket.receive_text()
    except WebSocketDisconnect:
        manager.disconnect(schema_name, websocket)
        logger.info(f"KDS Disconnected: {schema_name}")
