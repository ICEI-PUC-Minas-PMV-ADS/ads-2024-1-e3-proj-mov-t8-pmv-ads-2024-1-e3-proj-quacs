import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const LoginPage = () => {
  return (
    <View style={styles.loginPage}>
      <View style={styles.appTopBar}>
        <View style={[styles.appTopBar1, styles.appLayout]} />
        <View style={[styles.exit, styles.orLayout]}>
          <View style={[styles.appTopBar2, styles.appLayout]} />
          <Image
            style={styles.groupIcon}
            contentFit="cover"
            source={require("../assets/group.png")}
          />
        </View>
      </View>
      <View style={styles.contentLogin}>
        <View style={[styles.or, styles.orLayout]}>
          <View style={[styles.rectangle, styles.rectangleLayout1]} />
          <View style={[styles.rectangle1, styles.rectangleLayout1]} />
          <Text style={[styles.ou, styles.ouTypo]}>ou</Text>
        </View>
        <View style={[styles.mail, styles.mailLayout]}>
          <View style={[styles.rectangle2, styles.rectangleBorder]} />
          <Text style={[styles.digiteSeuEMail, styles.ouTypo]}>
            Digite seu e-mail
          </Text>
        </View>
        <View style={[styles.next, styles.rectangleLayout]}>
          <View style={[styles.rectangle3, styles.rectangleLayout]} />
          <Text style={[styles.avanar, styles.avanarTypo]}>Avançar</Text>
        </View>
        <View style={[styles.passwordRecovery, styles.rectangleLayout]}>
          <View style={[styles.rectangle4, styles.rectangleLayout]} />
          <Text style={[styles.esqueceuSuaSenha, styles.avanarTypo]}>
            Esqueceu sua senha?
          </Text>
        </View>
        <View style={[styles.sign, styles.orLayout]}>
          <Text style={[styles.noTemUma, styles.noTemUmaTypo]}>
            Não tem uma conta?
          </Text>
          <Text style={[styles.inscrevaSe, styles.noTemUmaTypo]}>
            Inscreva-se
          </Text>
        </View>
        <View style={styles.rectangle5Position}>
          <View style={[styles.rectangle5, styles.rectangle5Position]} />
          <Text style={[styles.entrarComGoogle, styles.avanarTypo]}>
            Entrar com Google
          </Text>
          <Image
            style={[styles.googleIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/google.png")}
          />
        </View>
      </View>
      <View style={[styles.appName, styles.appNameLayout]}>
        <Image
          style={[styles.rubberDuckIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/rubber-duck.png")}
        />
        <Text style={[styles.conectarAoQuac, styles.appNameLayout]}>
          Conectar ao Quac
        </Text>
      </View>
      <View style={[styles.thumbnail, styles.thumbnailLayout]}>
        <View style={[styles.thumbnailChild, styles.thumbnailLayout]} />
        <Image
          style={styles.bi4ckowe1Icon}
          contentFit="cover"
          source={require("../assets/bi4ckowe-1.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  appLayout: {
    backgroundColor: Color.colorDarkgray,
    height: 26,
    width: 414,
    position: "absolute",
  },
  orLayout: {
    height: 20,
    position: "absolute",
  },
  rectangleLayout1: {
    height: 1,
    width: 128,
    backgroundColor: Color.colorLightgray,
    top: 9,
    position: "absolute",
  },
  ouTypo: {
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
  },
  mailLayout: {
    height: 58,
    width: 300,
    left: 0,
    position: "absolute",
  },
  rectangleBorder: {
    borderWidth: 1,
    borderColor: Color.colorLightgray,
    borderStyle: "solid",
  },
  rectangleLayout: {
    height: 36,
    width: 300,
    left: 0,
    position: "absolute",
  },
  avanarTypo: {
    textAlign: "center",
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.robotoRegular,
    lineHeight: 20,
    position: "absolute",
  },
  noTemUmaTypo: {
    fontSize: FontSize.size_mini,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    lineHeight: 20,
    top: 0,
    position: "absolute",
  },
  rectangle5Position: {
    height: 40,
    width: 300,
    left: 0,
    top: 0,
    position: "absolute",
  },
  iconPosition: {
    top: 6,
    position: "absolute",
  },
  appNameLayout: {
    width: 246,
    position: "absolute",
  },
  thumbnailLayout: {
    height: 187,
    width: 414,
    left: 0,
    position: "absolute",
  },
  appTopBar1: {
    left: 0,
    top: 0,
  },
  appTopBar2: {
    top: -3,
    left: -5,
  },
  groupIcon: {
    height: "62%",
    width: "62%",
    top: "19%",
    right: "19%",
    bottom: "19%",
    left: "19%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  exit: {
    top: 3,
    left: 5,
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  appTopBar: {
    height: 26,
    width: 414,
    left: 0,
    top: 0,
    position: "absolute",
  },
  rectangle: {
    left: 0,
  },
  rectangle1: {
    left: 164,
  },
  ou: {
    left: 136,
    color: Color.colorGray,
    lineHeight: 20,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_mid,
    width: 20,
    top: 0,
    position: "absolute",
  },
  or: {
    top: 52,
    width: 292,
    left: 0,
  },
  rectangle2: {
    borderRadius: 4,
    height: 58,
    width: 300,
    left: 0,
    position: "absolute",
    top: 0,
  },
  digiteSeuEMail: {
    top: 17,
    left: 9,
    lineHeight: 24,
    width: 271,
    color: Color.colorDimgray,
    fontSize: FontSize.size_mid,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    position: "absolute",
  },
  mail: {
    top: 84,
  },
  rectangle3: {
    backgroundColor: Color.colorGray,
    borderRadius: Border.br_9980xl,
    top: 0,
  },
  avanar: {
    left: 120,
    color: Color.colorWhite,
    width: 59,
    top: 8,
    textAlign: "center",
  },
  next: {
    top: 170,
  },
  rectangle4: {
    borderRadius: Border.br_9980xl,
    borderWidth: 1,
    borderColor: Color.colorLightgray,
    borderStyle: "solid",
    top: 0,
  },
  esqueceuSuaSenha: {
    left: 73,
    width: 153,
    top: 8,
    textAlign: "center",
    color: Color.colorGray,
  },
  passwordRecovery: {
    top: 230,
  },
  noTemUma: {
    width: 145,
    color: Color.colorDimgray,
    left: 0,
  },
  inscrevaSe: {
    left: 145,
    color: "#1d9bf0",
    width: 81,
  },
  sign: {
    top: 318,
    width: 226,
    left: 0,
  },
  rectangle5: {
    borderRadius: Border.br_9980xl,
    borderWidth: 1,
    borderColor: Color.colorLightgray,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
  },
  entrarComGoogle: {
    top: 10,
    left: 100,
    width: 125,
    color: Color.colorGray,
  },
  googleIcon: {
    left: 64,
    width: 27,
    height: 29,
  },
  contentLogin: {
    top: 356,
    left: 57,
    height: 338,
    width: 300,
    position: "absolute",
  },
  rubberDuckIcon: {
    left: 204,
    width: 30,
    height: 24,
  },
  conectarAoQuac: {
    fontSize: 26,
    lineHeight: 32,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    color: Color.colorGray,
    left: 0,
    top: 0,
  },
  appName: {
    top: 226,
    left: 91,
    height: 32,
  },
  thumbnailChild: {
    backgroundColor: "#2978bb",
    top: 0,
  },
  bi4ckowe1Icon: {
    top: 12,
    left: 82,
    width: 240,
    height: 145,
    position: "absolute",
  },
  thumbnail: {
    top: 26,
  },
  loginPage: {
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default LoginPage;
