from app.core.model_training import get_best_model

async def make_prediction(task, data):
    model = get_best_model(task)
    if not model:
        raise ValueError(f"No model found for task: {task}")
    
    result = model(data)
    return result