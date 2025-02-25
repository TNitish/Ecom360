import React, { useContext } from "react";
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from "react-native";
import { CartContext } from "../Context/CartContext";

const CartScreen = ({ navigation }) => {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart, totalPrice } = useContext(CartContext);

  return (
    <View style={styles.container}>
      {cart.length === 0 ? (
        <View style={styles.emptyCartContainer}>
          <Text style={styles.emptyCartText}>Your cart is empty!</Text>
          <TouchableOpacity style={styles.shopNowButton} onPress={() => navigation.navigate("Home")}>
            <Text style={styles.shopNowText}>Shop Now</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <>
          <FlatList
            data={cart}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.cartItem}>
                <Image source={item.image} style={styles.image} />
                <View style={styles.details}>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.price}>₹{item.price} x {item.quantity} = ₹{item.price * item.quantity}</Text>
                  
                  {/* Quantity Controls */}
                  <View style={styles.quantityControl}>
                    <TouchableOpacity onPress={() => decreaseQuantity(item.id)} style={styles.button}>
                      <Text style={styles.buttonText}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.quantity}>{item.quantity}</Text>
                    <TouchableOpacity onPress={() => increaseQuantity(item.id)} style={styles.button}>
                      <Text style={styles.buttonText}>+</Text>
                    </TouchableOpacity>
                  </View>

                  {/* Remove Item Button */}
                  <TouchableOpacity onPress={() => removeFromCart(item.id)} style={styles.removeButton}>
                    <Text style={styles.removeButtonText}>Remove</Text>
                  </TouchableOpacity>

                  {/* Buy Now Button */}
                  <TouchableOpacity 
                    style={styles.buyNowButton} 
                    onPress={() => navigation.navigate("Buy", { product: item })}
                  >
                    <Text style={styles.buyNowText}>Buy Now</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          />

          {/* Total Amount */}
          <View style={styles.totalContainer}>
            <Text style={styles.totalText}>Total: ₹{totalPrice}</Text>
            <TouchableOpacity style={styles.checkoutButton} onPress={() => navigation.navigate("Buy")}>
              <Text style={styles.checkoutText}>Proceed to Checkout</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f8f8f8", padding: 10 },
  emptyCartContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
  emptyCartText: { fontSize: 18, fontWeight: "bold", color: "#555" },
  shopNowButton: { backgroundColor: "blue", padding: 10, marginTop: 10, borderRadius: 5 },
  shopNowText: { color: "#fff", fontSize: 16 },

  cartItem: { 
    flexDirection: "row", 
    backgroundColor: "#fff", 
    padding: 10, 
    borderRadius: 8, 
    marginBottom: 10,
    alignItems: "center",
  },
  image: { width: 80, height: 80, borderRadius: 10 },
  details: { flex: 1, marginLeft: 10 },

  name: { fontSize: 14, fontWeight: "bold", color: "#333" },
  price: { fontSize: 14, color: "#000", marginVertical: 4 },

  quantityControl: { flexDirection: "row", alignItems: "center", marginTop: 5 },
  button: { backgroundColor: "#ddd", padding: 5, borderRadius: 5, marginHorizontal: 5 },
  buttonText: { fontSize: 18, fontWeight: "bold" },
  quantity: { fontSize: 16, fontWeight: "bold", color: "#333" },

  removeButton: { 
    marginTop: 10, 
    backgroundColor: "red", 
    paddingVertical: 8, 
    paddingHorizontal: 12, 
    borderRadius: 5, 
    alignSelf: "flex-start"
  },
  removeButtonText: { 
    color: "#fff", 
    fontSize: 14, 
    textAlign: "center", 
    fontWeight: "bold"
  },

  buyNowButton: { 
    marginTop: 10, 
    backgroundColor: "#ff6f00", 
    paddingVertical: 8, 
    paddingHorizontal: 12, 
    borderRadius: 5, 
    alignSelf: "flex-start"
  },
  buyNowText: { 
    color: "#fff", 
    fontSize: 14, 
    textAlign: "center", 
    fontWeight: "bold"
  },

  totalContainer: { backgroundColor: "#fff", padding: 10, borderRadius: 8, marginTop: 10 },
  totalText: { fontSize: 18, fontWeight: "bold" },
  checkoutButton: { backgroundColor: "green", padding: 10, marginTop: 10, borderRadius: 5, alignItems: "center" },
  checkoutText: { color: "#fff", fontSize: 16 },
});

export default CartScreen;
