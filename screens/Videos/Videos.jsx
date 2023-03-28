import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Videos = () => {
  return (
    <View style={styles.container}>
      <Text>Videos</Text>
    </View>
  )
}

export default Videos

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center"
  }
})