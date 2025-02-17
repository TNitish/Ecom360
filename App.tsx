import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import BottomTab from './Navigation/BottomTab'
import { CartProvider } from "./Context/CartContext";

const App = () => {
  return (
    <CartProvider>
   <NavigationContainer>
     <BottomTab />
   </NavigationContainer>
   </CartProvider>

  )
}

export default App