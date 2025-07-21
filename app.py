from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # permite requisições do frontend

# Exemplo de resultados simulados
resultados_fake = [
    {"titulo": "Exemplo 1", "url": "https://site1.com", "descricao": "Descrição do site 1"},
    {"titulo": "Exemplo 2", "url": "https://site2.com", "descricao": "Descrição do site 2"},
]

@app.route("/buscar")
def buscar():
    query = request.args.get("q")
    
    # Aqui entra sua lógica de pesquisa de verdade (ex: consulta no banco)
    print(f"Recebida busca por: {query}")
    
    # Por enquanto, retorna os exemplos fixos
    return jsonify({"resultados": resultados_fake})

if __name__ == "__main__":
    app.run(debug=True)
