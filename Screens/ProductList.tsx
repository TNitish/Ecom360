import { ScrollView, StyleSheet, Text, View } from 'react-native'
import AlteredProductSlide1 from '../Components/AlteredProductSlide1'
import Laptop from '../Components/Laptop'
import React from 'react'
import TopSaleDeals from '../Screens/TopSasleDeals'
import Dress from '../Screens/Dress'
import BestQuality from '../Components/BestQuality'

import ValentineSpecial from '../Components/ValentineSpecial.jsx'

const ProductList = () => {
  return (
    <ScrollView>
        
        <BestQuality />
        <AlteredProductSlide1 navigation={undefined} />
        <TopSaleDeals/>
        <Laptop />
        <Dress />
        <ValentineSpecial />
    </ScrollView>
  )
}

export default ProductList

const styles = StyleSheet.create({})