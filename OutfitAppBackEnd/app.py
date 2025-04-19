from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

users = []

@app.route("/register", methods=["POST"])
def register():
    data = request.get_json()
    email = data.get("email")
    password = data.get("password")

    for user in users:
        if user["email"] == email:
            return jsonify({"message": "Bu e-posta ile kayıtlı bir kullanıcı zaten var."}), 400

    users.append({"email": email, "password": password})
    return jsonify({"message": "Kayıt başarılı!"}), 201

@app.route("/login", methods=["POST"])
def login():
    data = request.get_json()
    email = data.get("email")
    password = data.get("password")

    for user in users:
        if user["email"] == email and user["password"] == password:
            return jsonify({"message": "Giriş başarılı!"}), 200

    return jsonify({"message": "E-posta veya şifre hatalı."}), 401
@app.route("/profile", methods=["POST"])
def profile():
    data = request.get_json()
    email = data.get("email")

    for user in users:
        if user["email"] == email:
            return jsonify({
                "email": user["email"],
                "style": user.get("style", "Casual")  # örnek varsayılan stil
            }), 200

    return jsonify({"message": "Kullanıcı bulunamadı."}), 404

if __name__ == "__main__":
    app.run(debug=True)