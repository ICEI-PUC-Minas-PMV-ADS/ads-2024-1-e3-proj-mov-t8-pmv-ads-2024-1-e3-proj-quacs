import React from 'react';
import { Card, Title, Paragraph } from 'react-native-paper';

const PostComponent = ({ post }) => {
  return (
    <Card style={styles.card}>
      <Card.Content>
        <Title>{post.title}</Title>
        <Paragraph>{post.body}</Paragraph>
      </Card.Content>
    </Card>
  );
};

const styles = {
  card: {
    margin: 10,
  },
};

export default PostComponent;
