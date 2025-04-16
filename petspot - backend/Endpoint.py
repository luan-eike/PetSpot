from flask import Flask, request, jsonify
from database import get_connection  # Conexão com o Banco de Dados
import oracledb

app = Flask(__name__)

# Endpoint para cadastrar pet
@app.route('/api/pets', methods=['POST'])
def cadastrar_pet():
    data = request.json
    nome = data.get('nome')
    raca = data.get('raca')
    sexo = data.get('sexo')  # 'M' ou 'F'
    descricao = data.get('descricao')
    id_user = data.get('id_user')

    if not nome or not sexo or not id_user:
        return jsonify({"erro": "Campos obrigatórios: nome, sexo, id_user"}), 400

    try:
        conn = get_connection()
        cursor = conn.cursor()

        cursor.execute("""
            INSERT INTO Tabela_Pet (Nome, Raca, Sexo, Descricao, ID_User)
            VALUES (:nome, :raca, :sexo, :descricao, :id_user)
        """, {
            "nome": nome,
            "raca": raca,
            "sexo": sexo.upper(),
            "descricao": descricao,
            "id_user": id_user
        })

        conn.commit()
        return jsonify({"mensagem": "Pet cadastrado com sucesso!"}), 201

    except oracledb.DatabaseError as e:
        print(f"Erro ao cadastrar pet: {e}")
        return jsonify({"erro": "Erro ao cadastrar pet"}), 500

    finally:
        cursor.close()
        conn.close()

# Rodando a API Flask
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)


# As requisições devem ser feitas via POSTMAN