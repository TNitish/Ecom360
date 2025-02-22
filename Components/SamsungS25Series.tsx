import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const products = [
  {
    id: 1,
    name: "Galaxy S25 Ultra",
    image: require("../Assets/S25ultra.webp"),
    subtitle: "Get benefits up to ₹21,000*",
  },
  {
    id: 2,
    name: "Galaxy S25",
    image: require("../Assets/s25.webp"),
    subtitle: "Get benefits up to ₹11,000*",
  },
  {
    id: 3,
    name: "Galaxy S25+",
    image: require("../Assets/s25Plus.jpg"),
    subtitle: "Get benefits up to ₹12,000*",
  },
];

const SamsungS25Series = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Samsung S25 Series</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollContainer} nestedScrollEnabled={true}>
        {products.map((item) => (
          <TouchableOpacity key={item.id} style={styles.card} onPress={() => navigation.navigate('S25ultra', { product: item })}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.subtitle}>{item.subtitle}</Text>
            <Text style={styles.cta}>Pre-order Now →</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 16,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 16,
  },
  scrollContainer: {
    flexDirection: 'row',
  },
  card: {
    width: 200,
    backgroundColor: '#1c1c1c',
    borderRadius: 10,
    marginRight: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
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
    color: '#fff',
    padding: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#ccc',
    paddingHorizontal: 8,
  },
  cta: {
    fontSize: 14,
    color: '#1e90ff',
    paddingHorizontal: 8,
    paddingBottom: 8,
  },
});

export default SamsungS25Series;
