import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function PasswordResetScreen({ changeScreen }) {
  const [email, setEmail] = useState('');

  const handleReset = () => {
    if (!email) {
      alert('Lütfen e-posta adresinizi girin.');
      return;
    }
    Alert.alert("Şifre Sıfırlama", "E-posta adresinize şifre sıfırlama talimatları gönderildi.");
    changeScreen('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Şifremi Unuttum</Text>
      <Text style={styles.subtitle}>Kayıtlı e-posta adresinizi girin</Text>

      <TextInput
        style={styles.input}
        placeholder="E-posta"
        placeholderTextColor="#aaa"
        value={email}
        onChangeText={setEmail}
      />

      <TouchableOpacity style={styles.button} onPress={handleReset}>
        <Text style={styles.buttonText}>Sıfırlama Linki Gönder</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => changeScreen('Login')}>
        <Text style={styles.link}>Giriş ekranına dön</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center', padding: 30,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 28, fontWeight: 'bold', color: '#6C63FF', marginBottom: 10,
  },
  subtitle: {
    fontSize: 16, color: '#666', marginBottom: 30,
  },
  input: {
    width: '100%', padding: 14, backgroundColor: '#fff',
    borderRadius: 12, borderWidth: 1, borderColor: '#ddd',
    marginBottom: 20, fontSize: 16,
  },
  button: {
    backgroundColor: '#6C63FF', paddingVertical: 14,
    borderRadius: 12, width: '100%', alignItems: 'center',
  },
  buttonText: {
    color: '#fff', fontWeight: 'bold', fontSize: 16
  },
  link: {
    color: '#6C63FF', marginTop: 20, fontSize: 14
  }
});