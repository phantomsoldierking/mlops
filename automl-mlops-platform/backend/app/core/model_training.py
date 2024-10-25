import mlflow
from mlflow.tracking import MlflowClient
from app.core.huggingface_models import load_model, get_available_models
from app.utils.model_utils import save_model_to_db, evaluate_model
from app.utils.data_processing import prepare_data_for_model
from sqlalchemy.orm import Session

def train_model(db: Session, task: str, data):
    mlflow.set_tracking_uri("http://mlflow:5000")
    mlflow.set_experiment(f"huggingface_{task}")

    with mlflow.start_run():
        model = load_model(task)
        
        # Prepare data for the specific task
        prepared_data = prepare_data_for_model(data, task)
        
        # Log model parameters
        mlflow.log_param("task", task)
        mlflow.log_param("model_name", model.model.name_or_path)
        
        # Perform any fine-tuning or evaluation here
        # For simplicity, we'll just evaluate the model without additional training
        accuracy = evaluate_model(model, prepared_data)
        
        mlflow.log_metric("accuracy", accuracy)
        mlflow.transformers.log_model(model, "model")
        
        run_id = mlflow.active_run().info.run_id
        
        # Save model information to the database
        db_model = save_model_to_db(db, model.model.name_or_path, task, run_id, accuracy)
        
        return db_model.id

def get_best_model(db: Session, task: str):
    client = MlflowClient()
    experiment = client.get_experiment_by_name(f"huggingface_{task}")
    
    if not experiment:
        return None
    
    runs = client.search_runs(experiment.experiment_id)
    
    if not runs:
        return None
    
    best_run = max(runs, key=lambda run: run.data.metrics.get("accuracy", 0))
    
    # Get the model from the database
    db_model = db.query(MLModel).filter(MLModel.run_id == best_run.info.run_id).first()
    
    if not db_model:
        return None
    
    model = mlflow.transformers.load_model(f"runs:/{db_model.run_id}/model")
    return model, db_model