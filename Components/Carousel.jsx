import React, { useState, useRef, useEffect } from "react";
import { View, Text, FlatList, Image, StyleSheet, Dimensions, TouchableOpacity } from "react-native";

const Carousel = ({ navigation }) => {
  const flatListRef = useRef();
  const [activeIndex, setActiveIndex] = useState(0);
  const screenWidth = Dimensions.get("window").width;
  
  const carouselData = [
    { id: "1", image: require("../Assets/ecommerceimgone.jpg") },
    { id: "2", image: require("../Assets/ecommerceimgtwo.jpg") },
    { id: "3", image: require("../Assets/ecommerceimgthree.jpg") },
    { id: "4", image: require("../Assets/ecommerceimgone.jpg") },
    { id: "5", image: require("../Assets/ecommerceimgtwo.jpg") },
    { id: "6", image: require("../Assets/ecommerceimgthree.jpg") },
  ];

  useEffect(() => {
    let interval = setInterval(() => {
      if (activeIndex === carouselData.length - 1) {
        flatListRef.current.scrollToIndex({
          index: 0,
          animated: true,
        });
      } else {
        flatListRef.current.scrollToIndex({
          index: activeIndex + 1,
          animated: true,
        });
      }
    }, 2000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  const getItemLayout = (data, index) => ({
    length: screenWidth,
    offset: screenWidth * index,
    index,
  });

  const handleScroll = (event) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollPosition / screenWidth);
    setActiveIndex(index);
  };

  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate("CarsoulProd")}>
        <Image source={item.image} style={styles.image} />
      </TouchableOpacity>
    );
  };

  const renderDotIndicator = () => {
    return carouselData.map((dot, index) => (
      <View
        key={index}
        style={[
          styles.dot,
          activeIndex === index ? styles.activeDot : styles.inactiveDot,
        ]}
      />
    ));
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={carouselData}
        ref={flatListRef}
        getItemLayout={getItemLayout}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        horizontal={true}
        pagingEnabled={true}
        onScroll={handleScroll}
        showsHorizontalScrollIndicator={false}
      />
      <View style={styles.dotContainer}>{renderDotIndicator()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  image: {
    height: 200,
    width: Dimensions.get("window").width - 40, // Slight padding around the image
    borderRadius: 10,
    marginHorizontal: 20,
    elevation: 5, // Shadow effect for better UX
  },
  dotContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 6,
  },
  activeDot: {
    backgroundColor: "#ff8c00", // Flipkart's signature color
  },
  inactiveDot: {
    backgroundColor: "#ddd",
  },
});

export default Carousel;
