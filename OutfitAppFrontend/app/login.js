import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';

export default function LoginScreen({ changeScreen }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (!email || !password) {
      alert('Lütfen tüm alanları doldurun.');
      return;
    }

    try {
      const response = await axios.post('http://127.0.0.1:5000/login', {
        email,
        password,
      });

      if (response.status === 200) {
        alert('Giriş başarılı!');
        changeScreen('Main');  // 🔥 Ana ekrana yönlendirme burası!
      }
    } catch (error) {
      alert(error.response?.data?.message || 'Giriş başarısız.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>OutfitApp</Text>
      <Text style={styles.subtitle}>Tarzını Yansıtan Giriş</Text>

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
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Giriş Yap</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => changeScreen('Register')}>
        <Text style={styles.link}>Hesabın yok mu? Kayıt ol</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => changeScreen('PasswordReset')}>
        <Text style={styles.link}>Şifremi Unuttum</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: '#f9f9f9',
    justifyContent: 'center', alignItems: 'center', padding: 30,
  },
  title: {
    fontSize: 32, fontWeight: 'bold', color: '#6C63FF', marginBottom: 10,
  },
  subtitle: {
    fontSize: 16, color: '#666', marginBottom: 30,
  },
  input: {
    width: '100%', padding: 14,
    backgroundColor: '#fff', borderRadius: 12,
    borderWidth: 1, borderColor: '#ddd', marginBottom: 15, fontSize: 16
  },
  button: {
    backgroundColor: '#6C63FF', paddingVertical: 14, borderRadius: 12,
    width: '100%', alignItems: 'center',
  },
  buttonText: {
    color: '#fff', fontWeight: 'bold', fontSize: 16
  },
  link: {
    color: '#6C63FF', marginTop: 20, fontSize: 14
  }
});