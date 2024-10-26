from app.utils.model_utils import load_model

async def make_prediction(task: str, data: dict):
    model = load_model(task)
    if not model:
        raise ValueError(f"No model found for task: {task}")
    
    # Preprocess input data based on the task
    preprocessed_data = preprocess_input(task, data)
    
    # Make prediction
    prediction = model(preprocessed_data)
    
    return prediction

def preprocess_input(task: str, data: dict):
    # Implement preprocessing logic based on the task
    # This is a placeholder and should be replaced with actual preprocessing code
    if task == "sentiment-analysis":
        return data.get("text", "").lower()
    elif task == "image-classification":
        # Implement image preprocessing
        pass
    else:
        return data