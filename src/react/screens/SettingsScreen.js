import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { List, Switch, Text, Menu, Button, IconButton } from 'react-native-paper';

const SettingsScreen = () => {
  const [isNotificationsEnabled, setIsNotificationsEnabled] = React.useState(false);
  const [isDarkThemeEnabled, setIsDarkThemeEnabled] = React.useState(false);
  const [menuVisible, setMenuVisible] = React.useState(false);
  const [selectedLanguage, setSelectedLanguage] = React.useState('English');

  const toggleNotifications = () => setIsNotificationsEnabled(!isNotificationsEnabled);
  const toggleDarkTheme = () => setIsDarkThemeEnabled(!isDarkThemeEnabled);

  const openMenu = () => setMenuVisible(true);
  const closeMenu = () => setMenuVisible(false);

  const changeLanguage = (language) => {
    setSelectedLanguage(language);
    closeMenu();
  };

  return (
    <ScrollView>
      <List.Section>
        <List.Subheader>Preferences</List.Subheader>
        <List.Item
          title="Enable Notifications"
          right={() => (
            <Switch value={isNotificationsEnabled} onValueChange={toggleNotifications} />
          )}
        />
        <List.Item
          title="Dark Theme"
          right={() => (
            <Switch value={isDarkThemeEnabled} onValueChange={toggleDarkTheme} />
          )}
        />
        <List.Item
          title="Language"
          description={selectedLanguage}
          right={() => (
            <Menu
              visible={menuVisible}
              onDismiss={closeMenu}
              anchor={
                <IconButton
                  icon="chevron-down"
                  size={24}
                  onPress={openMenu}
                />
              }
            >
              <Menu.Item onPress={() => changeLanguage('English')} title="English" />
              <Menu.Item onPress={() => changeLanguage('Spanish')} title="Spanish" />
              <Menu.Item onPress={() => changeLanguage('French')} title="French" />
            </Menu>
          )}
        />
      </List.Section>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default SettingsScreen;
