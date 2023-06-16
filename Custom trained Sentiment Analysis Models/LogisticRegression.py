import numpy as np
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score, precision_score, recall_score, f1_score
from sklearn.model_selection import train_test_split
import pandas as pd
import math
import joblib





def trainLogisticRegressionModel():
    # Load the dataset
    df4 = pd.read_csv('data5.csv', na_values = np.nan)
    df4.dropna(inplace=True)



    df4_textData = df4.iloc[:, 1].tolist()
    df4_sentimentData = df4.iloc[:, 0].tolist()

    textList =  df4_textData
    sentimentList = df4_sentimentData
    # Step 1: Prepare the dataset
    # Assume you have a list of texts and corresponding labels
    texts = textList
    labels = sentimentList

    # 3. Split the dataset
    X_train, X_test, y_train, y_test = train_test_split(texts, labels, test_size=0.2)

    # 4. Create feature vectors
    vectorizer = TfidfVectorizer()
    X_train = vectorizer.fit_transform(X_train)
    X_test = vectorizer.transform(X_test)

    # 5. Build the sentiment analysis model
    model = LogisticRegression(multi_class='auto', max_iter=10000)

    # 6. Train the model
    model.fit(X_train, y_train)

    # 7. Evaluate the model
    y_pred = model.predict(X_test)
    accuracy = accuracy_score(y_test, y_pred)
    precision = precision_score(y_test, y_pred, average='macro')
    recall = recall_score(y_test, y_pred, average='macro')
    f1 = f1_score(y_test, y_pred, average='macro')

    joblib.dump(vectorizer, 'tftidf_vectorizer.pkl')
    joblib.dump(model, 'logisticRegressionModel.pkl')
    print("Logistic Regression Accuracy:", accuracy)
    print("Logistic Regression Precision:", precision)
    print("Logistic Regression Recall:", recall)
    print("Logistic Regression F1-score:", f1)

def sentimentAnalysis(text):
    
    loaded_vectorizer = joblib.load('tftidf_vectorizer.pkl')
    
    loaded_model = joblib.load('logisticRegressionModel.pkl')
##    loaded_model = joblib.load('naiveBayesModel.pkl')
##    loaded_model = joblib.load('svmModel.pkl')
##    loaded_model = joblib.load('randomForestModel.pkl')
    
    # 9. Predict sentiment on new data
    new_texts = [text]  # New text samples
    new_X = loaded_vectorizer.transform(new_texts)
    new_predictions = loaded_model.predict(new_X)
    print(new_predictions)
