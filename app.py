import os

from flask import Blueprint, Flask
from flask_restful import Api
from flask_cors import CORS
from resources.Category import CategoryResource
from resources.Lembaga import LembagaResource, LembagaSingleResource
from resources.Activity import ActivityResource, ActivitySingleResource
from models import db
from config import app_config

api_bp = Blueprint('api', __name__)
api = Api(api_bp)

# Routes
api.add_resource(CategoryResource, '/Category')
api.add_resource(LembagaResource, '/Lembaga')
api.add_resource(LembagaSingleResource, '/Lembaga/<int:id>')
api.add_resource(ActivityResource, '/Activity')
api.add_resource(ActivitySingleResource, '/Activity/<int:id>')

def create_app(env_name):
    # Initialize app
    app = Flask(__name__)
    CORS(app)

    app.config.from_object(app_config[env_name])

    db.init_app(app)

    app.register_blueprint(api_bp, url_prefix='/api')

    return app

if __name__ == "__main__":
    env_name = os.getenv('FLASK_ENV')
    app = create_app(env_name)
    app.run(debug=True)