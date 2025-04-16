# realização de consulta via API do banco de dados

from flask import Flask
from controllers.controller_tables import users_bp  # Verifique se o caminho está certo

app = Flask(__name__)
app.register_blueprint(users_bp)  # Certifique-se de que está registrando o blueprint corretamente

if __name__ == '__main__':
    app.run(debug=True)
