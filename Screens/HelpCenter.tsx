import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HelpCenter = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Help Center</Text>
      <Text style={styles.infoText}>For any issues with your order, please contact support.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#f9f9f9' },
  heading: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  infoText: { fontSize: 16, color: '#666', textAlign: 'center', paddingHorizontal: 20 },
});

export default HelpCenter;
