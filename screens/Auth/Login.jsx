import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, TextInput, TouchableWithoutFeedback, ScrollView, KeyboardAvoidingView, Button } from 'react-native'
import React, { useState, useEffect } from 'react';
import { colors, ScreenHeight, ScreenWidth } from '../../components/shared'
import { images } from '../../assets/images';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

import { 
  createUserWithEmailAndPassword,
  getAuth,
  FacebookAuthProvider,
  signInWithCredential,

} from "firebase/auth";

import {firebase} from '../../lib/firebaseConfig';
import { LoginManager, LoginButton, AccessToken } from 'react-native-fbsdk-next';


import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

const RenderAuthFooter = ({ type, method }) => {

  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  GoogleSignin.configure({
    webClientId: "270880612153-3ufhf1on4mj155t44t4chlu1stbv5dc1.apps.googleusercontent.com",
  });


  

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  const signInWithFacebook = async () => {
      // Attempt login with permissions
      const result = await LoginManager.logInWithPermissions(['user_photos', 'user_birthday']);

    if (result.isCancelled) {
      throw 'User cancelled the login process';
    }

    // Once signed in, get the users AccesToken
    const data = await AccessToken.getCurrentAccessToken();

    if (!data) {
      throw 'Something went wrong obtaining access token';
    }

    // Create a Firebase credential with the AccessToken
    const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);

    // Sign-in the user with the credential
    user_signed_in = signInWithCredential(facebookCredential);

    user_signed_in.then((user) => {
      console.log(user);
    }).catch((error) => {
      console.log(error);
    })
  }
  


  const onGoogleButtonPress = async () => {
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();
  
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  
    // Sign-in the user with the credential
    // return auth().signInWithCredential(googleCredential);

    const user_signed_in = auth().signInWithCredential(googleCredential);

    user_signed_in.then((user) => {
      console.log(user);
    }).catch((error) => {
      console.log(error);
    })
  }

  // SignOut With Google
  const signOutGoogle = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await auth().signOut();
    } catch (error) {
      console.log(error)
    }
  }

  

  if (initializing) return null;


  if (!user) {
    return (
      <View style={{ }}>
        <TouchableOpacity
        onPress={method}
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
            <TouchableWithoutFeedback onPress={signInWithFacebook}>
              <Image source={images.Facebook} resizeMode={"contain"} style={{ width: 61, height: 61 }} />
            </TouchableWithoutFeedback>
  
            <TouchableWithoutFeedback>
              <Image source={images.Twitter} resizeMode={"contain"} style={{ width: 61, height: 61 }} />
            </TouchableWithoutFeedback>
  
            {/* <GoogleSigninButton 
              onPress={() => onGoogleButtonPress()}
            /> */}
            <TouchableWithoutFeedback onPress={onGoogleButtonPress}>
              <Image source={images.Google} resizeMode={"contain"} style={{ width: 61, height: 61 }} />
            </TouchableWithoutFeedback>
          </View>
        </View>

        
      </View>
    )
  } else {
    return(
      <View style={{}}>
        <Button
          title='Sign Out'
          onPress={signOutGoogle}
        />
        <View style={{ alignItems: "center", }}>
          <Text style={styles.text}>Welcome, {user.displayName}</Text>
          <Image 
            source={{uri: user.photoURL}}
            style={{width: 50, height: 50, borderRadius: 9999, marginVertical: 30}}
          />
        </View>
        
      </View>
    )
  }

  
}

const LoginScreen = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const createUser = () => {
    // const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });
  }


  return (
    <View style={{ paddingBottom: 30 }}>
      <ScrollView
      showsVerticalScrollIndicator={false} 
      style={{ paddingTop: 30 }}>
        <KeyboardAvoidingView style={{  }}>
          <View style={{ position: "relative", width: "100%" }}>
            <TextInput placeholderTextColor={colors.black} placeholder="Email Address" style={styles.input} />
            <Ionicons style={{ position: "absolute", top: 4, left: 10, padding: 10 }} name="ios-mail" size={24} color="#666565" />
          </View>
          <View style={{ position: "relative", width: "100%" }}>
            <TextInput placeholderTextColor={colors.black} placeholder="Password" secureTextEntry={true} style={styles.input} />
            <Ionicons style={{ position: "absolute", top: 5, right: 15, padding: 10 }} name="eye-off-outline" size={24} color="#666565" />
            <MaterialIcons style={{ position: "absolute", top: 4, left: 10, padding: 10 }} name="lock" size={24} color="#666565" />
            {/* <Ionicons name="eye-outline" size={24} color="black" /> */}
          </View>
          <View style={{ width: "100%" }}>
            <RenderAuthFooter type={"login"} method={createUser} />
          </View>
          <View style={{ height: 170 }}></View>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  )
}
const RegisterScreen = () => {




  return (
    <View style={{ paddingBottom: 30 }}>
      <ScrollView
      showsVerticalScrollIndicator={false} 
      style={{ paddingTop: 30 }}>
         <KeyboardAvoidingView>
             {/* Username */}
            <View style={{ position: "relative", width: "100%" }}>
              <TextInput placeholderTextColor={colors.black} placeholder="User Name" style={styles.input} />
              <Ionicons style={{ position: "absolute", top: 4, left: 10, padding: 10 }} name="ios-mail" size={24} color="#666565" />
            </View>
            {/* Phone Number */}
            <View style={{ position: "relative", width: "100%" }}>
              <TextInput placeholderTextColor={colors.black} placeholder="Phone Number" style={styles.input} />
              <Ionicons style={{ position: "absolute", top: 4, left: 10, padding: 10 }} name="ios-mail" size={24} color="#666565" />
            </View>
            {/* Email field */}
            <View style={{ position: "relative", width: "100%" }}>
              <TextInput placeholderTextColor={colors.black} placeholder="Email Address" style={styles.input} />
              <Ionicons style={{ position: "absolute", top: 4, left: 10, padding: 10 }} name="ios-mail" size={24} color="#666565" />
            </View>
            {/* Password */}
            <View style={{ position: "relative", width: "100%" }}>
              <TextInput placeholderTextColor={colors.black} placeholder="Password" secureTextEntry={true} style={styles.input} />
              <Ionicons style={{ position: "absolute", top: 5, right: 15, padding: 10 }} name="eye-off-outline" size={24} color="#666565" />
              <MaterialIcons style={{ position: "absolute", top: 4, left: 10, padding: 10 }} name="lock" size={24} color="#666565" />
              {/* <Ionicons name="eye-outline" size={24} color="black" /> */}
            </View>
            <View style={{ width: "100%" }}>
              <RenderAuthFooter type={"register"} />
            </View>
            <View style={{ height: 170 }}></View>
         </KeyboardAvoidingView>
      </ScrollView>
    </View>
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
        fontSize: 14,
        fontFamily: "Montserrat_700Bold",
        color: "black",
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
        elevation: 0,
        marginBottom: 5
      },
      tabBarActiveTintColor: "white",
      tabBarStyle: {
        elevation: 0,
        borderRadius: 12,
      }
    }}
    >
      <Tab.Screen options={{
      }} name="Login" component={LoginScreen} />
      <Tab.Screen name="Register" component={RegisterScreen} />
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
    height: 52,
    borderStyle: "solid",
    borderWidth: 1,
    fontFamily: "Montserrat_600SemiBold",
    backgroundColor: "#F3F3F3",
    paddingLeft: 50,
    color: colors.black,
    fontSize: 11
  }
});