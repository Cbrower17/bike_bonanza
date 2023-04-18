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

# Routes for trails - GET and Get by ID


class AllTrails(Resource):
    def get(self):
        all_trails = Trail.query.all()
        dict_trails = []
        for trail in all_trails:
            dict_trails.append(trail.to_dict())
        return make_response(dict_trails, 200)

    def post(self):
        try:
            input = request.get_json()
            new_comment = User(
                name=input['name'], email=input['email'], password=input['password'])
            db.session.add(new_comment)
            db.session.commit()
            return make_response(new_comment.users.to_dict(), 201)
        except:
            return make_response({
                "errors": ["validation errors"]
            }, 400)


api.add_resource(AllTrails, '/trails')


class TrailById(Resource):
    def get(self, id):
        trail = Trail.query.filter_by(id=id).first()
        if trail:
            return make_response(trail.to_dict(), 200)
        else:
            return make_response({"error": "Not a valid trail"})


api.add_resource(TrailById, '/trails/<int:id>')

# routes for users Get, Get by ID and Posting a new user


class Users(Resource):
    def get(self):
        all_users = User.query.all()
        dict_users = []
        for user in all_users:
            dict_users.append(user.to_dict())
        return make_response(dict_users, 200)


api.add_resource(Users, '/users')


class UsersById(Resource):
    def get(self, id):
        user = User.query.filter_by(id=id).first()
        if user:
            return make_response(user.to_dict(), 200)
        else:
            return make_response({"error": "Not a valid user"})


api.add_resource(UsersById, '/users/<int:id>')


class AddUser(Resource):
    def post(self):
        try:
            input = request.get_json()
            new_user = User(
                name=input['name'], email=input['email'], password=input['password'])
            db.session.add(new_user)
            db.session.commit()
            return make_response(new_user.users.to_dict(), 201)
        except:
            return make_response({
                "errors": ["validation errors"]
            }, 400)


api.add_resource(AddUser, '/newuser')

# get comments and post comments


class AllComments(Resource):
    def get(self):
        all_comments = Comment.query.all()
        dict_comments = []
        for comment in all_comments:
            dict_comments.append(comment.to_dict())
        return make_response(dict_comments, 200)


api.add_resource(AllComments, '/comments')


class AllUserTrails(Resource):
    def get(self):
        all_user_trails = UserTrail.query.all()
        dict_user_trails = []
        for user in all_user_trails:
            dict_user_trails.append(user.to_dict())
        return make_response(dict_user_trails, 200)


api.add_resource(AllUserTrails, '/usertrails')


if __name__ == '__main__':
    app.run(port=5555, debug=True)
