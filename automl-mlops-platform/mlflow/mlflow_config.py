import os
from mlflow.tracking import MlflowClient

MLFLOW_TRACKING_URI = os.getenv("MLFLOW_TRACKING_URI", "http://mlflow:5000")
EXPERIMENT_NAME = "automl_mlops_experiment"

def setup_mlflow():
    client = MlflowClient(tracking_uri=MLFLOW_TRACKING_URI)
    try:
        experiment = client.get_experiment_by_name(EXPERIMENT_NAME)
        if experiment is None:
            experiment_id = client.create_experiment(EXPERIMENT_NAME)
        else:
            experiment_id = experiment.experiment_id
    except Exception as e:
        print(f"Error setting up MLflow: {e}")
        experiment_id = None
    
    return client, experiment_id

def log_model(model, model_name, task):
    client, experiment_id = setup_mlflow()
    if experiment_id is None:
        print("Failed to set up MLflow experiment. Skipping model logging.")
        return
    
    with mlflow.start_run(experiment_id=experiment_id):
        mlflow.log_param("task", task)
        mlflow.log_param("model_name", model_name)
        mlflow.transformers.log_model(model, "model")

def load_model(run_id):
    return mlflow.transformers.load_model(f"runs:/{run_id}/model")