AutoML-MLOps Platform Prototype
This project is a scalable AutoML-MLOps platform prototype that integrates multiple Hugging Face models and provides an end-to-end ML workflow, including model deployment.

Features
Integration with 10+ Hugging Face models
Data upload and processing
Model training and fine-tuning
Experiment tracking with MLflow
Workflow orchestration with Apache Airflow
Model deployment using Kubernetes
User-friendly React frontend
Tech Stack
Frontend: React, Material-UI
Backend: FastAPI
ML Models: Hugging Face Transformers
MLOps: MLflow, Apache Airflow
Containerization: Docker, Docker Compose
Orchestration: Kubernetes
Getting Started
Clone the repository:

git clone https://github.com/yourusername/automl-mlops-platform.git
cd automl-mlops-platform
Build and run the Docker containers:

docker-compose up --build
Access the application:

Frontend: http://localhost:3000
Backend API: http://localhost:8000
MLflow UI: http://localhost:5000
Airflow UI: http://localhost:8080
Usage
Select a Hugging Face model from the available options.
Configure and start the model training process.
Monitor the training progress and results in the MLflow UI.
Use the trained model for predictions through the predictions page.
Deploy the model using Kubernetes for production use.
Deployment
To deploy the model using Kubernetes:

Build and push the Docker image for the model server:

docker build -t your-docker-registry/model-server:latest .
docker push your-docker-registry/model-server:latest
Apply the Kubernetes configurations:

kubectl apply -f kubernetes/deployments/model-deployment.yaml
kubectl apply -f kubernetes/services/model-service.yaml
Access the deployed model service using the LoadBalancer IP or domain name.

Future Scope for Scaling
Implement distributed training for large models
Add support for custom model architectures
Integrate with cloud providers for scalable infrastructure
Implement A/B testing and canary deployments
Add monitoring and alerting for deployed models
Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

License
This project is licensed under the MIT License.


Hack2Future


https://docs.h2o.ai/

https://docs.h2o.ai/mlops/mlops-scoring-client/overview

https://mlflow.org/#integrations

https://huggingface.co/autotrain

https://airflow.apache.org/

https://www.scribd.com/presentation/777728976/AutoML-MLOps-Platform-Prototype-a-Scalable-Solution-1-Choladeck


https://github.com/kelvins/awesome-mlops


https://github.com/amanchadha/coursera-machine-learning-engineering-for-prod-mlops-specialization


https://github.com/tensorchord/Awesome-LLMOps


https://github.com/pdefusco/MLOps


https://github.com/samalba/hf-model-ops
