import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View, Image, Platform } from 'react-native'
import React from 'react'
import { AntDesign, Feather, FontAwesome } from '@expo/vector-icons';


import { ChatRow } from '../../components/chatRow';
import { chatLists } from '../../data';

const MessageList = () => {
  return (
    <View style={{flex: 1, backgroundColor: "white"}}>
      {/* First Section */}
      <View style={{
        flex: Platform.OS === "ios" ? 0.02 : 0.12,
        backgroundColor: "white", 
        zIndex: 10
      }}>
        <View style={{marginLeft: 30}}>
          <View style={{marginTop: 20, marginLeft: 8}}>
            {/* Search Field */}
            <View style={{height: 45, width: 300, backgroundColor: "#F0F0F0", flexDirection: "row", alignItems: "center", overflow: "hidden", borderRadius: 8, paddingHorizontal: 16}}>
              
              <AntDesign name="search1" size={23} color="#839499" />
              
              <TextInput 
                style={{width: "100%", height: "100%", paddingHorizontal: 13, fontSize: 14, fontFamily: "Montserrat_500Medium"}}
                placeholder="Search"
                placeholderTextColor="#839499"
              />
            </View>
            {/* <Text style={{fontFamily: "Montserrat_700Bold", fontSize: 23, marginTop: 33, color: "#000000"}}>Messages</Text> */}
          </View>
        </View>
      </View>

      {/* Second Section */}
      <View style={{
        flex:  Platform.OS === "ios" ? 0.98 : 0.88
      }}>
        <ScrollView style={{
          marginTop: Platform.OS == "ios" ? 70 : 0, // This adds more margin between the search and the navbar.
        }}>
          {chatLists.friends.map((chat, index) => (
            <ChatRow key={chat.id} chat={chat} />
          ))}
          <View style={{marginVertical: 20}}/>
          
        </ScrollView>
      </View>
      
      
    </View>
    
  )
}

export default MessageList;

const styles = StyleSheet.create({
  
});