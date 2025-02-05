import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';

// Importing images statically
import mini from '../Assets/mini.jpg'; //
import car from '../Assets/car.png';

// Product list with local images
const products = [
  {
    id: '1',
    name: 'Infinix Note 40 Pro 5G (Vintage Green, 256 GB)',
    price: 19999,
    oldPrice: 27999,
    discount: '28%',
    image: mini, // Using imported image variable
    rating: 4.5,
    reviews: 34590,
    delivery: 'Delivery tomorrow',
    offerPrice: 17999,
  },
  {
    id: '2',
    name: 'Infinix Note 40 Pro+ 5G (Racing Grey, 256 GB)',
    price: 21999,
    oldPrice: 32999,
    discount: '33%',
    image: car, // Using imported image variable
    rating: 4.5,
    reviews: 3744,
    delivery: 'Free delivery by 10th Feb',
    offerPrice: 19999,
  },
  {
    id: '3',
    name: 'Infinix Note 40 Pro+ 5G (Racing Grey, 256 GB)',
    price: 21999,
    oldPrice: 32999,
    discount: '33%',
    image: car, // Using imported image variable
    rating: 4.5,
    reviews: 3744,
    delivery: 'Free delivery by 10th Feb',
    offerPrice: 19999,
  },
  {
    id: '4',
    name: 'Infinix Note 40 Pro+ 5G (Racing Grey, 256 GB)',
    price: 21999,
    oldPrice: 32999,
    discount: '33%',
    image: car, // Using imported image variable
    rating: 4.5,
    reviews: 3744,
    delivery: 'Free delivery by 10th Feb',
    offerPrice: 19999,
  },
  {
    id: '5',
    name: 'Infinix Note 40 Pro+ 5G (Racing Grey, 256 GB)',
    price: 21999,
    oldPrice: 32999,
    discount: '33%',
    image: car, // Using imported image variable
    rating: 4.5,
    reviews: 3744,
    delivery: 'Free delivery by 10th Feb',
    offerPrice: 19999,
  },
  {
    id: '6',
    name: 'Infinix Note 40 Pro+ 5G (Racing Grey, 256 GB)',
    price: 21999,
    oldPrice: 32999,
    discount: '33%',
    image: car, // Using imported image variable
    rating: 4.5,
    reviews: 3744,
    delivery: 'Free delivery by 10th Feb',
    offerPrice: 19999,
  },
  {
    id: '7',
    name: 'Infinix Note 40 Pro+ 5G (Racing Grey, 256 GB)',
    price: 21999,
    oldPrice: 32999,
    discount: '33%',
    image: car, // Using imported image variable
    rating: 4.5,
    reviews: 3744,
    delivery: 'Free delivery by 10th Feb',
    offerPrice: 19999,
  },
  {
    id: '8',
    name: 'Infinix Note 40 Pro+ 5G (Racing Grey, 256 GB)',
    price: 21999,
    oldPrice: 32999,
    discount: '33%',
    image: car, // Using imported image variable
    rating: 4.5,
    reviews: 3744,
    delivery: 'Free delivery by 10th Feb',
    offerPrice: 19999,
  },
  {
    id: '9',
    name: 'Infinix Note 40 Pro+ 5G (Racing Grey, 256 GB)',
    price: 21999,
    oldPrice: 32999,
    discount: '33%',
    image: car, // Using imported image variable
    rating: 4.5,
    reviews: 3744,
    delivery: 'Free delivery by 10th Feb',
    offerPrice: 19999,
  },
  {
    id: '10',
    name: 'Infinix Note 40 Pro+ 5G (Racing Grey, 256 GB)',
    price: 21999,
    oldPrice: 32999,
    discount: '33%',
    image: car, // Using imported image variable
    rating: 4.5,
    reviews: 3744,
    delivery: 'Free delivery by 10th Feb',
    offerPrice: 19999,
  },
];

const ProductDetails = ({navigation}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card}>
            {/* Image Section */}
            <Image source={item.image} style={styles.image} />
            
            {/* Product Details Section */}
            <View style={styles.details}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.rating}>⭐ {item.rating} ({item.reviews})</Text>
              <Text style={styles.price}>
                ₹{item.price} <Text style={styles.oldPrice}>₹{item.oldPrice}</Text>
              </Text>
              <Text style={styles.discount}>⬇ {item.discount} OFF</Text>
              <Text style={styles.offer}>WOW! ₹{item.offerPrice} Unbeatable deal</Text>
              <Text style={styles.delivery}>{item.delivery}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    padding: 10,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  image: {
    width: 100,
    height: 120,
    borderRadius: 10,
  },
  details: {
    flex: 1,
    marginLeft: 10,
  },
  name: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  rating: {
    fontSize: 12,
    color: '#888',
    marginVertical: 2,
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
  oldPrice: {
    textDecorationLine: 'line-through',
    color: '#888',
    fontSize: 12,
  },
  discount: {
    fontSize: 12,
    color: 'green',
  },
  offer: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'blue',
  },
  delivery: {
    fontSize: 12,
    color: '#555',
    marginTop: 2,
  },
});

export default ProductDetails;
