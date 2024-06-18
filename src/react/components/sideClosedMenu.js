import React from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { Color, Border } from "../GlobalStyles";

const SideClosedMenu = ({ toggleMenu }) => {
  return (
    <View style={styles.menuPosition}>
        <Image
        style={styles.configuracoesIcon}
          source={require("../assets/configuracoes-home.png")}
        />
        <Image
          style={styles.iconeGrupos}
          source={require("../assets/icone-grupos-home.png")}
        />
        <View style={styles.lineDivision} />
        <TouchableOpacity onPress={toggleMenu} style={styles.perfil}>
          <Image
            style={styles.fotoPerfilIcon}
            source={require("../assets/foto-perfil.png")}
          />
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  menuPosition: {
    width: 55,
    left: 0,
    height: 843,
    top: 0,
    position: "absolute",
    backgroundColor: "rgba(78, 80, 88, 0.48)",
  },
  configuracoesIcon: {
    top: 770,
    left: 12,
    width: 35,
    height: 35,
  },
  iconeGrupos: {
    top: 70,
    left: 7,
    width: 40,
    height: 40,
  },
  lineDivision: {
    position: "absolute",
    top: 79,
    left: 8,
    width: 39,
    height: 1,
    borderTopWidth: 1,
    borderColor: "rgba(78, 80, 88, 0.48)",
    marginTop: 17,
  },
  perfil: {
    position: "absolute",
    top: 30,
    left: 7,
  },
  fotoPerfilIcon: {
    width: 40,
    height: 40,
    top: 15,
    borderRadius: Border.br_9xs,
  },
});

export default SideClosedMenu;
