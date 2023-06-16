import numpy as np
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.svm import SVC
from sklearn.metrics import accuracy_score, precision_score, recall_score, f1_score
from sklearn.model_selection import train_test_split
import pandas as pd
import math
import joblib

def trainSVMModel():
    

    # Load the dataset
    df4 = pd.read_csv('data5.csv', na_values = np.nan)
    df4.dropna(inplace=True)


    df4_textData = df4.iloc[:, 1].tolist()
    df4_sentimentData = df4.iloc[:, 0].tolist()

    textList =  df4_textData
    print("textList")
    sentimentList = df4_sentimentData

    # Step 1: Prepare the dataset
    # Assume you have a list of texts and corresponding labels
    texts = textList
    print("texts")
    labels = sentimentList

    # 2. Split the dataset
    X_train, X_test, y_train, y_test = train_test_split(texts, labels, test_size=0.2)

    # 3. Create feature vectors
    loaded_vectorizer = joblib.load('tftidf_vectorizer.pkl')
    X_train = loaded_vectorizer.fit_transform(X_train)  # Fit the vectorizer on the training data
    X_test = loaded_vectorizer.transform(X_test)  # Transform the test data using the fitted vectorizer
    print("loaded_vectorizer")


    # 4. Build the sentiment analysis model (SVM)
    model = SVC(kernel='linear')

    # 5. Train the model
    model.fit(X_train, y_train)
    print("model fitted")
    # 6. Evaluate the model
    y_pred = model.predict(X_test)
    accuracy = accuracy_score(y_test, y_pred)
    precision = precision_score(y_test, y_pred, average='macro')
    recall = recall_score(y_test, y_pred, average='macro')
    f1 = f1_score(y_test, y_pred, average='macro')

    joblib.dump(model, 'SVMModel.pkl')


    print("SVM Accuracy:", accuracy)
    print("SVM Precision:", precision)
    print("SVM Recall:", recall)
    print("SVM F1-score:", f1)

