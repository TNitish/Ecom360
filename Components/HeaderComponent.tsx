import React from "react";

import { View,Text } from "react-native";

const HeaderComponent=()=>{
    return(
        <View style={{backgroundColor:"#f8f9fa",padding:10,height:60,alignItems:"center",justifyContent:"center"}}>
            <Text style={{fontSize:24,fontWeight:"bold"}}>ECOM360</Text>
        </View>
    )
}
export default HeaderComponent