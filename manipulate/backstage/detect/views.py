# -*- coding: utf-8 -*-

from flask import Blueprint,render_template,request
import json

mod = Blueprint('backstage_detect',__name__,url_prefix='/backstage_detect')


@mod.route('/test/')
def test():
    result = 'Hello World!'
    return json.dumps(result,ensure_ascii=False)