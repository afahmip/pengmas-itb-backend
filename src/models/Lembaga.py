from marshmallow import Schema, fields, pre_load, validate
from . import db


# Model
class Lembaga(db.Model):

    # Table name
    __tablename__ = 'lembagas'

    # Attributes
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(250), unique=True, nullable=False)
    category = db.Column(db.String(150), nullable=False)
    penanggung_jawab = db.Column(db.String(100))
    nomor_hp = db.Column(db.String(25))
    id_line = db.Column(db.String(250))
    email = db.Column(db.String(250))
    instagram = db.Column(db.String(250))
    web = db.Column(db.String(250))
    youtube = db.Column(db.String(250))

    # Class constructor
    def __init__(self, name, category, penanggung_jawab, nomor_hp, id_line, email, instagram, web, youtube):
        self.name = name
        self.category = category
        self.penanggung_jawab = penanggung_jawab
        self.nomor_hp = nomor_hp
        self.id_line = id_line
        self.email = email
        self.instagram = instagram
        self.web = web
        self.youtube = youtube
    
    def get_name(self):
        return self.name
    
    def json(self):
        return {
            'name': self.name, 
            'category': self.category,
            'penanggung_jawab': self.penanggung_jawab,
            'nomor_hp': self.nomor_hp,
            'id_line': self.id_line,
            'email': self.email,
            'instagram': self.instagram,
            'web': self.web,
            'youtube': self.youtube
        }
    
    @classmethod
    def find_by_id(cls, id):
        return cls.query.filter_by(id=id).first()

# Schema
class LembagaSchema(Schema):
    id = fields.Integer()
    name = fields.String(required=True)
    category = fields.String(required=True)
    penanggung_jawab = fields.String()
    nomor_hp = fields.String()
    id_line = fields.String()
    email = fields.String()
    instagram = fields.String()
    web = fields.String()
    youtube = fields.String()