import { ScrollView, StyleSheet, Text, View , SafeAreaView } from 'react-native'
import React from 'react'
import Carousel from '../Components/Carousel'
import RecommendedProducts from '../Components/RecommendedProducts'
import PurchasedCards from '../Components/PurchasedCards'
import Sponsered from '../Components/Sponsered'
import SamsungS25Series from '../Components/SamsungS25Series'
import SeasonsTopTrends from '../Components/SeasonTopTrends'
import SearchingBar from '../Components/SearchingBar'
import TopSaleDeals from '../Screens/TopSasleDeals'
import AlteredProductSlide1 from '../Components/AlteredProductSlide1'
import CategoryGrid from '../Screens/CategoryGrid'





const HomeScreen = ({navigation}) => {
  return (
    
<ScrollView>

<SearchingBar />
    
    <Carousel navigation={navigation} />
    <CategoryGrid navigation={navigation} />
    <RecommendedProducts navigation={navigation} />
    <PurchasedCards navigation={navigation} />
    <Sponsered navigation={navigation} />
    <SamsungS25Series navigation={navigation} />
    <SeasonsTopTrends navigation={navigation} />
    <TopSaleDeals navigation={navigation} />
    <AlteredProductSlide1 navigation={navigation} />
    
    
</ScrollView>
    
   
    
    
    
    
  )
}

export default HomeScreen

const styles = StyleSheet.create({})