import React, { useContext, useState, useEffect, useRef } from 'react';
import { 
  View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Alert, FlatList, Dimensions
} from 'react-native';
import { CartContext } from '../Context/CartContext';

const { width } = Dimensions.get('window');

const productDetails = {
  id: "34",
  name: "Samsung Galaxy S25 Ultra",
  price: 129999,
  discount: "10% Off",
  features: [
    "200MP + 50MP + 12MP Rear Camera",
    "6.8-inch Dynamic AMOLED Display",
    "5000mAh Battery with Fast Charging",
    "Snapdragon 8 Gen 3 Processor",
    "S-Pen Support",
  ],
  images: [
    require("../Assets/S25ultra.webp"),
    require("../Assets/S25ultra.webp"),
    require("../Assets/S25ultra.webp"),
    require("../Assets/S25ultra.webp"),
  ],
  description: "Experience the power of Samsung Galaxy S25 Ultra with a 200MP camera, an immersive 6.8-inch AMOLED display, and lightning-fast performance."
};

const S25ultra = ({ navigation }) => {
  const { addToCart, cart } = useContext(CartContext);
  const [isInCart, setIsInCart] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);

  useEffect(() => {
    setIsInCart(cart.some(item => item.id === productDetails.id));
  }, [cart]);

  // Auto-slide feature (Optional)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        let nextIndex = prevIndex + 1;
        if (nextIndex >= productDetails.images.length) nextIndex = 0;
        flatListRef.current.scrollToIndex({ index: nextIndex, animated: true });
        return nextIndex;
      });
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const handleAddToCart = () => {
    addToCart(productDetails);
  };

  return (
    <ScrollView nestedScrollEnabled={true} style={styles.container}>
      {/* Image Carousel */}
      <FlatList
        ref={flatListRef}
        data={productDetails.images}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={(event) => {
          const newIndex = Math.round(event.nativeEvent.contentOffset.x / width);
          setCurrentIndex(newIndex);
        }}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Image source={item} style={styles.productImage} />
        )}
      />

      {/* Pagination Dots */}
      <View style={styles.pagination}>
        {productDetails.images.map((_, index) => (
          <View key={index} style={[styles.dot, currentIndex === index && styles.activeDot]} />
        ))}
      </View>

      <Text style={styles.productName}>{productDetails.name}</Text>
      <Text style={styles.productPrice}>
        ₹{productDetails.price} <Text style={styles.discount}>{productDetails.discount}</Text>
      </Text>

      <Text style={styles.sectionHeader}>Key Features</Text>
      {productDetails.features.map((feature, index) => (
        <Text key={index} style={styles.featureText}>• {feature}</Text>
      ))}

      <Text style={styles.sectionHeader}>Description</Text>
      <Text style={styles.description}>{productDetails.description}</Text>

      <View style={styles.cartSection}>
        {isInCart ? (
          <TouchableOpacity 
            style={styles.goToCartButton} 
            onPress={() => navigation.navigate("Cart")}
          >
            <Text style={styles.goToCartButtonText}>Go to Cart</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity 
            style={styles.cartButton} 
            onPress={handleAddToCart}
          >
            <Text style={styles.cartButtonText}>Add to Cart</Text>
          </TouchableOpacity>
        )}

        <TouchableOpacity 
          style={styles.buyButton} 
          onPress={() => navigation.navigate("Buy")}
        >
          <Text style={styles.buyButtonText}>Buy Now</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 16 },
  productImage: { width, height: 300, resizeMode: 'cover', borderRadius: 10 },
  
  pagination: { flexDirection: 'row', justifyContent: 'center', marginTop: 10 },
  dot: { width: 8, height: 8, borderRadius: 4, backgroundColor: '#ccc', marginHorizontal: 4 },
  activeDot: { backgroundColor: '#007bff' },

  productName: { fontSize: 22, fontWeight: 'bold', marginTop: 10 },
  productPrice: { fontSize: 20, color: '#000', fontWeight: 'bold', marginTop: 5 },
  discount: { color: 'green', fontSize: 16 },
  sectionHeader: { fontSize: 18, fontWeight: 'bold', marginTop: 15 },
  featureText: { fontSize: 16, marginTop: 5 },
  description: { fontSize: 16, marginTop: 10, color: '#555' },

  cartSection: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 },
  cartButton: { flex: 1, backgroundColor: '#ffaa00', padding: 15, alignItems: 'center', borderRadius: 10, marginRight: 10 },
  cartButtonText: { fontSize: 16, fontWeight: 'bold', color: '#fff' },
  goToCartButton: { flex: 1, backgroundColor: '#007bff', padding: 15, alignItems: 'center', borderRadius: 10, marginRight: 10 },
  goToCartButtonText: { fontSize: 16, fontWeight: 'bold', color: '#fff' },
  buyButton: { flex: 1, backgroundColor: '#ff6600', padding: 15, alignItems: 'center', borderRadius: 10 },
  buyButtonText: { fontSize: 16, fontWeight: 'bold', color: '#fff' },
});

export default S25ultra;
