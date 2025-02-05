import { StyleSheet, View, Image, Animated } from 'react-native';
import React, { useRef, useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackNav from './StackNav';
import CartScreen from '../Screens/CartScreen';
import Wishlist from '../Screens/Wishlist';
import Orders from '../Screens/Orders';

const Tabs = createBottomTabNavigator();

const BottomTab = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Fade-in animation
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View style={{ flex: 1, opacity: fadeAnim }}>
      <Tabs.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: styles.tabBar,
          tabBarShowLabel: false, // Hide label names
        }}
      >
        <Tabs.Screen
          name="Home"
          component={StackNav}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={styles.iconContainer}>
                <Image
                  source={require('../Assets/home1.png')}
                  style={[styles.tabIcon, focused ? styles.activeIcon : styles.inactiveIcon]}
                />
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="Wishlist"
          component={Wishlist}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={styles.iconContainer}>
                <Image
                  source={require('../Assets/whishlist2.png')}
                  style={[styles.tabIcon, focused ? styles.activeIcon : styles.inactiveIcon]}
                />
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="Cart"
          component={CartScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={styles.iconContainer}>
                <Image
                  source={require('../Assets/cart1.png')}
                  style={[styles.tabIcon, focused ? styles.activeIcon : styles.inactiveIcon]}
                />
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="Orders"
          component={Orders}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={styles.iconContainer}>
                <Image
                  source={require('../Assets/orders1.png')}
                  style={[styles.tabIcon, focused ? styles.activeIcon : styles.inactiveIcon]}
                />
              </View>
            ),
          }}
        />
      </Tabs.Navigator>
    </Animated.View>
  );
};

export default BottomTab;

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#f8f8f8',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: 60,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    paddingBottom: 10,
    paddingTop: 5, 
  },

  tabIcon: {
    width: 28,
    height: 28,
  },

  activeIcon: {
    tintColor: '#000', // Active icon color
    transform: [{ scale: 1.2 }], // Optional: scale up the icon when active
  },

  inactiveIcon: {
    tintColor: '#888', // Inactive icon color
  },

  iconContainer: {
    alignItems: 'center',
  },
});
