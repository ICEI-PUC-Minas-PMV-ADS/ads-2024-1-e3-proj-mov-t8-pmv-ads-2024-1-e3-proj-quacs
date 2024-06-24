import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Appbar, TextInput } from 'react-native-paper';
import CommunityComponent from "../components/CommunityComponent"; 

// Example communities data
const communities = [
  { id: 1, name: 'Community 1', description: 'Description of Community 1' },
  { id: 2, name: 'Community 2', description: 'Description of Community 2' },
  // Add more community objects as needed
];

const CommunityScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Community" />
      </Appbar.Header>
      <View style={styles.searchContainer}>
        <TextInput
          label="Search Community"
          mode="outlined"
          placeholder="Search"
          // Add search functionality here
          style={styles.searchInput}
        />
      </View>
      <ScrollView>
        {communities.map((community) => (
          <CommunityComponent key={community.id} community={community} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  searchInput: {
    marginBottom: 16,
  },
});

export default CommunityScreen;
