import React, {useState, useRef, useEffect} from 'react';
import {View, Text, StyleSheet, Button, Pressable} from 'react-native';

const StopClock = () => {
  const [second, setSecond] = useState(0);
  const [millisecond, setMillisecond] = useState(0);
  const [inte, setinte] = useState(0);

  const startHandle = () => {
    const interval = setInterval(() => {
      setMillisecond(prev => parseInt(prev) + 1);
    }, 100);
    setinte(interval);
  };

  if (millisecond == 100) {
    setMillisecond(0);
    setSecond(prev => parseInt(prev) + 1);
  }

  const stopHandle = () => {
    clearInterval(inte);
  };

  const resetHandle = () => {
    setMillisecond(0);
    setSecond(0);
    clearInterval(inte);
    setinte(0);
  };

  return (
    <View
      style={{
        backgroundColor: 'black',
        height: 759.5,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{fontSize: 40, color: 'white'}}>
        {second} : {millisecond}
      </Text>
      <View
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          flexDirection: 'row',
          gap: 30,
          marginTop: 50,
        }}>
        <Pressable
          style={{
            borderColor: 'white',
            borderWidth: 1,

            padding: 10,
            borderRadius: 10,
            shadowColor: 'white',
            shadowOffset: {
              width: 3,
              height: 2,
            },
            shadowOpacity: 0.4,
          }}
          onPress={startHandle}>
          <Text style={{color: 'white', fontSize: 25, cursor: 'pointer'}}>
            start
          </Text>
        </Pressable>
        <Pressable
          style={{
            borderColor: 'white',
            borderWidth: 1,

            padding: 10,
            borderRadius: 10,
            shadowColor: 'white',
            shadowOffset: {
              width: 3,
              height: 2,
            },
            shadowOpacity: 0.4,
          }}
          onPress={stopHandle}>
          <Text style={{color: 'white', fontSize: 25, cursor: 'pointer'}}>
            stop
          </Text>
        </Pressable>
        <Pressable
          style={{
            borderColor: 'white',
            borderWidth: 1,

            padding: 10,
            borderRadius: 10,
            shadowColor: 'white',
            shadowOffset: {
              width: 3,
              height: 2,
            },
            shadowOpacity: 0.4,
          }}
          onPress={resetHandle}>
          <Text style={{color: 'white', fontSize: 25, cursor: 'pointer'}}>
            Reset
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default StopClock;
