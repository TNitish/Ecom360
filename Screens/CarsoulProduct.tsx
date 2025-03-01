import React, { useContext, useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { CartContext } from "../Context/CartContext";

const CarsoulProduct = ({ route, navigation }) => {
  const { product } = route.params; // Get product details from navigation
  const { addToCart, cart } = useContext(CartContext);
  const [isInCart, setIsInCart] = useState(false);

  // Convert price to integer
  const formattedPrice = parseInt(product.price.replace(/[^\d]/g, ""), 10);

  useEffect(() => {
    setIsInCart(cart.some((item) => item.id === product.id));
  }, [cart]);

  const handleAddToCart = () => {
    addToCart({ ...product, price: formattedPrice }); // Ensure converted price is stored
  };

  return (
    <ScrollView style={styles.container} nestedScrollEnabled={true}>
      <Image source={product.image} style={styles.productImage} />

      <View style={styles.detailsContainer}>
        <Text style={styles.productName}>{product.name}</Text>
        <Text style={styles.price}>₹{formattedPrice.toLocaleString()}</Text>
      </View>

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
  buttonContainer: { flexDirection: "row", justifyContent: "space-evenly", padding: 15, backgroundColor: "#fff" },
  addToCartButton: { backgroundColor: "#ff9f00", paddingVertical: 12, paddingHorizontal: 30, borderRadius: 5 },
  goToCartButton: { backgroundColor: "#2874F0", paddingVertical: 12, paddingHorizontal: 30, borderRadius: 5 },
  buyNowButton: { backgroundColor: "#fb641b", paddingVertical: 12, paddingHorizontal: 30, borderRadius: 5 },
  buttonText: { color: "#fff", fontWeight: "bold", fontSize: 16, textAlign: "center" },
});

export default CarsoulProduct;
