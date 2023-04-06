import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Gifts = () => {
  return (
    <View style={styles.container}>
      <Text>Gifts</Text>
    </View>
  )
}

export default Gifts

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center"
  }
})