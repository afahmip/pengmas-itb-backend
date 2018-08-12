from marshmallow import Schema, fields, pre_load, validate
from .Lembaga import Lembaga
from .Category import Category
from . import db


# Model
class Activity(db.Model):
    # Table name
    __tablename__ = 'activities'
    
    # Attributes
    id = db.Column(db.Integer, primary_key=True)
    lat = db.Column(db.Float, nullable=False)
    lng = db.Column(db.Float, nullable=False)
    name = db.Column(db.String(300), nullable=True)
    lembaga_id = db.Column(db.Integer, db.ForeignKey('lembagas.id', ondelete='CASCADE'), nullable=False)
    lembaga = db.relationship('Lembaga')
    lembaga_name = db.Column(db.String(300))
    description = db.Column(db.String)
    goal = db.Column(db.String)
    target = db.Column(db.String)
    time = db.Column(db.String)
    category_id = db.Column(db.Integer)

    # Class constructor
    def __init__(self, lat, lng, name, lembaga_id, description, category_id, goal, target, time):
        self.lat = lat
        self.lng = lng
        self.name = name
        self.lembaga_id = lembaga_id
        self.lembaga_name = Lembaga.find_by_id(lembaga_id).get_name()
        self.category_id = category_id
        self.description = description
        self.goal = goal
        self.target = target
        self.time = time
    
    def json(self):
        return {
            'lat': self.lat,
            'lng': self.lng,
            'name': self.name,
            'lembaga_name' : self.lembaga_name,
            'category_name': Category.find_by_id(self.category_id).get_name(),
            'description': self.description,
            'goal': self.goal,
            'target': self.target,
            'time': self.time
        }
    
    @classmethod
    def find_by_id(cls, id):
        return cls.query.filter_by(id=id).first()

# Schema
class ActivitySchema(Schema):
    id = fields.Integer()
    lat = fields.Float(required=True)
    lng = fields.Float(required=True)
    name = fields.String(required=True) #, validate=validate.Length(1)
    lembaga_id = fields.Integer(required=True)
    lembaga_name = fields.String()
    category_id = fields.Integer()
    description = fields.String()
    goal = fields.String()
    target = fields.String()
    time = fields.String()