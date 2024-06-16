from flask import Flask, request, render_template
import sklearn
import pandas as pd
import pickle
import numpy as np

model = pickle.load(open('model.pkl', 'rb'))

app = Flask(__name__)
@app.route("/")
def index():
    return render_template('index.html')

@app.route("/predict", methods=["GET", "POST"])
def predict():
    open = float(request.form["open"])
    high = float(request.form["high"])
    low = float(request.form["low"])
    adj = float(request.form["adj"])
    volume = float(request.form["volume"])
    year = float(request.form["year"])
    month = float(request.form["month"])
    day = float(request.form["day"])

    features = [[open, high, low, adj, volume, year, month, day]]
    prediction = model.predict(features).reshape(1,-1)
    output = f"Our prediction of Netflix Stock is: {prediction[0][0] * 1000}$"

    return render_template('index.html', output = output)


if __name__ == '__main__':
    app.run(debug=True)