import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

const SearchingBar = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    console.log("Searching for:", searchText);
    // Implement the search functionality here
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Search for products..."
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
          onSubmitEditing={handleSearch}
          returnKeyType="search"
        />
        {/* Custom search button */}
        <TouchableOpacity onPress={handleSearch} style={styles.searchButton}>
          <Image
            source={require('../Assets/search2.png')} // Update with your image path
            style={styles.buttonImage}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
    paddingBottom: 15,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 25, // Rounded corners for a nicer look
    height: 40,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  input: {
    flex: 1,
    height: 40,
    paddingLeft: 15,
    fontSize: 16,
  },
  searchButton: {
    width: 40, // Set the button width
    height: 35, // Set the button height
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20, // Circular button
    marginLeft: 10,
    backgroundColor: 'white', // Light background for button (optional)
  },
  buttonImage: {
    width: 24,
    height: 24,
    resizeMode: 'contain', // Ensure the image scales properly
  },
});

export default SearchingBar;
