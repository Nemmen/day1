import React, {useState} from 'react';
import {View, Text, Modal, TextInput, Button} from 'react-native';
import {Table, Row, Rows} from 'react-native-table-component';

const RollnoAssig = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [tv, setTv] = useState(0);

  const data = [
    {
      rollNo: 101,
      head: ['Days', '10-12', '12-2', '2-4'],
      timeTable: [
        ['Mon', 'Dsa', 'Math', 'Revise'],
        ['Tue', 'DAA', 'Networking', 'Revise'],
        ['Wed', 'APP-Dev', 'COA', 'Revise'],
        ['Thu', 'WEb-DEV', 'HV', 'Revise'],
      ],
    },
  ];

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
            {tv == 101 ? (
              <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
                <Row
                  data={data[0].head}
                  style={{height: 40, backgroundColor: '#f1f8ff'}}
                  textStyle={{margin: 6}}
                />
                <Rows data={data[0].timeTable} textStyle={{margin: 6}} />
              </Table>
            ) : (
              <View>
                <View
                  style={{
                    marginHorizontal: 'auto',
                    borderRadius: 100,
                    height: 70,
                    width: 70,
                    borderColor: 'red',borderWidth:1,
					display:'flex',
					justifyContent:'center',
					alignItems:'center'
                  }}>
                  <Text style={{fontSize: 45, color: 'red', fontWeight: 200}}>
                    X
                  </Text>
                </View>
                <Text style={{fontSize:20,marginVertical:20,marginHorizontal:'auto', color: 'red', fontWeight: 500}}>
                  Wrong roll No.
                </Text>
              </View>
            )}
            <Button title="Close" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
      <Text style={{fontSize: 20, fontWeight: 700, color: 'black'}}>
        Enter The Roll no.
      </Text>
      <TextInput
        placeholder="Roll No."
        style={{borderRadius: 10, borderColor: 'black',borderWidth:1 ,marginVertical:20}}
        value={tv}
        keyboardType="numeric"
        onChangeText={setTv}
      />
      <Button
        title="Submit"
        onPress={() => {
          setModalVisible(true);
        }}
      />
    </View>
  );
};

export default RollnoAssig;
