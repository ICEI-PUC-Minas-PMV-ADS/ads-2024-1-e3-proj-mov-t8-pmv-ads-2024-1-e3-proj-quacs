import React, { useState } from 'react';
import { View, Text, Switch, TouchableOpacity, StyleSheet } from 'react-native';
import { Image } from "expo-image";

const SettingsScreen = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [fontSize, setFontSize] = useState(14);

  const dynamicStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: darkMode ? '#333' : '#fff',
    },
    text: {
      color: darkMode ? '#fff' : '#333',
      fontSize: fontSize, 
    },
    header: {
      height: 60,
      backgroundColor: darkMode ? '#555' : '#2978BB',
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontSize: 24,
      color: '#fff',
    },
    profileSection: {
      alignItems: 'center',
      marginVertical: 20,
    },
    profileImage: {
      width: 100,
      height: 100,
      borderRadius: 50,
    },
    setting: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 16,
      borderBottomWidth: 1,
      borderBottomColor: darkMode ? '#555' : '#ccc',
    },
    settingText: {
      fontSize: 18,
      color: darkMode ? '#fff' : '#333',
    },
    fontSizeControls: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    fontSizeControlText: {
      fontSize: 24,
      color: darkMode ? '#fff' : '#333',
      paddingHorizontal: 16,
    },
    fontSizeText: {
      marginHorizontal: 8,
      fontSize: 18,
      color: darkMode ? '#fff' : '#333',
    },
    saveButtonContainer: {
      margin: 16,
      alignItems: 'center',
    },
  });

  const decreaseFontSize = () => {
    setFontSize((prevFontSize) => (prevFontSize > 10 ? prevFontSize - 1 : 10));
  };

  const increaseFontSize = () => {
    setFontSize((prevFontSize) => (prevFontSize < 30 ? prevFontSize + 1 : 30));
  };

  return (
    <View style={dynamicStyles.container}>
      <View style={dynamicStyles.header}>
        <Text style={dynamicStyles.title}>Configurações</Text>
      </View>
      <View style={dynamicStyles.profileSection}>
        <Image
          style={dynamicStyles.profileImage}
          contentFit="cover"
          source={require("../assets/foto-perfil.png")}
        />
      </View>

      <View style={dynamicStyles.setting}>
        <Text style={dynamicStyles.settingText}>Notificações</Text>
        <Switch
          value={notificationsEnabled}
          onValueChange={(value) => setNotificationsEnabled(value)}
        />
      </View>

      <View style={dynamicStyles.setting}>
        <Text style={dynamicStyles.settingText}>Modo Noturno</Text>
        <Switch
          value={darkMode}
          onValueChange={(value) => setDarkMode(value)}
        />
      </View>

      <View style={dynamicStyles.setting}>
        <Text style={dynamicStyles.settingText}>Tamanho da Fonte</Text>
        <View style={dynamicStyles.fontSizeControls}>
          <TouchableOpacity onPress={decreaseFontSize}>
            <Text style={dynamicStyles.fontSizeControlText}>A-</Text>
          </TouchableOpacity>
          <Text style={dynamicStyles.fontSizeText}>{fontSize}</Text>
          <TouchableOpacity onPress={increaseFontSize}>
            <Text style={dynamicStyles.fontSizeControlText}>A+</Text>
          </TouchableOpacity>
        </View>
      </View>
      
      <View style={dynamicStyles.saveButtonContainer}>
        <TouchableOpacity onPress={() => alert('Configurações salvas!')} style={{ padding: 10, backgroundColor: '#2978BB', borderRadius: 5 }}>
          <Text style={{ color: '#fff', fontSize: 18 }}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SettingsScreen;
