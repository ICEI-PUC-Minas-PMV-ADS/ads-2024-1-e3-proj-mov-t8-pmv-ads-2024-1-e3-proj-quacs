import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontFamily } from "../GlobalStyles";

const PaginaInicial = () => {
  return (
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
      <View style={[styles.menuHorizontalGrupos, styles.perfilLateralLayout]}>
        <Image
          style={styles.supportIcon}
          contentFit="cover"
          source={require("../assets/support.png")}
        />
        <View style={[styles.grupo5, styles.grupoLayout]}>
          <View style={[styles.grupo2, styles.grupo2Position]} />
        </View>
        <View style={[styles.grupo4, styles.grupoLayout]}>
          <View style={[styles.grupo2, styles.grupo2Position]} />
        </View>
        <View style={[styles.grupo3, styles.grupoPosition]}>
          <View style={[styles.grupoSelected1, styles.grupoPosition]} />
          <View style={styles.grupo1} />
        </View>
        <View style={[styles.grupo22, styles.grupoLayout]}>
          <View style={[styles.grupo2, styles.grupo2Position]} />
        </View>
        <View style={[styles.grupo11, styles.grupoPosition]}>
          <View style={[styles.grupoSelected1, styles.grupoPosition]} />
          <View style={styles.grupo1} />
        </View>
      </View>
      <View style={[styles.buscaComunidade, styles.rectangleLayout]}>
        <View style={[styles.rectangle, styles.rectangleLayout]} />
        <Text style={styles.busqueUmaNova}>Busque uma nova comunidade</Text>
      </View>
      <View style={styles.menuPosition}>
        <View style={[styles.fundoMenuLateral, styles.menuPosition]} />
        <Image
          style={styles.configuraesIcon}
          contentFit="cover"
          source={require("../assets/configuraes.png")}
        />
        <Image
          style={styles.iconeGrupos}
          contentFit="cover"
          source={require("../assets/icone-grupos.png")}
        />
        <View style={styles.rectangle1} />
        <View style={[styles.perfil, styles.perfilLayout]}>
          <View style={[styles.iconePerfil, styles.perfilLayout]} />
          <Image
            style={styles.fotoPerfilIcon}
            contentFit="cover"
            source={require("../assets/foto-perfil.png")}
          />
        </View>
        <View style={[styles.perfilLateral, styles.perfilLateralLayout]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  publiLayout1: {
    height: 201,
    left: 0,
    width: 331,
    position: "absolute",
  },
  publiBg: {
    backgroundColor: Color.colorLightgray_100,
    borderRadius: Border.br_mini,
  },
  publiLayout: {
    height: 278,
    left: 0,
    width: 331,
    position: "absolute",
  },
  publiPosition: {
    height: 200,
    left: 0,
    width: 331,
    top: 0,
    position: "absolute",
  },
  perfilLateralLayout: {
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
    width: 331,
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
    height: 201,
    left: 0,
    width: 331,
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
    top: 130,
    height: 713,
    width: 331,
    left: 70,
    position: "absolute",
  },
  supportIcon: {
    left: 292,
    width: 37,
    height: 40,
    top: 0,
    position: "absolute",
  },
  grupo2: {
    height: 35,
    width: 37,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  grupo5: {
    left: 236,
    top: 3,
    height: 35,
  },
  grupo4: {
    left: 180,
    top: 3,
    height: 35,
  },
  grupoSelected1: {
    marginLeft: -20.9,
    borderRadius: Border.br_6xl,
    backgroundColor: Color.colorSteelblue,
  },
  grupo1: {
    marginTop: -17,
    marginLeft: -18.8,
    top: "50%",
    width: 38,
    height: 34,
    left: "50%",
    borderRadius: Border.br_21xl,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  grupo3: {
    marginLeft: -46.5,
  },
  grupo22: {
    left: 62,
    top: 3,
    height: 35,
  },
  grupo11: {
    marginLeft: -164.5,
  },
  menuHorizontalGrupos: {
    top: 54,
    left: 72,
    width: 329,
  },
  rectangle: {
    borderRadius: Border.br_9xs,
    backgroundColor: "#1e1f22",
    left: 0,
    top: 0,
  },
  busqueUmaNova: {
    top: 2,
    left: 13,
    fontSize: 12,
    lineHeight: 24,
    fontFamily: FontFamily.notoSansRegular,
    color: "#949ba4",
    textAlign: "left",
    width: 217,
    position: "absolute",
  },
  buscaComunidade: {
    top: 10,
    left: 70,
    height: 28,
  },
  fundoMenuLateral: {
    backgroundColor: "#c1c1c1",
  },
  configuraesIcon: {
    height: "2.14%",
    width: "32.73%",
    top: "95.49%",
    right: "34.55%",
    bottom: "2.37%",
    left: "32.73%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  iconeGrupos: {
    top: 74,
    left: 14,
    width: 30,
    height: 28,
    position: "absolute",
  },
  rectangle1: {
    top: 61,
    borderRadius: 1,
    backgroundColor: "rgba(78, 80, 88, 0.48)",
    width: 32,
    height: 2,
    left: 12,
    position: "absolute",
  },
  iconePerfil: {
    backgroundColor: "#f7f7f7",
    borderRadius: Border.br_21xl,
    left: 0,
    top: 0,
  },
  fotoPerfilIcon: {
    top: 4,
    left: 3,
    borderRadius: 90,
    width: 23,
    height: 22,
    position: "absolute",
  },
  perfil: {
    top: 20,
    left: 12,
  },
  perfilLateral: {
    top: 16,
    borderTopRightRadius: Border.br_9xs,
    borderBottomRightRadius: Border.br_9xs,
    backgroundColor: "#f2f3f5",
    width: 4,
    left: 0,
  },
  paginaInicial: {
    flex: 1,
    width: "100%",
    height: 882,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default PaginaInicial;
