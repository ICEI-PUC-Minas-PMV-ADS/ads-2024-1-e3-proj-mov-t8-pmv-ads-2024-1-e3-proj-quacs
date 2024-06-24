import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

const CommunityComponent = ({ community }) => {
  return (
    <Card style={styles.card}>
      <Card.Content>
        <Title>{community.name}</Title>
        <Paragraph>{community.description}</Paragraph>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 10,
    borderRadius: 5, // Example border radius
    backgroundColor: '#f0f0f0', // Example background color
    elevation: 2, // Shadow depth for Android
    shadowColor: '#000', // Shadow color for iOS
    shadowOpacity: 0.3, // Shadow opacity for iOS
    shadowOffset: { width: 0, height: 2 }, // Shadow offset for iOS
    shadowRadius: 2, // Shadow radius for iOS
  },
});

export default CommunityComponent;
    