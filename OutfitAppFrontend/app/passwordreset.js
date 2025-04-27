import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

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
    <LinearGradient colors={['#B5FFFC', '#FFDEE9']} style={styles.gradient}>
      <View style={styles.container}>
        
        {/* ✉️ İKON */}
        <Text style={styles.icon}>✉️</Text>

        <Text style={styles.title}>Şifremi Unuttum</Text>
        <Text style={styles.subtitle}>Kayıtlı e-posta adresinizi girin</Text>

        <TextInput
          style={styles.input}
          placeholder="E-posta"
          placeholderTextColor="#aaa"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TouchableOpacity style={styles.button} onPress={handleReset}>
          <Text style={styles.buttonText}>Sıfırlama Linki Gönder</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => changeScreen('Login')}>
          <Text style={styles.link}>Giriş ekranına dön</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center', padding: 30,
  },
  icon: {
    fontSize: 60,
    marginBottom: 20,
  },
  title: {
    fontSize: 28, fontWeight: 'bold', color: '#6C63FF', marginBottom: 10,
  },
  subtitle: {
    fontSize: 16, color: '#666', marginBottom: 30,
    textAlign: 'center',
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