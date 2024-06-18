
import React, { useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Text, Button } from 'react-native-paper';

const Profile = () => {
  const user = {
    name: 'Nome de Usuario',
    photo: 'https://via.placeholder.com/150',
    followers: 120,
    following: 150,
  };

  return (
    <View style={styles.container}>
        <View style={styles.profileContainer}>
          <Image source={{ uri: user.photo }} style={styles.profilePhoto} />
          <Text style={styles.name}>{user.name}</Text>
          <View style={styles.followContainer}>
            <Text style={styles.followText}>Seguidores: {user.followers}</Text>
            <Text style={styles.followText}> Seguindo: {user.following}</Text>
          </View>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  profileContainer: {
    alignItems: 'center',
  },
  profilePhoto: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  followContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  followText: {
    fontSize: 16,
  },
});

export default Profile;
