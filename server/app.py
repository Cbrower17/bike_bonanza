from flask import Flask, make_response, jsonify, request
from flask_migrate import Migrate
from flask_restful import Api,Resource

from models import db, User, UserTrail, Trail, Comment

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False

migrate = Migrate(app, db)

db.init_app(app)

api = Api(app)