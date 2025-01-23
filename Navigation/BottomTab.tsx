import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import StackNav from './StackNav';
import CartScreen from '../Screens/CartScreen';
import Wishlist from '../Screens/Wishlist';
import Orders from '../Screens/Orders';
const Tabs=createBottomTabNavigator();

const BottomTab = () => {
  return (
   <Tabs.Navigator >
     <Tabs.Screen name="Home" component={StackNav} options={{headerShown:false}} />
     <Tabs.Screen name="Wishlist" component={Wishlist} />
     <Tabs.Screen name="Cart" component={CartScreen} />
     <Tabs.Screen name="Orders" component={Orders} />

   </Tabs.Navigator>
  )
}

export default BottomTab

const styles = StyleSheet.create({})