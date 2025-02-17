import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Carousel from '../Components/Carousel'
import HeaderComponent from '../Components/HeaderComponent'
import RecommendedProducts from '../Components/RecommendedProducts'

import PurchasedCards from '../Components/PurchasedCards'
import Sponsered from '../Components/Sponsered'
import SamsungS25Series from '../Components/SamsungS25Series'
import SeasonsTopTrends from '../Components/SeasonTopTrends'
import SearchingBar from '../Components/SearchingBar'


const HomeScreen = ({navigation}) => {
  return (
    <ScrollView>
    <HeaderComponent/>
    <SearchingBar/>
    <Carousel navigation={navigation}/>
    <RecommendedProducts navigation={navigation}/>
    
    <PurchasedCards navigation={navigation}/>
    <Sponsered navigation={navigation}/>
    <SamsungS25Series navigation={navigation}/>
    <SeasonsTopTrends navigation={navigation}/>
    
  
    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})