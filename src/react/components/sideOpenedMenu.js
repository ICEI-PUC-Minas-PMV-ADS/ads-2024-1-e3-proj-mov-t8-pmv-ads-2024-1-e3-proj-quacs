import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from '@react-navigation/native'; 
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const SideOpenedMenu = ({ toggleMenu }) => {
  const navigation = useNavigation(); 
  const handleLogout = () => {
    navigation.navigate('LoginPage');
  };
  const handleProfile = () => {
    navigation.navigate('ProfileScreen');
  };
  const handleSettings = () => {
    navigation.navigate('SettingsScreen');
  };

  return (
    <View style={styles.abertoLayout}>
      <View style={styles.molduraPerfil} />
      <TouchableOpacity onPress={toggleMenu} style={styles.perfil}>
        <Image
          style={styles.fotoPerfilIcon}
          source={require("../assets/foto-perfil.png")}
        />
      </TouchableOpacity>
      <Text style={styles.nomeDeUsurio}>Nome de Usuário</Text>
      <Image
        style={styles.linhaDeDivisao}
        source={require("../assets/linha-de-divisao.png")}
      />
      <View style={styles.acoesMenuAberto}>
      <TouchableOpacity onPress={handleProfile}>
        <Image
          style={styles.iconePerfil}
          source={require("../assets/icone-perfil.png")}
        />
          <Text style={styles.editarPerfil}>Profile</Text>
          </TouchableOpacity>
        <Image
          style={styles.iconeComunidades}
          source={require("../assets/icone-grupos.png")}
        />
        <Text style={styles.comunidades}>Comunidades</Text>

        <TouchableOpacity onPress={handleSettings}>
        <Image
          style={styles.iconeConfiguracoes}
          source={require("../assets/configuracoes.png")}
        />
        <Text style={styles.configuraes}>Configurações</Text>
        </TouchableOpacity>
        
      </View>
      <TouchableOpacity onPress={handleLogout}>
        <Text style={styles.desconectar}>Desconectar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  perfilPosition: {
    left: 0,
    top: 0,
  },
  perfilLayout: {
    height: 76,
    width: 76,
    position: "absolute",
  },
  linhaDeDivisaoPosition: {
    left: 12,
    position: "absolute",
  },
  comunidadesLayout: {
    width: 103,
    height: 22,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.notoSansRegular,
    lineHeight: 20,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  fundoPerfilAberto: {
    height: 843,
    width: 190,
    position: "absolute",
  },
  molduraPerfil: {
    borderRadius: Border.br_21xl,
    left: 0,
    top: 0,
  },
  fotoPerfilIcon: {
    top: 40,
    left: 60,
    borderRadius: Border.br_71xl,
    width: 58,
    height: 55,
    position: "absolute",
  },
  perfil: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  nomeDeUsurio: {
    top: 110,
    left: 28,
    height: 15,
    width: 134,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.notoSansRegular,
    lineHeight: 20,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  linhaDeDivisao: {
    top: 161,
    width: 167,
    left: 10,
    height: 1,
    position: "absolute",
  },
  iconePerfil: {
    width: 22,
    height: 22,
    left: 0,
    top: 0,
    position: "absolute",
  },
  iconeComunidades: {
    width: 28,
    height: 28,
    left: -5,
    top: 28,
    position: "absolute",
  },
  iconeConfiguracoes: {
    width: 24,
    height: 24,
    left: -2,
    top: 63,
    position: "absolute",
  },
  editarPerfil: {
    left: 31,
    width: 103,
    top: 0,
    position: "absolute",
  },
  comunidades: {
    top: 35,
    left: 31,
    width: 103,
    position: "absolute",
  },
  configuraes: {
    top: 67,
    left: 31,
    width: 103,
    position: "absolute",
  },
  acoesMenuAberto: {
    top: 211,
    left: 20,
    height: 89,
    width: 134,
    position: "absolute",
  },
  desconectar: {
    top: 770,
    left: 55,
    position: "absolute",
  },
  abertoLayout: {
    height: 843,
    width: 192,
    position: "absolute",
    backgroundColor: "#C1C1C1",
  },
});

export default SideOpenedMenu;
