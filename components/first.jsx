import React from 'react'
import { Text, View , StyleSheet } from 'react-native'

const First = () => {
  return (
	<View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          
        ]}>
        Aryan Kamboj
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          
        ]}>
        Btech Student at Swami vivekanaand institute of engineering and technology &nbsp;
        <Text style={styles.highlight}>2022 to 2026</Text>
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


export default First
