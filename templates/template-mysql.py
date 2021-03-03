# -*- coding: utf-8 -*-

# pip install mysql-connector-python
from mysql.connector import MySQLConnection


config = {
    'host': 'localhost',
    'port': 3306,
    'user': 'root',
    'password': '123456',
    'database': 'data',
}


class CustomMySQLConnection(MySQLConnection):
    # 默认以字典的形式返回
    def cursor(self, buffered=None, raw=None, prepared=None, cursor_class=None, dictionary=True, named_tuple=None):
        return super().cursor(buffered, raw, prepared, cursor_class, dictionary, named_tuple)


# 连接数据库获取游标
db = CustomMySQLConnection(**config)
