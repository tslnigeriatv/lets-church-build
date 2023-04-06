import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  Pressable,
  Platform,
  TextInput,
  Dimensions,
  KeyboardAvoidingView
} from "react-native";
import React, { useState } from "react";

import { SimpleLineIcons } from '@expo/vector-icons';

const {width: WIDTH, height: HEIGHT} = Dimensions.get("screen");

export default function MessageDetail({ navigation, route }) {
  const myChat = route.params.chat;

  const [message, setMessage] = useState("");


  const sendMessage = () => {
    console.log(message);
  };

  return (
    <SafeAreaView style={{ 
      flex: 1, 
      backgroundColor: "#fff",
      position: "relative"
    }}>
      <View style={{
        flex: 1,
        paddingTop: Platform.OS === "ios" ? 0 : 30
      }}>
        <View style={{ flex: 0.12, flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 30}}>

          {/* Return Back Arrow */}
          <Pressable
            style={{padding: 5}} 
            onPress={() => navigation.goBack()}>
            <Image
              source={require("../../assets/images/backArrow.png")}
              resizeMode="cover"
              style={{
                width: 21,
                height: 20,
              }}
            />
          </Pressable>

          <View style={{ flexDirection: "row", alignItems: "center", gap: 17 }}>
            <Image
              source={myChat.profile_photo}
              style={{
                width: 47,
                height: 47,
                borderRadius: 50,
              }}
            />
            <Text style={{ fontFamily: "Montserrat_700Bold", fontSize: 20 }}>
              {myChat.name}
            </Text>
          </View>

          <SimpleLineIcons name="grid" size={24} color="black" />
        </View>
        {/* Give this a max width */}
        <View style={{ flex: 0.89 }}> 
          <ScrollView>
              <Text style={{
                textAlign: "center",
                fontFamily: "Montserrat_700Bold",
                fontSize: 12,
                marginBottom: 40,
              }}>
                Today
              </Text>

              {/* Messages Arranged */}
              {myChat.messages.map((message, index) => (
                
                  <View
                    key={message.id}
                    style={{
                      gap: 20,
                      flexDirection: message.name === "Me" ? "row-reverse" : "row",
                      paddingHorizontal: 30, // Apply the same paddingHorizontal Touch Here
                      marginBottom: 20,
                    }}
                  >
                
                  <Image 
                  source={message.image}
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: 50,
                    marginTop: message.name === "Me" ? -25 : 0,
                  }}
                  resizeMode="cover"
                />
                <View style={{
                  marginBottom: 24,
                }}>
                  <Text style={{
                    backgroundColor: "#F0F0F0",
                    
                    padding: 16,
                    paddingHorizontal: 16,
                    maxWidth: Platform.OS === 'ios' ? 270 : 240,
                    borderRadius: 8.7,
                    overflow: "hidden",

                  }}>{message.message}</Text>
                  <Text style={{
                    textAlign: message.name === "Me" ? "right" : "left",
                    fontSize: 10,
                    marginLeft: message.name === "Me" ? 0 : 10,
                    marginRight: message.name === "Me" ? 10 : 0,
                    marginTop: 10

                  }}>3:01Pm</Text>
                </View>
                
              </View>
              ))}
              <View style={{marginBottom: 100}} />
          </ScrollView>
        </View>
      </View>


      {/* Message TextInput Field */}
      <KeyboardAvoidingView>
        <View
          style={{
            position: "absolute",
            bottom: 0, // Use this to position the input field from the bottom
            left: 0,
            right: 0,
            zIndex: 40,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
            paddingHorizontal: 20,
            height: 90

          }}
        >
          <View
            style={{
              position: "relative",
              backgroundColor: "#FFE4D4",
              borderColor: "#F26A1D",
              borderWidth: 1,
              width: WIDTH - 70,
              borderRadius: 5,
              height: 60, // Correct this to the default value when you are done.
            }}
          >
            <Pressable
              style={{
                position: "absolute",
                right: 15,
                top: 15,
                zIndex: 200,
                padding: 2
              }}

              onPress={() => sendMessage()}
            >
              <Image
                source={require("../../assets/images/sendMessage.png")}
                resizeMode="cover"
                style={{
                  width: 25,
                  height: 25,
                  
                }}
              />
            </Pressable>
            
            <TextInput
              onChangeText={(text) => setMessage(text)}
              multiline={true}
              placeholder="Send Message"
              placeholderTextColor={"#000000"}
              selectionColor={"black"}
              style={{
                flex: 1,
                paddingHorizontal: 40,
                paddingTop: Platform.OS === "ios" ? 15 : Platform.OS === "android" ? 0 : 20,
                fontFamily: "Montserrat_600SemiBold"
              }}

            />
          </View>

        </View>
      </KeyboardAvoidingView>

     
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
