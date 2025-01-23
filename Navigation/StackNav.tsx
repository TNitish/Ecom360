import React from "react";

import { View,Text } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../Screens/HomeScreen";
import ProductDetails from "../Screens/ProductDetails";
import ProductList from "../Screens/ProductList";
const Stack = createNativeStackNavigator();

const StackNav=()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen}  options={{headerShown:false,title:'Home'}}/>
            <Stack.Screen name="ProductList" component={ProductList} options={{title:"Product List"}}/>
            <Stack.Screen name="ProductDetails" component={ProductDetails} options={{title:"Product Details"}}/>
        </Stack.Navigator>
    )
}
export default StackNav;