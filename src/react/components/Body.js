import React from 'react';
import { StyleSheet, View } from 'react-native';

const Body = ({ children }) => {
  const { isDarkMode } = useTheme();

  return <View style={[styles.body, isDarkMode && styles.darkBody]}>{children}</View>;
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#fff',
  },
  darkBody: {
    backgroundColor: '#0d1839',
  },
});

export default Body;
