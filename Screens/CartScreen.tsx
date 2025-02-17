import React, { useContext } from "react";
import { View, Text, Button, FlatList } from "react-native";
import { CartContext } from "../Context/CartContext";

const CartScreen = () => {
  const { cart, increaseQuantity, decreaseQuantity, totalPrice } = useContext(CartContext);

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>🛒 Cart</Text>

      {cart.length === 0 ? (
        <Text>Your cart is empty.</Text>
      ) : (
        <>
          <FlatList
            data={cart}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingVertical: 10,
                  borderBottomWidth: 1,
                  borderBottomColor: "#ddd",
                }}
              >
                <Text style={{ fontSize: 18 }}>
                  {item.name} - ${item.price} x {item.quantity}
                </Text>

                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Button title="➖" onPress={() => decreaseQuantity(item.id)} />
                  <Text style={{ marginHorizontal: 10 }}>{item.quantity}</Text>
                  <Button title="➕" onPress={() => increaseQuantity(item.id)} />
                </View>
              </View>
            )}
          />

          <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 20 }}>
            Total: ${totalPrice.toFixed(2)}
          </Text>
        </>
      )}
    </View>
  );
};

export default CartScreen;
