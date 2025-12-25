from pydantic_settings import BaseSettings
from typing import List


class Settings(BaseSettings):
    PROJECT_NAME: str = "Stelly API"

    # Database
    POSTGRES_SERVER: str = "db"
    POSTGRES_USER: str = "postgres"
    POSTGRES_PASSWORD: str = "postgres"
    POSTGRES_DB: str = "stelly"
    POSTGRES_PORT: str = "5432"

    # Security - Local (Self-Contained Demo)
    SECRET_KEY: str = "538422cb-34b7-48a8-8fcc-8c28b6bc21d3"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60 * 24  # 24 hours
    ALGORITHM: str = "HS256"

    # Super Admins (Simple email check for demo purposes)
    SUPER_ADMINS: List[str] = ["admin@stelly.localhost"]

    # Demo Mode Configuration
    DEMO_DOMAIN: str = "demo.stelly.localhost"
    DEMO_SCHEMA: str = "tenant_demo"

    # Storage (MinIO/S3)
    S3_ENDPOINT: str = "http://minio:9000"
    S3_PUBLIC_ENDPOINT: str = "http://localhost:9000"
    S3_ACCESS_KEY: str = "minioadmin"
    S3_SECRET_KEY: str = "minioadmin"
    S3_BUCKET: str = "stelly-assets"
    S3_REGION: str = "us-east-1"

    # Redis
    REDIS_HOST: str = "redis"
    REDIS_PORT: int = 6379

    @property
    def SQLALCHEMY_DATABASE_URI(self) -> str:
        return f"postgresql://{self.POSTGRES_USER}:{self.POSTGRES_PASSWORD}@{self.POSTGRES_SERVER}:{self.POSTGRES_PORT}/{self.POSTGRES_DB}"

    class Config:
        case_sensitive = True


settings = Settings()
