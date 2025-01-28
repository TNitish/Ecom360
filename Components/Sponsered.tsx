import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Sponsered = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sponsored</Text>
      <View style={styles.gridContainer}>
        {/* Card 1 */}
        <TouchableOpacity style={styles.card}>
          <Image source={require("../Assets/card.jpg")} style={styles.image} />
          <Text style={styles.title}>Min. 50% Off</Text>
          <Text style={styles.subtitle}>Men's footwear</Text>
        </TouchableOpacity>
        {/* Card 2 */}
        <TouchableOpacity style={styles.card}>
          <Image source={require("../Assets/product2.jpg")} style={styles.image} />
          <Text style={styles.title}>Apply now</Text>
          <Text style={styles.subtitle}>10X Reward points</Text>
        </TouchableOpacity>
        {/* Card 3 */}
        <TouchableOpacity style={styles.card}>
          <Image source={require("../Assets/product3.jpg")} style={styles.image} />
          <Text style={styles.title}>Up to 25% Off</Text>
          <Text style={styles.subtitle}>Fresh start</Text>
        </TouchableOpacity>
        {/* Card 4 */}
        <TouchableOpacity style={styles.card}>
          <Image source={require("../Assets/product4.jpg")} style={styles.image} />
          <Text style={styles.title}>Apply now</Text>
          <Text style={styles.subtitle}>Rewards & Benefits</Text>
        </TouchableOpacity>
        {/* Card 5 */}
        <TouchableOpacity style={styles.card}>
          <Image source={require("../Assets/product5.jpg")} style={styles.image} />
          <Text style={styles.title}>Apply now</Text>
          <Text style={styles.subtitle}>Exciting Offers</Text>
        </TouchableOpacity>
        {/* Card 6 */}
        <TouchableOpacity style={styles.card}>
          <Image source={require("../Assets/product6.jpg")} style={styles.image} />
          <Text style={styles.title}>Get it now</Text>
          <Text style={styles.subtitle}>Insta EMI card</Text>
        </TouchableOpacity>
      </View>
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
    marginBottom: 16,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '30%',
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    marginBottom: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 100,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    padding: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#555',
    paddingHorizontal: 8,
    paddingBottom: 8,
  },
});

export default Sponsered;
