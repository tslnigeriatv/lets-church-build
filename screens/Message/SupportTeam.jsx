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
  KeyboardAvoidingView,
  TouchableOpacity
} from "react-native";
import React, { useState } from "react";

import { SimpleLineIcons } from '@expo/vector-icons';

// Headphone Icon
import HeadPhone from '../../assets/images/headphone.png';
import MessageIcon from '../../assets/images/messageIcon.png';

const {width: WIDTH, height: HEIGHT} = Dimensions.get("screen");

const SupportTeam = ({navigation}) => {
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
            <Text style={{ fontFamily: "Montserrat_700Bold", fontSize: 20 }}>
              Support Group
            </Text>
          </View>

          <SimpleLineIcons name="grid" size={24} color="black" />

        </View>
        {/* Give this a max width */}
        <View style={{ flex: 0.89 }}> 
          <ScrollView>
            <View
              style={{
                width: "100%",
                height: 220,
                justifyContent: "flex-end",
                alignItems: "center",

              }}
            >
              <Image 
                source={HeadPhone}
                resizeMode="cover"
                style={{
                  width: 79,
                  height: 79
                }}
              />
              <Text
                style={{
                  fontFamily: "Montserrat_700Bold",
                  fontSize: 20,
                  maxWidth: 190,
                  textAlign: "center",
                  marginTop: 30
                }}
              >How Can We Help You?</Text>
            </View>

            <View
            style={{
                width: "100%",
                height: 100,
                justifyContent: "center",
                alignItems: "center",
            }}
            >
              {/* TouchableOpacity to direct to Customer Service */}
              <TouchableOpacity
                style={{
                  width: 320,
                  height: 44,
                  backgroundColor: "#FFE4D4",
                  borderWidth: 1,
                  borderColor: "#F26A1D",
                  flexDirection: "row",
                  alignItems: "center",
                  paddingHorizontal: 40,
                  borderRadius: 5,
                  marginTop: 90

                }}
              >
                <Image 
                  source={HeadPhone}
                  resizeMode="cover"
                  style={{
                    width: 21,
                    height: 21,
                    marginRight: 29
                  }}
                />

                <Text
                  style={{
                    fontFamily: "Montserrat_700Bold",
                    fontSize: 13,
                    color: "#000000",

                  }}
                >Contact Live Chat </Text>

              </TouchableOpacity>
            </View>

            <View style={{
              height: 300,
              marginTop: 90,
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              
            }}>
              <View
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 9999,
                  backgroundColor: "#FFE4D4",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: 30
                }}
              >
                <Image
                  source={MessageIcon}
                  style={{
                    width: 34,
                    height: 34
                  }}
                />
              </View>

              <Text
                style={{
                  color: "#505050",
                  fontFamily: "Montserrat_600SemiBold",
                  fontSize: 12,
                  textAlign: "center",
                  marginBottom: 5
                }}
              >Send Us An Email</Text>
              <Text
                style={{
                  color: "#F26A1D",
                  fontSize: 12,
                  fontFamily: "Montserrat_700Bold",
                  textAlign: "center"
                }}
              >info@tslnigeria.com</Text>
            </View>
            {/* Content Here */}
            <View style={{marginBottom: 100}} />
          </ScrollView>
        </View>
      </View>

    </SafeAreaView>
  )
}

export default SupportTeam

const styles = StyleSheet.create({})