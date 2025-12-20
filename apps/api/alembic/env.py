import asyncio
from logging.config import fileConfig

from sqlalchemy import engine_from_config
from sqlalchemy import pool, text
from sqlalchemy.engine import Connection

from alembic import context

# Import your models
from app.db.base import Base
from app.db.models import Tenant, MenuItem, Order  # noqa

# Alembic Config object
config = context.config

# Interpret the config file for Python logging.
if config.config_file_name is not None:
    fileConfig(config.config_file_name)

target_metadata = Base.metadata


def include_object(object, name, type_, reflected, compare_to):
    """
    Filter logic to separate Public tables from Tenant tables.
    """
    if type_ == "table":
        # If the table belongs to the 'public' schema explicitly
        if object.schema == "public":
            return True
        # If we are strictly in the 'tenant' migration phase, include non-public tables
        return False
    return True


def include_object_tenant(object, name, type_, reflected, compare_to):
    """
    Filter logic for Tenant schemas: Ignore 'public' schema tables.
    """
    if type_ == "table" and object.schema == "public":
        return False
    return True


def run_migrations_online() -> None:
    """Run migrations in 'online' mode."""
    connectable = engine_from_config(
        config.get_section(config.config_ini_section, {}),
        prefix="sqlalchemy.",
        poolclass=pool.NullPool,
    )

    with connectable.connect() as connection:
        # 1. MIGRATE PUBLIC SCHEMA
        # We only look at tables defined with schema='public'
        context.configure(
            connection=connection,
            target_metadata=target_metadata,
            include_schemas=True,
            include_object=include_object,
        )

        with context.begin_transaction():
            context.run_migrations()

        # 2. MIGRATE TENANT SCHEMAS
        # Fetch all schemas from the public.tenants table
        # Note: In a real prod environment, you might want to use the worker for this.
        try:
            result = connection.execute(text("select schema_name from public.tenants"))
            tenant_schemas = [row[0] for row in result]
        except Exception:
            tenant_schemas = []

        for schema in tenant_schemas:
            print(f"Migrating schema: {schema}")

            # Switch search path so Alembic 'sees' the blank tables as belonging to this schema
            # However, Alembic prefers using schema_name in configure()

            context.configure(
                connection=connection,
                target_metadata=target_metadata,
                schema_name=schema,
                include_object=include_object_tenant,
            )

            with context.begin_transaction():
                context.run_migrations()


if context.is_offline_mode():
    # We are skipping offline mode implementation for MVP brevity
    pass
else:
    run_migrations_online()
