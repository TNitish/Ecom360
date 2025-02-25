import React, { useContext, useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { CartContext } from "../Context/CartContext";

const productDetails = {
  id: "111",
  name: "Samsung Galaxy S25 Ultra",
  price: "₹129,999",
  discount: "10% Off",
  features: [
    "200MP + 50MP + 12MP Rear Camera",
    "6.8-inch Dynamic AMOLED Display",
    "5000mAh Battery with Fast Charging",
    "Snapdragon 8 Gen 3 Processor",
    "S-Pen Support",
  ],
  image: require("../Assets/S25ultra.webp"),
};

const CarsoulProduct = ({ navigation }) => {
  const { addToCart, cart } = useContext(CartContext);
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    setIsInCart(cart.some((item) => item.id === productDetails.id));
  }, [cart]);

  const handleAddToCart = () => {
    addToCart(productDetails);
  };

  return (
    <ScrollView style={styles.container} nestedScrollEnabled={true}>
      <Image source={productDetails.image} style={styles.productImage} />

      <View style={styles.detailsContainer}>
        <Text style={styles.productName}>{productDetails.name}</Text>
        <Text style={styles.price}>{productDetails.price} <Text style={styles.discount}>{productDetails.discount}</Text></Text>
      </View>

      <Text style={styles.sectionHeader}>Key Features</Text>
      {productDetails.features.map((feature, index) => (
        <Text key={index} style={styles.featureText}>• {feature}</Text>
      ))}

      <View style={styles.buttonContainer}>
        {isInCart ? (
          <TouchableOpacity style={styles.goToCartButton} onPress={() => navigation.navigate("Cart")}> 
            <Text style={styles.buttonText}>Go to Cart</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.addToCartButton} onPress={handleAddToCart}>
            <Text style={styles.buttonText}>Add to Cart</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity style={styles.buyNowButton}>
          <Text style={styles.buttonText}>Buy Now</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f8f8f8" },
  productImage: { width: "100%", height: 300, resizeMode: "contain", backgroundColor: "#fff" },
  detailsContainer: { padding: 15, backgroundColor: "#fff", marginBottom: 10 },
  productName: { fontSize: 22, fontWeight: "bold", color: "#333" },
  price: { fontSize: 20, fontWeight: "bold", color: "#e60000", marginVertical: 5 },
  discount: { color: "green", fontSize: 16 },
  sectionHeader: { fontSize: 18, fontWeight: "bold", marginTop: 15, paddingHorizontal: 15 },
  featureText: { fontSize: 16, marginTop: 5, paddingHorizontal: 15 },
  buttonContainer: { flexDirection: "row", justifyContent: "space-evenly", padding: 15, backgroundColor: "#fff" },
  addToCartButton: { backgroundColor: "#ff9f00", paddingVertical: 12, paddingHorizontal: 30, borderRadius: 5 },
  goToCartButton: { backgroundColor: "#2874F0", paddingVertical: 12, paddingHorizontal: 30, borderRadius: 5 },
  buyNowButton: { backgroundColor: "#fb641b", paddingVertical: 12, paddingHorizontal: 30, borderRadius: 5 },
  buttonText: { color: "#fff", fontWeight: "bold", fontSize: 16, textAlign: "center" },
});

export default CarsoulProduct;
