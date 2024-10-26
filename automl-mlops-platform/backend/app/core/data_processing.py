import pandas as pd
from sklearn.model_selection import train_test_split

def process_data(file):
    df = pd.read_csv(file.file)
    df = df.dropna()  # Basic preprocessing
    
    # Assuming the last column is the target variable
    X = df.iloc[:, :-1]
    y = df.iloc[:, -1]
    
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
    
    return X_train, X_test, y_train, y_test