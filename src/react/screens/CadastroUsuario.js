import { StatusBar } from 'expo-status-bar';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Checkbox } from 'react-native-paper'; 
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
  
});
const CadastroUsuario = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [senha, setSenha] = useState('');
  const [lgpdConforme, setLgpdConforme] = useState(false);
  const [marketingConforme, setMarketingConforme] = useState(false);

  const handleSubmit = () => {
    // Aqui você pode enviar os dados para o servidor ou realizar outras operações
    console.log('Dados do usuário:', { nome, email, telefone, senha, lgpdConforme, marketingConforme });
    setNome('');
    setEmail('');
    setTelefone('');
    setSenha('');
    setLgpdConforme(false);
    setMarketingConforme(false);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', fontSize: 50 }}>
      <View style={{ alignItems: 'center', backgroundColor: '#2878bb',width: 400, height: 170, padding: 20, marginBottom: 20 }}>
        <Image
          source={require('./logo.png')} 
          style={{ width: 200, height: 130 }} 
        />
      </View>
      <Text style={{ marginBottom: 20, fontSize: 24 }}>
       Cadastre-se
      </Text>
      <TextInput
        style={{ height: 40, borderColor: '#CFD9DE', borderWidth: 1, width: 300, marginBottom: 15, paddingLeft: 10 }}
        value={nome}
        onChangeText={setNome}
        placeholder="Nome"
      />
      <TextInput
        style={{ height: 40, borderColor: '#CFD9DE', borderWidth: 1, width: 300, marginBottom: 15, paddingLeft: 10 }}
        value={email}
        onChangeText={setEmail}
        placeholder="E-mail"
      />
      <TextInput
        style={{ height: 40, borderColor: '#CFD9DE', borderWidth: 1, width: 300, marginBottom: 15, paddingLeft: 10 }}
        value={telefone}
        onChangeText={setTelefone}
        placeholder="Celular"
      />
      <TextInput
        style={{ height: 40, borderColor: '#CFD9DE', borderWidth: 1, width: 300, marginBottom: 15, paddingLeft: 10 }}
        value={senha}
        onChangeText={setSenha}
        placeholder="Senha"
        secureTextEntry={true}
      />
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
        <Checkbox.Android status={lgpdConforme ? 'checked' : 'unchecked'} onPress={() => setLgpdConforme(!lgpdConforme)} />
        <Text style={{ flex: 1 }}>Li e concordo com os termos de serviço e a política de privacidade.</Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
        <Checkbox.Android status={marketingConforme ? 'checked' : 'unchecked'} onPress={() => setMarketingConforme(!marketingConforme)} />
        <Text style={{ flex: 1 }}>Desejo receber e-mails com conteúdos do aplicativo.</Text>
      </View>
      <TouchableOpacity style={{ backgroundColor: 'black', alignItems: 'center', width: 300, padding: 10, borderRadius: 20, marginBottom: 10 }} onPress={handleSubmit}>
        <Text style={{ color: 'white' }}>Criar Conta</Text>
      </TouchableOpacity>
      <Text>Já tem uma conta? <Text style={{ color: 'blue' }}>Faça Login</Text></Text>
    </View>
    // criar o link no text Ja tem uma conta, faça login
  );
};

export default CadastroUsuario;