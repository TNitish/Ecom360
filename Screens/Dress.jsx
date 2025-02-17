import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

const deals = [
  {
    id: '1',
    brand: 'SPEEDO',
    description: 'Printed Men Multicolor Swim Shorts',
    price: '₹1,899',
    originalPrice: '₹1,999',
    discountPrice: '₹1,804 #OnlyForYou',
    image: require('../Assets/mini.jpg'),
  },
  {
    id: '2',
    brand: 'PUMA',
    description: 'Printed Men Multicolor Casual Shorts',
    price: '₹1,462',
    originalPrice: '₹2,799',
    discountPrice: '₹1,388 #OnlyForYou',
    image: require('../Assets/mini.jpg'),
  },
  {
    id: '3',
    brand: 'WEREKO',
    description: 'Pack of 3 Solid Men Multicolor Casual Shorts',
    price: '₹499',
    originalPrice: '₹1,599',
    discountPrice: '₹438 with 3 offers',
    image: require('../Assets/mini.jpg'),
  },
  {
    id: '4',
    brand: 'WEREKO',
    description: 'Pack of 3 Solid Men Multicolor Casual Shorts',
    price: '₹499',
    originalPrice: '₹1,599',
    discountPrice: '₹438 with 3 offers',
    image: require('../Assets/mini.jpg'),
  },
];

const Dress = () => {
  const [wishlist, setWishlist] = useState({});

  const toggleWishlist = (id) => {
    setWishlist((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dress</Text>
      <FlatList
        data={deals}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (

          <View style={styles.card}>
            {/* Sponsored Tag */}
            <View style={styles.sponsoredContainer}>
              
              <Text style={styles.sponsoredText}>BestSeller</Text>
              <TouchableOpacity onPress={() => toggleWishlist(item.id)}>
                <Text style={[styles.heartIcon, { color: wishlist[item.id] ? 'red' : '#999' }]}>❤︎</Text>
              </TouchableOpacity>
            </View>

            {/* Product Image */}
            <Image source={item.image} style={styles.image} />

            {/* Product Info */}
            <Text style={styles.brand}>{item.brand}</Text>
            <Text style={styles.description}>{item.description}</Text>

            {/* Price & Discount Section */}
            <View style={styles.priceContainer}>
              <Text style={styles.originalPrice}>{item.originalPrice}</Text>
              <Text style={styles.price}>{item.price}</Text>
            </View>
            <Text style={styles.discount}>{item.discountPrice}</Text>

          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingVertical: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 10,
    width: '45%',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
    paddingBottom: 10,
  },
  sponsoredContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  sponsoredText: {
    backgroundColor: '#f2f2f2',
    fontSize: 12,
    fontWeight: 'bold',
    color: '#555',
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 3,
  },
  heartIcon: {
    fontSize: 20,
    
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  brand: {
    fontWeight: 'bold',
    fontSize: 16,
    marginHorizontal: 10,
    marginTop: 5,
  },
  description: {
    fontSize: 12,
    color: '#555',
    marginHorizontal: 10,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    marginTop: 5,
  },
  originalPrice: {
    textDecorationLine: 'line-through',
    color: '#888',
    marginRight: 5,
    fontSize: 12,
  },
  price: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#000',
  },
  discount: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 12,
    marginHorizontal: 10,
    marginTop: 3,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default Dress;
