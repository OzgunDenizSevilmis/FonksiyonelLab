import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function RegisterScreen({ changeScreen }) {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    if (!email || !password) {
      alert('Lütfen tüm alanları doldurun.');
      return;
    }
  
    try {
      const response = await fetch('http://127.0.0.1:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        alert(data.message);
        changeScreen('Login'); // Kayıt başarılıysa giriş ekranına dön
      } else {
        alert(data.message); // Zaten kayıtlıysa vs.
      }
    } catch (error) {
      console.error('Hata:', error);
      alert('Sunucuya bağlanılamadı.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>OutfitApp</Text>
      <Text style={styles.subtitle}>Hesap Oluştur</Text>

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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: '#f4f4f4',
    justifyContent: 'center', alignItems: 'center', padding: 30,
  },
  title: {
    fontSize: 32, fontWeight: 'bold', color: '#FF6B81', marginBottom: 10,
  },
  subtitle: {
    fontSize: 16, color: '#777', marginBottom: 30,
  },
  input: {
    width: '100%', padding: 14,
    backgroundColor: '#fff', borderRadius: 12,
    borderWidth: 1, borderColor: '#ddd', marginBottom: 15, fontSize: 16
  },
  button: {
    backgroundColor: '#FF6B81', paddingVertical: 14, borderRadius: 12,
    width: '100%', alignItems: 'center',
  },
  buttonText: {
    color: '#fff', fontWeight: 'bold', fontSize: 16
  },
  link: {
    color: '#FF6B81', marginTop: 20, fontSize: 14
  }
});