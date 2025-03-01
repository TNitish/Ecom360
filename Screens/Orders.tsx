import React, { useState } from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

// Static Initial Orders Data
const initialOrders = {
  current: [
    { id: '1', productName: 'Nike Running Shoes', price: '₹3,499', status: 'Shipped', image: require('../Assets/car.png') },
    { id: '2', productName: 'Apple AirPods Pro', price: '₹19,999', status: 'Pending', image: require('../Assets/car.png') },
  ],
  old: [
    { id: '3', productName: 'Samsung Galaxy S23', price: '₹74,999', status: 'Delivered', image: require('../Assets/car.png') },
    { id: '4', productName: 'Sony WH-1000XM4', price: '₹26,999', status: 'Delivered', image: require('../Assets/car.png') },
  ],
  cancelled: [],
  returned: [
    { id: '7', productName: 'Wrist Watch', price: '₹7,999', status: 'Returned', image: require('../Assets/car.png') },
    { id: '8', productName: 'Gaming Mouse', price: '₹3,299', status: 'Returned', image: require('../Assets/car.png') },
  ],
};

const Orders = ({ navigation }) => {
  const [orders, setOrders] = useState(initialOrders);
  const [selectedCategory, setSelectedCategory] = useState('current'); // Default category

  // Function to cancel an order
  const handleCancelOrder = (orderId) => {
    const updatedCurrentOrders = orders.current.filter(order => order.id !== orderId);
    const canceledOrder = orders.current.find(order => order.id === orderId);

    if (canceledOrder) {
      canceledOrder.status = 'Cancelled';
      setOrders(prevOrders => ({
        ...prevOrders,
        current: updatedCurrentOrders,
        cancelled: [...prevOrders.cancelled, canceledOrder],
      }));
    }
  };

  const renderOrderItem = ({ item }) => (
    <View style={styles.orderCard}>
      <Image source={item.image} style={styles.productImage} />
      <View style={styles.orderDetails}>
        <Text style={styles.productName}>{item.productName}</Text>
        <Text style={styles.price}>{item.price}</Text>
        <Text style={[styles.status, getStatusStyle(item.status)]}>{item.status}</Text>

        {/* Cancel Button for Current Orders */}
        {selectedCategory === 'current' && (
          <TouchableOpacity style={styles.cancelButton} onPress={() => handleCancelOrder(item.id)}>
            <Text style={styles.cancelText}>Cancel</Text>
          </TouchableOpacity>
        )}

        {/* Reorder Button for All Orders */}
        <TouchableOpacity style={styles.reorderButton}>
          <Text style={styles.reorderText}>Reorder</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.heading}>My Orders</Text>
        <TouchableOpacity style={styles.helpButton} onPress={() => navigation.navigate('HelpCenter')}>
  <Text style={styles.helpText}>Help Center</Text>
</TouchableOpacity>

      </View>

      {/* Order Category Buttons */}
      <View style={styles.categoryContainer}>
        {['current', 'old', 'cancelled', 'returned'].map(category => (
          <TouchableOpacity
            key={category}
            style={[styles.categoryButton, selectedCategory === category && styles.activeCategory]}
            onPress={() => setSelectedCategory(category)}
          >
            <Text style={[styles.categoryText, selectedCategory === category && styles.activeCategoryText]}>
              {category === 'current' ? 'Current' : category === 'old' ? 'Old' : category.charAt(0).toUpperCase() + category.slice(1)}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Orders List */}
      <FlatList
        data={orders[selectedCategory]}
        keyExtractor={(item) => item.id}
        renderItem={renderOrderItem}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={<Text style={styles.emptyText}>No orders found</Text>}
      />
    </View>
  );
};

// Function to get status color
const getStatusStyle = (status) => {
  switch (status) {
    case 'Delivered': return { color: 'green' };
    case 'Shipped': return { color: '#2874F0' };
    case 'Pending': return { color: 'orange' };
    case 'Cancelled': return { color: 'red' };
    case 'Returned': return { color: 'purple' };
    default: return {};
  }
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f3f6',
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  helpButton: {
    backgroundColor: '#2874F0',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
  helpText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  categoryContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 8,
    marginBottom: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  categoryButton: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 5,
  },
  activeCategory: {
    backgroundColor: '#2874F0',
  },
  categoryText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#555',
  },
  activeCategoryText: {
    color: '#fff',
  },
  orderCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  productImage: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    marginRight: 12,
  },
  orderDetails: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  price: {
    fontSize: 14,
    color: '#777',
    marginVertical: 5,
  },
  status: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  cancelButton: {
    backgroundColor: 'red',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginTop: 5,
    alignSelf: 'flex-start',
  },
  cancelText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  reorderButton: {
    backgroundColor: '#2874F0',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginTop: 5,
    alignSelf: 'flex-start',
  },
  reorderText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#888',
    marginTop: 20,
  },
});

export default Orders;
