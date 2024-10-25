from airflow import DAG
from airflow.operators.python_operator import PythonOperator
from airflow.operators.http_operator import SimpleHttpOperator
from datetime import datetime, timedelta
from app.core.huggingface_models import get_available_models

default_args = {
    'owner': 'airflow',
    'depends_on_past': False,
    'start_date': datetime(2023, 1, 1),
    'email_on_failure': False,
    'email_on_retry': False,
    'retries': 1,
    'retry_delay': timedelta(minutes=5),
}

dag = DAG(
    'huggingface_mlops_workflow',
    default_args=default_args,
    description='Hugging Face MLOps workflow',
    schedule_interval=timedelta(days=1),
)

def get_tasks():
    return get_available_models()

get_tasks_operator = PythonOperator(
    task_id='get_tasks',
    python_callable=get_tasks,
    dag=dag,
)

for task in get_available_models():
    train_model_task = SimpleHttpOperator(
        task_id=f'train_model_{task}',
        method='POST',
        http_conn_id='mlops_api',
        endpoint='/model/train',
        data={"task": task, "data": {}},
        headers={"Content-Type": "application/json"},
        dag=dag,
    )
    
    get_tasks_operator >> train_model_task
