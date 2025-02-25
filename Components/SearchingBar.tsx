import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  Animated,
  Easing,
  Modal,
  Text,
  FlatList,
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const categories = [
  { id: '1', name: "Men's Clothing", screen: 'ProductDetails' },
  { id: '2', name: "Women's Clothing", screen: 'ProductDetails' },
  { id: '3', name: 'Mobiles & Accessories', screen: 'ProductDetails' },
  { id: '4', name: 'Electronics', screen: 'ProductDetails' },
  { id: '5', name: 'Home & Kitchen', screen: 'ProductDetails' },
  { id: '6', name: 'Beauty & Health', screen: 'ProductDetails' },
];

const SearchingBar = () => {
  const [searchText, setSearchText] = useState('');
  const [menuVisible, setMenuVisible] = useState(false);
  const scaleValue = useRef(new Animated.Value(1)).current;
  const slideAnim = useRef(new Animated.Value(-width / 2)).current;
  const navigation = useNavigation(); // Get navigation instance

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: menuVisible ? 0 : -width / 2,
      duration: 300,
      easing: Easing.out(Easing.ease),
      useNativeDriver: true,
    }).start();
  }, [menuVisible]);

  const handleSearch = () => {
    console.log('Searching for:', searchText);
  };

  const animateButton = () => {
    Animated.sequence([
      Animated.timing(scaleValue, { toValue: 0.9, duration: 100, easing: Easing.ease, useNativeDriver: true }),
      Animated.timing(scaleValue, { toValue: 1, duration: 100, easing: Easing.ease, useNativeDriver: true }),
    ]).start();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.menuButton} onPress={() => setMenuVisible(true)}>
        <Image source={require('../Assets/menu.png')} style={styles.menuIcon} />
      </TouchableOpacity>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Search for products..."
          placeholderTextColor="#999"
          value={searchText}
          onChangeText={setSearchText}
          onSubmitEditing={handleSearch}
          returnKeyType="search"
        />
        <TouchableOpacity
          onPress={() => {
            handleSearch();
            animateButton();
          }}
          activeOpacity={0.7}
        >
          <Animated.View style={[styles.searchButton, { transform: [{ scale: scaleValue }] }]}>
            <Image source={require('../Assets/search2.png')} style={styles.buttonImage} />
          </Animated.View>
        </TouchableOpacity>
      </View>

      {/* Sidebar Menu Modal */}
      {menuVisible && (
        <Modal visible={menuVisible} transparent animationType="none">
          <TouchableOpacity style={styles.overlay} activeOpacity={1} onPress={() => setMenuVisible(false)}>
            <Animated.View style={[styles.menuContainer, { transform: [{ translateX: slideAnim }] }]}>
              <LinearGradient colors={["#6a11cb", "#2575fc"]} style={styles.menuHeader}>
                <Text style={styles.menuTitle}>Categories</Text>
              </LinearGradient>
              <FlatList
                data={categories}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={styles.categoryItem}
                    onPress={() => {
                      setMenuVisible(false);
                      navigation.navigate(item.screen);
                    }}
                  >
                    <Text style={styles.categoryText}>{item.name}</Text>
                  </TouchableOpacity>
                )}
              />
            </Animated.View>
          </TouchableOpacity>
        </Modal>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flexDirection: 'row', alignItems: 'center', padding: 8 },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    borderRadius: 30,
    backgroundColor: '#fff',
    height: 50,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    elevation: 5,
  },
  input: { flex: 1, height: 50, fontSize: 16, color: '#333' },
  searchButton: { width: 40, height: 40, justifyContent: 'center', alignItems: 'center', borderRadius: 20 },
  buttonImage: { width: 24, height: 24, resizeMode: 'contain', tintColor: '#fff' },
  menuButton: { marginRight: 10 },
  menuIcon: { width: 30, height: 30 },
  overlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.3)' },
  menuContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: width / 2,
    height: '100%',
    backgroundColor: '#fff',
    elevation: 10,
  },
  menuHeader: {
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  categoryItem: {
    paddingVertical: 15,
    paddingLeft: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: '#ccc',
  },
  categoryText: {
    fontSize: 16,
    color: '#333',
  },
});

export default SearchingBar;
