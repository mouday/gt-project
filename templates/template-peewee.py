# -*- coding: utf-8 -*-

"""
$ pip install peewee

# 导出数据表为Model
python -m pwiz -e mysql -H 101.200.32.86 -p 3306 -u user -P -o -i -t <table> data > <model>.py
"""

from peewee import *
import logging
from playhouse.db_url import connect
from playhouse.shortcuts import ReconnectMixin

from warnings import filterwarnings

filterwarnings('ignore')

# 打印日志
logger = logging.getLogger('peewee')
logger.addHandler(logging.StreamHandler())
logger.setLevel(logging.DEBUG)

config = {
    'host': 'localhost',
    'port': 3306,
    'user': 'root',
    'password': '123456',
    'database': 'data',
    'charset': 'utf8mb4',
    # 'sql_mode': 'PIPES_AS_CONCAT',
    # 'use_unicode': True,
}


# 防止断开 see: https://github.com/coleifer/peewee/issues/1992
class ReconnectMySQLDatabase(ReconnectMixin, MySQLDatabase):
    """peewee作者不推荐使用"""
    pass


database = MySQLDatabase(**config)


# 模型基类
class BaseModel(Model):
    class Meta:
        database = database
