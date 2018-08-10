import os

from flask import Flask
from src.app import create_app

# Create object app
env_name = os.getenv('FLASK_ENV')
app = create_app(env_name)

if __name__ == "__main__":
    port = os.getenv('PORT')
    app.run(host='0.0.0.0', port=port)