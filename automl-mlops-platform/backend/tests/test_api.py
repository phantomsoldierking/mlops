import pytest
from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

def test_root():
    response = client.get("/")
    assert response.status_code == 200
    assert response.json() == {"message": "Welcome to the AutoML-MLOps Platform API"}

def test_get_available_models():
    response = client.get("/model/available")
    assert response.status_code == 200
    assert "models" in response.json()
    assert isinstance(response.json()["models"], list)

def test_train_model():
    response = client.post("/model/train", json={"task": "sentiment-analysis", "data": {}})
    assert response.status_code == 200
    assert "run_id" in response.json()

def test_predict():
    response = client.post("/predict", json={"task": "sentiment-analysis", "data": "This is a great product!"})
    assert response.status_code == 200
    assert "prediction" in response.json()

def test_invalid_model():
    response = client.post("/model/train", json={"task": "invalid-task", "data": {}})
    assert response.status_code == 400
    assert "detail" in response.json()