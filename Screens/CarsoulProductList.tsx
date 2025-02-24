import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const products = [
  { id: '4', name: 'iPhone 14', price: '₹79,999', image: require('../Assets/mini.jpg') },
  { id: '5', name: 'Samsung S25 Ultra', price: '₹1,29,999', image: require('../Assets/mini.jpg') },
  { id: '6', name: 'OnePlus 11', price: '₹56,999', image: require('../Assets/mini.jpg') },
  { id: '7', name: 'Google Pixel 8', price: '₹74,999', image: require('../Assets/mini.jpg') },
  { id: '8', name: 'Redmi Note 12 Pro', price: '₹24,999', image: require('../Assets/mini.jpg') },
  { id: '9', name: 'Realme GT 3', price: '₹38,999', image: require('../Assets/mini.jpg') },
  { id: '10', name: 'Vivo X90 Pro', price: '₹84,999', image: require('../Assets/mini.jpg') },
  { id: '11', name: 'Asus ROG Phone 7', price: '₹69,999', image: require('../Assets/mini.jpg') },
  { id: '12', name: 'Nothing Phone 2', price: '₹44,999', image: require('../Assets/mini.jpg') },
  { id: '13', name: 'Moto Edge 40', price: '₹29,999', image: require('../Assets/mini.jpg') },
  { id: '14', name: 'Oppo Find X6', price: '₹89,999', image: require('../Assets/mini.jpg') },
];

const CarsoulProductList = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.productCard}
            onPress={() => navigation.navigate('S25ultra', { product: item })}>
            <Image source={item.image} style={styles.productImage} />
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>{item.price}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8f8f8', padding: 10 },
  productCard: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 8,
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  productImage: { width: 120, height: 120, resizeMode: 'contain' },
  productName: { fontSize: 16, fontWeight: 'bold', marginVertical: 5, textAlign: 'center' },
  productPrice: { fontSize: 14, color: '#e60000', fontWeight: 'bold' },
});

export default CarsoulProductList;
