import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HelpCenter = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Help Center</Text>
      <Text style={styles.text}>How can we assist you today?</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f1f3f6',
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: '#555',
  },
});

export default HelpCenter;
