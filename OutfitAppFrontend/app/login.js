import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; 
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
      const response = await axios.post('http://192.168.1.101:5001/login', { email, password });
      if (response.status === 200) {
        alert('Giriş başarılı!');
        changeScreen('Main');
      }
    } catch (error) {
      alert(error.response?.data?.message || 'Giriş başarısız.');
    }
  };

  return (
    <LinearGradient
      colors={['#6C63FF', '#8A74FF', '#B59FFF']} 
      style={styles.container}
    >
      {/* Logo & Başlık */}
      <View style={styles.logoContainer}>
        <Text style={styles.logo}>👕</Text> {/* 👕 İkon eklendi */}
        <Text style={styles.title}>OutfitApp</Text>
        <Text style={styles.subtitle}>Tarzını Yansıtan Giriş</Text>
      </View>

      {/* Inputlar */}
      <TextInput
        style={styles.input}
        placeholder="E-posta"
        placeholderTextColor="#999"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Şifre"
        placeholderTextColor="#999"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      {/* Giriş Butonu */}
      <Pressable style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]} onPress={handleLogin}>
        <Text style={styles.buttonText}>Giriş Yap</Text>
      </Pressable>

      {/* Şifremi Unuttum */}
      <Pressable onPress={() => changeScreen('PasswordReset')}>
        <Text style={styles.link}>Şifremi Unuttum?</Text>
      </Pressable>

      {/* Kayıt Ol Butonu */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Hesabın yok mu?</Text>
        <Pressable onPress={() => changeScreen('Register')}>
          <Text style={[styles.link, styles.footerLink]}> Kayıt Ol</Text>
        </Pressable>
      </View>

      {/* Social Login (Yorum satırına alındı) */}
      {/* 
      <View style={styles.socialContainer}>
        <Text style={styles.socialText}>Veya sosyal medya ile giriş yap</Text>
        <View style={styles.socialIcons}>
          <Pressable style={styles.socialButton}>
            <Text style={styles.socialIcon}>f</Text> 
          </Pressable>
          <Pressable style={styles.socialButton}>
            <Text style={styles.socialIcon}>G</Text> 
          </Pressable>
        </View>
      </View>
      */}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    fontSize: 50,
    marginBottom: 5,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#eee',
    textAlign: 'center',
    marginBottom: 30,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#f8f8f8',
    borderRadius: 12,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#eee',
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonPressed: {
    opacity: 0.8,
  },
  buttonText: {
    color: '#6C63FF',
    fontWeight: '600',
    fontSize: 16,
  },
  link: {
    color: '#fff',
    textAlign: 'center',
    marginTop: 15,
    fontWeight: '500',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  footerText: {
    color: '#eee',
  },
  footerLink: {
    fontWeight: '600',
    color: '#fff',
  },
  socialContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  socialText: {
    color: '#ddd',
    marginBottom: 15,
  },
  socialIcons: {
    flexDirection: 'row',
    gap: 20,
  },
  socialButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialIcon: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#6C63FF',
  },
});