import { Image, Dimensions, Platform, Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";


const {width: WIDTH, height: HEIGHT} = Dimensions.get("screen");

export const ChatRow = ({chat}) => {

  const navigation = useNavigation();


  // Do something with message
  const onPress = () => {
    navigation.navigate("MessageDetail", {chat});
  }

  const last_message = chat.messages[chat.messages.length - 1];

  const number_of_unread_messages = chat.messages.filter(message => {
    if (message.read === true){
      return message;
    }
  });

  return (
    <Pressable onPress={onPress} style={{marginBottom: 12}}>
      <View style={{ width: "93%" }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingLeft: 33,
            paddingRight: 26,
            paddingVertical: 19,
            borderTopLeftRadius: 20,
            backgroundColor: last_message.read ? "transparent" : "#F0F0F0", // Modify the colors for read and unread messages
          }}
        >
          <View
            style={{
              flexDirection: "row",
              gap: 18,
              alignItems:"center"
            }}
          >
            {/* Photo of Recipient */}
            <Image
              source={chat.profile_photo}
              style={{ width: 39, height: 39, borderRadius: 7 }}
            />
            {/* Messages */}
            <View style={{ gap: 4, maxWidth: "85%"}}>
              <Text style={{ 
                fontFamily: "Montserrat_700Bold", 
                fontSize: 15 
              }}>
                {chat.name}
              </Text>
              <Text
                style={{
                  color: "#839499",
                  overflow: "hidden",
                  maxWidth: "85%",
                  fontFamily: "Montserrat_600SemiBold",
                  fontSize: Platform.OS === "ios" ? 11 : 10,
                  
                }}
              >
                {/* Last Message Read */}
                {last_message.message}
              </Text>
            </View>
          </View>

          {/* Modify this for read and unread messages */}
          {/* Unread messages */}
          <View
            style={{
              backgroundColor: "transparent",
              
            }}
          >
            <Text
              style={{
                fontFamily: "Montserrat_700Bold",
                color: "#fff",
                fontSize: 11,
                backgroundColor: "#FA1304",
                paddingVertical: 3,
                paddingHorizontal: 7,
                borderRadius: 2,
                overflow: "hidden",

              }}
            >
              {number_of_unread_messages.length}
            </Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({});
