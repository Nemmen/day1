import React, {useRef, useEffect} from 'react';


//npm install react-native-paper
//npm install react-native-elements
//npm install react-radio-buttons-group
//npm install react-native-table-component

//contentContainerStyle for ScrollView to make it scrollable 


import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
  Button,
  Pressable,
  Image,
} from 'react-native';
import First from './components/first';
import Back from './components/Back';
import DOB from './components/DOB';
import Hobby from './components/Hobby';
// keybordType , and autoCapitilize  attribute in TextInput , secureTextEntry for password
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Counting from './components/Counting';
import ValueSort from './components/ValueSort';
import Billing from './components/Billing'; 
import Budget from './components/Budget';
import StopClock from './components/StopClock';
import Props from './components/Props';
import BoxColor from './components/BoxColor';
import RollnoAssig from './components/RollnoAssig';
import ShowMore from './components/ShowMore';
import Validation from './components/Validation';

function App() {

  const data= {
    university : ['Chitkara','Parul','Sviet'],
    courses : [['bba','bsc','bca'],['Phd','M.tech','Mca'],['Btech','Pharmacy','B.com']]
  }
  
  
 
  const imageUrl =
    'https://cpng.pikpng.com/pngl/s/126-1260216_dish-tv-logo-dish-tv-logo-png-clipart.png';

  return (
    <SafeAreaView >
      <StatusBar
       
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        >
        {/* assignment 1 -> Cv */}
        {/* <View
         >
          <Text
            style={{
              fontSize: 40,
              fontWeight: 'bold',
              color: 'black',
              marginTop: 20,
              marginHorizontal: 'auto',
            }}>
            My CV
          </Text>
          <First />
          <DOB />
          <Back />
          <Hobby />
        </View> */}

        {/* assignment 2 --> login form */}
        {/* <View style={styles.middle}>
            <Text style={styles.Head}>Login Form</Text>
            <TextInput style={styles.inpu} placeholder="Enter your email" keyboardType='email-address' autoCapitalize="none"/>
            <TextInput style={styles.inpu} placeholder="Enter your password"  secureTextEntry={true} autoCapitalize="none"/>
            <Button title="Login" />
          </View> */}

        {/* assignment 3 --> Registration form  */}
        {/* <View style={styles.middle}>
          <Text style={styles.Head}>Registration Form</Text>
          <View style={{display: 'flex', flexDirection: 'row', gap: 20}}>
            <TextInput style={styles.inpu1} placeholder="First Name" />
            <TextInput style={styles.inpu1} placeholder="Last Name" />
          </View>
          <TextInput
            style={styles.inpu}
            placeholder="Enter your email"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.inpu}
            placeholder="Enter your password"
            secureTextEntry={true}
            autoCapitalize="none"
          />
          <Pressable
            style={({pressed}) => [
              {
                backgroundColor: pressed ? '#1870de' : 'blue',
                width: 320,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 10,
                borderRadius: 10,
              },
            ]}>
            <Text style={{color: 'white', fontSize: 20, cursor: 'auto'}}>
              Register
            </Text>
          </Pressable>
        </View> */}

        {/* assignment 4 --> Remote control */}
        {/* <View style={{height: 755}}>
          <Pressable
            style={({pressed}) => [
              {
                backgroundColor: pressed ? 'green' : 'red',
                padding: 10,
                width: 65,
                marginLeft: 20,
                borderRadius: 5,
                marginTop: 20,
              },
            ]}>
            <View>
              <Text style={{color: 'white', fontWeight: 700}}>Power</Text>
            </View>
          </Pressable>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              paddingLeft: 20,
              paddingRight: 20,
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Pressable
              style={({pressed}) => [
                {
                  backgroundColor: pressed ? 'green' : 'black',
                  padding: 10,
                  width: 85,
                  alignItems: 'center',
                  borderRadius: 5,
                  marginTop: 20,
                },
              ]}>
              <View>
                <Text style={{color: 'white', fontWeight: 700}}>Info</Text>
              </View>
            </Pressable>
            <Pressable
              style={({pressed}) => [
                {
                  backgroundColor: pressed ? 'green' : 'black',
                  padding: 10,
                  width: 85,
                  alignItems: 'center',
                  borderRadius: 5,
                  marginTop: 20,
                },
              ]}>
              <View>
                <Text style={{color: 'white', fontWeight: 700}}>Lang</Text>
              </View>
            </Pressable>
            <Pressable
              style={({pressed}) => [
                {
                  backgroundColor: pressed ? 'green' : 'black',
                  padding: 10,
                  width: 85,
                  alignItems: 'center',
                  borderRadius: 5,
                  marginTop: 20,
                },
              ]}>
              <View>
                <Text style={{color: 'white', fontWeight: 700}}>Guide</Text>
              </View>
            </Pressable>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              paddingLeft: 20,
              paddingRight: 20,
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Pressable
              style={({pressed}) => [
                {
                  backgroundColor: pressed ? 'green' : 'black',
                  padding: 10,
                  width: 85,
                  alignItems: 'center',
                  borderRadius: 5,
                  marginTop: 20,
                },
              ]}>
              <View>
                <Text style={{color: 'white', fontWeight: 700}}>Active</Text>
              </View>
            </Pressable>
            <Pressable
              style={({pressed}) => [
                {
                  backgroundColor: pressed ? 'green' : 'black',
                  padding: 10,
                  width: 85,
                  alignItems: 'center',
                  borderRadius: 5,
                  marginTop: 20,
                },
              ]}>
              <View>
                <Text style={{color: 'white', fontWeight: 700}}>Dish TV</Text>
              </View>
            </Pressable>
            <Pressable
              style={({pressed}) => [
                {
                  backgroundColor: pressed ? 'green' : 'black',
                  padding: 10,
                  width: 85,
                  alignItems: 'center',
                  borderRadius: 5,
                  marginTop: 20,
                },
              ]}>
              <View>
                <Text style={{color: 'white', fontWeight: 700}}>Specials</Text>
              </View>
            </Pressable>
          </View>
          <View
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginLeft: 20,
              marginRight: 20,
              flexDirection: 'row',
              marginTop: 60,
            }}>
            <Pressable
              style={({pressed}) => [
                {
                  padding: 0,
                  backgroundColor: 'black',
                  width: 60,
                  margin: 0,
                  height: 120,
                  alignItems: 'center',
                  borderRadius: 5,
                },
              ]}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: 100,
                  alignItems: 'center',
                }}>
                <Pressable
                  style={({pressed}) => [
                    {
                      backgroundColor: pressed ? 'green' : 'black',
                      width: 60,
                      padding: 10,
                      alignItems: 'center',
                    },
                  ]}>
                  <Text style={{color: 'white', fontSize: 18}}>+</Text>
                </Pressable>
                <Text
                  style={{
                    color: 'white',
                    backgroundColor: 'black',
                    padding: 10,
                    fontSize: 18,
                  }}>
                  Vol
                </Text>
                <Pressable
                  style={({pressed}) => [
                    {
                      margin: 0,
                      backgroundColor: pressed ? 'green' : 'black',
                      width: 60,
                      padding: 10,
                      alignItems: 'center',
                    },
                  ]}>
                  <Text style={{color: 'white', fontSize: 18}}>-</Text>
                </Pressable>
              </View>
            </Pressable>

            <Pressable
              style={({pressed}) => [
                {
                  padding: 0,
                  backgroundColor: pressed ? 'green' : 'black',
                  width: 140,
                  margin: 0,
                  height: 140,
                  alignItems: 'center',
                  borderRadius: 100,
                },
              ]}>
              <View
                style={{
                  width: 140,
                  margin: 0,
                  height: 140,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{color: 'white', fontSize: 30}}>OK</Text>
              </View>
            </Pressable>

            <Pressable
              style={({pressed}) => [
                {
                  padding: 0,
                  backgroundColor: 'black',
                  width: 60,
                  margin: 0,
                  height: 120,
                  alignItems: 'center',
                  borderRadius: 5,
                },
              ]}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: 100,
                  alignItems: 'center',
                }}>
                <Pressable
                  style={({pressed}) => [
                    {
                      backgroundColor: pressed ? 'green' : 'black',
                      width: 60,
                      padding: 10,
                      alignItems: 'center',
                    },
                  ]}>
                  <Text style={{color: 'white', fontSize: 18}}>+</Text>
                </Pressable>
                <Text
                  style={{
                    color: 'white',
                    backgroundColor: 'black',
                    padding: 10,
                    fontSize: 18,
                  }}>
                  Ch
                </Text>
                <Pressable
                  style={({pressed}) => [
                    {
                      margin: 0,
                      backgroundColor: pressed ? 'green' : 'black',
                      width: 60,
                      padding: 10,
                      alignItems: 'center',
                    },
                  ]}>
                  <Text style={{color: 'white', fontSize: 18}}>-</Text>
                </Pressable>
              </View>
            </Pressable>
          </View>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              paddingLeft: 20,
              paddingRight: 20,
              marginTop: 45,
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Pressable
              style={({pressed}) => [
                {
                  backgroundColor: pressed ? 'green' : 'black',
                  padding: 10,
                  width: 85,
                  alignItems: 'center',
                  borderRadius: 5,
                  marginTop: 20,
                },
              ]}>
              <View>
                <Text style={{color: 'white', fontWeight: 700}}>1</Text>
              </View>
            </Pressable>
            <Pressable
              style={({pressed}) => [
                {
                  backgroundColor: pressed ? 'green' : 'black',
                  padding: 10,
                  width: 85,
                  alignItems: 'center',
                  borderRadius: 5,
                  marginTop: 20,
                },
              ]}>
              <View>
                <Text style={{color: 'white', fontWeight: 700}}>2</Text>
              </View>
            </Pressable>
            <Pressable
              style={({pressed}) => [
                {
                  backgroundColor: pressed ? 'green' : 'black',
                  padding: 10,
                  width: 85,
                  alignItems: 'center',
                  borderRadius: 5,
                  marginTop: 20,
                },
              ]}>
              <View>
                <Text style={{color: 'white', fontWeight: 700}}>3</Text>
              </View>
            </Pressable>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              paddingLeft: 20,
              paddingRight: 20,

              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Pressable
              style={({pressed}) => [
                {
                  backgroundColor: pressed ? 'green' : 'black',
                  padding: 10,
                  width: 85,
                  alignItems: 'center',
                  borderRadius: 5,
                  marginTop: 20,
                },
              ]}>
              <View>
                <Text style={{color: 'white', fontWeight: 700}}>4</Text>
              </View>
            </Pressable>
            <Pressable
              style={({pressed}) => [
                {
                  backgroundColor: pressed ? 'green' : 'black',
                  padding: 10,
                  width: 85,
                  alignItems: 'center',
                  borderRadius: 5,
                  marginTop: 20,
                },
              ]}>
              <View>
                <Text style={{color: 'white', fontWeight: 700}}>5</Text>
              </View>
            </Pressable>
            <Pressable
              style={({pressed}) => [
                {
                  backgroundColor: pressed ? 'green' : 'black',
                  padding: 10,
                  width: 85,
                  alignItems: 'center',
                  borderRadius: 5,
                  marginTop: 20,
                },
              ]}>
              <View>
                <Text style={{color: 'white', fontWeight: 700}}>6</Text>
              </View>
            </Pressable>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              paddingLeft: 20,
              paddingRight: 20,

              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Pressable
              style={({pressed}) => [
                {
                  backgroundColor: pressed ? 'green' : 'black',
                  padding: 10,
                  width: 85,
                  alignItems: 'center',
                  borderRadius: 5,
                  marginTop: 20,
                },
              ]}>
              <View>
                <Text style={{color: 'white', fontWeight: 700}}>7</Text>
              </View>
            </Pressable>
            <Pressable
              style={({pressed}) => [
                {
                  backgroundColor: pressed ? 'green' : 'black',
                  padding: 10,
                  width: 85,
                  alignItems: 'center',
                  borderRadius: 5,
                  marginTop: 20,
                },
              ]}>
              <View>
                <Text style={{color: 'white', fontWeight: 700}}>8</Text>
              </View>
            </Pressable>
            <Pressable
              style={({pressed}) => [
                {
                  backgroundColor: pressed ? 'green' : 'black',
                  padding: 10,
                  width: 85,
                  alignItems: 'center',
                  borderRadius: 5,
                  marginTop: 20,
                },
              ]}>
              <View>
                <Text style={{color: 'white', fontWeight: 700}}>9</Text>
              </View>
            </Pressable>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              paddingLeft: 20,
              paddingRight: 20,

              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Pressable
              style={({pressed}) => [
                {
                  backgroundColor: pressed ? 'green' : 'black',
                  padding: 10,
                  width: 85,
                  alignItems: 'center',
                  borderRadius: 5,
                  marginTop: 20,
                },
              ]}>
              <View>
                <Text style={{color: 'white', fontWeight: 700}}>0</Text>
              </View>
            </Pressable>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              paddingLeft: 20,
              paddingRight: 20,

              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={{
                uri: imageUrl,
              }}
              style={{width: 400, height: 400}}
              resizeMode={'cover'}
              ></Image>
          </View>
        </View> */}

        {/* assignment 5 -- > Calculator  */}

        {/* <View
          style={{
            height: 755,
            display: 'flex',
            flex: 1,
            justifyContent: 'flex-end',
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',

              padding: 20,
            }}>
            <TextInput
              placeholder="0"
              keyboardType="numeric"
              style={{
                width: 350,
                backgroundColor: '#e0e4e7',
                textAlign: 'right',
                padding: 10,
                fontSize: 30,
              }}></TextInput>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: 20,
            }}>
            <Pressable
              style={({pressed}) => [
                {
                  backgroundColor: pressed ? 'green' : 'black',
                  padding: 20,
                  width: 85,

                  alignItems: 'center',
                  borderRadius: 5,
                },
              ]}>
              <View>
                <Text style={{color: 'white', fontWeight: 700}}>AC</Text>
              </View>
            </Pressable>
            <Pressable
              style={({pressed}) => [
                {
                  backgroundColor: pressed ? 'green' : 'black',
                  padding: 20,
                  width: 85,

                  alignItems: 'center',
                  borderRadius: 5,
                },
              ]}>
              <View>
                <Text style={{color: 'white', fontWeight: 700}}>+/-</Text>
              </View>
            </Pressable>
            <Pressable
              style={({pressed}) => [
                {
                  backgroundColor: pressed ? 'green' : 'black',
                  padding: 20,
                  width: 85,
                  alignItems: 'center',
                  borderRadius: 5,
                },
              ]}>
              <View>
                <Text style={{color: 'white', fontWeight: 700}}>%</Text>
              </View>
            </Pressable>
            <Pressable
              style={({pressed}) => [
                {
                  backgroundColor: pressed ? 'green' : 'orange',
                  padding: 20,
                  width: 85,
                  alignItems: 'center',
                  borderRadius: 5,
                },
              ]}>
              <View>
                <Text style={{color: 'white', fontWeight: 700}}>/</Text>
              </View>
            </Pressable>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: 20,
            }}>
            <Pressable
              style={({pressed}) => [
                {
                  backgroundColor: pressed ? 'green' : 'black',
                  padding: 20,
                  width: 85,
                  alignItems: 'center',
                  borderRadius: 5,
                },
              ]}>
              <View>
                <Text style={{color: 'white', fontWeight: 700}}>7</Text>
              </View>
            </Pressable>
            <Pressable
              style={({pressed}) => [
                {
                  backgroundColor: pressed ? 'green' : 'black',
                  padding: 20,
                  width: 85,
                  alignItems: 'center',
                  borderRadius: 5,
                },
              ]}>
              <View>
                <Text style={{color: 'white', fontWeight: 700}}>8</Text>
              </View>
            </Pressable>
            <Pressable
              style={({pressed}) => [
                {
                  backgroundColor: pressed ? 'green' : 'black',
                  padding: 20,
                  width: 85,
                  alignItems: 'center',
                  borderRadius: 5,
                },
              ]}>
              <View>
                <Text style={{color: 'white', fontWeight: 700}}>9</Text>
              </View>
            </Pressable>
            <Pressable
              style={({pressed}) => [
                {
                  backgroundColor: pressed ? 'green' : 'orange',
                  padding: 20,
                  width: 85,
                  alignItems: 'center',
                  borderRadius: 5,
                },
              ]}>
              <View>
                <Text style={{color: 'white', fontWeight: 700}}>*</Text>
              </View>
            </Pressable>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: 20,
            }}>
            <Pressable
              style={({pressed}) => [
                {
                  backgroundColor: pressed ? 'green' : 'black',
                  padding: 20,
                  width: 85,
                  alignItems: 'center',
                  borderRadius: 5,
                },
              ]}>
              <View>
                <Text style={{color: 'white', fontWeight: 700}}>4</Text>
              </View>
            </Pressable>
            <Pressable
              style={({pressed}) => [
                {
                  backgroundColor: pressed ? 'green' : 'black',
                  padding: 20,
                  width: 85,
                  alignItems: 'center',
                  borderRadius: 5,
                },
              ]}>
              <View>
                <Text style={{color: 'white', fontWeight: 700}}>5</Text>
              </View>
            </Pressable>
            <Pressable
              style={({pressed}) => [
                {
                  backgroundColor: pressed ? 'green' : 'black',
                  padding: 20,
                  width: 85,
                  alignItems: 'center',
                  borderRadius: 5,
                },
              ]}>
              <View>
                <Text style={{color: 'white', fontWeight: 700}}>6</Text>
              </View>
            </Pressable>
            <Pressable
              style={({pressed}) => [
                {
                  backgroundColor: pressed ? 'green' : 'orange',
                  padding: 20,
                  width: 85,
                  alignItems: 'center',
                  borderRadius: 5,
                },
              ]}>
              <View>
                <Text style={{color: 'white', fontWeight: 700}}>-</Text>
              </View>
            </Pressable>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: 20,
            }}>
            <Pressable
              style={({pressed}) => [
                {
                  backgroundColor: pressed ? 'green' : 'black',
                  padding: 20,
                  width: 85,
                  alignItems: 'center',
                  borderRadius: 5,
                },
              ]}>
              <View>
                <Text style={{color: 'white', fontWeight: 700}}>1</Text>
              </View>
            </Pressable>
            <Pressable
              style={({pressed}) => [
                {
                  backgroundColor: pressed ? 'green' : 'black',
                  padding: 20,
                  width: 85,
                  alignItems: 'center',
                  borderRadius: 5,
                },
              ]}>
              <View>
                <Text style={{color: 'white', fontWeight: 700}}>2</Text>
              </View>
            </Pressable>
            <Pressable
              style={({pressed}) => [
                {
                  backgroundColor: pressed ? 'green' : 'black',
                  padding: 20,
                  width: 85,
                  alignItems: 'center',
                  borderRadius: 5,
                },
              ]}>
              <View>
                <Text style={{color: 'white', fontWeight: 700}}>3</Text>
              </View>
            </Pressable>
            <Pressable
              style={({pressed}) => [
                {
                  backgroundColor: pressed ? 'green' : 'orange',
                  padding: 20,
                  width: 85,
                  alignItems: 'center',
                  borderRadius: 5,
                },
              ]}>
              <View>
                <Text style={{color: 'white', fontWeight: 700}}>+</Text>
              </View>
            </Pressable>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: 20,
            }}>
            <Pressable
              style={({pressed}) => [
                {
                  backgroundColor: pressed ? 'green' : 'black',
                  padding: 20,
                  width: 170,
                  alignItems: 'center',
                  borderRadius: 5,
                },
              ]}>
              <View>
                <Text style={{color: 'white', fontWeight: 700}}>0</Text>
              </View>
            </Pressable>
            <Pressable
              style={({pressed}) => [
                {
                  backgroundColor: pressed ? 'green' : 'orange',
                  padding: 20,
                  width: 85,
                  alignItems: 'center',
                  borderRadius: 5,
                },
              ]}>
              <View>
                <Text style={{color: 'white', fontWeight: 700}}>.</Text>
              </View>
            </Pressable>
            <Pressable
              style={({pressed}) => [
                {
                  backgroundColor: pressed ? 'green' : 'orange',
                  padding: 20,
                  width: 85,
                  alignItems: 'center',
                  borderRadius: 5,
                },
              ]}>
              <View>
                <Text style={{color: 'white', fontWeight: 700}}>=</Text>
              </View>
            </Pressable>
          </View>
        </View> */}

        {/* assignment 6 --> Otp form */}
        {/* <View style={styles.middle}>
          <Text style={styles.Head}>OTP Form</Text>
          <View
          
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TextInput
              style={styles.inpu2}
             
              placeholder=""
              textAlign="center"
              keyboardType="numeric"
              autoCapitalize="none"
              maxLength={1}
              onChange={(e)=>{
                console.log(e)
              }}
            />
            <TextInput
              style={styles.inpu2}
              placeholder=""
              textAlign="center"
              keyboardType="numeric"
              autoCapitalize="none"
              maxLength={1}
            />
            <TextInput
              style={styles.inpu2}
              placeholder=""
              textAlign="center"
              keyboardType="numeric"
              autoCapitalize="none"
              maxLength={1}
            />
            <TextInput
              style={styles.inpu2}
              placeholder=""
              textAlign="center"
              keyboardType="numeric"
              autoCapitalize="none"
              maxLength={1}
            />
          </View>
          <Pressable
            style={({pressed}) => [
              {
                backgroundColor: pressed ? '#1870de' : 'blue',
                width: 320,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 10,
                borderRadius: 10,
              },
            ]}>
            <Text style={{color: 'white', fontSize: 20, cursor: 'auto'}}>
              Submit
            </Text>
          </Pressable>
        </View> */}

        {/* assignment 7 --> counting */}
        {/* <Counting /> */}

        {/* assignment 8 --> Value Sort */}
        {/* <ValueSort /> */}

        {/* assignment 9 --> Billing */}
        {/* <Billing /> */}

        {/* assignment 10 --> Budget */}
        {/* <Budget /> */}

        {/* assignment 11 ---> stopclock  */}
        {/* <StopClock /> */}

        {/* assignmentc 12 --> props sending (with table) */}
        {/* <Props data={data} /> */}

        {/* assignment 13 --> box color change */}
        {/* <BoxColor /> */}

        {/* assignment 14 --> roll no. */}
        {/* <RollnoAssig /> */}

        {/* assignment 15 --> showmore/showless */}
        {/* <ShowMore /> */}

        {/* assignment 16 --> Validation */}
        <Validation />

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  middle: {
    display: 'flex',
    height: 755,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Head: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 20,
    marginHorizontal: 'auto',
  },
  inpu: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    width: 320,
    height: 50,
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
  },
  inpu1: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    width: 150,
    height: 50,
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
  },
  inpu2: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    width: 50,
    height: 50,
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
  },
});

export default App;
