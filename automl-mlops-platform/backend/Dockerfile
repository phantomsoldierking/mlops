FROM python:3.9

WORKDIR /app

COPY requirements.txt .

# Update pip and install dependencies with retries and increased timeout
RUN pip install --upgrade pip && \
    pip install -r requirements.txt 

COPY . .

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]