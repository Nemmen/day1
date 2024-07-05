import React from 'react'
import { Text, View , StyleSheet } from 'react-native'

const DOB = () => {
  return (
	<View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          
        ]}>
        DOB
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          
        ]}>
       25 December 2003
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


export default DOB
