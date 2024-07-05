import React from 'react'
import { Text, View , StyleSheet } from 'react-native'

const Hobby = () => {
  return (
	<View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          
        ]}>
        Hobbies
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          
        ]}>
        My hobby is to learn new things and make the existing things better , i enjoy coding  while also fond of games and music in my lesure
      </Text>
    </View>
  )
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
})


export default Hobby
