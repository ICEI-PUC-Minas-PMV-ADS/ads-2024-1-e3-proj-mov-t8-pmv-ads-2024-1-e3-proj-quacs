import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import Body from '../assets/Body';

const ProfilScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Body>
        <View style={styles.profileInfo}>
          <Text style={styles.accountName}>John Doe</Text>
          <Image
            source={require('src\react\assets\foto-perfil.png')}
            style={styles.profilePicture}
          />
          <Text style={styles.username}>@username</Text>
          <Text style={styles.bio}>This is my bio</Text>
          <View style={styles.followCounts}>
            <Text style={styles.followText}>Followers: 100</Text>
            <Text style={styles.followText}>Following: 50</Text>
          </View>
        </View>
        <View style={styles.tweetsContainer}>
          <Text style={styles.sectionTitle}>Tweets</Text>
          {/* Placeholder tweets */}
          <View style={styles.tweet}>
            <Text>This is a tweet</Text>
          </View>
          <View style={styles.tweet}>
            <Text>This is another tweet</Text>
          </View>
        </View>
      </Body>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  profileInfo: {
    alignItems: 'center',
    padding: 20,
  },
  accountName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  profilePicture: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  username: {
    fontSize: 20,
    marginTop: 10,
  },
  bio: {
    fontSize: 16,
    marginTop: 10,
    textAlign: 'center',
  },
  followCounts: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  followText: {
    fontSize: 16,
    color: '#888',
  },
  tweetsContainer: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  tweet: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
});

export default ProfilScreen;
