import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // Gradient importu

export default function RegisterScreen({ changeScreen }) {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    if (!name || !surname || !email || !password) {
      alert('Lütfen tüm alanları doldurun.');
      return;
    }
  
    try {
      const response = await fetch('http://192.168.1.101:5001/register', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, surname, email, password }),
      });
  
      const text = await response.text();
      console.log("🔵 Sunucu cevabı (ham):", text); // 🔥 Ekledik
  
      const data = text ? JSON.parse(text) : {};
  
      console.log("🟢 Status kod:", response.status);
      console.log("🟢 Backend JSON:", data);
  
      if (response.ok) {
        alert(data.message || "Kayıt başarılı!");
        changeScreen('Login');
      } else {
        alert(data.message || "Kayıt başarısız.");
      }
    } catch (error) {
      console.error('Hata:', error);
      alert('Sunucuya bağlanılamadı.');
    }
  };
  return (
    <LinearGradient
      colors={['#FF6B81', '#FF8C94', '#FFA3A5']}
      style={styles.container}
    >
      <View style={styles.logoContainer}>
        <Image
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/892/892458.png' }}
          style={styles.logo}
        />
        <Text style={styles.title}>OutfitApp</Text>
        <Text style={styles.subtitle}>Hesap Oluştur</Text>
      </View>

      <TextInput
        style={styles.input}
        placeholder="İsim"
        placeholderTextColor="#aaa"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Soyisim"
        placeholderTextColor="#aaa"
        value={surname}
        onChangeText={setSurname}
      />
      <TextInput
        style={styles.input}
        placeholder="E-posta"
        placeholderTextColor="#aaa"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Şifre"
        placeholderTextColor="#aaa"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Kayıt Ol</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => changeScreen('Login')}>
        <Text style={styles.link}>Zaten hesabın var mı? Giriş yap</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 15,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#f1f1f1',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 14,
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 15,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 14,
    borderRadius: 12,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#FF6B81',
    fontWeight: 'bold',
    fontSize: 16,
  },
  link: {
    color: '#fff',
    marginTop: 20,
    fontSize: 14,
    textAlign: 'center',
  }
});