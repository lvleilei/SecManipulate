# -*- coding: utf-8 -*-

from manipulate.config import *
from manipulate.time_utils import *
from manipulate.sql_utils import *
from elasticsearch import Elasticsearch

es = Elasticsearch([{'host':ES_HOST,'port':ES_PORT}])

def levelnum(level):
    query_body = {"size":10000,"query":{"range":{"level":{"gte":level}}}}#,"lte":3
    res = es.search(index=ES_DAY,doc_type="type1",body=query_body)
    hits = res['hits']['hits']
    sh = sz = 0
    for hit in hits:
        if hit['_source']['tp'] == 'sh':
            sh += 1
        elif hit['_source']['tp'] == 'sz':
            sz += 1
    result = {"all":len(hits),"sh":sh,"sz":sz}
    return result

def leveltable(level):
    query_body = {"size":10000,"query":{"range":{"level":{"gte":level}}}}
    res = es.search(index=ES_DAY,doc_type="type1",body=query_body)
    hits = res['hits']['hits']
    result = []
    for hit in hits:
        dic = hit["_source"]
        if dic['manipulate_type'] == 1:
            dic['manipulate_type'] = '上市公司伙同他人操纵'
        elif dic['manipulate_type'] == 2:
            dic['manipulate_type'] = '上市公司单独操纵'
        elif dic['manipulate_type'] == 3:
            dic['manipulate_type'] = '抢帽子型操纵'
        elif dic['manipulate_type'] == 4:
            dic['manipulate_type'] = '内幕交易'
        if dic['status'] == 1:
            dic['status'] = '正在操纵'
        elif dic['status'] == 0:
            dic['status'] = '已完成操纵'
        if dic['ifpunish'] == 1:
            dic['ifpunish'] = '是'
        else:
            dic['ifpunish'] = '否'
        result.append(dic)
    return result


    