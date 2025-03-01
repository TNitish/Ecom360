import React, { useContext, useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { CartContext } from "../Context/CartContext";

const lapProduct = {
  id: "46",
  name: "Asus VivoBook 15",
  price: 699,
  description: "15.6-inch FHD, Intel Core i5, 8GB RAM, 512GB SSD - Sleek and powerful performance for everyday computing.",
  image: require("../Assets/Lap.jpg"),
  features: [
    "15.6-inch Full HD Display",
    "Intel Core i5 11th Gen Processor",
    "8GB DDR4 RAM, 512GB SSD Storage",
    "Intel UHD Graphics",
    "Lightweight Design with a Premium Finish",
  ],
  specifications: [
    { key: "Brand", value: "Asus" },
    { key: "Model", value: "VivoBook 15" },
    { key: "Display", value: "15.6-inch FHD (1920x1080)" },
    { key: "Processor", value: "Intel Core i5-1135G7" },
    { key: "RAM", value: "8GB DDR4" },
    { key: "Storage", value: "512GB SSD" },
    { key: "Battery", value: "42Wh, up to 6 hours" },
    { key: "Charging", value: "65W Fast Charging" },
    { key: "OS", value: "Windows 11" },
  ],
};

const HeaderComponent2 = ({ navigation }) => {
  const { addToCart, cart } = useContext(CartContext);
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    const foundItem = cart.some((item) => item.id === lapProduct.id);
    setIsInCart(foundItem);
  }, [cart]);

  const handleAddToCart = () => {
    addToCart(lapProduct);
  };

  return (
    <ScrollView style={styles.container} nestedScrollEnabled={true}>
      {/* Product Image */}
      <Image source={lapProduct.image} style={styles.productImage} />

      {/* Product Details */}
      <View style={styles.detailsContainer}>
        <Text style={styles.productName}>{lapProduct.name}</Text>
        <Text style={styles.price}>₹{lapProduct.price}</Text>
        <Text style={styles.description}>{lapProduct.description}</Text>
      </View>

      {/* Buttons */}
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
        <TouchableOpacity style={styles.buyNowButton} onPress={() =>navigation.navigate("Buy")}>
          <Text style={styles.buttonText}>Buy Now</Text>
        </TouchableOpacity>
      </View>

      {/* Features Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Key Features</Text>
        {lapProduct.features.map((feature, index) => (
          <Text key={index} style={styles.listItem}>• {feature}</Text>
        ))}
      </View>

      {/* Specifications Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Specifications</Text>
        {lapProduct.specifications.map((spec, index) => (
          <View key={index} style={styles.specRow}>
            <Text style={styles.specKey}>{spec.key}</Text>
            <Text style={styles.specValue}>{spec.value}</Text>
          </View>
        ))}
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
  description: { fontSize: 16, color: "#666", marginVertical: 10 },

  /* Sections */
  section: { marginTop: 10, padding: 15, backgroundColor: "#fff", marginBottom: 10 },
  sectionTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 5 },
  listItem: { fontSize: 16, color: "#444", marginBottom: 3 },

  /* Specifications */
  specRow: { flexDirection: "row", justifyContent: "space-between", paddingVertical: 5, borderBottomWidth: 0.5, borderBottomColor: "#ddd" },
  specKey: { fontSize: 16, fontWeight: "bold", color: "#555", width: "50%" },
  specValue: { fontSize: 16, color: "#444", width: "50%", textAlign: "right" },

  /* Buttons */
  buttonContainer: { flexDirection: "row", justifyContent: "space-evenly", padding: 15, backgroundColor: "#fff" },
  addToCartButton: { backgroundColor: "#ff9f00", paddingVertical: 12, paddingHorizontal: 30, borderRadius: 5 },
  goToCartButton: { backgroundColor: "#2874F0", paddingVertical: 12, paddingHorizontal: 30, borderRadius: 5 },
  buyNowButton: { backgroundColor: "#fb641b", paddingVertical: 12, paddingHorizontal: 30, borderRadius: 5 },
  buttonText: { color: "#fff", fontWeight: "bold", fontSize: 16, textAlign: "center" },
});

export default HeaderComponent2;
