import { Platform, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors, ScreenWidth } from '../../components/shared';
import Button from '../../components/Button';

const ResetPassword = () => {
  return (
    <SafeAreaView style={styles.container}>
        <View style={{ marginLeft: 20, flex: 1, marginRight: 20 }}>
          <Text style={styles.mainTxt}>Reset Password</Text>
          <Text style={styles.minorTxt}>Enter the email associated to your account and we’ll send an email with instructions to reset your password</Text>
          <Text style={[styles.minorTxt, { marginTop: 40, marginBottom: 20 }]}>Email Address</Text>
          <TextInput 
            placeholder='usermail@mail.com' 
            textContentType='emailAddress' 
            autoComplete='email' 
            enablesReturnKeyAutomatically 
            keyboardType='email-address' 
            style={styles.int}
          />
          <Button title={"Send Instructions"} type={"full"} onPress={() => {}}>
            <Text>Send Instructions</Text>
          </Button>
        </View>
    </SafeAreaView>
  )
}

export default ResetPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  mainTxt: {
    fontSize: 24,
    fontFamily: "Montserrat_700Bold",
    textAlign: "left",
    marginBottom: 15,
    marginTop: Platform.OS === "android" ? 30 : Platform.OS === "ios" ? 20 : 20
  },
  minorTxt: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 12,
    color: "#505050",
    maxWidth: ScreenWidth * 0.8
  },
  int: {
    paddingVertical: 12,
    paddingLeft: 25,
    borderColor: colors.border,
    fontSize: 12,
    fontFamily: "Montserrat_700Bold",
    color: "#505050",
    borderWidth: 0.4,
    borderStyle: "solid",
    borderRadius: 5
  }
})