from sqlalchemy import Column, Integer, String, DateTime, Float
from sqlalchemy.ext.declarative import declarative_base
from datetime import datetime

Base = declarative_base()

class MLModel(Base):
    __tablename__ = "ml_models"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    task = Column(String)
    run_id = Column(String, unique=True, index=True)
    accuracy = Column(Float)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

class Prediction(Base):
    __tablename__ = "predictions"

    id = Column(Integer, primary_key=True, index=True)
    model_id = Column(Integer, index=True)
    input_data = Column(String)
    output = Column(String)
    created_at = Column(DateTime, default=datetime.utcnow)
