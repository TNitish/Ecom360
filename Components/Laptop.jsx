import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import FastImage from 'react-native-fast-image';
import { useNavigation } from '@react-navigation/native';

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

const Laptop = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>ASUS Vivobook 15 Series</Text>
      {products.map((item) => (
        <TouchableOpacity key={item.id} style={styles.card} onPress={() => navigation.navigate('HeaderComponent2', { product: item })}>
          <View style={styles.row}>
            <View style={styles.details}>
              <Text style={styles.title}>{item.name}</Text>
              <Text style={styles.price}>{item.price}</Text>
              <Text style={styles.discount}>{item.discountPrice}</Text>
            </View>
            <FastImage source={item.image} style={styles.image} resizeMode={FastImage.resizeMode.contain} />
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f5',
    padding: 15,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
    textAlign: 'center',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 15,
    marginBottom: 12,
    elevation: 3,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },
  details: {
    flex: 1,
    paddingRight: 10,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 5,
  },
  price: {
    fontSize: 14,
    color: '#27ae60',
    fontWeight: 'bold',
  },
  discount: {
    fontSize: 12,
    color: '#777',
    marginTop: 3,
  },
});

export default Laptop;
