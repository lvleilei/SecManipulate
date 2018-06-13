# -*- coding:utf-8 -*-

from flask import Flask, render_template, request, jsonify, Blueprint, send_from_directory, url_for, session
import json

mod = Blueprint("index",__name__,url_prefix='/index')


@mod.route('/backstage/test')
def test():
	return render_template('backstage/1.html')

@mod.route('/dashboard/test')
def test2():
	return render_template('dashboard/2.html')

# 业务系统 -态势分析
@mod.route('/newSituationtem')
def newSituationtem():
    return render_template('backstage/newSituationtem/newSituationtem.html')

# 业务系统 -操纵监测
@mod.route('/maniPulate')
def maniPulate():
    return render_template('backstage/maniPulate/manipulate.html')

# 业务系统 -操纵监测-详情页
@mod.route('/setDetail')
def setDetail():
    stock = request.args.get('stock','')
    id = request.args.get('id','')
    manipulate_type_num = request.args.get('manipulate_type_num','')
    return render_template('backstage/setDetail/setDetail.html',stock=stock,id=id,manipulate_type_num=manipulate_type_num)

# 大屏系统 -封面
@mod.route('/cover/')
def cover():
    return render_template('dashboard/cover.html')

# 大屏系统 -态势分析
@mod.route('/trend/')
def trend():
    return render_template('dashboard/trend.html')

# 大屏系统 -预警推送
@mod.route('/detect/')
def detect():
    return render_template('dashboard/detect.html')

# 大屏系统 -预警详情
@mod.route('/stockDetail/')
def stockDetail():
    return render_template('dashboard/stockDetail.html')

