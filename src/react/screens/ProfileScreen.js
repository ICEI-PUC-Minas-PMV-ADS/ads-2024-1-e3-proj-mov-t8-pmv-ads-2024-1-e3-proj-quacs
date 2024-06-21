import React from "react";
import { View, StyleSheet } from "react-native";
import { Appbar, Avatar, Text, Title, Subheading } from "react-native-paper";

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.header}>
        <Avatar.Icon
          size={100}
          icon="account"
          color="#FFFFFF"
          style={styles.avatar}
        />
        <View style={styles.infoContainer}>
          <View style={styles.nameContainer}>
            <Title style={styles.profileName}>Nome do Perfil</Title>
            <Subheading style={styles.username}>@usuario</Subheading>
          </View>

          <View style={styles.followInfo}>
            <View style={styles.followBlock}>
              <Text style={styles.followNumber}>150</Text>
              <Text style={styles.followLabel}>Seguidores</Text>
            </View>
            <View style={styles.followBlock}>
              <Text style={styles.followNumber}>100</Text>
              <Text style={styles.followLabel}>Seguindo</Text>
            </View>
          </View>
        </View>
      </Appbar.Header>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D3D3D3",
  },
  header: {
    backgroundColor: "#333",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: 0,
  },
  avatar: {
    backgroundColor: "#00008B", // Azul escuro
  },
  infoContainer: {
    alignItems: "center",
  },
  nameContainer: {
    alignItems: "center",
  },
  username: {
    fontSize: 18,
    color: "#000000", // Preto
  },
  profileName: {
    fontWeight: "bold",
    fontSize: 24,
    marginTop: 10,
    color: "#000000", // Preto
  },
  followInfo: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "60%",
    marginTop: 10,
  },
  followBlock: {
    alignItems: "center",
  },
  followNumber: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#000000", // Preto
  },
  followLabel: {
    fontSize: 14,
    color: "#000000", // Preto
  },
});

export default ProfileScreen;
