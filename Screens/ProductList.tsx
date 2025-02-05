import { ScrollView, StyleSheet, Text, View } from 'react-native'
import AlteredProductSlide1 from '../Components/AlteredProductSlide1'
import Laptop from '../Components/Laptop'
import React from 'react'
import TopSaleDeals from '../Screens/TopSasleDeals'
import Dress from '../Screens/Dress'
import BestQuality from '../Components/BestQuality'

import ValentineSpecial from '../Components/ValentineSpecial'
import Mini from '../Screens/Mini'

const ProductList = () => {
  return (
    <ScrollView>
        <AlteredProductSlide1 navigation={undefined} />
        <TopSaleDeals/>
        <Dress />
        <BestQuality />
        <ValentineSpecial />
        <Mini />      
        
    </ScrollView>
  )
}

export default ProductList

const styles = StyleSheet.create({})