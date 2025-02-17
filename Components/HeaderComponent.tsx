import React, { useContext, useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { CartContext } from "../Context/CartContext";

const sampleProduct = {
  id: "1",
  name: "iPhone 14",
  price: 999,
  description: "128GB, Midnight Black - Experience the power of Apple's latest smartphone.",
  image: require("../Assets/iphone14.jpg"),
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
    <ScrollView style={styles.container}>
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
        <TouchableOpacity style={styles.buyNowButton}>
          <Text style={styles.buttonText}>Buy Now</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },
  productImage: {
    width: "100%",
    height: 300,
    resizeMode: "contain",
    backgroundColor: "#fff",
  },
  detailsContainer: {
    padding: 15,
    backgroundColor: "#fff",
    marginBottom: 10,
  },
  productName: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#e60000",
    marginVertical: 5,
  },
  description: {
    fontSize: 16,
    color: "#666",
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding: 15,
    backgroundColor: "#fff",
  },
  addToCartButton: {
    backgroundColor: "#ff9f00",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  goToCartButton: {
    backgroundColor: "#2874F0",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  buyNowButton: {
    backgroundColor: "#fb641b",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
});

export default HeaderComponent;
