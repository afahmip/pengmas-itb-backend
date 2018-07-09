from flask import Blueprint
from flask_restful import Api
from resources.Comment import CommentResource
from resources.Category import CategoryResource
from resources.Lembaga import LembagaResource, LembagaSingleResource
from resources.Activity import ActivityResource, ActivitySingleResource

api_bp = Blueprint('api', __name__)
api = Api(api_bp)

# Routes
api.add_resource(CommentResource, '/Comment')
api.add_resource(CategoryResource, '/Category')
api.add_resource(LembagaResource, '/Lembaga')
api.add_resource(LembagaSingleResource, '/Lembaga/<int:id>')
api.add_resource(ActivityResource, '/Activity')
api.add_resource(ActivitySingleResource, '/Activity/<int:id>')