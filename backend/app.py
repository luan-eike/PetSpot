from flask import Flask
from controllers.controller_eventos import eventos_bp
from controllers.controller_tables import users_bp

app = Flask(__name__)

# Registra os blueprints
app.register_blueprint(users_bp, url_prefix='/api')
app.register_blueprint(eventos_bp, url_prefix='/api')

if __name__ == '__main__':
    app.run(debug=True)
