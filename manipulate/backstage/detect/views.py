# -*- coding: utf-8 -*-

from flask import Blueprint,render_template,request
from utils import *
import json

mod = Blueprint('backstage_detect',__name__,url_prefix='/backstage_detect')


@mod.route('/test/')
def test():
    result = 'Hello World!'
    return json.dumps(result,ensure_ascii=False)

@mod.route('/firstlevelnum/')
def firstlevelNum():
    result = levelnum(1)
    return json.dumps(result,ensure_ascii=False)

@mod.route('/firstleveltable/')
def firstlevelTable():
    result = leveltable(1)
    return json.dumps(result,ensure_ascii=False)

@mod.route('/secondlevelnum/')
def secondlevelNum():
    result = levelnum(2)
    return json.dumps(result,ensure_ascii=False)

@mod.route('/secondleveltable/')
def secondlevelTable():
    result = leveltable(2)
    return json.dumps(result,ensure_ascii=False)

@mod.route('/thirdlevelnum/')
def thirdlevelNum():
    result = levelnum(3)
    return json.dumps(result,ensure_ascii=False)

@mod.route('/thirdleveltable/')
def thirdlevelTable():
    result = leveltable(3)
    return json.dumps(result,ensure_ascii=False)