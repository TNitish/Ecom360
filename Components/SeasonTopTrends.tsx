import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const SeasonsTopTrends = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Season's Top Trends!</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollContainer}>
        {/* Card 1 */}
        <TouchableOpacity style={styles.card}>
          <Image source={require("../Assets/fleecejacket.jpg")} style={styles.image} />
          <Text style={styles.title}>Fleece & Fur Jackets</Text>
          <Text style={styles.subtitle}>From ₹499</Text>
          <Text style={styles.cta}>→</Text>
        </TouchableOpacity>
        {/* Card 2 */}
        <TouchableOpacity style={styles.card}>
          <Image source={require("../Assets/Artpaints.jpg")} style={styles.image} />
          <Text style={styles.title}>Art & Paintings</Text>
          <Text style={styles.subtitle}>Just ₹1,299</Text>
          <Text style={styles.cta}>→</Text>
        </TouchableOpacity>
        {/* Card 3 */}
        <TouchableOpacity style={styles.card}>
          <Image source={require("../Assets/WinterWear.jpg")} style={styles.image} />
          <Text style={styles.title}>Winter Wear</Text>
          <Text style={styles.subtitle}>Up to 50% Off</Text>
          <Text style={styles.cta}>→</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 16,
  },
  scrollContainer: {
    flexDirection: 'row',
  },
  card: {
    width: 200,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    marginRight: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 120,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    padding: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#555',
    paddingHorizontal: 8,
  },
  cta: {
    fontSize: 14,
    color: '#1e90ff',
    paddingHorizontal: 8,
    paddingBottom: 8,
  },
});

export default SeasonsTopTrends;
