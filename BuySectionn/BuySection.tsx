import React, { useState, useRef } from 'react';
import {
  View, Text, Image, TouchableOpacity, TextInput, Alert, Modal, Animated, StyleSheet, ScrollView,
} from 'react-native';

const product = {
  id: '1',
  name: 'Smartphone XYZ',
  price: '₹49,999',
  description: 'A powerful smartphone with an amazing display, high-end camera, and long battery life.',
  image: require('../Assets/car.png'),
};

const offers = [
  { id: '1', title: '10% Instant Discount on XYZ Bank Cards' },
  { id: '2', title: '₹500 Cashback on UPI Payments' },
  { id: '3', title: 'No Cost EMI Available' },
];

const BuySection = () => {
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [upiId, setUpiId] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [errorField, setErrorField] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const scaleAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const validateInput = () => {
    let errors = {};

    if (!address.trim()) errors.address = true;
    if (!paymentMethod) {
      Alert.alert('Select Payment Method', 'Please choose a payment method.');
      return;
    }

    if (paymentMethod === 'UPI') {
      const upiPattern = /^[a-zA-Z0-9.\-_]{2,256}@[a-zA-Z]{2,64}$/;
      if (!upiId.trim() || !upiPattern.test(upiId)) errors.upiId = true;
    } else if (paymentMethod === 'Credit/Debit Card') {
      if (!/^\d{16}$/.test(cardNumber)) errors.cardNumber = true;
      if (!/^\d{2}\/\d{2}$/.test(expiry)) errors.expiry = true;
      if (!/^\d{3}$/.test(cvv)) errors.cvv = true;
    }

    if (Object.keys(errors).length > 0) {
      setErrorField(errors);
      return;
    }

    setModalVisible(true);

    // Reset animation values
    scaleAnim.setValue(0);
    fadeAnim.setValue(0);

    // Start animations
    Animated.sequence([
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 4,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();

    // Auto-close after 2 seconds
    setTimeout(() => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 1500,
        useNativeDriver: true,
      }).start(() => {
        setModalVisible(false);
      });
    }, 2500);
  };

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
    setErrorField({});
    setUpiId('');
    setCardNumber('');
    setExpiry('');
    setCvv('');
  };

  return (
    <ScrollView style={styles.container}>
      {/* Product Summary */}
      <View style={styles.productContainer}>
        <Image source={product.image} style={styles.productImage} />
        <Text style={styles.productName}>{product.name}</Text>
        <Text style={styles.productPrice}>{product.price}</Text>
        <Text style={styles.productDescription}>{product.description}</Text>
      </View>

      {/* Address Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Delivery Address</Text>
        <TextInput
          style={[styles.input, errorField.address && styles.errorInput]}
          placeholder="Enter your delivery address"
          placeholderTextColor="#777"
          value={address}
          onChangeText={setAddress}
        />
      </View>

      {/* Payment Method Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Select Payment Method</Text>
        <TouchableOpacity
          style={[styles.paymentOption, paymentMethod === 'UPI' && styles.selectedOption]}
          onPress={() => handlePaymentMethodChange('UPI')}
        >
          <Text style={styles.paymentText}>UPI Payment</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.paymentOption, paymentMethod === 'Credit/Debit Card' && styles.selectedOption]}
          onPress={() => handlePaymentMethodChange('Credit/Debit Card')}
        >
          <Text style={styles.paymentText}>Credit/Debit Card</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.paymentOption, paymentMethod === 'Cash on Delivery' && styles.selectedOption]}
          onPress={() => handlePaymentMethodChange('Cash on Delivery')}
        >
          <Text style={styles.paymentText}>Cash on Delivery</Text>
        </TouchableOpacity>
      </View>

      {/* Payment Details */}
      {paymentMethod === 'UPI' && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Enter UPI ID</Text>
          <TextInput
            style={[styles.input, errorField.upiId && styles.errorInput]}
            placeholder="example@upi"
            placeholderTextColor="#777"
            value={upiId}
            onChangeText={setUpiId}
          />
        </View>
      )}

      {paymentMethod === 'Credit/Debit Card' && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Card Details</Text>
          <TextInput
            style={[styles.input, errorField.cardNumber && styles.errorInput]}
            placeholder="Card Number"
            placeholderTextColor="#777"
            value={cardNumber}
            keyboardType="numeric"
            maxLength={16}
            onChangeText={setCardNumber}
          />
          <TextInput
            style={[styles.input, errorField.expiry && styles.errorInput]}
            placeholder="MM/YY"
            placeholderTextColor="#777"
            value={expiry}
            onChangeText={setExpiry}
            maxLength={5}
          />
          <TextInput
            style={[styles.input, errorField.cvv && styles.errorInput]}
            placeholder="CVV"
            placeholderTextColor="#777"
            value={cvv}
            keyboardType="numeric"
            maxLength={3}
            onChangeText={setCvv}
          />
        </View>
      )}

      {/* Offers Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Available Offers</Text>
        {offers.map((offer) => (
          <View key={offer.id} style={styles.offerItem}>
            <Text style={styles.offerText}>{offer.title}</Text>
          </View>
        ))}
      </View>

      {/* Buy Now Button */}
      <TouchableOpacity style={styles.buyNowButton} onPress={validateInput}>
        <Text style={styles.buyNowText}>Proceed to Buy</Text>
      </TouchableOpacity>

      {/* Success Animation Modal */}
      <Modal transparent={true} visible={modalVisible} animationType="fade">
        <View style={styles.modalContainer}>
          <Animated.View style={[styles.modalContent, { opacity: fadeAnim }]}>
            <Animated.View style={[styles.checkCircle, { transform: [{ scale: scaleAnim }] }]}>
              <Text style={styles.checkMark}>✔</Text>
            </Animated.View>
            <Text style={styles.successText}>Purchase Successful!</Text>
          </Animated.View>
        </View>
      </Modal>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8f8f8' },

  productContainer: { 
    alignItems: 'center', 
    padding: 20, 
    backgroundColor: '#fff', 
    marginBottom: 10 
  },
  productImage: { width: 200, height: 200, resizeMode: 'contain' },
  productName: { fontSize: 20, fontWeight: 'bold', marginTop: 10 },
  productPrice: { fontSize: 18, color: '#e60000', marginVertical: 5 },
  productDescription: { textAlign: 'center', color: '#666', marginBottom: 10 },

  section: { backgroundColor: '#fff', padding: 15, marginBottom: 10 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },

  input: {
    borderWidth: 1, 
    borderColor: '#ccc', 
    borderRadius: 5, 
    padding: 10, 
    fontSize: 16, 
    color: '#333',
    backgroundColor: '#fff'
  },

  errorInput: {
    borderColor: '#e60000',
    backgroundColor: '#ffe6e6',
  },

  paymentOption: { 
    padding: 15, 
    borderWidth: 1, 
    borderColor: '#ccc', 
    borderRadius: 5, 
    marginBottom: 5, 
    backgroundColor: '#f5f5f5' 
  },
  selectedOption: { backgroundColor: '#d0f0c0', borderColor: '#4CAF50' },
  paymentText: { fontSize: 16, color: '#333' },

  offerItem: { padding: 10, borderBottomWidth: 1, borderBottomColor: '#ddd' },
  offerText: { fontSize: 14, color: '#444' },

  buyNowButton: { 
    backgroundColor: '#ff6f00', 
    padding: 15, 
    alignItems: 'center', 
    margin: 20, 
    borderRadius: 5 
  },
  buyNowText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },

  // Modal Styles
  modalContainer: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: 'rgba(0,0,0,0.6)'
  },
  modalContent: {
    backgroundColor: '#fff', 
    padding: 20, 
    borderRadius: 10, 
    alignItems: 'center'
  },
  checkCircle: {
    width: 80, 
    height: 80, 
    borderRadius: 40, 
    backgroundColor: '#4CAF50', 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginBottom: 10
  },
  checkMark: {
    fontSize: 40, 
    color: '#fff', 
    fontWeight: 'bold'
  },
  successText: {
    fontSize: 18, 
    fontWeight: 'bold', 
    color: '#333'
  },
});


export default BuySection;
