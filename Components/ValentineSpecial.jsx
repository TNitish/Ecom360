import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';

const products = [
  { id: '1', title: 'Date night dresses', discount: 'Min. 65% Off', image: require('../Assets/card.jpg') },
  { id: '2', title: 'Love boxes', discount: 'Up to 65% Off', image: require('../Assets/card.jpg') },
  { id: '3', title: 'Valentine Teddy', discount: 'Flat 50% Off', image: require('../Assets/card.jpg') },
  { id: '4', title: 'Romantic Perfume', discount: '30% Off', image: require('../Assets/card.jpg') },
  { id: '5', title: 'Couple Watches', discount: 'Buy 1 Get 1 Free', image: require('../Assets/card.jpg') },
];

const ValentinesSpecial = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Valentine's specials!</Text>
      <FlatList
        horizontal
        data={products}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.discount}>{item.discount}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { backgroundColor: '#ffebef', padding: 15, borderRadius: 15 },
  header: { fontSize: 18, fontWeight: 'bold', color: '#ff0066', marginBottom: 10 },
  card: { backgroundColor: '#fff', borderRadius: 10, padding: 10, marginRight: 10, alignItems: 'center' },
  image: { width: 120, height: 120, borderRadius: 10 },
  title: { fontSize: 14, fontWeight: 'bold', textAlign: 'center', marginTop: 5 },
  discount: { fontSize: 12, color: '#ff0066', fontWeight: 'bold' },
});

export default ValentinesSpecial;
