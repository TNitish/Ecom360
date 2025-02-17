import React, { useContext } from "react";
import { View, Text, Button, FlatList } from "react-native";
import { CartContext } from "../Context/CartContext";

// Sample Product Data
const sampleProducts = [
  { id: "1", name: "iPhone 14", price: 999 },
  { id: "2", name: "Samsung Galaxy S23", price: 849 },
  { id: "3", name: "Google Pixel 7", price: 599 },
  { id: "4", name: "OnePlus 11", price: 699 },
];

const ProductScreen = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>📱 Products</Text>
      
      <FlatList
        data={sampleProducts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingVertical: 10,
              borderBottomWidth: 1,
              borderBottomColor: "#ddd",
            }}
          >
            <Text style={{ fontSize: 18 }}>{item.name} - ${item.price}</Text>
            <Button title="Add to Cart" onPress={() => addToCart(item)} />
          </View>
        )}
      />
    </View>
  );
};

export default ProductScreen;
