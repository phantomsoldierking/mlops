from fastapi import APIRouter, UploadFile, File
from app.core.data_processing import process_data

router = APIRouter()

@router.post("/data/upload")
async def upload_data(file: UploadFile = File(...)):
    # Process and store the uploaded data
    data_id = await process_data(file)
    return {"data_id": data_id}

@router.get("/data/{data_id}")
async def get_data(data_id: str):
    # Retrieve data information
    return {"data_id": data_id, "status": "processed"}