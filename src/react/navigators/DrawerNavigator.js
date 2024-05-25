import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import Bottom from '../navigators/BottomNavigator';
import ProfileScreen from '../screens/ProfileScreen';

const Drawer = createDrawerNavigator();

function CustomDrawerContent({ profileData, ...props }) {
  const { username, accountName, followers, following } = profileData;

  return (
    <DrawerContentScrollView {...props} style={styles.drawerContent}>
      <View style={styles.profileContainer}>
        <Image
          source={require('../assets/imgs/userImage.jpg')}
          style={styles.userImage}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.accountName}>{accountName}</Text>
          <Text style={styles.username}>{username}</Text>
          <View style={styles.followInfo}>
            <Text style={styles.following}>{following} Following</Text>
            <Text style={styles.followers}>{followers} Followers</Text>
          </View>
        </View>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    backgroundColor: '#c5cfe3',
    flex: 1,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  profileInfo: {
    justifyContent: 'center',
    marginLeft: 10,
  },
  username: {
    color: 'gray',
  },
  accountName: {
    fontWeight: 'bold',
    color: 'black',
  },
  followInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  followers: {
    marginRight: 10,
    color: 'gray',
  },
  following: {
    color: 'gray',
  },
});

function DrawerNavigator() {
  const profileData = {
    accountName: 'John Doe',
    username: '@username',
    bio: 'This is my bio',
    followers: 100,
    following: 50,
  };

  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={(props) => (
          <CustomDrawerContent {...props} profileData={profileData} />
        )}
        screenOptions={{
          drawerStyle: {
            backgroundColor: 'gray', // Set the drawer background color to gray
          },
        }}>
        <Drawer.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="person" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Home"
          component={Bottom}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="home" size={size} color={color} />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default DrawerNavigator;
