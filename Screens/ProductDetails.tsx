import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import HeaderComponent from '../Components/HeaderComponent';

// Product list with local images
const products = [
  {
    id: '1',
    name: 'Samsung Galaxy S23 Ultra (Phantom Black, 512 GB)',
    price: 124999,
    oldPrice: 134999,
    discount: '7%',
    image: require('../Assets/mini.jpg'),
    rating: 4.8,
    reviews: 12500,
    delivery: 'Delivery tomorrow',
    offerPrice: 119999,
  },
  {
    id: '2',
    name: 'iPhone 15 Pro Max (Titanium Blue, 256 GB)',
    price: 159999,
    oldPrice: 169999,
    discount: '6%',
    image: require('../Assets/mini.jpg'),
    rating: 4.9,
    reviews: 15340,
    delivery: 'Free delivery by 12th Feb',
    offerPrice: 149999,
  },
  {
    id: '3',
    name: 'OnePlus 12 5G (Flowy Emerald, 512 GB)',
    price: 69999,
    oldPrice: 74999,
    discount: '7%',
    image: require('../Assets/mini.jpg'),
    rating: 4.7,
    reviews: 6745,
    delivery: 'Delivery by 10th Feb',
    offerPrice: 66999,
  },
  {
    id: '4',
    name: 'Google Pixel 8 Pro (Bay Blue, 128 GB)',
    price: 99999,
    oldPrice: 109999,
    discount: '9%',
    image: require('../Assets/mini.jpg'),
    rating: 4.6,
    reviews: 5120,
    delivery: 'Delivery tomorrow',
    offerPrice: 94999,
  },
  {
    id: '5',
    name: 'Redmi Note 13 Pro+ 5G (Fusion Black, 512 GB)',
    price: 34999,
    oldPrice: 39999,
    discount: '12%',
    image: require('../Assets/mini.jpg'),
    rating: 4.4,
    reviews: 12450,
    delivery: 'Free delivery by 11th Feb',
    offerPrice: 32999,
  },
  {
    id: '6',
    name: 'Vivo X100 Pro (Astro Black, 256 GB)',
    price: 89999,
    oldPrice: 99999,
    discount: '10%',
    image: require('../Assets/mini.jpg'),
    rating: 4.7,
    reviews: 3420,
    delivery: 'Free delivery by 10th Feb',
    offerPrice: 85999,
  },
  {
    id: '7',
    name: 'Realme GT 5G (Racing Yellow, 128 GB)',
    price: 34999,
    oldPrice: 39999,
    discount: '13%',
    image: require('../Assets/mini.jpg'),
    rating: 4.5,
    reviews: 9475,
    delivery: 'Delivery tomorrow',
    offerPrice: 31999,
  },
  {
    id: '8',
    name: 'Asus ROG Phone 7 (Phantom Black, 512 GB)',
    price: 99999,
    oldPrice: 109999,
    discount: '9%',
    image: require('../Assets/mini.jpg'),
    rating: 4.8,
    reviews: 4300,
    delivery: 'Free delivery by 9th Feb',
    offerPrice: 96999,
  },
  {
    id: '9',
    name: 'Nothing Phone 2 (Dark Grey, 256 GB)',
    price: 45999,
    oldPrice: 49999,
    discount: '8%',
    image: require('../Assets/mini.jpg'),
    rating: 4.6,
    reviews: 7895,
    delivery: 'Delivery tomorrow',
    offerPrice: 43999,
  },
  {
    id: '10',
    name: 'iQOO 12 5G (Legend Edition, 256 GB)',
    price: 59999,
    oldPrice: 64999,
    discount: '8%',
    image: require('../Assets/mini.jpg'),
    rating: 4.7,
    reviews: 3125,
    delivery: 'Free delivery by 9th Feb',
    offerPrice: 57999,
  },


];

const ProductDetails = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate("HeaderComponent")}
          >
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
