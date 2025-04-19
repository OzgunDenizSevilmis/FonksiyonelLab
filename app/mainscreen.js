import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export default function MainScreen({ changeScreen }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.welcome}>👋 Hoş Geldin!</Text>
      <Text style={styles.title}>Bugünkü Kombin Önerin</Text>

      <View style={styles.card}>
        <Text style={styles.label}>👕 Üst:</Text>
        <Text style={styles.text}>Siyah Slim Fit Tişört</Text>

        <Text style={styles.label}>👖 Alt:</Text>
        <Text style={styles.text}>Gri Jogger Pantolon</Text>

        <Text style={styles.label}>👟 Ayakkabı:</Text>
        <Text style={styles.text}>Beyaz Sneaker</Text>

        <Text style={styles.label}>🧢 Aksesuar:</Text>
        <Text style={styles.text}>Sade Şapka & Saat</Text>
      </View>

      {/* 🔥 Profil Butonu */}
      <TouchableOpacity style={styles.button} onPress={() => changeScreen('Profile')}>
        <Text style={styles.buttonText}>Profilim</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f4f8', padding: 20, flexGrow: 1, alignItems: 'center',
  },
  welcome: {
    fontSize: 20, color: '#888', marginBottom: 10,
  },
  title: {
    fontSize: 26, fontWeight: 'bold', color: '#333', marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff', borderRadius: 15, padding: 20,
    width: '100%', shadowColor: '#000', shadowOpacity: 0.1,
    shadowRadius: 5, elevation: 3,
  },
  label: {
    fontWeight: 'bold', fontSize: 16, marginTop: 10,
  },
  text: {
    fontSize: 16, color: '#444', marginLeft: 5,
  },
  button: {
    marginTop: 30,
    backgroundColor: '#6C63FF',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 12,
  },
  buttonText: {
    color: '#fff', fontWeight: 'bold', fontSize: 16,
  }
});