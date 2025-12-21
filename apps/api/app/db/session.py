from sqlalchemy import create_engine, pool
from sqlalchemy.orm import sessionmaker
from app.core.config import settings

# Use NullPool to ensure connections are closed and not recycled with potentially wrong schemas.
# This is safer for schema-per-tenant architectures.
engine = create_engine(
    settings.SQLALCHEMY_DATABASE_URI, pool_pre_ping=True, poolclass=pool.NullPool
)

# Create a configured "Session" class
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
