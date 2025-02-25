import React from "react";

import { View,Text } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../Screens/HomeScreen";
import ProductDetails from "../Screens/ProductDetails";
import ProductList from "../Screens/ProductListScreen";
import ProductScreen from "../Screens/ProductListScreen";
import MensFootwear from "../Screens/SponseredList";
import S25ultra from "../Screens/S25ultra";
import HeaderComponent from "../Components/HeaderComponent";
import HeaderComponent2 from "../Components/HeaderComponent2";
import Mini from "../Screens/Mini";
import Laptop from "../Components/Laptop";
import CarsoulProductList from "../Screens/CarsoulProductList";
import LocationFinder from "../Location/LocationFinder";
import BuySection from "../BuySectionn/BuySection";
import HelpCenter from "../Screens/HelpCenter";

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
            <Stack.Screen name="HeaderComponent" component={HeaderComponent}/>
            <Stack.Screen name="mini" component={Mini} />
            <Stack.Screen name="Lap" component={Laptop} />
            <Stack.Screen name="HeaderComponent2" component={HeaderComponent2} />
            <Stack.Screen name="CarsoulProd" component={CarsoulProductList} />
            <Stack.Screen name="Location" component={LocationFinder} />
            <Stack.Screen name="Buy" component={BuySection} />
            <Stack.Screen name="HelpCenter" component={HelpCenter} />
            

         </Stack.Navigator>
    )
}
export default StackNav;