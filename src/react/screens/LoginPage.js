import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Image } from "expo-image";
import axios from "axios";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

import Logo from "../components/Logo";
const LoginPage = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "https://quacsapi.azurewebsites.net/login",
        { email, password }
      );
      console.log(response.data);
      navigation.navigate("HomePage");
    } catch (error) {
      console.error("Erro ao Logar!", error);
      Alert.alert("Credencial Inválida!");
    }
  };

  const handlePasswordForgot = () => {
    navigation.navigate("PasswordForgot");
  };

  return (
    <View style={styles.loginPage}>
      <Logo />
      <View style={styles.contentLogin}>
        <TouchableOpacity style={styles.googleButton}>
          <Image
            style={styles.googleIcon}
            source={require("../assets/google.png")}
          />
          <Text style={styles.googleButtonText}>Cadastre-se com o Google</Text>
        </TouchableOpacity>
        <View style={styles.orContainer}>
          <View style={styles.divider} />
          <Text style={styles.orText}>ou</Text>
          <View style={styles.divider} />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="E-mail"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Senha"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handlePasswordForgot}
          style={styles.linkButton}
        >
          <Text style={styles.linkButtonText}>Esqueceu a senha?</Text>
        </TouchableOpacity>
        <View style={styles.signUpContainer}>
          <Text style={styles.signUpText}>Ainda não é usuário?</Text>
          <Text
            style={styles.signUpLink}
            onPress={() => navigation.navigate("CadastroUsuario")}
          >
            Cadastre-se
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loginPage: {
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
  contentLogin: {
    marginHorizontal: 57,
    marginTop: 300,
  },
  orContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: Color.colorLightgray,
  },
  orText: {
    marginHorizontal: 8,
    fontSize: FontSize.size_mid,
    color: Color.colorGray,
  },
  inputContainer: {
    marginBottom: 16,
    borderWidth: 1,
    borderColor: Color.colorLightgray,
    borderRadius: 4,
    padding: 10,
  },
  input: {
    fontSize: FontSize.size_mid,
    color: Color.colorDimgray,
  },
  button: {
    backgroundColor: Color.colorGray,
    borderRadius: Border.br_9980xl,
    paddingVertical: 10,
    alignItems: "center",
    marginBottom: 16,
  },
  buttonText: {
    color: Color.colorWhite,
    fontSize: FontSize.size_mini,
    textAlign: "center",
  },
  linkButton: {
    alignItems: "center",
    marginBottom: 16,
  },
  linkButtonText: {
    color: Color.colorGray,
    fontSize: FontSize.size_mini,
  },
  signUpContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 16,
  },
  signUpText: {
    color: Color.colorDimgray,
    fontSize: FontSize.size_mini,
  },
  signUpLink: {
    marginLeft: 4,
    color: "#1d9bf0",
    fontSize: FontSize.size_mini,
  },
  googleButton: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: Color.colorLightgray,
    borderRadius: Border.br_9980xl,
    padding: 10,
  },
  googleIcon: {
    width: 27,
    height: 29,
    marginRight: 10,
  },
  googleButtonText: {
    color: Color.colorGray,
    fontSize: FontSize.size_mini,
  },
});

export default LoginPage;
