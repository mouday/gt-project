# -*- coding: utf-8 -*-

"""
flask template

$ pip install flask flask-cors python-dotenv gunicorn

"""

from flask import Flask
from flask_cors import CORS


app = Flask(__name__)

# 允许跨域
CORS(app, supports_credentials=True)

# 路由
@app.route('/')
def hello_world():
    return 'Hello, World!'


if __name__ == '__main__':
    app.run(debug=True)
