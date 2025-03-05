import React, { useContext } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { CartContext } from "../Context/CartContext";

const IngredientDetail = ({ route }) => {
  const { product } = route.params;
  const navigation = useNavigation();
  const { cart, addToCart } = useContext(CartContext);

  const isAddedToCart = cart.some((item) => item.id === product.id);
  const originalPrice = parseFloat(product.originalPrice.replace(/[^\d.]/g, "")) || 0;
  const discountPrice = parseFloat(product.price.replace(/[^\d.]/g, "")) || 0;
  const discountPercentage = ((originalPrice - discountPrice) / originalPrice) * 100;

  return (
    <ScrollView style={styles.container}>
      <Image source={product.image} style={styles.image} />
      
      <View style={styles.infoContainer}>
        <Text style={styles.brand}>{product.brand}</Text>
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.rating}>{product.rating} | {product.stock}</Text>
      </View>
      
      <View style={styles.priceContainer}>
        <Text style={styles.discountPrice}>₹{discountPrice.toFixed(2)}</Text>
        <Text style={styles.originalPrice}>₹{originalPrice.toFixed(2)}</Text>
        <Text style={styles.discountText}>{discountPercentage.toFixed(0)}% OFF</Text>
      </View>
      
      <Text style={styles.description}>{product.description}</Text>
      
      <View style={styles.deliveryContainer}>
        <Text style={styles.deliveryText}>Free Delivery by Tomorrow</Text>
      </View>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.buyNowButton]} onPress={() => navigation.navigate("Buy", { product })}>
          <Text style={styles.buttonText}>Buy Now</Text>
        </TouchableOpacity>
        
        {isAddedToCart ? (
          <TouchableOpacity style={[styles.button, styles.goToCartButton]} onPress={() => navigation.navigate("Cart")}>
            <Text style={styles.buttonText}>Go to Cart</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={[styles.button, styles.addToCartButton]} onPress={() => addToCart({ ...product, price: discountPrice })}>
            <Text style={styles.buttonText}>Add to Cart</Text>
          </TouchableOpacity>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  image: { width: "100%", height: 300, resizeMode: "contain" },
  infoContainer: { padding: 15 },
  brand: { fontSize: 16, color: "#888" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 5 },
  rating: { fontSize: 16, color: "green", marginBottom: 5 },
  priceContainer: { flexDirection: "row", alignItems: "center", paddingHorizontal: 15, marginBottom: 10 },
  discountPrice: { fontSize: 22, fontWeight: "bold", color: "green", marginRight: 5 },
  originalPrice: { fontSize: 18, color: "#888", textDecorationLine: "line-through", marginRight: 5 },
  discountText: { fontSize: 18, fontWeight: "bold", color: "#D9534F" },
  description: { fontSize: 16, color: "#555", paddingHorizontal: 15, marginBottom: 10 },
  deliveryContainer: { backgroundColor: "#E3F2FD", padding: 10, marginHorizontal: 15, borderRadius: 5 },
  deliveryText: { fontSize: 16, fontWeight: "bold", color: "#0277BD" },
  buttonContainer: { flexDirection: "row", gap: 10, padding: 15 },
  button: { flex: 1, padding: 15, borderRadius: 8, alignItems: "center" },
  addToCartButton: { backgroundColor: "#FFA41B" },
  goToCartButton: { backgroundColor: "#2ECC71" },
  buyNowButton: { backgroundColor: "#FB641B" },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
});

export default IngredientDetail;
