import React, { useContext, useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { CartContext } from "../Context/CartContext";

const sampleProduct = {
  id: "3",
  name: "iPhone 14",
  price: 999,
  description: "128GB, Midnight Black - Experience the power of Apple's latest smartphone.",
  image: require("../Assets/iphone14.jpg"),
  features: [
    "6.1-inch Super Retina XDR Display",
    "A15 Bionic Chip for Lightning-fast Performance",
    "Advanced Dual-Camera System (12MP Main + 12MP Ultra Wide)",
    "Cinematic Mode for 4K Dolby Vision Recording",
    "All-Day Battery Life",
  ],
  specifications: [
    { key: "Brand", value: "Apple" },
    { key: "Model", value: "iPhone 14" },
    { key: "Display", value: "6.1-inch OLED" },
    { key: "Processor", value: "A15 Bionic Chip" },
    { key: "RAM", value: "6GB" },
    { key: "Storage", value: "128GB" },
    { key: "Battery", value: "3,279mAh" },
    { key: "Charging", value: "20W Fast Charging" },
    { key: "OS", value: "iOS 16" },
  ],
};

const HeaderComponent = ({ navigation }) => {
  const { addToCart, cart } = useContext(CartContext);
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    const foundItem = cart.some((item) => item.id === sampleProduct.id);
    setIsInCart(foundItem);
  }, [cart]);

  const handleAddToCart = () => {
    addToCart(sampleProduct);
  };

  return (
    <ScrollView style={styles.container} nestedScrollEnabled={true}>
      {/* Product Image */}
      <Image source={sampleProduct.image} style={styles.productImage} />

      {/* Product Details */}
      <View style={styles.detailsContainer}>
        <Text style={styles.productName}>{sampleProduct.name}</Text>
        <Text style={styles.price}>₹{sampleProduct.price}</Text>
        <Text style={styles.description}>{sampleProduct.description}</Text>
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
        <TouchableOpacity style={styles.buyNowButton} onPress={() => navigation.navigate("Buy")}>
          <Text style={styles.buttonText}>Buy Now</Text>
        </TouchableOpacity>
      </View>

      {/* Features Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Key Features</Text>
        {sampleProduct.features.map((feature, index) => (
          <Text key={index} style={styles.listItem}>• {feature}</Text>
        ))}
      </View>

      {/* Specifications Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Specifications</Text>
        {sampleProduct.specifications.map((spec, index) => (
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

export default HeaderComponent;
