import React, { useState } from "react";
import { StyleSheet, View, TouchableWithoutFeedback, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontFamily } from "../GlobalStyles";
import SideClosedMenu from "../components/sideClosedMenu";
import SideOpenedMenu from "../components/sideOpenedMenu"; // Importar o SideOpenedMenu
import CommunitySearch from "../components/CommunitySearch";
import { useNavigation } from '@react-navigation/native';


const PaginaInicial = () => {
  const [menuAberto, setMenuAberto] = useState(false);
  const [selectedCircle, setSelectedCircle] = useState(null); // Estado para acompanhar o círculo selecionado

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  const closeMenu = () => {
    if (menuAberto) {
      setMenuAberto(false);
    }
  };

  const handleCirclePress = (index) => {
    setSelectedCircle(index); // Define o índice do círculo selecionado
  };

  const navigation = useNavigation();
  const handleConfigComunidade = () => {
    navigation.navigate('ConfigComunidade');
  };


  return (
    <TouchableWithoutFeedback onPress={closeMenu}>
      <View style={styles.paginaInicial}>
        <View style={styles.fundo} />
        <View style={styles.publicacoes}>
          <View style={[styles.publiEx3, styles.publiLayout1]}>
            <View style={[styles.publiEx31, styles.publiBg]} />
          </View>
          <View style={[styles.publiEx2, styles.publiLayout]}>
            <View style={[styles.publiEx21, styles.publiLayout]} />
          </View>
          <View style={styles.publiPosition}>
            <View style={[styles.publiEx11, styles.publiPosition]} />
          </View>
        </View>
        <View style={styles.menuHorizontalGrupos}>
          <TouchableOpacity onPress={handleConfigComunidade}>
            <Image
              style={[styles.supportIcon, styles.supportIconLayout]}
              contentFit="cover"
              source={require("../assets/support.png")}
            />
          </TouchableOpacity>
          <View style={[styles.grupo4Parent, styles.supportIconLayout]}>
            <View style={styles.grupoContainer}>
              {[0, 1, 2, 3,].map((index) => (
                <TouchableWithoutFeedback key={index} onPress={() => handleCirclePress(index)}>
                  <View
                    style={[styles.grupoCircle, selectedCircle === index && styles.selectedCircle, // Adiciona a borda amarela se selecionado
                    ]}
                  />
                </TouchableWithoutFeedback>
              ))}
            </View>
          </View>
        </View>
        {menuAberto ? (
          <SideOpenedMenu toggleMenu={toggleMenu} />
        ) : (
          <SideClosedMenu toggleMenu={toggleMenu} />
        )}
        <View>
          <CommunitySearch />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  publiLayout1: {
    height: 169,
    left: 0,
    width: 299,
    position: "absolute",
  },
  publiBg: {
    backgroundColor: Color.colorLightgray_100,
    borderRadius: Border.br_mini,
  },
  publiLayout: {
    height: 278,
    left: 0,
    width: 299,
    position: "absolute",
  },
  publiPosition: {
    height: 200,
    left: 0,
    width: 299,
    top: 0,
    position: "absolute",
  },
  supportIconLayout: {
    height: 40,
    position: "absolute",
  },
  grupoLayout: {
    height: 35,
    width: 37,
    position: "absolute",
  },
  grupo2Position: {
    borderRadius: Border.br_21xl,
    left: 0,
    top: 0,
  },
  grupoPosition: {
    width: 42,
    left: "50%",
    height: 40,
    top: 0,
    position: "absolute",
  },
  rectangleLayout: {
    height: 28,
    width: 299,
    position: "absolute",
  },
  menuPosition: {
    width: 55,
    left: 0,
    height: 843,
    top: 0,
    position: "absolute",
  },
  perfilLayout: {
    height: 30,
    width: 30,
    position: "absolute",
  },
  fundo: {
    left: 55,
    backgroundColor: "#2b2d31",
    width: 359,
    height: 843,
    top: 0,
    position: "absolute",
  },
  publiEx31: {
    height: 169,
    left: 0,
    width: 299,
    position: "absolute",
    top: 0,
  },
  publiEx3: {
    top: 512,
  },
  publiEx21: {
    backgroundColor: Color.colorLightgray_100,
    borderRadius: Border.br_mini,
    top: 0,
  },
  publiEx2: {
    top: 217,
  },
  publiEx11: {
    backgroundColor: Color.colorLightgray_100,
    borderRadius: Border.br_mini,
  },
  publicacoes: {
    top: 162,
    height: 681,
    width: 299,
    left: 70,
    position: "absolute",
  },
  supportIcon: {
    left: 240,
    width: 30,
    height: 40,
    top: 1,
  },
  grupo4Parent: {
    top: 1,
    width: 216,
    left: 0,
  },
  menuHorizontalGrupos: {
    top: 110,
    left: 95,
    width: 297,
    height: 50,
    position: "absolute",
  },
  paginaInicial: {
    flex: 1,
    width: "100%",
    height: 882,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  grupoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 216,
    alignItems: "center",
  },
  grupoCircle: {
    width: 43,
    height: 43,
    borderRadius: 43 / 2, // Define o círculo
    backgroundColor: Color.colorDarkgray,
  },
  selectedCircle: {
    borderWidth: 2, // Adiciona a borda
    borderColor: 'gold', // Define a cor da borda como amarelo
  },
});

export default PaginaInicial;
