import React from "react";
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from "react-native";

const RecommendedProducts = ({ navigation }) => {
    const Products = [
        { id: 1, category: "Guna", image: require('../Assets/ecommerceimgone.jpg'), rate: '₹145', ratings: '4.5', offers: '10%' },
        { id: 2, category: "Shoes", image: require('../Assets/ecommerceimgtwo.jpg'), rate: '₹195', ratings: '3.9', offers: '24%' },
        { id: 3, category: "Mens", image: require('../Assets/ecommerceimgthree.jpg'), rate: '₹145', ratings: '4.1', offers: '20%' },
        { id: 4, category: "Slippers", image: require('../Assets/ecommerceimgtwo.jpg'), rate: '₹185', ratings: '4.3', offers: '25%' },
    ];

    const renderProduct = ({ item }) => (
        <TouchableOpacity style={styles.proCard} onPress={() => navigation.navigate('ProductList', { Category: item.category })}>
            <Image source={item.image} style={styles.img} />
            <Text style={styles.categoryText}>{item.category}</Text>
            <Text style={styles.rateText}>Starts from {item.rate}</Text>
            <Text style={styles.offerText}>Upto {item.offers} off 🤩</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Recommended Categories for You</Text>
            <Text style={styles.subtitle}>Based on Your Activity</Text>
            <FlatList 
                data={Products}
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
