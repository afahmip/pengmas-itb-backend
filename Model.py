from flask import Flask
from marshmallow import Schema, fields, pre_load, validate
from flask_marshmallow import Marshmallow
from flask_sqlalchemy import SQLAlchemy


ma = Marshmallow()
db = SQLAlchemy()

# Model

class Comment(db.Model):
    __tablename__ = 'comments'
    id = db.Column(db.Integer, primary_key=True)
    comment = db.Column(db.String(250), nullable=False)
    creation_date = db.Column(db.TIMESTAMP, server_default=db.func.current_timestamp(), nullable=False)
    category_id = db.Column(db.Integer, db.ForeignKey('categories.id', ondelete='CASCADE'), nullable=False)
    category = db.relationship('Category', backref=db.backref('comments', lazy='dynamic' ))

    def __init__(self, comment, category_id):
        self.comment = comment
        self.category_id = category_id


class Category(db.Model):
    __tablename__ = 'categories'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(150), unique=True, nullable=False)

    def __init__(self, name):
        self.name = name


class Activity(db.Model):
    __tablename__ = 'activities'
    id = db.Column(db.Integer, primary_key=True)
    lat = db.Column(db.Float, nullable=False)
    lng = db.Column(db.Float, nullable=False)
    name = db.Column(db.String(300), nullable=True)
    lembaga_id = db.Column(db.Integer, db.ForeignKey('lembagas.id', ondelete='CASCADE'), nullable=False)
    lembaga = db.relationship('Lembaga', backref=db.backref('activities', lazy='dynamic'))

    def __init__(self, lat, lng, name, lembaga_id):
        self.lat = lat
        self.lng = lng
        self.name = name
        self.lembaga_id = lembaga_id


class Lembaga(db.Model):
    __tablename__ = 'lembagas'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(250), unique=True, nullable=False)
    category = db.Column(db.String(150), nullable=False)

    def __init__(self, name, category):
        self.name = name
        self.category = category
    
    def json(self):
        return {'name': self.name, 'category': self.category}
    
    @classmethod
    def find_by_id(cls, id):
        return cls.query.filter_by(id=id).first()


# Model Schema

class CategorySchema(ma.Schema):
    id = fields.Integer()
    name = fields.String(required=True)


class CommentSchema(ma.Schema):
    id = fields.Integer(dump_only=True)
    category_id = fields.Integer(required=True)
    comment = fields.String(required=True, validate=validate.Length(1))
    creation_date = fields.DateTime()


class LembagaSchema(ma.Schema):
    id = fields.Integer()
    name = fields.String(required=True)
    category = fields.String(required=True)


class ActivitySchema(ma.Schema):
    id = fields.Integer()
    lat = fields.Float(required=True)
    lng = fields.Float(required=True)
    name = fields.String(required=True) #, validate=validate.Length(1)
    lembaga_id = fields.Integer(required=True)