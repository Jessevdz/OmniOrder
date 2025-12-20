from pydantic import BaseModel


class TenantCreateRequest(BaseModel):
    name: str
    domain: str
    primary_color: str = "#000000"


class TenantResponse(BaseModel):
    id: str
    schema_name: str
    message: str
