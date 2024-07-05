import React, {useState} from 'react';
import {View, Text, Modal, StyleSheet, TextInput, Button} from 'react-native';

const Billing = () => {
  const [product, setProduct] = useState('');
  const [cost, setCost] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [netBill, setNetBill] = useState(0);
  const [totalBill, setTotalBill] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  console.log(netBill)
  const genrateBill = () => {
    if (!isNaN(cost) && !isNaN(quantity)) {
      let cos = parseFloat(cost);
      let quantit = parseFloat(quantity);
	 
      setNetBill(cos * quantit);
      setTotalBill(cos * quantit - (cos * quantit * 0.1));
	  
      setModalVisible(true);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        height: 755,
        padding: 10,
      }}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            height: 755,
            padding: 10,
            backgroundColor: 'rgba(0,0,0,0.5)',
          }}>
          <View
            style={{
              backgroundColor: 'white',
              padding: 20,
              borderRadius: 10,
              margin: 20,
            }}>
            <Text
              style={[
                styles.text,
                {
                  textDecorationLine: 'underline',
                },
              ]}>
              Your Bill
            </Text>
            <Text
              style={[
                styles.text,
                {
                  fontSize: 20,
                },
              ]}>
              Product: {product}
            </Text>
            <Text
              style={[
                styles.text,
                {
                  fontSize: 20,
                },
              ]}>
              Cost per product: {cost}
            </Text>
            <Text
              style={[
                styles.text,
                {
                  fontSize: 20,
                },
              ]}>
              Quantity: {quantity}
            </Text>
            <Text
              style={[
                styles.text,
                {
                  fontSize: 20,
                },
              ]}>
              Net Bill: {netBill}
            </Text>
            <View
              style={{
                backgroundColor: 'black',
                width: 230,
                height: 3,
                marginHorizontal: 'auto',
                marginBottom: 20,
              }}></View>
            <Text
              style={[
                styles.text,
                {
                  fontSize: 20,
                },
              ]}>
              Total Bill: {totalBill}
            </Text>
            <Button title="Close" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
      <Text style={[styles.text]}>Billing System</Text>
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          marginBottom: 10,
        }}>
        Product
      </Text>
      <TextInput
        style={styles.inpu}
        placeholder="Enter Product"
        keyboardType="email-address"
        autoCapitalize="none"
        value={product}
        onChangeText={setProduct}
      />
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          marginBottom: 10,
        }}>
        Cost
      </Text>
      <TextInput
        style={styles.inpu}
        placeholder="Enter Cost"
        keyboardType="numeric"
        autoCapitalize="none"
        value={cost}
        onChangeText={setCost}
      />
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          marginBottom: 10,
        }}>
        Quantity
      </Text>
      <TextInput
        style={styles.inpu}
        placeholder="Enter Quantity"
        keyboardType="numeric"
        autoCapitalize="none"
        value={quantity}
        onChangeText={setQuantity}
      />
      <Button title="Genrate Bill" onPress={genrateBill} />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 30,
    marginHorizontal: 'auto',
    color: 'black',
  },
  inpu: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    padding: 10,
    marginBottom: 30,
  },
});

export default Billing;
