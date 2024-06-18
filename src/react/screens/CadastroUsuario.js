import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ActivityIndicator } from 'react-native';
import { Image } from 'react-native';
import { Color, FontFamily, FontSize, Border } from '../GlobalStyles'; // Supondo que você tenha um arquivo de estilos globais

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: Color.colorWhite, 
  },
  header: {
    alignItems: 'center',
    backgroundColor: '#2878bb',
    width: '100%',
    height: 170,
    padding: 20,
    marginBottom: 20,
  },
  logo: {
    width: 200,
    height: 130,
  },
  title: {
    marginBottom: 20,
    fontSize: FontSize.size_mid,
    color: '#333333',
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: Color.colorLightgray,
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 4,
    backgroundColor: '#f7f7f7',
  },
  button: {
    backgroundColor: Color.colorGray,
    alignItems: 'center',
    width: 300,
    padding: 10,
    borderRadius: Border.br_9980xl,
    marginBottom: 10,
  },
  buttonText: {
    color: Color.colorWhite,
    fontSize: FontSize.size_mini,
  },
  linkText: {
    color: '#1d9bf0',
    fontSize: FontSize.size_mini,
  },
  birthDateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  birthDateInput: {
    flex: 1,
    marginRight: 5,
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
        Alert.alert('Erro', errorData || 'Ocorreu um erro ao criar a conta.');
      }
    } catch (error) {
      Alert.alert('Erro', 'Ocorreu um erro ao conectar com o servidor.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../assets/logo.png')} 
          style={styles.logo} 
        />
      </View>
      <Text style={styles.title}>Cadastre-se</Text>
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
        keyboardType="email-address"
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
      <View style={styles.birthDateContainer}>
        <TextInput
          style={[styles.input, styles.birthDateInput]}
          value={birthDate.day}
          onChangeText={(text) => handleBirthDateChange(text, 'day')}
          placeholder="DD"
        />
        <TextInput
          style={[styles.input, styles.birthDateInput]}
          value={birthDate.month}
          onChangeText={(text) => handleBirthDateChange(text, 'month')}
          placeholder="MM"
        />
        <TextInput
          style={[styles.input, { flex: 2 }]}
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
          <ActivityIndicator color={Color.colorWhite} />
        ) : (
          <Text style={styles.buttonText}>Criar Conta</Text>
        )}
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('LoginPage')}>
        <Text style={styles.linkText}>Já tem uma conta? Faça Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CadastroUsuario;
