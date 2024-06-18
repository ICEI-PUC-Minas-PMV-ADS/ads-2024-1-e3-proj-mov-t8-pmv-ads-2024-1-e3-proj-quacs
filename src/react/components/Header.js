import React from 'react';
import { StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const Header = ({ title, goBack, children }) => {
  const navigation = useNavigation();
  const { isDarkMode } = useTheme();

  const goToProfile = () => {
    navigation.navigate('Profile');
  };

  const goToSettings = () => {
    navigation.navigate('Settings');
  };

  const goToHome = () => {
    navigation.navigate('Home');
  };

  return (
    <Appbar.Header style={[styles.header, isDarkMode && styles.darkHeader]}>
      {goBack && <Appbar.BackAction onPress={goToHome} />}
      <Appbar.Action icon="account" onPress={goToProfile} />
      <Appbar.Content title={title} />
      <Appbar.Action icon="dots-vertical" onPress={goToSettings} />
      {children}
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'gray',
  },
  darkHeader: {
    backgroundColor: '#151926',
  },
});

export default Header;
