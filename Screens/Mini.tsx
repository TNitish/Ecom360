import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';

const product = {
  images: [
    require('../Assets/mini.jpg'),
    require('../Assets/iphone13.jpg'),
    require('../Assets/iphone14.jpg'),
  ],
  name: 'Infinix Note 40 Pro 5G',
  variant: '(Vintage Green, 256 GB)',
  rating: 4.5,
  reviews: 34590,
  price: 19999,
  oldPrice: 27999,
  discount: '28%',
  delivery: 'Delivery to your address',
};

const Mini = () => {
  return (
    <View style={styles.container}>
      <Swiper style={styles.wrapper} showsButtons={false}>
        {product.images.map((image, index) => (
          <Image key={index} source={image} style={styles.image} />
        ))}
      </Swiper>

      <View style={styles.iconsContainer}>
        <Image source={require('../Assets/whishlist1.png')} style={styles.icon} />
        <Image source={require('../Assets/share.png')} style={styles.icon} />
      </View>

      <Text style={styles.name}>{product.name} <Text style={styles.variant}>{product.variant}</Text></Text>
      <Text style={styles.rating}>⭐ {product.rating} ({product.reviews} reviews)</Text>
      <Text style={styles.price}>₹{product.price} <Text style={styles.oldPrice}>₹{product.oldPrice}</Text> ({product.discount} OFF)</Text>
      
      <View style={styles.deliveryContainer}>
        <Text style={styles.delivery}>{product.delivery}</Text>
        <TouchableOpacity>
          <Text style={styles.changeButton}>Change</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 10, backgroundColor: '#fff' },
  wrapper: { height: 300 },
  image: { width: '100%', height: 300, resizeMode: 'contain' },
  iconsContainer: { flexDirection: 'row', justifyContent: 'flex-end', marginTop: 10 },
  icon: { width: 30, height: 30, marginHorizontal: 10 },
  name: { fontSize: 18, fontWeight: 'bold', marginTop: 10 },
  variant: { fontSize: 16, color: '#555' },
  rating: { fontSize: 14, color: '#888', marginVertical: 5 },
  price: { fontSize: 18, fontWeight: 'bold', color: '#000' },
  oldPrice: { textDecorationLine: 'line-through', color: '#888', fontSize: 14 },
  deliveryContainer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 },
  delivery: { fontSize: 14, color: '#333' },
  changeButton: { fontSize: 14, color: 'blue' },
});

export default Mini;
