import React, { createContext, useState } from 'react';

export const CartContext = createContext(); // Create Context

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]); // Store cart items

  // Add item to cart
   const  addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        // If item exists, increase quantity
        return prevItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        // Otherwise, add it as a new item
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  // Remove item from cart
  const removeFromCart = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.filter((cartItem) => cartItem.id !== itemId)
    );
  };

  // Update quantity
  const updateQuantity = (itemId, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((cartItem) =>
        cartItem.id === itemId ? { ...cartItem, quantity } : cartItem
      )
    );
  };

  // Calculate total price
  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  // Calculate total number of items
  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        getTotalPrice,
        getTotalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
