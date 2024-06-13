import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const ProfileEditPage = () => {
  return (
    <View style={styles.profileeditpage}>
      <View style={[styles.profileedit, styles.profileeditLayout]}>
        <View style={[styles.editarPerfilWrapper, styles.profileeditLayout]}>
          <Text style={[styles.editarPerfil, styles.gneroTypo]}>
            Editar Perfil
          </Text>
        </View>
      </View>
      <View style={styles.backgroudprofilePosition}>
        <View
          style={[
            styles.backgroudprofileChild,
            styles.backgroudprofilePosition,
          ]}
        />
        <Image
          style={styles.profileselfieIcon}
          contentFit="cover"
          source={require("../assets/foto-perfil.png")}
        />
      </View>
      <View style={[styles.description, styles.rectangle5Layout]}>
        <View style={[styles.rectangle5, styles.rectangle5Layout]} />
        <Text style={[styles.descrio, styles.nomeTypo]}>Descrição</Text>
      </View>
      <View style={[styles.name, styles.nameLayout]}>
        <View style={[styles.rectangle1, styles.rectangleBorder]} />
        <Text style={[styles.nome, styles.nomeTypo]}>Nome</Text>
      </View>
      <View style={[styles.password, styles.nameLayout]}>
        <View style={[styles.rectangle1, styles.rectangleBorder]} />
        <Text style={[styles.gnero, styles.gneroTypo]}>Senha</Text>
      </View>
      <View style={[styles.birthdate, styles.nameLayout]}>
        <View style={[styles.rectangle1, styles.rectangleBorder]} />
        <Text style={[styles.gnero, styles.gneroTypo]}>Data de nascimento</Text>
      </View>
      <View style={[styles.gender, styles.nameLayout]}>
        <View style={[styles.rectangle1, styles.rectangleBorder]} />
        <Text style={[styles.gnero, styles.gneroTypo]}>Gênero</Text>
      </View>
      <View style={styles.save}>
        <View style={styles.rectanglePosition}>
          <View style={[styles.rectangle, styles.rectanglePosition]} />
          <Text style={styles.salvar}>Salvar</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rectanglePosition: {
    left: 0,
    top: 0,
    height: 36,
    width: 298,
    position: "absolute",
  },
  nameLayout: {
    height: 58,
    width: 340,
    position: "absolute",
  },
  rectangleBorder: {
    borderWidth: 1,
    borderColor: Color.colorLightgray,
    borderStyle: "solid",
    borderRadius: Border.br_9xs,
    left: 0,
    top: 0,
  },
  gneroTypo: {
    textAlign: "left",
    position: "absolute",
  },
  nomeTypo: {
    left: 9,
    textAlign: "left",
    color: Color.colorDimgray,
    lineHeight: 24,
    fontSize: FontSize.size_mid,
    position: "absolute",
  },
  rectangle5Layout: {
    height: 157,
    width: 340,
    position: "absolute",
  },
  profileeditLayout: {
    height: 47,
    width: 414,
    left: 10,
    position: "absolute",
  },
  backgroudprofilePosition: {
    height: 187,
    width: 414,
    left: 0,
    top: 0,
    backgroundColor: "#2978BB",
    position: "absolute",
  },
  rectangle: {
    borderRadius: Border.br_9980xl,
    backgroundColor: Color.colorGray,
  },
  salvar: {
    top: 8,
    left: 93,
    fontSize: FontSize.size_mini,
    lineHeight: 20,
    color: Color.colorWhite,
    textAlign: "center",
    width: 114,
    position: "absolute",
  },
  save: {
    top: 760,
    left: 51,
    height: 36,
    width: 298,
    position: "absolute",
  },
  rectangle1: {
    height: 58,
    width: 340,
    position: "absolute",
  },
  gnero: {
    left: 11,
    width: 338,
    color: Color.colorDimgray,
    lineHeight: 24,
    fontSize: FontSize.size_mid,
    textAlign: "left",
    top: 17,
  },
  gender: {
    top: 637,
    left: 20,
  },
  birthdate: {
    top: 561,
    left: 20,
  },
  password: {
    top: 485,
    left: 20,
  },
  nome: {
    width: 275,
    top: 17,
    left: 9,
  },
  name: {
    top: 409,
    left: 20,
  },
  rectangle5: {
    borderWidth: 1,
    borderColor: Color.colorLightgray,
    borderStyle: "solid",
    borderRadius: Border.br_9xs,
    left: 0,
    top: 0,
  },
  descrio: {
    top: 15,
    height: 65,
    width: 338,
  },
  description: {
    top: 234,
    left: 20,
  },
  editarPerfil: {
    marginTop: -15.5,
    marginLeft: -72,
    top: "50%",
    left: "50%",
    fontSize: FontSize.size_7xl,
    lineHeight: 32,
    color: Color.colorGray,
    width: 145,
  },
  editarPerfilWrapper: {
    top: 0,
    height: 47,
    width: 414,
  },
  profileedit: {
    top: 187,
  },
  backgroudprofileChild: {
    backgroundColor: Color.colorSteelblue,
  },
  profileselfieIcon: {
    top: 11,
    left: 104,
    width: 205,
    height: 160,
    position: "absolute",
  },
  profileeditpage: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
  },
});

export default ProfileEditPage;
