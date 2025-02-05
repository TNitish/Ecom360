import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';

const products = [
  {
    id: '1',
    name: 'ASUS Vivobook 15 Intel Core i3 12th Gen',
    price: '₹39,990',
    discountPrice: '₹35,740 with Bank offer',
    image: require('../Assets/Lap.jpg'),
  },
  {
    id: '2',
    name: 'ASUS Vivobook Go 15 AMD Ryzen 5',
    price: '₹37,900',
    discountPrice: '₹35,650 Unbeatable deal',
    image: require('../Assets/Lap.jpg'),
  },
  {
    id: '3',
    name: 'ASUS Vivobook 15, with Backlit Keyboard',
    price: '₹35,990',
    discountPrice: '₹31,740 with Bank offer',
    image: require('../Assets/Lap.jpg'),
  },
  {
    id: '4',
    name: 'ASUS Vivobook 15 Intel Core i5 12th Gen',
    price: '₹46,990',
    discountPrice: '₹41,740 with Bank offer',
    image: require('../Assets/Lap.jpg'),
  },
];

const ProductItem = ({ item }) => (
  <View style={styles.card}>
    <View style={styles.row}>
      <View style={styles.details}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.price}>{item.price}</Text>
        <Text style={styles.discount}>{item.discountPrice}</Text>
      </View>
      <FastImage source={item.image} style={styles.image} resizeMode={FastImage.resizeMode.contain} />
    </View>
  </View>
);

const Laptop = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>ASUS Vivobook 15 Series</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ProductItem item={item} />}
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
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  details: {
    flex: 1,
  },
  image: {
    width: 100,
    height: 100,
    marginLeft: 15,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 14,
    color: 'green',
    fontWeight: 'bold',
    marginTop: 5,
  },
  discount: {
    fontSize: 12,
    color: 'gray',
    marginTop: 5,
  },
});

export default Laptop;
