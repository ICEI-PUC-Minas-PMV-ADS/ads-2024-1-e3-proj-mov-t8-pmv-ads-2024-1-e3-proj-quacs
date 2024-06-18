import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { List, Switch, Text } from 'react-native-paper';

const SettingsScreen = () => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  return (
    <ScrollView>
      <List.Section>
        <List.Subheader>Preferences</List.Subheader>
        <List.Item
          title="Enable Notifications"
          right={() => (
            <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
          )}
        />
        <List.Item
          title="Dark Theme"
          right={() => (
            <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
          )}
        />
        <List.Item
          title="Language"
          description="English"
          right={() => <Text>Change</Text>}
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
