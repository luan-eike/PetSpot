from flask import Blueprint, request, jsonify
from database import get_connection
import oracledb

eventos_bp = Blueprint('eventos', __name__)

# Buscar todos os eventos
@eventos_bp.route('/eventos', methods=['GET'])
def get_eventos():
    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute("SELECT ID_Evento, Titulo, Tipo, DataHora, ID_User FROM Tabela_Evento")
    eventos = [
        {
            "ID_Evento": row[0],
            "Titulo": row[1],
            "Tipo": row[2],
            "DataHora": row[3],
            "ID_User": row[4],
        }
        for row in cursor.fetchall()
    ]

    cursor.close()
    conn.close()
    return jsonify(eventos)