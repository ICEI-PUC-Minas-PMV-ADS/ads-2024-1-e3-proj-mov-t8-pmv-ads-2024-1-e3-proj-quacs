import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ActivityIndicator } from 'react-native';
import { Image } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: 'black',
    alignItems: 'center',
    width: 300,
    padding: 10,
    borderRadius: 20,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
  },
});

const CadastroUsuario = ({ navigation }) => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [description, setDescription] = useState('');
  const [birthDate, setBirthDate] = useState({ day: '', month: '', year: '' });
  const [gender, setGender] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleBirthDateChange = (text, type) => {
    let updatedBirthDate = { ...birthDate };
    updatedBirthDate[type] = text;
    setBirthDate(updatedBirthDate);
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    const userData = {
      email,
      name: nome,
      password: senha,
      profileSelfie: '',
      description,
      birthDate: `${birthDate.year}-${birthDate.month}-${birthDate.day}`,
      gender,
    };

    try {
      const response = await fetch('https://quacsapi.azurewebsites.net/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        Alert.alert('Sucesso', 'Conta criada com sucesso!');
        navigation.navigate('LoginPage');
      } else {
        const errorData = await response.json();
        Alert.alert('Erro', errorData.message || 'Ocorreu um erro ao criar a conta.');
      }
    } catch (error) {
      Alert.alert('Erro', 'Ocorreu um erro ao conectar com o servidor.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ alignItems: 'center', backgroundColor: '#2878bb', width: 400, height: 170, padding: 20, marginBottom: 20 }}>
        <Image
          source={require('../assets/logo.png')} 
          style={{ width: 200, height: 130 }} 
        />
      </View>
      <Text style={{ marginBottom: 20, fontSize: 24 }}>
       Cadastre-se
      </Text>
      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={setNome}
        placeholder="Nome"
      />
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="E-mail"
      />
      <TextInput
        style={styles.input}
        value={senha}
        onChangeText={setSenha}
        placeholder="Senha"
        secureTextEntry={true}
      />
      <TextInput
        style={styles.input}
        value={description}
        onChangeText={setDescription}
        placeholder="Descrição"
      />
      <View style={{ flexDirection: 'row' }}>
        <TextInput
          style={[styles.input, { width: '20%', marginRight: 5 }]}
          value={birthDate.day}
          onChangeText={(text) => handleBirthDateChange(text, 'day')}
          placeholder="DD"
        />
        <TextInput
          style={[styles.input, { width: '20%', marginRight: 5 }]}
          value={birthDate.month}
          onChangeText={(text) => handleBirthDateChange(text, 'month')}
          placeholder="MM"
        />
        <TextInput
          style={[styles.input, { width: '30%' }]}
          value={birthDate.year}
          onChangeText={(text) => handleBirthDateChange(text, 'year')}
          placeholder="YYYY"
        />
      </View>
      <TextInput
        style={styles.input}
        value={gender}
        onChangeText={setGender}
        placeholder="Gênero"
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit} disabled={isLoading}>
        {isLoading ? (
          <ActivityIndicator color="white" />
        ) : (
          <Text style={styles.buttonText}>Criar Conta</Text>
        )}
      </TouchableOpacity>
      <Text>Já tem uma conta? <Text style={{ color: "#1d9bf0" }} onPress={() => navigation.navigate('LoginPage')}>Faça Login</Text></Text>
    </View>
  );
};

export default CadastroUsuario;
