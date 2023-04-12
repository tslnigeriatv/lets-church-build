import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, TextInput, TouchableWithoutFeedback, ScrollView, KeyboardAvoidingView } from 'react-native'
import React from 'react';
import { colors, ScreenHeight, ScreenWidth } from '../../components/shared'
import { images } from '../../assets/images';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from '../../lib/firebaseConfig';

// import { AppAuth, Google } from 'expo-app-auth';
// import * as GoogleSignIn from 'expo-google-sign-in';


const RenderAuthFooter = ({ type }) => {

  const provider = new GoogleAuthProvider();

  const GOOGLESignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      }).catch((error) => {
        // Handle Errors here.
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // The email of the user's account used.
        // const email = error.customData.email;
        // The AuthCredential type that was used.
        // const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }



  return (
    <View style={{ marginTop: 30 }}>
      <TouchableOpacity
      style={{ 
        width: "100%", 
        height: 52, 
        backgroundColor: colors.primary,
        justifyContent: "center", 
        alignItems: "center",
        borderRadius: 12
      }}>
          {type === "login" ? (
            <Text style={{ color: colors.white, fontFamily: "Montserrat_700Bold", fontSize: 20 }}>Log In</Text>
          ) : <Text style={{ color: colors.white, fontFamily: "Montserrat_700Bold", fontSize: 20 }}>Register</Text>}
      </TouchableOpacity>
      {type === "login" ? <Text style={{ marginTop: 18, color: colors.primary, textAlign: "center", fontSize: 16, fontFamily: "Montserrat_600SemiBold" }}>Forgot Password?</Text> : (
        <Text style={{ textAlign: "center", margin: 20 }}>Already Registered? <Text style={{ marginTop: 18, color: colors.primary, textAlign: "center", fontSize: 16, fontFamily: "Montserrat_600SemiBold" }}>Login.</Text></Text>
      )}
        
      <View style={{ width: "100%", alignItems: "center", marginTop: 20 }}>
        <View style={{ maxWidth: ScreenWidth/2, flexDirection: "row", justifyContent: 'space-around', alignItems: "center"}}>
          <TouchableWithoutFeedback>
            <Image source={images.Facebook} resizeMode={"contain"} style={{ width: 61, height: 61 }} />
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback>
            <Image source={images.Twitter} resizeMode={"contain"} style={{ width: 61, height: 61 }} />
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={GOOGLESignIn}>
            <Image source={images.Google} resizeMode={"contain"} style={{ width: 61, height: 61 }} />
          </TouchableWithoutFeedback>
        </View>
      </View>
    </View>
  )
}

const LoginScreen = () => {
  return (
    <ScrollView contentContainerStyle={{ flex: 1 }}>
      <KeyboardAvoidingView style={{ flex: 1, justifyContent: "flex-start", alignItems: "center", marginHorizontal: 20, marginTop: 30, backgroundColor: colors.white }}>
        <View style={{ position: "relative", width: "100%" }}>
          <TextInput placeholderTextColor={colors.black} placeholder="Email Address" style={styles.input} />
          <Ionicons style={{ position: "absolute", top: 9, left: 10, padding: 10 }} name="ios-mail" size={24} color="#666565" />
        </View>
        <View style={{ position: "relative", width: "100%" }}>
          <TextInput placeholderTextColor={colors.black} placeholder="Password" secureTextEntry={true} style={styles.input} />
          <Ionicons style={{ position: "absolute", top: 5, right: 15, padding: 10 }} name="eye-off-outline" size={24} color="#666565" />
          <MaterialIcons style={{ position: "absolute", top: 9, left: 10, padding: 10 }} name="lock" size={24} color="#666565" />
          {/* <Ionicons name="eye-outline" size={24} color="black" /> */}
        </View>
        <View style={{ width: "100%" }}>
          <RenderAuthFooter type={"login"} />
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  )
}
const RegisterScreen = () => {
  return (
    <ScrollView contentContainerStyle={{ flex: 1 }}>
      <KeyboardAvoidingView style={{ flex: 1, justifyContent: "flex-start", alignItems: "center", marginHorizontal: 20, marginTop: 30, backgroundColor: colors.white }}>
         {/* Username */}
         <View style={{ position: "relative", width: "100%" }}>
          <TextInput placeholderTextColor={colors.black} placeholder="User Name" style={styles.input} />
          <Ionicons style={{ position: "absolute", top: 9, left: 10, padding: 10 }} name="ios-mail" size={24} color="#666565" />
        </View>
        {/* Email field */}
        <View style={{ position: "relative", width: "100%" }}>
          <TextInput placeholderTextColor={colors.black} placeholder="Phone Number" style={styles.input} />
          <Ionicons style={{ position: "absolute", top: 9, left: 10, padding: 10 }} name="ios-mail" size={24} color="#666565" />
        </View>
        {/* Email field */}
        <View style={{ position: "relative", width: "100%" }}>
          <TextInput placeholderTextColor={colors.black} placeholder="Email Address" style={styles.input} />
          <Ionicons style={{ position: "absolute", top: 9, left: 10, padding: 10 }} name="ios-mail" size={24} color="#666565" />
        </View>
        {/* Password */}
        <View style={{ position: "relative", width: "100%" }}>
          <TextInput placeholderTextColor={colors.black} placeholder="Password" secureTextEntry={true} style={styles.input} />
          <Ionicons style={{ position: "absolute", top: 5, right: 15, padding: 10 }} name="eye-off-outline" size={24} color="#666565" />
          <MaterialIcons style={{ position: "absolute", top: 9, left: 10, padding: 10 }} name="lock" size={24} color="#666565" />
          {/* <Ionicons name="eye-outline" size={24} color="black" /> */}
        </View>
        <View style={{ width: "100%" }}>
          <RenderAuthFooter type={"register"} />
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  )
}

const Tab = createMaterialTopTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator sceneContainerStyle={{
      backgroundColor: colors.white,
      borderWidth: 0,
      elevation: 0
    }}
    screenOptions={{
      tabBarLabelStyle: {
        fontSize: 18,
        fontFamily: "Montserrat_600SemiBold",
        color: "black"
      },
      tabBarIndicatorStyle: {
        height: "100%",
        backgroundColor: colors.primary,
        borderRadius: 12
      },
      tabBarIndicatorContainerStyle: {
        borderWidth: 0,
        backgroundColor: "#F3F3F3",
        borderRadius: 12,
        elevation: 0
      },
      tabBarActiveTintColor: "white",
      tabBarStyle: {
        elevation: 0,
        borderRadius: 12,
      }
    }}
    >
      <Tab.Screen options={{
      }} name="LoginScreen" component={LoginScreen} />
      <Tab.Screen name="RegisterScreen" component={RegisterScreen} />
    </Tab.Navigator>
  );
}


const Login = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.onboardBg }}>
      <View style={{ height: ScreenHeight * 0.2, justifyContent: "center", alignItems: "center" }}>
        <Image source={images.Logo} style={{ width: 27, height: 69 }} />
      </View>
      <View style={{ 
        height: ScreenHeight * 0.8, 
        backgroundColor: "white", 
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
      }}>
        <View style={{
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          padding: 30
        }}>
          <Text style={{ fontSize: 24, fontFamily: "Montserrat_700Bold"}}>Get Started</Text>
        </View>
        <View style={{ height: "100%", width: "100%", padding: 10 }}>
          <MyTabs />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    borderColor: colors.border,
    borderRadius: 12,
    width: "100%",
    height: 62,
    borderStyle: "solid",
    borderWidth: 1,
    fontFamily: "Montserrat_700Bold",
    backgroundColor: "#F3F3F3",
    paddingLeft: 50,
    color: colors.black
  }
});