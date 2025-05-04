import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function MainScreen({ changeScreen }) {
  return (
    <LinearGradient colors={['#6C63FF', '#8A74FF', '#B5AFFF']} style={styles.gradient}>
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

        <TouchableOpacity style={styles.button} onPress={() => changeScreen('Profile')}>
          <Text style={styles.buttonText}>Profilim</Text>
        </TouchableOpacity>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    padding: 20,
    flexGrow: 1,
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    color: '#f0f0f0',
    marginBottom: 10,
    fontWeight: '500',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    width: '100%',
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 6,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 10,
    color: '#444',
  },
  text: {
    fontSize: 16,
    color: '#666',
    marginLeft: 5,
  },
  button: {
    marginTop: 30,
    backgroundColor: '#fff',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 12,
    shadowColor: '#6C63FF',
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 5,
  },
  buttonText: {
    color: '#6C63FF',
    fontWeight: 'bold',
    fontSize: 16,
  }
}); 