import React, { useContext } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Swiper from 'react-native-swiper';
import { CartContext } from '../Context/CartContext';

const Mini = ({ navigation, route }) => {
  const { addToCart } = useContext(CartContext);
  const { product } = route.params;

  return (
    <ScrollView style={styles.container}>
      {/* Image Slider */}
      <Swiper style={styles.wrapper} showsButtons={false} autoplay={true} autoplayTimeout={3}>
        {product.images.map((image, index) => (
          <Image key={index} source={image} style={styles.image} />
        ))}
      </Swiper>

      {/* Wishlist & Share Icons */}
      <View style={styles.iconsContainer}>
        <Image source={require('../Assets/whishlist1.png')} style={styles.icon} />
        <Image source={require('../Assets/share.png')} style={styles.icon} />
      </View>

      {/* Product Name & Rating */}
      <Text style={styles.name}>{product.name} <Text style={styles.variant}>{product.variant}</Text></Text>
      <Text style={styles.rating}>⭐ {product.rating} ({product.reviews} reviews)</Text>

      {/* Price Details */}
      <Text style={styles.price}>
        ₹{product.price} <Text style={styles.oldPrice}>₹{product.oldPrice}</Text> ({product.discount} OFF)
      </Text>

      {/* Delivery Info */}
      <View style={styles.deliveryContainer}>
        <Text style={styles.delivery}>{product.delivery}</Text>
        <TouchableOpacity>
          <Text style={styles.changeButton}>Change</Text>
        </TouchableOpacity>
      </View>

      {/* Highlights Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Highlights</Text>
        {product.highlights.map((highlight, index) => (
          <Text key={index} style={styles.listItem}>• {highlight}</Text>
        ))}
      </View>

      {/* Specifications Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Specifications</Text>
        {product.specifications.map((spec, index) => (
          <View key={index} style={styles.specRow}>
            <Text style={styles.specKey}>{spec.key}</Text>
            <Text style={styles.specValue}>{spec.value}</Text>
          </View>
        ))}
      </View>

      {/* Action Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.cartButton} onPress={() => { addToCart(product); navigation.navigate("Cart"); }}>
          <Text style={styles.cartButtonText}>Add to Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buyButton}>
          <Text style={styles.buyButtonText}>Buy Now</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  wrapper: { height: 300 },
  image: { width: '100%', height: 300, resizeMode: 'contain' },
  iconsContainer: { flexDirection: 'row', justifyContent: 'flex-end', marginTop: 10, paddingHorizontal: 10 },
  icon: { width: 30, height: 30, marginHorizontal: 10 },
  name: { fontSize: 18, fontWeight: 'bold', marginTop: 10, paddingHorizontal: 10 },
  variant: { fontSize: 16, color: '#555' },
  rating: { fontSize: 14, color: '#888', marginVertical: 5, paddingHorizontal: 10 },
  price: { fontSize: 18, fontWeight: 'bold', color: '#000', paddingHorizontal: 10 },
  oldPrice: { textDecorationLine: 'line-through', color: '#888', fontSize: 14 },
  deliveryContainer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10, paddingHorizontal: 10 },
  delivery: { fontSize: 14, color: '#333' },
  changeButton: { fontSize: 14, color: 'blue' },

  /* Sections */
  section: { marginTop: 20, paddingHorizontal: 10 },
  sectionTitle: { fontSize: 16, fontWeight: 'bold', marginBottom: 5 },
  listItem: { fontSize: 14, color: '#444', marginBottom: 3 },

  /* Specifications */
  specRow: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 5, borderBottomWidth: 0.5, borderBottomColor: '#ddd' },
  specKey: { fontSize: 14, fontWeight: 'bold', color: '#555', width: '50%' },
  specValue: { fontSize: 14, color: '#444', width: '50%', textAlign: 'right' },

  /* Buttons */
  buttonContainer: { flexDirection: 'row', marginTop: 20, marginBottom: 20, paddingHorizontal: 10 },
  cartButton: { flex: 1, backgroundColor: '#ff9f00', paddingVertical: 12, alignItems: 'center', borderRadius: 5, marginRight: 10 },
  cartButtonText: { fontSize: 16, fontWeight: 'bold', color: '#fff' },
  buyButton: { flex: 1, backgroundColor: '#fb641b', paddingVertical: 12, alignItems: 'center', borderRadius: 5 },
  buyButtonText: { fontSize: 16, fontWeight: 'bold', color: '#fff' },
});

export default Mini;
