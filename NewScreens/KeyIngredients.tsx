import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';

const products = [
  { id: "1", categoryId: "1", name: "T-Shirt", description: "100% Cotton, Comfortable fit", price: "₹499", image: require("../Assets/pixel9.jpg") },
  { id: "2", categoryId: "1", name: "Jeans", description: "Slim Fit, Stretchable Denim", price: "₹1499", image: require("../Assets/pixel9.jpg") },
  { id: "3", categoryId: "2", name: "Smartphone", description: "128GB Storage, AMOLED Display", price: "₹54999", image: require("../Assets/pixel9.jpg") },
  { id: "4", categoryId: "2", name: "Laptop", description: "16GB RAM, Intel i7 Processor", price: "₹79999", image: require("../Assets/pixel9.jpg") },
  { id: "5", categoryId: "3", name: "Smart TV", description: "4K HDR, 55-inch Display", price: "₹39999", image: require("../Assets/pixel9.jpg") },
  { id: "6", categoryId: "3", name: "Headphones", description: "Noise Cancelling, Bluetooth 5.0", price: "₹2999", image: require("../Assets/pixel9.jpg") },
  { id: "7", categoryId: "4", name: "Sofa", description: "Leather, 3-Seater, Comfortable", price: "₹34999", image: require("../Assets/pixel9.jpg") },
  { id: "8", categoryId: "4", name: "Dining Table", description: "Wooden, 6-Seater, Premium Finish", price: "₹24999", image: require("../Assets/pixel9.jpg") },
  { id: "9", categoryId: "5", name: "Pizza", description: "Large, Pepperoni, Extra Cheese", price: "₹499", image: require("../Assets/pixel9.jpg") },
  { id: "10", categoryId: "5", name: "Burger", description: "Double Patty, Grilled, Spicy", price: "₹249", image: require("../Assets/pixel9.jpg") },
  { id: "11", categoryId: "6", name: "Scooter", description: "Electric, 100km Range, Eco-Friendly", price: "₹89999", image: require("../Assets/pixel9.jpg") },
  { id: "12", categoryId: "6", name: "Motorcycle", description: "250cc, Sporty, ABS Brakes", price: "₹199999", image: require("../Assets/pixel9.jpg") },
  { id: "13", categoryId: "7", name: "iPhone", description: "256GB Storage, Super Retina Display", price: "₹119999", image: require("../Assets/pixel9.jpg") },
  { id: "14", categoryId: "7", name: "Samsung Galaxy", description: "128GB Storage, 108MP Camera", price: "₹79999", image: require("../Assets/pixel9.jpg") },
  { id: "15", categoryId: "8", name: "Washing Machine", description: "Front Load, 6kg Capacity", price: "₹27999", image: require("../Assets/pixel9.jpg") },
  { id: "16", categoryId: "8", name: "Refrigerator", description: "Double Door, 400L Capacity", price: "₹34999", image: require("../Assets/pixel9.jpg") },
  { id: "17", categoryId: "9", name: "Lipstick", description: "Matte Red, Long Lasting", price: "₹799", image: require("../Assets/pixel9.jpg") },
  { id: "18", categoryId: "9", name: "Perfume", description: "Floral Scent, 100ml", price: "₹2999", image: require("../Assets/pixel9.jpg") },
  { id: "19", categoryId: "10", name: "Dinner Set", description: "16-piece, Bone China", price: "₹4999", image: require("../Assets/pixel9.jpg") },
  { id: "20", categoryId: "10", name: "Bedsheet", description: "King Size, Cotton, Soft Fabric", price: "₹1299", image: require("../Assets/pixel9.jpg") },
  { id: "21", categoryId: "11", name: "Teddy Bear", description: "Soft Plush, 2 Feet", price: "₹999", image: require("../Assets/pixel9.jpg") },
  { id: "22", categoryId: "11", name: "Lego Set", description: "500 Pieces, Creative Play", price: "₹4999", image: require("../Assets/pixel9.jpg") },
  { id: "23", categoryId: "12", name: "Dumbbells", description: "10kg Pair, Rubber Coated", price: "₹1999", image: require("../Assets/pixel9.jpg") },
  { id: "24", categoryId: "12", name: "Football", description: "Official Size, Durable", price: "₹999", image: require("../Assets/pixel9.jpg") },
  { id: "25", categoryId: "13", name: "Novel", description: "Bestseller, Fiction, 300 Pages", price: "₹399", image: require("../Assets/pixel9.jpg") },
  { id: "26", categoryId: "13", name: "Cookbook", description: "Healthy Recipes, 200 Pages", price: "₹999", image: require("../Assets/pixel9.jpg") },
  { id: "27", categoryId: "14", name: "Car Tires", description: "All-Season, Long-Lasting", price: "₹5999", image: require("../Assets/pixel9.jpg") },
  { id: "28", categoryId: "14", name: "Car Battery", description: "High Performance, 5-Year Warranty", price: "₹7999", image: require("../Assets/pixel9.jpg") },
];

const ProductListScreen = ({ route, navigation }) => {
  const { categoryId, categoryName } = route.params;
  const filteredProducts = products.filter(product => product.categoryId === categoryId);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{categoryName} Products</Text>
      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.card} 
            onPress={() => navigation.navigate("Ingredients", { product: item })}
          >
            <Image source={item.image} style={styles.image} />
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <Text style={styles.price}>{item.price}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 10 },
  heading: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  card: { backgroundColor: '#f8f8f8', padding: 10, marginBottom: 10, borderRadius: 10, alignItems: 'center' },
  image: { width: 120, height: 120, borderRadius: 10 },
  title: { fontSize: 16, fontWeight: 'bold', marginTop: 5 },
  description: { fontSize: 12, marginTop: 3 },
  price: { fontSize: 14, fontWeight: 'bold', marginTop: 3 },
});

export default ProductListScreen;
