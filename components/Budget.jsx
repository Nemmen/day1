import React, {useEffect, useState} from 'react';
import {View, Text, Modal, StyleSheet, TextInput, Button} from 'react-native';

const Budget = () => {
  const [budget, setBudget] = useState(0);
  const [expense, setExpence] = useState(0);
  const [income, setIncome] = useState(0);
  const [profit, setProfit] = useState(0);
  const [loss, setLoss] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);

  const genrateBudget = () => {
    
      if (parseFloat(income) > parseFloat(expense)) {
        setProfit(
           parseFloat(income) - parseFloat(expense)
        );
        setLoss(0)
      } 
      if (parseFloat(income) < parseFloat(expense)){
        setLoss( parseFloat(income) - parseFloat(expense)  );
        setProfit(0)
      }
      
    
  };
  useEffect(() => {
    genrateBudget();
  }
  , [budget, expense, income]);

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
              Your Gain/Loss
            </Text>
            <Text
              style={[
                styles.text,
                {
                  fontSize: 20,
                },
              ]}>
              Budget: {budget}
            </Text>
            <Text
              style={[
                styles.text,
                {
                  fontSize: 20,
                },
              ]}>
              Expense: {expense}
            </Text>
            <Text
              style={[
                styles.text,
                {
                  fontSize: 20,
                },
              ]}>
              Income: {income}
            </Text>

            {profit > 0 ? (
              <Text
                style={[
                  styles.text,
                  {
                    fontSize: 20,
                    color: 'green',
                  },
                ]}>
                Profit: {profit}
              </Text>
            ) : (
              <Text
                style={[
                  styles.text,
                  {
                    fontSize: 20,
                    color: 'red',
                  },
                ]}>
                Loss: {loss}
              </Text>
            )}
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
              Remaining budget: {profit > 0 ? parseFloat(budget) + parseFloat(profit) : parseFloat(budget) + parseFloat(loss)}
            </Text>
            <Button title="Close" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
      <Text style={[styles.text]}>Budget System</Text>
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          marginBottom: 10,
        }}>
        Budget
      </Text>
      <TextInput
        style={styles.inpu}
        placeholder="Enter Budget"
        keyboardType="numeric"
        autoCapitalize="none"
        value={budget}
        onChangeText={setBudget}
      />
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          marginBottom: 10,
        }}>
        Expense
      </Text>
      <TextInput
        style={styles.inpu}
        placeholder="Enter Expense"
        keyboardType="numeric"
        autoCapitalize="none"
        value={expense}
        onChangeText={setExpence}
      />
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          marginBottom: 10,
        }}>
        Income
      </Text>
      <TextInput
        style={styles.inpu}
        placeholder="Enter Income"
        keyboardType="numeric"
        autoCapitalize="none"
        value={income}
        onChangeText={setIncome}
      />
      <Button title="Genrate Budget" onPress={()=>setModalVisible(true)} />
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

export default Budget;
