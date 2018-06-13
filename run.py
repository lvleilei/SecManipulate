# -*- coding: utf-8 -*-

from flask import Flask, render_template, request, jsonify, Blueprint
import json
from optparse import OptionParser
from manipulate import create_app

optparser = OptionParser()
optparser.add_option('-p','--port',dest='port',help='Server Http Port Number', default=5000, type='int')
(options, args) = optparser.parse_args()

app = create_app()
app.secret_key = "ruman"

if __name__ == '__main__':
	app.debug = True
	app.run(host='0.0.0.0',port=options.port)
