import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity, ScrollView } from 'react-native';

const deals = [
  {
    id: '1',
    name: 'ASUS Zenbook 14 OLED AI PC Intel Core Ultra 7',
    size: '14 Inch',
    color: 'Ponder Blue',
    weight: '1.28 Kg',
    price: '₹99,990',
    originalPrice: '₹1,40,990',
    discount: '29% off',
    image: require('../Assets/mini.jpg'), // Load from local disk
  },
  {
    id: '2',
    name: 'ASUS Vivobook 15',
    size: '15.6 Inch',
    color: 'Silver',
    weight: '1.75 Kg',
    price: '₹69,990',
    originalPrice: '₹89,990',
    discount: '38% off',
    image: require('../Assets/Lap.jpg'),
  },
  {
    id: '3',
    name: 'Dell Inspiron 14',
    size: '14 Inch',
    color: 'Black',
    weight: '1.5 Kg',
    price: '₹74,990',
    originalPrice: '₹99,990',
    discount: '25% off',
    image: require('../Assets/pixel9.jpg'),
  },
  {
    id: '4',
    name: 'HP Pavilion 14',
    size: '14 Inch',
    color: 'Blue',
    weight: '1.35 Kg',
    price: '₹82,990',
    originalPrice: '₹1,10,990',
    discount: '30% off',
    image: require('../Assets/pixel8.jpg'),
  },
];

const TopSaleDeals = ({navigation}) => {
  return (
    <View style={styles.container} >
      <Text style={styles.header}>Top Sale Deals</Text>
      <Text style={styles.subHeader}>Shop at unbeatable prices</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} nestedScrollEnabled={true} >
        {deals.map((item) => (
          <View key={item.id} style={styles.card}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.details}>{item.size}, {item.color}, {item.weight}</Text>
            <View style={styles.priceContainer}>
              <Text style={styles.originalPrice}>{item.originalPrice}</Text>
              <Text style={styles.price}>{item.price}</Text>
            </View>
            <Text style={styles.discount}>{item.discount}</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("HeaderComponent2",{ Category:item.category })}>
              <Text style={styles.buttonText}>View Deal</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#222',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  subHeader: {
    color: '#ccc',
    marginBottom: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginRight: 10,
    width: 250,
  },
  image: {
    width: '100%',
    height: 100,
    resizeMode: 'contain',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 14,
    marginVertical: 5,
  },
  details: {
    fontSize: 12,
    color: '#555',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  originalPrice: {
    textDecorationLine: 'line-through',
    color: '#888',
    marginRight: 5,
  },
  price: {
    fontWeight: 'bold',
    color: '#000',
  },
  discount: {
    color: 'green',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#1478',
    padding: 8,
    marginTop: 5,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default TopSaleDeals;
