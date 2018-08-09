from marshmallow import Schema, fields, pre_load, validate
from . import db


# Model
class Category(db.Model):
    # Table name
    __tablename__ = 'categories'
    
    # Attributes
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(150), unique=True, nullable=False)

    # Class constructor
    def __init__(self, name):
        self.name = name
    
    @classmethod
    def find_by_id(cls, id):
        return cls.query.filter_by(id=id).first()

# Schema
class CategorySchema(Schema):
    id = fields.Integer()
    name = fields.String(required=True)