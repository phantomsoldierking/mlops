import os
from pydantic import BaseSettings

class Settings(BaseSettings):
    APP_NAME: str = "AutoML-MLOps Platform"
    DEBUG: bool = False
    DATABASE_URL: str = os.getenv("DATABASE_URL", "postgresql://user:password@localhost/automl_mlops")
    MLFLOW_TRACKING_URI: str = os.getenv("MLFLOW_TRACKING_URI", "http://mlflow:5000")
    AIRFLOW_API_URL: str = os.getenv("AIRFLOW_API_URL", "http://airflow:8080/api/v1")
    AIRFLOW_USERNAME: str = os.getenv("AIRFLOW_USERNAME", "airflow")
    AIRFLOW_PASSWORD: str = os.getenv("AIRFLOW_PASSWORD", "airflow")
    MODEL_REGISTRY_PATH: str = os.getenv("MODEL_REGISTRY_PATH", "/app/model_registry")

    class Config:
        env_file = ".env"

settings = Settings()