import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Color } from "../GlobalStyles";

const Logo = () => {
  return (
    <View>
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={require("../assets/rubber-duck.png")}
        />
        <Text style={styles.headerText}>Connect to Quac</Text>
      </View>
      <View style={styles.thumbnail}>
        <Image
          style={styles.thumbnailImage}
          source={require("../assets/bi4ckowe-1.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    position: "absolute",
    top: 226,
    left: 91,
    alignItems: "center",
  },
  logo: {
    width: 30,
    height: 24,
  },
  headerText: {
    fontSize: 26,
    color: Color.colorGray,
  },
  thumbnail: {
    position: "absolute",
    top: 26,
    left: 0,
    width: 414,
    height: 187,
    backgroundColor: "#2978bb",
    alignItems: "center",
    justifyContent: "center",
  },
  thumbnailImage: {
    width: 240,
    height: 145,
  },
});

export default Logo;
