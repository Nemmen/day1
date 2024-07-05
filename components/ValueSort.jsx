import React ,{useState} from 'react'
import { View,Text,StyleSheet,TextInput,Pressable } from 'react-native'


const ValueSort = () => {
	const [nu1, setNum1] = useState('')
	const [nu2, setNum2] = useState('')
	const [nu3, setNum3] = useState('')

	const sort = () => {
		let num1 = parseFloat(nu1)
		let num2 = parseFloat(nu2)
		let num3 = parseFloat(nu3)

		if(num1 < num2 && num1 < num3){
			if(num2 < num3){
				return (num1 + '   ' + num2 + '   ' + num3)
			}else{
				return (num1 + ' 	' + num3 + '	 ' + num2)
			}
		}
		if(num2 < num1 && num2 < num3){
			if(num1 > num3){
				return (num2 + '	 ' + num1 + '	 ' + num3)
			}else{
				return (num2 + ' 	' + num3 + '	 ' + num1)
			}
		}
		if(num3 < num1 && num3 < num2){
			if(num1 < num2){
				return (num3 + '	 ' + num1 + '	 ' + num2)
			}else{
				return (num3 + '	 ' + num2 + '	 ' + num1)
			}
		}

	}

  return (
	<View style={{
		padding:10,
		flex:1,
		justifyContent:'center',
		alignItems:'left',
		height:755
	}}>
		<Text style={{
			fontSize:20,
			fontWeight:'bold',
			marginBottom:10
		
		}}>Number 1</Text>
		<TextInput
            style={styles.inpu}
            placeholder="Enter your NO.1"
            keyboardType="numeric"
            autoCapitalize="none"
			value={nu1}
			onChangeText={setNum1}
          />
		<Text style={{
			fontSize:20,
			fontWeight:'bold',
			marginBottom:10
		
		}}>Number 2</Text>
		<TextInput
            style={styles.inpu}
            placeholder="Enter your NO.2"
            keyboardType="numeric"
            autoCapitalize="none"
			value={nu2}
			onChangeText={setNum2}
          />
		<Text style={{
			fontSize:20,
			fontWeight:'bold',
			marginBottom:10
		
		}}>Number 3</Text>
		<TextInput
            style={styles.inpu}
            placeholder="Enter your NO.3"
            keyboardType="numeric"
            autoCapitalize="none"
			value={nu3}
			onChangeText={setNum3}
          />
		<Text style={{
			fontSize:20,
			fontWeight:'bold',
			marginBottom:10
		}}>Sorted Numbers</Text>
		<Text style={{
			fontSize:20,
			fontWeight:'bold',
			marginBottom:10
		}}>{sort()}</Text>
	</View>
  )
}

const styles = StyleSheet.create({
	inpu:{
		borderWidth:1,
		borderColor:'black',
		borderRadius:10,
		padding:10,
		width:375,
		marginBottom:10
	}
})

export default ValueSort
