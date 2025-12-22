import logging
from app.db.session import SessionLocal, engine
from app.core.seed_internal import init_db

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


def init():
    db = SessionLocal()
    try:
        # Create Public Tables first (Tenants table)
        from app.db.base import Base
        from app.db.models import Tenant  # noqa

        logger.info("Initializing Public Schema...")
        # Create tables explicitly marked for public schema
        public_tables = [t for t in Base.metadata.sorted_tables if t.schema == "public"]
        Base.metadata.create_all(bind=engine, tables=public_tables)

        logger.info("Seeding Tenants...")
        init_db(db, engine)
        logger.info("Database initialization completed.")
    except Exception as e:
        logger.error(f"Initialization failed: {e}")
        raise e
    finally:
        db.close()


if __name__ == "__main__":
    init()
