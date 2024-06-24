import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableWithoutFeedback, SafeAreaView, FlatList } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontFamily } from "../GlobalStyles";
import SideClosedMenu from "../components/sideClosedMenu";
import SideOpenedMenu from "../components/sideOpenedMenu";

import PostComponent from "../components/PostComponent";


const MenuHorizontalGrupos = () => (
  <View style={styles.menuHorizontalGrupos}>
    <Image
      style={[styles.supportIcon, styles.supportIconLayout]}
      contentFit="cover"
      source={require("../assets/support.png")}
    />
    <View style={[styles.grupo4Parent, styles.supportIconLayout]}>
      <View style={[styles.grupo4, styles.grupoLayout]}>
        <View style={[styles.grupo2, styles.grupo2Position]} />
      </View>
      <View style={[styles.grupo3, styles.grupoPosition]}>
        <View style={[styles.grupoSelected1, styles.grupoPosition]} />
        <View style={styles.grupo1} />
      </View>
      <View style={[styles.grupo21, styles.grupoLayout]}>
        <View style={[styles.grupo2, styles.grupo2Position]} />
      </View>
      <View style={[styles.grupo11, styles.grupoPosition]}>
        <View style={[styles.grupoSelected1, styles.grupoPosition]} />
        <View style={styles.grupo1} />
      </View>
    </View>
  </View>
);

const BuscaComunidade = () => (
  <View style={[styles.buscaComunidade, styles.rectangleLayout]}>
    <View style={[styles.rectangle, styles.rectangleLayout]} />
    <Text style={styles.busqueUmaNova}>Busque uma nova comunidade</Text>
  </View>
);

const Publicacoes = () => (
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
);

const PaginaInicial = () => {
  const [menuAberto, setMenuAberto] = useState(false);

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  const closeMenu = () => {
    if (menuAberto) {
      setMenuAberto(false);
    }
  };

  const postsData = [
    { id: 1, title: "First Post", body: "This is the body of the first post." },
    { id: 2, title: "Second Post", body: "This is the body of the second post." },
    { id: 3, title: "Third Post", body: "This is the body of the third post." },
  ];

  const renderItem = ({ item }) => <PostComponent post={item} />;

  return (
    <TouchableWithoutFeedback onPress={closeMenu}>
      <View style={styles.paginaInicial}>
        <View style={styles.fundo} />
        <Publicacoes />
        <MenuHorizontalGrupos />
        <BuscaComunidade />
        <SafeAreaView style={styles.postsContainer}>
          <FlatList
            data={postsData}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
          />
        </SafeAreaView>
        {menuAberto ? (
          <SideOpenedMenu toggleMenu={toggleMenu} />
        ) : (
          <SideClosedMenu toggleMenu={toggleMenu} />
        )}
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
    left: 260,
    width: 37,
    height: 40,
    top: 0,
  },
  grupo2: {
    height: 35,
    width: 37,
    position: "absolute",
    backgroundColor: Color.colorWhite,
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
    marginLeft: 9.9,
  },
  grupo21: {
    left: 62,
    top: 3,
    height: 35,
  },
  grupo11: {
    marginLeft: -108.1,
  },
  grupo4Parent: {
    top: 1,
    width: 216,
    left: 0,
  },
  menuHorizontalGrupos: {
    top: 80,
    left: 72,
    width: 297,
    height: 41,
    position: "absolute",
  },
  rectangle: {
    borderRadius: Border.br_9xs,
    backgroundColor: "#1e1f22",
    left: 0,
    top: 0,
  },
  busqueUmaNova: {
    top: 2,
    fontSize: 12,
    lineHeight: 24,
    fontFamily: FontFamily.notoSansRegular,
    color: "#949ba4",
    textAlign: "left",
    width: 211,
    left: 12,
    position: "absolute",
  },
  buscaComunidade: {
    top: 39,
    left: 70,
    height: 28,
  },
  paginaInicial: {
    flex: 1,
    width: "100%",
    height: "100%",
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  postsContainer: {
    flex: 1,
    marginTop: 150, 
    marginLeft: 50,
  },
});

export default PaginaInicial;
