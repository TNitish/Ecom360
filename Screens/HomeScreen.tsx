import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Carousel from '../Components/Carousel'
import HeaderComponent from '../Components/HeaderComponent'
import RecommendedProducts from '../Components/RecommendedProducts'
const HomeScreen = ({navigation}) => {
  return (
    <>
    <HeaderComponent/>
    <Carousel navigation={navigation}/>
    <RecommendedProducts navigation={navigation}/>
    </>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})