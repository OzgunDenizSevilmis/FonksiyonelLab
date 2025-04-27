import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function ProfileScreen({ changeScreen, email }) {
  const [style, setStyle] = useState('');

  useEffect(() => {
    if (!email) return;

    fetch("http://127.0.0.1:5000/profile", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email })
    })
      .then(res => res.json())
      .then(data => {
        if (data.email) {
          setStyle(data.style);
        } else {
          alert("Kullanıcı bulunamadı.");
        }
      })
      .catch(err => {
        console.error("Profil alınamadı:", err);
      });
  }, [email]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>👤 Profil</Text>
      <Text style={styles.text}>Kullanıcı Adı: {email}</Text>
      <Text style={styles.text}>Stil Tercihi: {style}</Text>

      <TouchableOpacity style={styles.button} onPress={() => changeScreen('Login')}>
        <Text style={styles.buttonText}>Çıkış Yap</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: '#f9f9f9',
    alignItems: 'center', justifyContent: 'center', padding: 20
  },
  title: {
    fontSize: 28, fontWeight: 'bold', marginBottom: 20
  },
  text: {
    fontSize: 16, marginVertical: 10
  },
  button: {
    backgroundColor: '#FF6B81', padding: 12,
    borderRadius: 10, marginTop: 30
  },
  buttonText: {
    color: '#fff', fontWeight: 'bold', fontSize: 16
  }
});