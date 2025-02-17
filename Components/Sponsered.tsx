import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const sponsoredItems = [
  { id: 1, image: require("../Assets/card.jpg"), title: "Min. 50% Off", subtitle: "Men's footwear" },
  { id: 2, image: require("../Assets/product2.jpg"), title: "Apply now", subtitle: "10X Reward points" },
  { id: 3, image: require("../Assets/product3.jpg"), title: "Up to 25% Off", subtitle: "Fresh start" },
  { id: 4, image: require("../Assets/product4.jpg"), title: "Apply now", subtitle: "Rewards & Benefits" },
  { id: 5, image: require("../Assets/product5.jpg"), title: "Apply now", subtitle: "Exciting Offers" },
  { id: 6, image: require("../Assets/product6.jpg"), title: "Get it now", subtitle: "Insta EMI card" }
];

const Sponsered = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sponsored</Text>
      <View style={styles.gridContainer}>
        {sponsoredItems.map((item) => (
          <TouchableOpacity key={item.id} style={styles.card} onPress={() => navigation.navigate('MensFootwear')}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.subtitle}>{item.subtitle}</Text>
          </TouchableOpacity>
        ))}
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
