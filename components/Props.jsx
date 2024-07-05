import React  from 'react'
import { View , Text } from 'react-native'
import {Row , Rows ,Table} from 'react-native-table-component'

const Props = (props) => {
  return (
	<View style={{padding:20}}>
		<Text style=
		{{marginHorizontal:'auto' ,fontSize:40,fontWeight:700,marginBottom:30,color:'black'}}>
			Uni - Courses
		</Text>
		<Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
			<Row data={props.data.university} style={{height: 40, backgroundColor: '#f1f8ff'}} textStyle={{margin: 6,fontWeight:700}}/>
			<Rows data={props.data.courses} textStyle={{margin: 6}}/>
		</Table>
	</View>
  )
}

export default Props
