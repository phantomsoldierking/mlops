import os
from pydantic import BaseSettings

class Settings(BaseSettings):
    DATABASE_URL: str = os.getenv("DATABASE_URL", "postgresql://user:password@db/automl_mlops")
    MLFLOW_TRACKING_URI: str = os.getenv("MLFLOW_TRACKING_URI", "http://mlflow:5000")
    MODEL_REGISTRY_PATH: str = os.getenv("MODEL_REGISTRY_PATH", "/app/model_registry")

    class Config:
        env_file = ".env"

settings = Settings()