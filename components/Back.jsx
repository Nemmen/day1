import React from 'react'
import { Text, View , StyleSheet } from 'react-native'

const Back = () => {
  return (
	<View style={styles.sectionContainer}>
      <Text
      style={styles.sectionTitle}
        >
        Background
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          
        ]}>
        My Father is a Salaryman and my mother is a housewife.
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


export default Back
