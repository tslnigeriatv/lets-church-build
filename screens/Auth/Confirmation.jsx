import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { images } from '../../assets/images'
import { Image } from 'react-native'
import { colors, ScreenWidth } from '../../components/shared'
import Button from '../../components/Button'

const Confirmation = () => {
  return (
    <SafeAreaView style={styles.container}>
        <View style={{ marginLeft: 20, flex: 1, marginRight: 20 }}>
            <View style={styles.sectionOne}>
                <Image 
                    source={images.Mail}  
                    resizeMode={"contain"}
                    style={{
                        width: 104,
                        height: 88.67
                    }}
                />
                <Text style={styles.mainTxt}>check your mail</Text>
                <View style={styles.minorTxtContainer}>
                    <Text style={[styles.minorTxt, { marginBottom: 7 }]}>We have sent your password recovery</Text>
                    <Text style={styles.minorTxt}>instructions to your email.</Text>
                </View>
                <Button title={"Open Mail"} onPress={() => {}} />
                <TouchableOpacity style={{ marginTop: 10 }}>
                    <Text style={{ fontSize: 12, fontFamily: "Montserrat_600SemiBold", color: "#505050" }}>Skip, I’ll confirm later</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.sectionTwo}>
                <TouchableOpacity style={{ textAlign: "center" }}>
                    <Text style={{ fontSize: 12, fontFamily: "Montserrat_600SemiBold", color: "#505050" }}>Did not see the email? check your spam filter, or <Text style={{color: colors.primary}}>try another email address</Text></Text>
                </TouchableOpacity>
            </View>
        </View>
    </SafeAreaView>
  )
}

export default Confirmation

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
    },
    sectionOne: {
        flex: 0.9,
        justifyContent: "center",
        alignItems: "center"
    },
    sectionTwo: {
        flex: 0.1,
        alignItems: "center",
        justifyContent: "flex-start"
    },
    mainTxt: {
        fontFamily: "Montserrat_700Bold",
        fontSize: 24,
        textAlign: "center",
        marginTop: 39,
        marginBottom: 29
    },
    minorTxtContainer: {
        maxWidth: ScreenWidth * 0.6,
    },
    minorTxt: {
        textAlign: "center",
        fontSize: 12,
        fontFamily: "Montserrat_600SemiBold"
    }
})