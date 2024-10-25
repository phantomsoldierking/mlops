import mlflow
from app.config.settings import settings
from app.models.model import MLModel
from sqlalchemy.orm import Session

mlflow.set_tracking_uri(settings.MLFLOW_TRACKING_URI)

def save_model_to_db(db: Session, name: str, task: str, run_id: str, accuracy: float):
    db_model = MLModel(name=name, task=task, run_id=run_id, accuracy=accuracy)
    db.add(db_model)
    db.commit()
    db.refresh(db_model)
    return db_model

def get_model_from_db(db: Session, model_id: int):
    return db.query(MLModel).filter(MLModel.id == model_id).first()

def load_model(run_id: str):
    return mlflow.transformers.load_model(f"runs:/{run_id}/model")

def evaluate_model(model, test_data):
    # Implement model evaluation logic here
    # This is a placeholder and should be replaced with actual evaluation code
    accuracy = 0.85  # Placeholder accuracy
    return accuracy