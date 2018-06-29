# -*- coding: utf-8 -*-

from manipulate.config import *
from manipulate.time_utils import *
from manipulate.sql_utils import *
from elasticsearch import Elasticsearch

es = Elasticsearch([{'host':ES_HOST,'port':ES_PORT}])

def pricedaily(id):
    data = es.get(index=ES_DAY,doc_type='type1',id=id)['_source']
    end_date = data['end_date']
    manipulate_type = data['manipulate_type']
    stock_id = data['stock_id']
    esid = stock_id + ''.join(end_date.split('-')) + str(manipulate_type)
    result = es.get(index=ES_PRICE_RESULT,doc_type='type1',id=esid)['_source']['data']
    return result

def tradingdaily(id):
    data = es.get(index=ES_DAY,doc_type='type1',id=id)['_source']
    start_date = data['start_date']
    end_date = data['end_date']
    manipulate_type = data['manipulate_type']
    stock_id = data['stock_id']
    query_body = {"size":2000,"query":{ "filtered": {
        "query":{"term":{"stock_id":stock_id}},
        "filter":{"range":{"date":{"gte": lasttradedate(start_date),"lte": end_date}}}
    }}}
    res = es.search(index=ES_MARKET_DAILY,doc_type='type1',body=query_body)
    hits = res['hits']['hits']
    dic = [i['_source'] for i in hits]
    df = pd.DataFrame(dic)
    datelist = sorted(list(set(df['date'])))
    volumelist = [df[df['date'] == date].iloc[0]['volume'] for date in datelist]
    amtlist = [df[df['date'] == date].iloc[0]['amt'] for date in datelist]
    result = {'date':datelist,'volume':volumelist,'amt':amtlist}
    return result