from fastapi import APIRouter, HTTPException
from app.core.model_training import train_model
from app.core.huggingface_models import get_available_models

router = APIRouter()

@router.post("/model/train")
async def train_new_model(task: str, data: dict):
    if task not in get_available_models():
        raise HTTPException(status_code=400, detail=f"Invalid task: {task}")
    
    run_id = train_model(task, data)
    return {"run_id": run_id}

@router.get("/model/available")
async def get_models():
    return {"models": get_available_models()}