import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

const orders = [
    { id: '1', product: 'Laptop', image: require('../Assets/Lap.png'), status: 'Delivered' },
    { id: '2', product: 'Headphones', image: require('../Assets/headphones.png'), status: 'Shipped' },
    { id: '3', product: 'Smartphone', image: require('../Assets/smartphone.png'), status: 'Processing' },
];

const Orders = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>My Orders</Text>
            <FlatList
                data={orders}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.orderItem}>
                        <Image source={item.image} style={styles.image} />
                        <View>
                            <Text style={styles.product}>{item.product}</Text>
                            <Text style={styles.status}>{item.status}</Text>
                        </View>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    orderItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        marginVertical: 10,
        backgroundColor: '#f8f8f8',
        borderRadius: 10,
    },
    image: {
        width: 60,
        height: 60,
        marginRight: 15,
    },
    product: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    status: {
        fontSize: 14,
        color: 'gray',
    },
});

export default Orders;
