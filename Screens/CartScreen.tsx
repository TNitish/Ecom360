import React, { useContext, useEffect, useRef } from "react";
import { 
  View, Text, FlatList, Image, TouchableOpacity, StyleSheet, Animated, ScrollView 
} from "react-native";
import { CartContext } from "../Context/CartContext";

const CartScreen = ({ navigation }) => {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart, totalPrice } = useContext(CartContext);

  const moveAnim = useRef(new Animated.Value(0)).current;
  const fallAnim1 = useRef(new Animated.Value(-100)).current;
  const fallAnim2 = useRef(new Animated.Value(-100)).current;
  const fallAnim3 = useRef(new Animated.Value(-100)).current;
  const opacityAnim1 = useRef(new Animated.Value(1)).current;
  const opacityAnim2 = useRef(new Animated.Value(1)).current;
  const opacityAnim3 = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    if (cart.length === 0) {
      Animated.loop(
        Animated.sequence([
          Animated.timing(moveAnim, { toValue: 30, duration: 1500, useNativeDriver: true }),
          Animated.timing(moveAnim, { toValue: -30, duration: 1500, useNativeDriver: true }),
        ])
      ).start();

      Animated.loop(
        Animated.sequence([
          Animated.parallel([
            Animated.timing(fallAnim1, { toValue: 40, duration: 1200, useNativeDriver: true }),
            Animated.timing(opacityAnim1, { toValue: 0, duration: 400, delay: 800, useNativeDriver: true })
          ]),
          Animated.parallel([
            Animated.timing(fallAnim2, { toValue: 50, duration: 1200, useNativeDriver: true }),
            Animated.timing(opacityAnim2, { toValue: 0, duration: 400, delay: 800, useNativeDriver: true })
          ]),
          Animated.parallel([
            Animated.timing(fallAnim3, { toValue: 60, duration: 1200, useNativeDriver: true }),
            Animated.timing(opacityAnim3, { toValue: 0, duration: 400, delay: 800, useNativeDriver: true })
          ]),
          Animated.delay(2000),
          Animated.parallel([
            Animated.timing(fallAnim1, { toValue: -100, duration: 1, useNativeDriver: true }),
            Animated.timing(opacityAnim1, { toValue: 1, duration: 1, useNativeDriver: true }),
            Animated.timing(fallAnim2, { toValue: -100, duration: 1, useNativeDriver: true }),
            Animated.timing(opacityAnim2, { toValue: 1, duration: 1, useNativeDriver: true }),
            Animated.timing(fallAnim3, { toValue: -100, duration: 1, useNativeDriver: true }),
            Animated.timing(opacityAnim3, { toValue: 1, duration: 1, useNativeDriver: true }),
          ]),
        ])
      ).start();
    }
  }, [cart.length]);

  return (
    <View style={styles.container}>
      {cart.length === 0 ? (
        <View style={styles.emptyCartContainer}>
          <Animated.View style={[styles.cartWrapper, { transform: [{ translateX: moveAnim }] }]}>
            <Image source={require("../Assets/cart1.png")} style={styles.cartImage} />
            <Animated.Image 
              source={require("../Assets/3d1.png")} 
              style={[styles.smallImage, styles.image1, { transform: [{ translateY: fallAnim1 }], opacity: opacityAnim1 }]} 
            />
            <Animated.Image 
              source={require("../Assets/3d1.png")} 
              style={[styles.smallImage, styles.image2, { transform: [{ translateY: fallAnim2 }], opacity: opacityAnim2 }]} 
            />
            <Animated.Image 
              source={require("../Assets/3d1.png")} 
              style={[styles.smallImage, styles.image3, { transform: [{ translateY: fallAnim3 }], opacity: opacityAnim3 }]} 
            />
          </Animated.View>
          <Text style={styles.emptyCartText}>Oops! Your cart is empty</Text>
          <Text style={styles.subText}>Add your favorite products now</Text>
          <TouchableOpacity style={styles.shopNowButton} onPress={() => navigation.navigate("Home")}>
            <Text style={styles.shopNowText}>Shop Now</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <FlatList
          data={cart}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.cartItem}>
              <Image source={item.image} style={styles.image} />
              <View style={styles.details}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.price}>₹{item.price} x {item.quantity} = ₹{item.price * item.quantity}</Text>
                
                <View style={styles.quantityControl}>
                  <TouchableOpacity onPress={() => decreaseQuantity(item.id)} style={styles.button}>
                    <Text style={styles.buttonText}>-</Text>
                  </TouchableOpacity>
                  <Text style={styles.quantity}>{item.quantity}</Text>
                  <TouchableOpacity onPress={() => increaseQuantity(item.id)} style={styles.button}>
                    <Text style={styles.buttonText}>+</Text>
                  </TouchableOpacity>
                </View>

                <TouchableOpacity onPress={() => removeFromCart(item.id)} style={styles.removeButton}>
                  <Text style={styles.removeButtonText}>Remove</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
          ListFooterComponent={() => (
            <View style={styles.totalContainer}>
              <Text style={styles.totalText}>Total: ₹{totalPrice}</Text>
              <TouchableOpacity style={styles.checkoutButton} onPress={() => navigation.navigate("Buy")}>
                <Text style={styles.checkoutText}>Proceed to Checkout</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f8f8f8", padding: 10 },
  emptyCartContainer: { flex: 1, justifyContent: "center", alignItems: "center" },

  cartWrapper: { position: "relative" },

  cartImage: { width: 180, height: 180, marginBottom: 20 },

  smallImage: { width: 50, height: 50, position: "absolute" },
  image1: { left: 40 },
  image2: { right: 40 },
  image3: { left: 60 },

  emptyCartText: { fontSize: 20, fontWeight: "bold", color: "#555", marginTop: 10 },
  subText: { fontSize: 14, color: "#777", marginBottom: 10 },

  shopNowButton: { backgroundColor: "#ff6f00", padding: 10, marginTop: 10, borderRadius: 8 },
  shopNowText: { color: "#fff", fontSize: 16 },

  cartItem: { flexDirection: "row", backgroundColor: "#fff", padding: 10, borderRadius: 8, marginBottom: 10 },
  image: { width: 80, height: 80, borderRadius: 10 },
  details: { flex: 1, marginLeft: 10 },

  name: { fontSize: 14, fontWeight: "bold", color: "#333" },
  price: { fontSize: 14, color: "#000", marginVertical: 4 },

  quantityControl: { flexDirection: "row", alignItems: "center", marginTop: 5 },
  button: { backgroundColor: "#ddd", padding: 5, borderRadius: 5, marginHorizontal: 5 },
  buttonText: { fontSize: 18, fontWeight: "bold" },
  quantity: { fontSize: 16, fontWeight: "bold", color: "#333" },

  removeButton: { marginTop: 10, backgroundColor: "red", paddingVertical: 8, borderRadius: 5 ,marginRight:"auto", },
  removeButtonText: { color: "#fff", fontSize: 14, fontWeight: "bold",},

  totalContainer: { backgroundColor: "#fff", padding: 10, borderRadius: 8, marginTop: 10 },
  totalText: { fontSize: 18, fontWeight: "bold" },
  checkoutButton: { backgroundColor: "green", padding: 10, borderRadius: 5 },
  checkoutText: { color: "#fff", fontSize: 16 },
});

export default CartScreen;
