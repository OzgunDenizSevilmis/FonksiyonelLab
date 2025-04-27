from flask import Flask, request, jsonify
from flask_cors import CORS
import psycopg2

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})  # 🌟 Tüm IP'lerden istek kabul et

# PostgreSQL bağlantısı
conn = psycopg2.connect(
    dbname="outfitapp",
    user="outfituser",
    password="outfitpass",
    host="localhost",
    port="5432"
)

@app.route("/register", methods=["POST"])
def register():
    try:
        data = request.get_json(force=True)  # 🔥 Gelen JSON verisi
        print("📥 Gelen veri (register):", data)  # Gelen veriyi terminale bas

        name = data.get("name")
        surname = data.get("surname")
        email = data.get("email")
        password = data.get("password")

        if not name or not surname or not email or not password:
            return jsonify({"message": "Tüm alanlar doldurulmalıdır."}), 400

        cur = conn.cursor()

        # Email kontrolü
        cur.execute("SELECT * FROM users WHERE email = %s", (email,))
        existing_user = cur.fetchone()
        if existing_user:
            cur.close()
            return jsonify({"message": "Bu e-posta zaten kayıtlı."}), 400

        # Yeni kullanıcı kaydı
        cur.execute(
            "INSERT INTO users (name, surname, email, password) VALUES (%s, %s, %s, %s)",
            (name, surname, email, password)
        )
        conn.commit()
        cur.close()

        return jsonify({"message": "Kayıt başarılı!"}), 201

    except Exception as e:
        print("🔥 Backend Hatası:", str(e))  # Hata olursa logla
        return jsonify({"message": f"Kayıt sırasında hata oluştu: {str(e)}"}), 500

@app.route("/login", methods=["POST"])
def login():
    try:
        data = request.get_json(force=True)  # 🔥 Gelen JSON verisi
        print("📥 Gelen veri (login):", data)  # Gelen veriyi terminale bas

        email = data.get("email")
        password = data.get("password")

        cur = conn.cursor()
        cur.execute(
            "SELECT id FROM users WHERE email = %s AND password = %s",
            (email, password)
        )
        user = cur.fetchone()
        cur.close()

        if user:
            return jsonify({"message": "Giriş başarılı!"}), 200
        else:
            return jsonify({"message": "E-posta veya şifre hatalı."}), 401

    except Exception as e:
        print("🔥 Backend Hatası:", str(e))  # Hata olursa logla
        return jsonify({"message": f"Giriş sırasında hata oluştu: {str(e)}"}), 500

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5001, debug=True)  # 🌟 Mobil cihazdan erişebilmek için