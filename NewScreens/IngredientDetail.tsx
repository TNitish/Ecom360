import React, { useState, useContext } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { CartContext } from "../Context/CartContext"; // Import Cart Context

const IngredientDetail = ({ route }) => {
  const { product } = route.params;
  const navigation = useNavigation();
  const { cart, addToCart } = useContext(CartContext); // Use global cart state

  const isAddedToCart = cart.some((item) => item.id === product.id); // Check if in cart

  // Convert price string (e.g., "₹19.99") to a numeric value
  const productPrice = parseFloat(product.price.replace(/[^\d.]/g, "")) || 0;

  return (
    <View style={styles.container}>
      <Image source={product.image} style={styles.image} />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <Text style={styles.price}>₹{productPrice.toFixed(2)}</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={[styles.button, styles.buyNowButton]} 
          onPress={() => navigation.navigate("Buy", { product })}
        >
          <Text style={styles.buttonText}>Buy Now</Text>
        </TouchableOpacity>

        {isAddedToCart ? (
          <TouchableOpacity 
            style={[styles.button, styles.goToCartButton]} 
            onPress={() => navigation.navigate("Cart")}
          >
            <Text style={styles.buttonText}>Go to Cart</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity 
            style={[styles.button, styles.addToCartButton]} 
            onPress={() => addToCart({ ...product, price: productPrice })} // Store price as number
          >
            <Text style={styles.buttonText}>Add to Cart</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", padding: 20, backgroundColor: "#fff" },
  image: { width: 250, height: 250, borderRadius: 10, marginBottom: 10 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 5 },
  description: { fontSize: 16, textAlign: "center", marginBottom: 5, color: "#555" },
  price: { fontSize: 20, fontWeight: "bold", color: "green", marginBottom: 15 },
  buttonContainer: { flexDirection: "row", gap: 10 },
  button: { flex: 1, padding: 15, borderRadius: 8, alignItems: "center" },
  addToCartButton: { backgroundColor: "#FFA41B" },
  goToCartButton: { backgroundColor: "#2ECC71" }, // Green when added
  buyNowButton: { backgroundColor: "#FB641B" },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
});

export default IngredientDetail;
