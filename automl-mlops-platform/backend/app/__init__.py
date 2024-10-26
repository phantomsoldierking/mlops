from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Add your frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

from app.api import data, model, prediction, experiment

app.include_router(data.router)
app.include_router(model.router)
app.include_router(prediction.router)
app.include_router(experiment.router)