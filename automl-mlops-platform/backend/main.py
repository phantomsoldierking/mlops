from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from app.api import data, model, prediction

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(data.router)
app.include_router(model.router)
app.include_router(prediction.router)

@app.get("/")
async def root():
    return {"message": "Welcome to the AutoML-MLOps Platform API"}

@app.post("/uploadfile/")
async def create_upload_file(file: UploadFile = File(...)):
    return {"filename": file.filename}