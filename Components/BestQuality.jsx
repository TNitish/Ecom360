import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

const categories = [
  { id: '1', title: "Grey Men's Trousers", subtitle: 'In Focus Now', image: require('../Assets/mini.jpg') },
  { id: '2', title: 'Mobiles & Accessories', subtitle: 'Top Deals', image: require('../Assets/mini.jpg') },
  { id: '3', title: "Black Men's Tracksuits", subtitle: 'Popular', image: require('../Assets/mini.jpg') },
  { id: '4', title: 'Vehicle Styling', subtitle: 'New Range', image: require('../Assets/mini.jpg') },
];

const BestQuality = ({ navigation }) => {
  const handleCategoryPress = (id) => {
    console.log(`Category ${id} pressed`);
  };

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerText}>BEST QUALITY</Text>
        <TouchableOpacity style={styles.exploreButton}>
          <Text style={styles.exploreText}>Explore More →</Text>
        </TouchableOpacity>
      </View>

      {/* Categories Grid */}
      <FlatList
        data={categories}
        numColumns={2}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.flatListContent} // Ensure proper height for virtualization
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => handleCategoryPress(item.id)}
          >
            <Image source={item.image} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.subtitle}>{item.subtitle}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 10 },
  flatListContent: { flexGrow: 1 }, // Ensures proper height for virtualization
  header: { backgroundColor: '#d8d2a4', padding: 15, marginBottom: 10 },
  headerText: { fontSize: 18, fontWeight: 'bold', color: '#000' },
  exploreButton: { backgroundColor: '#505030', padding: 10, marginTop: 5, alignSelf: 'flex-start' },
  exploreText: { color: '#fff', fontSize: 14 },
  card: { flex: 1, margin: 5, backgroundColor: '#fff', padding: 10, borderRadius: 10, alignItems: 'center' },
  image: { width: 150, height: 150, borderRadius: 10 },
  title: { fontSize: 16, fontWeight: 'bold', marginTop: 5, textAlign: 'center' },
  subtitle: { fontSize: 12, color: 'gray', textAlign: 'center' },
});

export default BestQuality;
