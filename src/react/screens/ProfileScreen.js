import React from 'react';
import { View, StyleSheet, Image, ScrollView } from 'react-native';
import { Text, Appbar, Button } from 'react-native-paper';

const ProfileScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <Appbar.Header style={styles.header}>
        <Appbar.Content title="Profile" titleStyle={styles.headerTitle} />
      </Appbar.Header>
      <View style={styles.profileContainer}>
        <Image
          source={{ uri: 'https://via.placeholder.com/150' }}
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>John Doe</Text>
        <Text style={styles.username}>@johndoe</Text>
        <View style={styles.followContainer}>
          <View style={styles.followInfo}>
            <Text style={styles.followCount}>150</Text>
            <Text>Seguidores</Text>
          </View>
          <View style={styles.followInfo}>
            <Text style={styles.followCount}>180</Text>
            <Text>Seguindo</Text>
          </View>
        </View>
        <Button 
          mode="contained" 
          style={styles.editButton} 
          buttonColor="#1E3A8A" // Azul naval
          onPress={() => navigation.navigate('ProfileEditPage')}
        >
          Editar Perfil
        </Button>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0', // Fundo cinza claro
  },
  header: {
    backgroundColor: '#424242', // Fundo cinza escuro
  },
  headerTitle: {
    color: '#FFFFFF', // Texto branco
  },
  profileContainer: {
    alignItems: 'center',
    padding: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  username: {
    fontSize: 18,
    color: 'gray',
    marginBottom: 20,
  },
  followContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
    marginBottom: 20,
  },
  followInfo: {
    alignItems: 'center',
  },
  followCount: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  editButton: {
    marginTop: 20,
  },
});

export default ProfileScreen;
