import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const NewPost = () => {
  return (
    <View style={styles.container}>
      <Text>NewPost</Text>
    </View>
  )
}

export default NewPost

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center"
  }
})