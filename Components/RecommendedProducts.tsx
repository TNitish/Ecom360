import React from "react";
import { useState,useEffect } from "react";
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from "react-native";

const RecommendedProducts = ({ navigation }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      fetch('https://f387-59-97-51-97.ngrok-free.app/Store/Product/') // Replace with your actual API URL
        .then(response => response.json())
        .then(data => {
          if (data) {
            setProducts(data);
          }
        })
        .catch(error => console.error('Error fetching data:', error));
    }, []);
  

    const renderProduct = ({ item }) => (
        <TouchableOpacity style={styles.proCard} onPress={() => navigation.navigate('ProductList', { Category: item.category })}>
            <Image source={item.image} style={styles.img} />
            <Text style={styles.categoryText}>{item.name}</Text>
            <Text style={styles.rateText}>Starts from {item.price}</Text>
            <Text style={styles.offerText}>Upto {item.offer} off 🤩</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Recommended Categories for You</Text>
            <Text style={styles.subtitle}>Based on Your Activity</Text>
            <FlatList 
                data={products}
                renderItem={renderProduct}
                keyExtractor={(item) => item.id.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        paddingHorizontal: 10,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    subtitle: {
        fontSize: 17,
        fontWeight: '700',
        marginBottom: 10,
    },
    proCard: {
        marginHorizontal: 10,
        height: 200,
        width: 140,
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
    },
    img: {
        height: 110,
        width: '100%',
        borderRadius: 5,
        resizeMode: 'cover',
    },
    categoryText: {
        fontWeight: '700',
        fontSize: 14,
        marginTop: 5,
        color: '#333',
    },
    rateText: {
        fontWeight: '400',
        fontSize: 12,
        marginTop: 2,
        color: '#666',
    },
    offerText: {
        fontWeight: '700',
        fontSize: 12,
        marginTop: 2,
        color: '#e74c3c',
    },
});

export default RecommendedProducts;
