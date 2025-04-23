import oracledb

def get_connection():
    try:
        conn = oracledb.connect(
            user="System",
            password="Pi@fam@2025",
            dsn="localhost/XE"
        )
        return conn
    except oracledb.DatabaseError as e:
        print(f"Erro ao conectar com o banco: {e}")
        raise

#---------------------------------------------------------------------

# comando abaixo é testando a conexão do banco de dados + realizando consulta da tabela usuarios
#try:
    # Conectando ao banco de dados
    #connection = oracledb.connect(user="System", password="Pi@fam@2025", dsn="localhost/XE")

    # Criar cursor e executar a consulta
    #cursor = connection.cursor()
   # cursor.execute("SELECT * FROM TABELA_USUARIO") # Precisa realizar o commit no banco para conseguir puxar dados na consulta via Python

    # Pega todos os resultados de uma vez
    #results = cursor.fetchall()
   # if results:
        #for row in results:
            #print(row)
   # else:
       # print("Nenhum dado encontrado.")

#except oracledb.DatabaseError as e:
    #print(f"Erro de banco de dados: {e}")
#finally:
    #if 'connection' in locals() and connection:
        #connection.close()  # Fecha a conexão
#
#---------------------------------------------------------------------------

# Etapa abaixo insere dados em alguma tabela, aplicando o commit automaticamente
#cursor.execute("INSERT INTO TABELA_USUARIO (Nome, Email, Telefone, Senha, Localizacao) VALUES (:1, :2, :3, :4, :5)",
#               ('João da Silva', 'joao@email.com', '11999998888', 'senhaSegura', '12345678'))#

#connection.commit()  # <- MUITO IMPORTANTE#