import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useTheme } from '../context/ThemeContext';

const Container = ({ children }) => {
  const { isDarkMode } = useTheme();

  return (
    <View style={[styles.container, isDarkMode && styles.darkContainer]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#95adbe',
    borderRadius: 30,
    padding: 3,
    margin: 8,
  },
  darkContainer: {
    backgroundColor: '#574f7d',
  },
});

export default Container;
