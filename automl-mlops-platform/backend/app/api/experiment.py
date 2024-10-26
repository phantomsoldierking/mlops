from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.utils.database import get_db
from app.models.model import MLModel

router = APIRouter()

@router.get("/experiments")
def get_experiments(db: Session = Depends(get_db)):
    experiments = db.query(MLModel).all()
    return experiments

@router.get("/experiments/{experiment_id}")
def get_experiment(experiment_id: int, db: Session = Depends(get_db)):
    experiment = db.query(MLModel).filter(MLModel.id == experiment_id).first()
    if experiment is None:
        raise HTTPException(status_code=404, detail="Experiment not found")
    return experiment