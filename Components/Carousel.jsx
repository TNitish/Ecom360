import React from "react";

import { View,Text, FlatList, Image,StyleSheet,Dimensions,TouchableOpacity } from "react-native";

import { useState,useRef,useEffect } from "react";


const Carousel=({navigation})=>{
    const flatListRef=useRef();
    const [activeIndex,setActiveIndex]=useState(0);
    const screenWidth=Dimensions.get('window').width;
    const carouselData=[
    {
        id:"1",
        image:require('../Assets/ecommerceimgone.jpg'),
     },
     {
        id:"2",
        image:require('../Assets/ecommerceimgtwo.jpg')

     },
     {
        id:"3",
        image:require('../Assets/ecommerceimgthree.jpg')
     },
     {
        id:"4",
        image:require('../Assets/ecommerceimgone.jpg'),
     },
     {
        id:"5",
        image:require('../Assets/ecommerceimgtwo.jpg')

     },
     {
        id:"6",
        image:require('../Assets/ecommerceimgthree.jpg')
     },
    ];
    useEffect(()=>{
       let interval= setInterval(()=>{
            if (activeIndex===carouselData.length-1) {
                flatListRef.current.scrollToIndex({
                    index:0,
                    animation:true,
                })
            }
            else{
                flatListRef.current.scrollToIndex({
                    index:activeIndex+1,
                    animation:true,
                })
            }
        },2000);
        return ()=> clearInterval(interval)
    })
    const getItemLayout=(data,index)=>({
        length:screenWidth,
        offset:screenWidth*index,
        index:index,
    })
    


    const handleScroll=(event)=>{
        const scrollPosition=event.nativeEvent.contentOffset.x;
        const index=Math.round(scrollPosition/screenWidth);
        setActiveIndex(index)
        
    }

    const renderItem=({item,index})=>{
        return(
            <TouchableOpacity onPress={()=>navigation.navigate('ProductDetails')}>
                <Image source={item.image} style={{height:200,width:screenWidth}}/>
            </TouchableOpacity>
        )
    }

const renderDotIndicator=()=>{
    return carouselData.map((dot,index)=>{
        if(activeIndex===index)
        {
            return(
                <View key={index} style={{width:10,
                    height:10,
                    backgroundColor:"blue",
                    borderRadius:50,
                marginHorizontal:6}}></View>
            )}
            else
            {
                return(
                    <View key={index} style={{width:10,
                        height:10,
                        backgroundColor:"red",
                        borderRadius:50,
                        marginHorizontal:6}}></View>
                )
            }
        })
}
   

    return(
        <View>
        <FlatList 
        data={carouselData}
        ref={flatListRef} 
        getItemLayout={getItemLayout}
        keyExtractor={(item)=>item.id}
        renderItem={renderItem}
        horizontal={true}
        pagingEnabled={true}
        onScroll={handleScroll}
        />
        <View style={{flex:1,
            flexDirection:"row",
            justifyContent:"center",
            alignItems:"center",
            marginTop:10}}>
        {renderDotIndicator()}
        </View>
        </View>
    )
}


export default Carousel