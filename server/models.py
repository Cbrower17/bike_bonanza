from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
from sqlalchemy.orm import validates
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy_serializer import SerializerMixin

metadata = MetaData(naming_convention={
    "ix": "ix_%(column_0_label)s",
    "uq": "uq_%(table_name)s_%(column_0_name)s",
    "ck": "ck_%(table_name)s_`%(constraint_name)s`",
    "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
    "pk": "pk_%(table_name)s"
})
db = SQLAlchemy(metadata=metadata)

class Trail(db.Model, SerializerMixin):
    __tablename__ = 'trails'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    url = db.Column(db.String)
    length = db.Column(db.Float)
    description = db.Column(db.String)
    # directions	= db.Column(db.String)
    city = db.Column(db.String)
    region = db.Column(db.String)
    country = db.Column(db.String)
    lat = db.Column(db.Float)
    lon = db.Column(db.Float)
    difficulty = db.Column(db.String)
    features = db.Column(db.String)
    rating = db.Column(db.Float)
    thumbnail = db.Column(db.String)

    votes = db.Column(db.Integer)

    comments = db.relationship("Comment", backref = "trail")
    usertrails = db.relationship( 'UserTrail', backref = 'trail' )


    serialize_rules = ('-usertrails.trail','-comments.trail' ,'-created_at', '-updated_at')
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(
        db.DateTime, default=db.func.now(), onupdate=db.func.now())


class User(db.Model, SerializerMixin):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    user_name = db.Column(db.String)
    name = db.Column(db.String)
    email = db.Column(db.String)
    password = db.Column(db.String)
    profile_picture = db.Column(db.String)
    
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(
        db.DateTime, default=db.func.now(), onupdate=db.func.now())

    # relationships have jonah check cus what is going on here
    usertrails = db.relationship( 'UserTrail', backref = 'user' )
    # trails = association_proxy( 'user_trails', 'trails' )

    comments = db.relationship( 'Comment', backref = 'user' )

    serialize_rules = ('-usertrails.user','-comments.user','-created_at', '-updated_at')


class Comment(db.Model, SerializerMixin):
    __tablename__ = 'comments'

    id = db.Column(db.Integer, primary_key=True)
    trail_id = db.Column(db.Integer, db.ForeignKey('trails.id'))
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    content = db.Column(db.String)
    votes = db.Column(db.Integer)

    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(
        db.DateTime, default=db.func.now(), onupdate=db.func.now())

    serialize_rules = ('-user.comments','-trail.comments','-user.usertrails','-trail.usertrails','-created_at', '-updated_at')

class UserTrail(db.Model, SerializerMixin):
    __tablename__ = 'user_trails'
    id = db.Column(db.Integer, primary_key=True) 
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    trail_id = db.Column(db.Integer, db.ForeignKey('trails.id'))
    ridden = db.Column(db.Boolean)
    wishlist = db.Column(db.Boolean)

    serialize_rules = ('-user.usertrails','-trail.usertrails','-trail.comments','-user.comments','-created_at', '-updated_at')

    

    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(
        db.DateTime, default=db.func.now(), onupdate=db.func.now())
