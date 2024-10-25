import pandas as pd
from sklearn.model_selection import train_test_split

def process_data(file):
    # Read the CSV file
    df = pd.read_csv(file.file)
    
    # Perform basic preprocessing
    # This is a simple example and should be expanded based on your specific needs
    df = df.dropna()  # Remove rows with missing values
    
    # Assuming the last column is the target variable
    X = df.iloc[:, :-1]
    y = df.iloc[:, -1]
    
    # Split the data into training and testing sets
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
    
    return X_train, X_test, y_train, y_test

def prepare_data_for_model(data, task):
    # Implement data preparation logic based on the task
    # This is a placeholder and should be replaced with actual data preparation code
    if task == "sentiment-analysis":
        # Example: convert text to lowercase
        return data.lower()
    elif task == "image-classification":
        # Example: resize image and normalize pixel values
        # Note: This is just a placeholder, actual image processing would be more complex
        return data / 255.0
    else:
        return data