from flask import Flask, request, jsonify
from database import get_connection  # Conexão com o Banco de Dados
import oracledb, json, socket

s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
s.connect(("8.8.8.8", 80))

app         = Flask(__name__)
port        = '5000'
novo_ip     = s.getsockname()[0]
caminho_url = r'..\src\screens\ip.json'

with open(caminho_url, 'r') as arquivo:
    dados = json.load(arquivo)

dados['API_URL'] = novo_ip + ':' + port

with open(caminho_url, 'w') as arquivo:
    json.dump(dados, arquivo, indent=2)

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

# Endpoint para Confirmar presença em algum evento
@app.route('/api/eventos/<int:id_evento>/confirmar' , methods=['POST'])
def confirmar_presenca(id_evento):
    data = request.json
    id_user = data.get('id_user')

    if not id_user:
        return jsonify({"erro": "Campo obrigatório: id_user"}), 400

    try:
        conn = get_connection()
        cursor = conn.cursor()

        cursor.execute("""
            INSERT INTO Usuario_Evento (ID_User, ID_Evento)
            VALUES (:id_user, :id_evento)
        """, {
            "id_user": id_user,
            "id_evento": id_evento
        })

        conn.commit()
        return jsonify({"mensagem": "Presença confirmada com sucesso!"}), 201

    except oracledb.IntegrityError as e:
        # Verifica se é erro de chave duplicada (presença já confirmada)
        if "ORA-00001" in str(e):
            return jsonify({"mensagem": "Usuário já confirmou presença neste evento."}), 409
        return jsonify({"erro": "Erro de integridade ao confirmar presença."}), 500

    except oracledb.DatabaseError as e:
        print(f"Erro ao confirmar presença: {e}")
        return jsonify({"erro": "Erro ao confirmar presença"}), 500

    finally:
        cursor.close()
        conn.close()


# Rodando a API Flask
if __name__ == '__main__':
    app.run(host=novo_ip, port=port)
