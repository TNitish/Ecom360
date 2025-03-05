import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

const products = [
  { id: "1", categoryId: "1", name: "T-Shirt", description: "100% Cotton, Comfortable fit", price: "₹499", originalPrice: "₹999", discount: "50%", rating: "4.5★", stock: "In Stock", brand: "FashionWear", image: require("../Assets/pixel9.jpg") },
  { id: "2", categoryId: "1", name: "Jeans", description: "Slim Fit, Stretchable Denim", price: "₹1499", originalPrice: "₹1999", discount: "25%", rating: "4.2★", stock: "Only 3 left!", brand: "DenimX", image: require("../Assets/pixel9.jpg") },
  { id: "3", categoryId: "2", name: "Smartphone", description: "128GB Storage, AMOLED Display", price: "₹54999", originalPrice: "₹59999", discount: "8%", rating: "4.7★", stock: "In Stock", brand: "TechPro", image: require("../Assets/pixel9.jpg") },
  { id: "4", categoryId: "2", name: "Laptop", description: "16GB RAM, Intel i7 Processor", price: "₹79999", originalPrice: "₹89999", discount: "11%", rating: "4.6★", stock: "Limited Stock", brand: "UltraTech", image: require("../Assets/pixel9.jpg") },
  { id: "5", categoryId: "3", name: "Smart TV", description: "4K HDR, 55-inch Display", price: "₹39999", originalPrice: "₹49999", discount: "20%", rating: "4.8★", stock: "In Stock", brand: "VisionTech", image: require("../Assets/pixel9.jpg") },
  { id: "6", categoryId: "3", name: "Headphones", description: "Noise Cancelling, Bluetooth 5.0", price: "₹2999", originalPrice: "₹3999", discount: "25%", rating: "4.3★", stock: "In Stock", brand: "SoundMax", image: require("../Assets/pixel9.jpg") },
  { id: "7", categoryId: "4", name: "Sofa", description: "Leather, 3-Seater, Comfortable", price: "₹34999", originalPrice: "₹44999", discount: "22%", rating: "4.4★", stock: "Few left", brand: "HomeComfort", image: require("../Assets/pixel9.jpg") },
  { id: "8", categoryId: "4", name: "Dining Table", description: "Wooden, 6-Seater, Premium Finish", price: "₹24999", originalPrice: "₹29999", discount: "17%", rating: "4.6★", stock: "In Stock", brand: "FurniturePro", image: require("../Assets/pixel9.jpg") },
  { id: "9", categoryId: "5", name: "Pizza", description: "Large, Pepperoni, Extra Cheese", price: "₹499", originalPrice: "₹699", discount: "29%", rating: "4.9★", stock: "Available", brand: "FoodieFiesta", image: require("../Assets/pixel9.jpg") },
  { id: "10", categoryId: "5", name: "Burger", description: "Double Patty, Grilled, Spicy", price: "₹249", originalPrice: "₹349", discount: "29%", rating: "4.7★", stock: "Available", brand: "BurgerWorld", image: require("../Assets/pixel9.jpg") },
  { id: "11", categoryId: "6", name: "Scooter", description: "Electric, 100km Range, Eco-Friendly", price: "₹89999", originalPrice: "₹99999", discount: "10%", rating: "4.5★", stock: "In Stock", brand: "EcoRide", image: require("../Assets/pixel9.jpg") },
  { id: "12", categoryId: "6", name: "Motorcycle", description: "250cc, Sporty, ABS Brakes", price: "₹199999", originalPrice: "₹219999", discount: "9%", rating: "4.8★", stock: "Limited Stock", brand: "Speedster", image: require("../Assets/pixel9.jpg") },
  { id: "13", categoryId: "7", name: "Running Shoes", description: "Breathable, Lightweight", price: "₹3999", originalPrice: "₹5999", discount: "33%", rating: "4.6★", stock: "In Stock", brand: "RunX", image: require("../Assets/pixel9.jpg") },
  { id: "14", categoryId: "7", name: "Backpack", description: "Waterproof, Laptop Compartment", price: "₹1999", originalPrice: "₹2999", discount: "33%", rating: "4.5★", stock: "In Stock", brand: "TravelEase", image: require("../Assets/pixel9.jpg") },
  { id: "15", categoryId: "8", name: "Wrist Watch", description: "Analog, Leather Strap", price: "₹4999", originalPrice: "₹7999", discount: "38%", rating: "4.6★", stock: "In Stock", brand: "TimeMaster", image: require("../Assets/pixel9.jpg") },
  { id: "16", categoryId: "8", name: "Sunglasses", description: "UV Protection, Polarized", price: "₹2999", originalPrice: "₹4999", discount: "40%", rating: "4.7★", stock: "Available", brand: "ShadeTech", image: require("../Assets/pixel9.jpg") },
  { id: "17", categoryId: "9", name: "Perfume", description: "Long-lasting, Premium Fragrance", price: "₹1499", originalPrice: "₹2999", discount: "50%", rating: "4.5★", stock: "In Stock", brand: "FragrancePro", image: require("../Assets/pixel9.jpg") },
  { id: "18", categoryId: "9", name: "Makeup Kit", description: "All-in-One, Travel Friendly", price: "₹2999", originalPrice: "₹4999", discount: "40%", rating: "4.7★", stock: "Available", brand: "GlamUp", image: require("../Assets/pixel9.jpg") },
  { id: "19", categoryId: "10", name: "Gaming Mouse", description: "RGB, High DPI", price: "₹2499", originalPrice: "₹3999", discount: "38%", rating: "4.8★", stock: "In Stock", brand: "GameX", image: require("../Assets/pixel9.jpg") },
  { id: "20", categoryId: "10", name: "Mechanical Keyboard", description: "RGB Backlit, Blue Switches", price: "₹5999", originalPrice: "₹8999", discount: "33%", rating: "4.7★", stock: "In Stock", brand: "KeyMaster", image: require("../Assets/pixel9.jpg") },
  { id: "21", categoryId: "11", name: "Gaming Console", description: "Next-gen, 1TB SSD", price: "₹49999", originalPrice: "₹59999", discount: "17%", rating: "4.9★", stock: "In Stock", brand: "GameBox", image: require("../Assets/pixel9.jpg") },
  { id: "22", categoryId: "11", name: "Smart Watch", description: "AMOLED, 7-day Battery", price: "₹14999", originalPrice: "₹19999", discount: "25%", rating: "4.6★", stock: "In Stock", brand: "TimePro", image: require("../Assets/pixel9.jpg") },
  { id: "23", categoryId: "12", name: "Camera", description: "4K, 24MP, Mirrorless", price: "₹79999", originalPrice: "₹89999", discount: "11%", rating: "4.7★", stock: "Limited Stock", brand: "PhotoTech", image: require("../Assets/pixel9.jpg") },
  { id: "24", categoryId: "12", name: "Tripod", description: "Aluminum, Adjustable", price: "₹2499", originalPrice: "₹3999", discount: "37%", rating: "4.5★", stock: "In Stock", brand: "StableShot", image: require("../Assets/pixel9.jpg") },
  { id: "25", categoryId: "13", name: "Tablet", description: "10.5-inch, 128GB", price: "₹34999", originalPrice: "₹39999", discount: "12%", rating: "4.6★", stock: "In Stock", brand: "TabX", image: require("../Assets/pixel9.jpg") },

{ id: "26", categoryId: "13", name: "Portable Speaker", description: "Bluetooth, Waterproof", price: "₹5999", originalPrice: "₹7999", discount: "25%", rating: "4.7★", stock: "Available", brand: "SoundWave", image: require("../Assets/pixel9.jpg") },

{ id: "27", categoryId: "14", name: "Air Purifier", description: "HEPA, Smart Control", price: "₹9999", originalPrice: "₹12999", discount: "23%", rating: "4.6★", stock: "In Stock", brand: "FreshAir", image: require("../Assets/pixel9.jpg") },

{ id: "28", categoryId: "14", name: "Electric Kettle", description: "1.5L, Stainless Steel", price: "₹1999", originalPrice: "₹2999", discount: "33%", rating: "4.5★", stock: "In Stock", brand: "BoilEase", image: require("../Assets/pixel9.jpg") },

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
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("Ingredients", { product: item })}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.details}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.brand}>Brand: {item.brand}</Text>
              <Text style={styles.description}>{item.description}</Text>
              <View style={styles.priceContainer}>
                <Text style={styles.discountedPrice}>{item.price}</Text>
                <Text style={styles.originalPrice}>{item.originalPrice}</Text>
                <Text style={styles.discount}>{item.discount} OFF</Text>
              </View>
              <Text style={styles.rating}>{item.rating}</Text>
              <Text style={styles.stock}>{item.stock}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8f8f8', padding: 10 },
  heading: { fontSize: 20, fontWeight: 'bold', marginBottom: 10, textAlign: 'center', color: '#333' },
  card: { flexDirection: 'row', backgroundColor: '#fff', borderRadius: 10, padding: 15, marginBottom: 10, elevation: 3, alignItems: 'center' },
  image: { width: 100, height: 120, borderRadius: 10, marginRight: 10 },
  details: { flex: 1 },
  name: { fontSize: 16, fontWeight: 'bold', color: '#222' },
  brand: { fontSize: 14, color: '#777' },
  description: { fontSize: 14, color: '#555', marginVertical: 5 },
  priceContainer: { flexDirection: 'row', alignItems: 'center', gap: 5 },
  discountedPrice: { fontSize: 16, fontWeight: 'bold', color: '#000' },
  originalPrice: { fontSize: 14, textDecorationLine: 'line-through', color: '#888' },
  discount: { fontSize: 14, color: 'red', fontWeight: 'bold' },
  rating: { fontSize: 14, color: '#ff8c00' },
  stock: { fontSize: 14, color: '#008000', fontWeight: 'bold' },
});

export default ProductListScreen;
