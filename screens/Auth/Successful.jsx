import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors, ScreenWidth } from '../../components/shared'
import { images } from '../../assets/images'
import Button from '../../components/Button'

const Successful = () => {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.sectionOne}>
            <Image 
                source={images.Check} 
                resizeMode={"contain"}
                style={{
                    width: 102,
                    height: 102
                }}
            />
            <Text style={{ fontFamily: "Montserrat_700Bold", fontSize: 24, marginTop: 47 }}>Successful</Text>
        </View>
        <View style={[styles.sectionTwo, { marginTop: 117 }]}>
            <Button title={"Go To Home"} onPress={() => {}} />
        </View>
    </SafeAreaView>
  )
}

export default Successful

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    sectionOne: {
        flex: 0.5,
        justifyContent: "flex-end",
        alignItems: "center"
    },
    sectionTwo: {
        flex: 0.5,
        alignItems: "center",
        justifyContent: "flex-start"
    },
})