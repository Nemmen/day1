import React,{useState}from 'react'
import { Text, View ,Button,Pressable, StyleSheet } from 'react-native'

const Counting = () => {
	  const [count, setCount] = useState(0)	

	const increment = () => {
		setCount(count + 1)
	}

	const decrement = () => {
		setCount(count - 1)
	}

  return (
	<View style={styles.container}>
		<Text style={{fontSize:40,fontWeight:700,marginBottom:90}}>Counter</Text>
		<View style={{display:'flex',flexDirection:'row' , gap:60}}>
		<Pressable
		onPress={decrement}
            style={({pressed}) => [
              {
                backgroundColor: pressed ? '#1870de' : 'blue',
                width: 70,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 10,
                borderRadius: 10,
              },
            ]}>
            <Text style={{color: 'white', fontSize: 20, cursor: 'auto'}}>
              -
            </Text>
          </Pressable>
		<Text style={{fontSize:40,fontWeight:700}}>{count}</Text>
		<Pressable
		onPress={increment}
            style={({pressed}) => [
              {
                backgroundColor: pressed ? '#1870de' : 'blue',
                width: 70,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 10,
                borderRadius: 10,
              },
            ]}>
            <Text style={{color: 'white', fontSize: 20, cursor: 'auto'}}>
              +
            </Text>
          </Pressable>
		</View>
	</View>
  )
}

const styles = StyleSheet.create({
	container:{
		flex:1,
		height:755,
		justifyContent:'center',
		alignItems:'center',
		flexDirection:'',
	}
})

export default Counting
