# -*- coding: utf-8 -*-

from flask import Blueprint,render_template,request
import json
from utils import *

mod = Blueprint('backstage_detail',__name__,url_prefix='/backstage_detail')


@mod.route('/test/')
def test():
    result = 'Hello World!'
    return json.dumps(result,ensure_ascii=False)

@mod.route('/pricedaily/')
def priceDaily():
    id = request.args.get('id','')
    result = pricedaily(id)
    return result

@mod.route('/tradingdaily/')
def tradingDaily():
    id = request.args.get('id','')
    result = tradingdaily(id)
    return json.dumps(result,ensure_ascii=False)