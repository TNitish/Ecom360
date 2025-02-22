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

const PurchasedCards = ({ navigation }) => {
  const scrollRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(true);
  
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
        scrollPosition += 160;
        scrollRef.current.scrollTo({
          x: scrollPosition,
          animated: true,
        });

        if (scrollPosition > (Products.length - 1) * 160) {
          scrollPosition = 0;
        }
      }
    }, 3000); 

    return () => clearInterval(interval);
  }, [isScrolling]);

  const handleScrollStart = () => setIsScrolling(false);
  const handleScrollEnd = () => setIsScrolling(true);

  const renderProduct = (item) => {
    const scaleValue = useRef(new Animated.Value(1)).current;

    const onHoverStart = () => {
      Animated.spring(scaleValue, {
        toValue: 1.05, // Slight zoom effect
        useNativeDriver: true,
      }).start();
    };

    const onHoverEnd = () => {
      Animated.spring(scaleValue, {
        toValue: 1, // Reset zoom
        useNativeDriver: true,
      }).start();
    };

    return (
      <TouchableOpacity
        key={item.id}
        onPress={() => navigation.navigate("ProductList", { Category: item.category })}
        onMouseEnter={onHoverStart} 
        onMouseLeave={onHoverEnd}
        accessibilityLabel={`View details about ${item.category}`}
      >
        <Animated.View
          style={[
            styles.proCard,
            {
              transform: [{ scale: scaleValue }],
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

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Products You May Like!</Text>
      <Text style={styles.subtitle}>Based On Your Activity</Text>
      <ScrollView
        ref={scrollRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        onScrollBeginDrag={handleScrollStart} 
        onScrollEndDrag={handleScrollEnd} 
        onTouchStart={handleScrollStart} 
        onTouchEnd={handleScrollEnd}
        snapToInterval={160}
        decelerationRate="fast"
        nestedScrollEnabled={true}
      >
        {Products.map((item) => renderProduct(item))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 15,
    backgroundColor: "#fff", // Cleaner background
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#333",
    letterSpacing: 1,
  },
  subtitle: {
    fontSize: 17,
    fontWeight: "700",
    marginBottom: 20,
    color: "#777",
  },
  proCard: {
    marginRight: 15,
    backgroundColor: "#f7f7f7", 
    borderRadius: 15, 
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
    width: 160,
    height: 250,
    alignItems: "center",
    padding: 12,
    overflow: "hidden", // For smooth image transitions
  },
  img: {
    width: "100%",
    height: 130,
    borderRadius: 12,
    resizeMode: "cover",
    marginBottom: 10,
  },
  cardContent: {
    marginTop: 10,
    alignItems: "center",
  },
  categoryText: {
    fontWeight: "600",
    fontSize: 16,
    color: "#333",
    marginBottom: 5,
    textAlign: "center",
  },
  rateText: {
    fontWeight: "400",
    fontSize: 14,
    color: "#666",
    marginBottom: 5,
    textAlign: "center",
  },
  offerText: {
    fontWeight: "600",
    fontSize: 14,
    color: "#ff5722", 
    textAlign: "center",
  },
});

export default PurchasedCards;
