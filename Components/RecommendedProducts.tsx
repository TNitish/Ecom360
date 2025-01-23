import React from "react";

import { View,Text,FlatList,Image,StyleSheet, TouchableOpacity } from "react-native";

const RecommendedProducts=({navigation})=>{
    const Products=[
        {
            id:1,
            category:"Mobiles",
            image:require('../Assets/ecommerceimgone.jpg'),
            rate:'₹145',
            ratings:'4.5',
            offers:'10%'

        },
        {
            id:2,
            category:"Shoes",
            image:require('../Assets/ecommerceimgtwo.jpg'),
            rate:'₹195',
            ratings:'3.9',
            offers:'24%'

        },

        {
            id:3,
            category:"Mens",
            image:require('../Assets/ecommerceimgthree.jpg'),
            rate:'₹145',
            ratings:'4.1',
            offers:'20%'


        },
        {
            id:4,
            category:"Slippers",
            image:require('../Assets/ecommerceimgtwo.jpg'),
            rate:'₹185',
            ratings:'4.3',
            offers:'25%'


        },
    ]
    const renderProduct=({item,index})=>{
            return(
                <TouchableOpacity style={styles.proCard} onPress={()=>navigation.navigate('ProductList',{Category:item.category})}>
                    <Image source={item.image} style={styles.img}/>
                    <Text style={{fontWeight:'700',marginTop:2}}>{item.category}</Text>
                    <Text style={{fontWeight:'400',marginTop:2}}>Starts from {item.rate}</Text>
                    <Text style={{fontWeight:'700',marginTop:2}}>upto {item.offers}offers 🤩</Text>
                </TouchableOpacity>
            )
        }
    return(
        <View style={{marginTop:20}}>
        <Text style={{marginHorizontal:10, fontSize:22,fontWeight:'bold'}}>Recommended Categories for you</Text>
        <Text style={{marginHorizontal:10, fontSize:17,fontWeight:'700'}}>Based On Your Activity</Text>
        <FlatList 
        data={Products}
        renderItem={renderProduct}
        keyExtractor={(item)=>item.id}
        horizontal={true}
        />
        </View>

    )
}
const styles=StyleSheet.create({
    proCard:{
        flex:1,
        marginTop:20,
        marginHorizontal:20,
        height:180,
        width:120,
        backgroundColor:'white',
        borderRadius:5,
    },
    img:{
        height:100,
        width:120,
        objectFit:'cover',
    }
})

export default RecommendedProducts