import { Platform, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { colors, ScreenWidth } from '../components/shared';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import Button from '../components/Button';

const ChangePassword = () => {
  const [password, setPassword] = useState('');
  const [hidePass, setHidePass] = useState(true);


  return (
    <SafeAreaView style={styles.container}>
        <View style={{ marginLeft: 20, flex: 1, marginRight: 20 }}>
          <Text style={styles.mainTxt}>Create New Password</Text>
          <Text style={styles.minorTxt}>Your new password must be different from previously used password.</Text>
          {/* Password one */}
          <View>
            <Text style={[styles.minorTxt, { marginTop: 40, marginBottom: 20 }]}>Old Password</Text>
            <View style={{ position: "relative", width: "100%" }}>
              <TextInput 
                placeholderTextColor={colors.black} 
                placeholder="*******" 
                secureTextEntry={hidePass} 
                style={styles.input}
                textContentType='password' 
                autoComplete='email' 
                enablesReturnKeyAutomatically 
                onChangeText={(text) => setPassword(text)}
              />
              {hidePass ? <Ionicons onPress={() => setHidePass(false)} style={{ position: "absolute", top: -3, right: 15, padding: 10 }} name="eye-off-outline" size={24} color="#666565" /> :
              <Ionicons onPress={() => setHidePass(true)} style={{ position: "absolute", top: -3, right: 15, padding: 10 }} name="eye-outline" size={24} color="#666565" />}
            </View>
          </View>

          {/* Password two */}
          <View>
            <Text style={[styles.minorTxt, { marginTop: 10, marginBottom: 10 }]}>New Password</Text>
            <View style={{ position: "relative", width: "100%" }}>
              <TextInput 
                placeholderTextColor={colors.black} 
                placeholder="*******" 
                secureTextEntry={hidePass} 
                style={styles.input}
                textContentType='password' 
                autoComplete='email' 
                enablesReturnKeyAutomatically 
                onChangeText={(text) => setPassword(text)}
              />
              {hidePass ? <Ionicons onPress={() => setHidePass(false)} style={{ position: "absolute", top: -3, right: 15, padding: 10 }} name="eye-off-outline" size={24} color="#666565" /> :
              <Ionicons onPress={() => setHidePass(true)} style={{ position: "absolute", top: -3, right: 15, padding: 10 }} name="eye-outline" size={24} color="#666565" />}
            </View>
          </View>

          {/* Password three */}
          <View>
            <Text style={[styles.minorTxt, { marginTop: 10, marginBottom: 10 }]}>Confirm New Password</Text>
            <View style={{ position: "relative", width: "100%" }}>
              <TextInput 
                placeholderTextColor={colors.black} 
                placeholder="*******" 
                secureTextEntry={hidePass} 
                style={styles.input}
                textContentType='password' 
                autoComplete='email' 
                enablesReturnKeyAutomatically 
                onChangeText={(text) => setPassword(text)}
              />
              {hidePass ? <Ionicons onPress={() => setHidePass(false)} style={{ position: "absolute", top: -3, right: 15, padding: 10 }} name="eye-off-outline" size={24} color="#666565" /> :
              <Ionicons onPress={() => setHidePass(true)} style={{ position: "absolute", top: -3, right: 15, padding: 10 }} name="eye-outline" size={24} color="#666565" />}
            </View>
          </View>

          <Button title={"Change Password"} type={"full"} onPress={() => {}} />
        </View>
    </SafeAreaView>
  )
}

export default ChangePassword;

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
  input: {
    marginBottom: 10,
    borderColor: colors.border,
    borderRadius: 5,
    width: "100%",
    borderStyle: "solid",
    borderWidth: 1,
    fontFamily: "Montserrat_700Bold",
    paddingLeft: 15,
    paddingVertical: 10, 
    color: "#505050"
  }
})