import React from "react";

import { View,Text } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../Screens/HomeScreen";
import ProductDetails from "../Screens/ProductDetails";
import ProductList from "../Screens/ProductList";
import ProductScreen from "../Screens/ProductList";
import MensFootwear from "../Screens/SponseredList";
import S25ultra from "../Screens/S25ultra";

const Stack = createNativeStackNavigator();

const StackNav=()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen}  options={{headerShown:false,title:'Home'}}/>
            <Stack.Screen name="ProductList" component={ProductList} options={{title:"Product List"}}/>
            <Stack.Screen name="ProductDetails" component={ProductDetails} options={{title:"Product Details"}}/>
            <Stack.Screen name="Product screen" component={ProductScreen} options={{title:"Product Details"}}/>
            <Stack.Screen name="MensFootwear" component={MensFootwear} options={{title:"Mens Footwear"}}/>
            <Stack.Screen name="S25ultra" component={S25ultra} options={{title:"Samsung S25 Ultra"}}/>
         </Stack.Navigator>
    )
}
export default StackNav;