import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const productDetails = [
  {
    id: 1,
    name: "Samsung Galaxy S25 Ultra",
    price: "₹1,29,999",
    discount: "10% Off",
    features: [
      "200MP + 50MP + 12MP Rear Camera",
      "6.8-inch Dynamic AMOLED Display",
      "5000mAh Battery with Fast Charging",
      "Snapdragon 8 Gen 3 Processor",
      "S-Pen Support",
    ],
    image: require("../Assets/S25ultra.webp"),
    description: "Experience the power of Samsung Galaxy S25 Ultra with a 200MP camera, an immersive 6.8-inch AMOLED display, and lightning-fast performance."
  }
];

const S25ultra = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      {productDetails.map((product) => (
        <View key={product.id}>
          <Image source={product.image} style={styles.productImage} />
          <Text style={styles.productName}>{product.name}</Text>
          <Text style={styles.productPrice}>{product.price} <Text style={styles.discount}>{product.discount}</Text></Text>
          <Text style={styles.sectionHeader}>Key Features</Text>
          {product.features.map((feature, index) => (
            <Text key={index} style={styles.featureText}>• {feature}</Text>
          ))}
          <Text style={styles.sectionHeader}>Description</Text>
          <Text style={styles.description}>{product.description}</Text>
          <TouchableOpacity style={styles.buyButton} onPress={() => alert('Added to Cart!')}>
            <Text style={styles.buyButtonText}>Buy Now</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  productImage: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  productName: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
  },
  productPrice: {
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
    marginTop: 5,
  },
  discount: {
    color: 'green',
    fontSize: 16,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
  },
  featureText: {
    fontSize: 16,
    marginTop: 5,
  },
  description: {
    fontSize: 16,
    marginTop: 10,
    color: '#555',
  },
  buyButton: {
    backgroundColor: '#ff6600',
    padding: 15,
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 20,
  },
  buyButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default S25ultra;
