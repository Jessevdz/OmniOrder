from typing import Dict, List
from fastapi import WebSocket


class ConnectionManager:
    """
    Manages WebSocket connections for the Kitchen Display System.
    Connections are grouped by Tenant Schema Name to ensure isolation.
    """

    def __init__(self):
        # Key: schema_name, Value: List of active WebSockets
        self.active_connections: Dict[str, List[WebSocket]] = {}

    async def connect(self, schema_name: str, websocket: WebSocket):
        await websocket.accept()
        if schema_name not in self.active_connections:
            self.active_connections[schema_name] = []
        self.active_connections[schema_name].append(websocket)

    def disconnect(self, schema_name: str, websocket: WebSocket):
        if schema_name in self.active_connections:
            if websocket in self.active_connections[schema_name]:
                self.active_connections[schema_name].remove(websocket)
            # Clean up empty keys to save memory
            if not self.active_connections[schema_name]:
                del self.active_connections[schema_name]

    async def broadcast_to_tenant(self, schema_name: str, message: dict):
        """
        Sends a JSON message to all connected clients for a specific tenant.
        """
        if schema_name in self.active_connections:
            for connection in self.active_connections[schema_name]:
                try:
                    await connection.send_json(message)
                except Exception:
                    # Handle dead connections gracefully
                    self.disconnect(schema_name, connection)


# Global Instance
manager = ConnectionManager()
