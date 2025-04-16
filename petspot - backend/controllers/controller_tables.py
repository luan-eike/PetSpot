# CONTROLE DA BUSCA VIA API

from flask import Blueprint, jsonify
from database import get_connection

users_bp = Blueprint('users', __name__)

@users_bp.route('/users', methods=['GET'])
def get_users():
    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute("SELECT ID_User, Nome, Email, Telefone, Localizacao FROM Tabela_Usuario")
    users = [
        {
            "id": row[0],
            "nome": row[1],
            "email": row[2],
            "telefone": row[3],
            "localizacao": row[4]
        }
        for row in cursor.fetchall()
    ]

    cursor.close()
    conn.close()
    return jsonify(users)
