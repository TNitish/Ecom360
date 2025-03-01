import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const categories = [
  { id: '1', name: 'Fashion', image: require('../Assets/pixel8.jpg') },
  { id: '2', name: 'Gadgets', image: require('../Assets/pixel8.jpg') },
  { id: '3', name: 'Electronics', image: require('../Assets/pixel8.jpg') },
  { id: '4', name: 'Furniture', image: require('../Assets/pixel8.jpg') },
  { id: '5', name: 'Food', image: require('../Assets/pixel8.jpg') },
  { id: '6', name: '2 Wheelers', image: require('../Assets/pixel8.jpg') },
  { id: '7', name: 'Mobiles', image: require('../Assets/pixel8.jpg') },
  { id: '8', name: 'Appliances', image: require('../Assets/pixel8.jpg') },
  { id: '9', name: 'Beauty', image: require('../Assets/pixel8.jpg') },
  { id: '10', name: 'Home', image: require('../Assets/pixel8.jpg') },
  { id: '11', name: 'Toys & Baby', image: require('../Assets/pixel8.jpg') },
  { id: '12', name: 'Sports', image: require('../Assets/pixel8.jpg') },
  { id: '13', name: 'Books', image: require('../Assets/pixel8.jpg') },
  { id: '14', name: 'Automobile', image: require('../Assets/pixel8.jpg') },
];

const chunkArray = (array, size) => {
  return array.reduce((acc, _, index) => {
    if (index % size === 0) acc.push(array.slice(index, index + size));
    return acc;
  }, []);
};

const CategoryGrid = () => {
  const navigation = useNavigation();
  const categoryRows = chunkArray(categories, 7);

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.container}>
      <View style={styles.gridContainer}>
        {categoryRows.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((item) => (
              <TouchableOpacity 
                key={item.id} 
                style={styles.categoryItem}
                onPress={() => navigation.navigate('KeyIngredients', { categoryId: item.id })}
              >
                <Image source={item.image} style={styles.image} />
                <Text style={styles.text}>{item.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  gridContainer: {
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 5,
  },
  categoryItem: {
    width: 70,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  text: {
    marginTop: 3,
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default CategoryGrid;
