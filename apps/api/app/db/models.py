import uuid
from sqlalchemy import Column, String, Integer, Boolean, JSON, ForeignKey, Enum
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import relationship
from app.db.base import Base

# --- PUBLIC SCHEMA MODELS ---


class Tenant(Base):
    __tablename__ = "tenants"
    __table_args__ = {"schema": "public"}

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    name = Column(String, nullable=False)
    schema_name = Column(String, unique=True, nullable=False)
    domain = Column(String, unique=True, nullable=False)
    theme_config = Column(JSON, default={})


# --- TENANT SCHEMA MODELS ---


class User(Base):
    __tablename__ = "users"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    email = Column(String, unique=True, index=True, nullable=False)
    hashed_password = Column(String, nullable=False)
    full_name = Column(String)
    role = Column(String, default="admin")  # 'admin', 'manager', 'kitchen'


class MenuItem(Base):
    __tablename__ = "menu_items"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    name = Column(String, nullable=False)
    price = Column(Integer, nullable=False)  # In cents
    is_available = Column(Boolean, default=True)


class Order(Base):
    __tablename__ = "orders"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    customer_name = Column(String, nullable=False)
    status = Column(String, default="PENDING")
    total_amount = Column(Integer, nullable=False)
    items = Column(JSON, nullable=False)
