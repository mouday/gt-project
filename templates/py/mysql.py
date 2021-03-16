# -*- coding: utf-8 -*-

# pip install mysql-connector-python
# sql: %s or %(name)s
from mysql.connector import Connect


# doc: https://dev.mysql.com/doc/connector-python/en/connector-python-connectargs.html
config = {
    'host': 'localhost',
    'port': 3306,
    'user': 'root',
    'password': '123456',
    'database': 'data',
}

# 连接数据库获取游标
db = Connect(**config)

# cursor = db.cursor(dictionary=True)