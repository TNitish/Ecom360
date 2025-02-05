import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Dimensions,
} from "react-native";

const screenWidth = Dimensions.get("window").width;

const ProductSlide1 = ({ navigation }) => {
  const scrollRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(true); // State to manage auto-scrolling
  const Products = [
    {
      id: 1,
      category: "Guna",
      image: require("../Assets/ecommerceimgone.jpg"),
      rate: "₹145",
      ratings: "4.5",
      offers: "10%",
    },
    {
      id: 2,
      category: "Shoes",
      image: require("../Assets/ecommerceimgtwo.jpg"),
      rate: "₹195",
      ratings: "3.9",
      offers: "24%",
    },
    {
      id: 3,
      category: "Mens",
      image: require("../Assets/ecommerceimgthree.jpg"),
      rate: "₹145",
      ratings: "4.1",
      offers: "20%",
    },
    {
      id: 4,
      category: "Slippers",
      image: require("../Assets/ecommerceimgtwo.jpg"),
      rate: "₹185",
      ratings: "4.3",
      offers: "25%",
    },
    {
      id: 5,
      category: "T-Shirts",
      image: require("../Assets/ecommerceimgone.jpg"),
      rate: "₹220",
      ratings: "4.7",
      offers: "15%",
    },
    {
      id: 6,
      category: "Watches",
      image: require("../Assets/ecommerceimgthree.jpg"),
      rate: "₹1,245",
      ratings: "4.6",
      offers: "30%",
    },
    {
      id: 7,
      category: "Sunglasses",
      image: require("../Assets/ecommerceimgtwo.jpg"),
      rate: "₹599",
      ratings: "4.2",
      offers: "18%",
    },
  ];

  useEffect(() => {
    let scrollPosition = 0;
    const interval = setInterval(() => {
      if (isScrolling && scrollRef.current) {
        scrollPosition += 160; // Move to the next product
        scrollRef.current.scrollTo({
          x: scrollPosition,
          animated: true,
        });

        // Reset position when reaching the end
        if (scrollPosition > (Products.length - 1) * 160) {
          scrollPosition = 0;
        }
      }
    }, 3000); // Auto-scroll every 3 seconds

    return () => clearInterval(interval);
  }, [isScrolling]);

  const handleScrollStart = () => setIsScrolling(false);
  const handleScrollEnd = () => setIsScrolling(true);

  const renderProduct = (item) => {
    const scaleValue = useRef(new Animated.Value(1)).current;

    const onHoverStart = () => {
      Animated.spring(scaleValue, {
        toValue: 1.1, // Zoom to 10% larger
        useNativeDriver: true,
      }).start();
    };

    const onHoverEnd = () => {
      Animated.spring(scaleValue, {
        toValue: 1, // Reset to original size
        useNativeDriver: true,
      }).start();
    };

    return (
      <TouchableOpacity
        key={item.id}
        onPress={() => navigation.navigate("ProductList", { Category: item.category })}
        onMouseEnter={onHoverStart} // Handles hover (on web)
        onMouseLeave={onHoverEnd} // Resets zoom when hover ends
        accessibilityLabel={`View details about ${item.category}`}
      >
        <Animated.View
          style={[
            styles.proCard,
            {
              transform: [{ scale: scaleValue }], // Apply zoom effect
            },
          ]}
        >
          <Image source={item.image} style={styles.img} />
          <View style={styles.cardContent}>
            <Text style={styles.categoryText}>{item.category}</Text>
            <Text style={styles.rateText}>Starts from {item.rate}</Text>
            <Text style={styles.offerText}>Upto {item.offers} off 🤩</Text>
          </View>
        </Animated.View>
      </TouchableOpacity>
    );
  };

  const handleRetrieveMore = () => {
    console.log("Retrieve more products");
    // Logic to retrieve more products can go here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Products You May Like!</Text>
      <Text style={styles.subtitle}>Based On Your Activity</Text>
      <TouchableOpacity onPress={handleRetrieveMore} style={styles.topRightButton}>
        <Text style={styles.moreButtonText}>→</Text>
      </TouchableOpacity>
      <ScrollView
        ref={scrollRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        onScrollBeginDrag={handleScrollStart} // Stop auto-scroll when user begins dragging
        onScrollEndDrag={handleScrollEnd} // Resume auto-scroll after user stops dragging
        onTouchStart={handleScrollStart} // Stop auto-scroll on touch
        onTouchEnd={handleScrollEnd} // Resume auto-scroll on release
        snapToInterval={160} // Snap to each product's width
        decelerationRate="fast" // Faster deceleration for snapping effect
      >
        {Products.map((item) => renderProduct(item))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 10,
    backgroundColor: "#f5f7fa", // Light background color
    paddingVertical: 15,
    borderRadius: 10,
    shadowColor: "#ccc",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#2c3e50",
  },
  subtitle: {
    fontSize: 17,
    fontWeight: "700",
    marginBottom: 15,
    color: "#7f8c8d",
  },
  proCard: {
    marginRight: 15,
    backgroundColor: "#ffffff",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
    width: 160,
    height: 250,
    alignItems: "center",
    padding: 10,
  },
  img: {
    width: "100%",
    height: 130,
    borderRadius: 15,
    resizeMode: "cover",
  },
  cardContent: {
    marginTop: 10,
    width: "100%",
    alignItems: "center",
  },
  categoryText: {
    fontWeight: "700",
    fontSize: 16,
    color: "#2c3e50",
    marginBottom: 4,
    textAlign: "center",
  },
  rateText: {
    fontWeight: "400",
    fontSize: 14,
    color: "#95a5a6",
    marginBottom: 4,
  },
  offerText: {
    fontWeight: "700",
    fontSize: 14,
    color: "#e74c3c",
    textAlign: "center",
  },
  topRightButton: {
    position: "absolute",
    top: 10,
    right: 20,
    backgroundColor: "#e1e5ea",
    borderRadius: 10,
    width: 80,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "lightblue",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 10,
  },
  moreButtonText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#34495e",
    marginBottom: 6,
    
  },
});

export default ProductSlide1;
