from fastapi import APIRouter, HTTPException
from app.core.prediction import make_prediction
from app.core.huggingface_models import get_available_models

router = APIRouter()

@router.post("/predict")
async def predict(task: str, data: dict):
    if task not in get_available_models():
        raise HTTPException(status_code=400, detail=f"Invalid task: {task}")
    
    prediction = await make_prediction(task, data)
    return {"prediction": prediction}