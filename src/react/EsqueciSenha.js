import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Platform, StatusBar } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/oie_transparent.png')}
        style={styles.image}
      />

      <View style={styles.forgotPassword}>
        <Text style={styles.forgotPasswordText}>Esqueci Minha Senha</Text>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Email ou Nome de Usuário"
        autoCorrect={false}
      />

      <TouchableOpacity style={styles.btnSubmit}>
        <Text style={styles.submitText}>Avançar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: '#6F6F6F',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, // Ajuste para a barra de status no Android
    paddingBottom: 20, 
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 8,
    width: '80%',
    backgroundColor: '#FFF',
    color: '#000000',
    fontSize: 18,
    borderRadius: 7,
    marginBottom: 20,
  },
  btnSubmit: {
    backgroundColor:'#35AAFF',
    width: '80%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  },
  submitText: {
    color:  '#FFF',
    fontSize: 18,
  },
  forgotPassword: {
    marginBottom: 20,
  },
  forgotPasswordText: {
    color: '#FFF',
    fontSize: 25,
    marginBottom: 80,
    alignItems: 'center'
  },
});