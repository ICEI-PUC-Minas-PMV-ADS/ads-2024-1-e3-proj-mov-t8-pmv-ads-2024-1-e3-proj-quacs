import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { List, Switch } from "react-native-paper";

import { useNavigation } from "@react-navigation/native";

const settingsData = [
  {
    id: 1,
    title: "Notifications",
    description: "Enable or disable notifications",
    type: "switch",
  },
  {
    id: 2,
    title: "Privacy",
    description: "Manage your privacy settings",
    type: "navigation",
  },
  {
    id: 3,
    title: "Language",
    description: "Select your preferred language",
    type: "navigation",
  },
  {
    id: 4,
    title: "Dark Mode",
    description: "Enable or disable dark mode",
    type: "switch",
  },
];

const SettingsScreen = () => {

  const handleToggleSwitch = (id) => {
    const key = settingsData.find((item) => item.id === id).title.toLowerCase();
    setSettings((prevSettings) => ({
      ...prevSettings,
      [key]: !prevSettings[key],
    }));
  };

  const renderItem = ({ item }) => {
    const { id, title, description, type } = item;
    const value = settings[title.toLowerCase()];

    return (
      <List.Item
        title={title}
        description={description}
        onPress={() => type === "navigation" && console.log(`${title} pressed`)}
        right={() =>
          type === "switch" && (
            <Switch
              value={value}
              onValueChange={() => handleToggleSwitch(id)}
            />
          )
        }
      />
    );
  };

  return (
    <View style={[styles.container]}>
        <FlatList
          data={settingsData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SettingsScreen;
