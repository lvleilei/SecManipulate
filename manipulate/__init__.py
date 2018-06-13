# -*- coding: utf-8 -*-

from manipulate.backstage.detail.views import mod as back_detail_mod
from manipulate.backstage.detect.views import mod as back_detect_mod
from manipulate.backstage.trend.views import mod as back_trend_mod
from manipulate.index.views import mod as index_mod

from flask import Flask, render_template, request, jsonify, Blueprint

def create_app():
	app = Flask(__name__)
	app.register_blueprint(back_detail_mod)
	app.register_blueprint(back_detect_mod)
	app.register_blueprint(back_trend_mod)
	app.register_blueprint(index_mod)

	return app
