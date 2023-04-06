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
  import { popularCategoriesList } from "../../data";

import { userSearchedVideo } from "../../data";
  
  import { AntDesign } from "@expo/vector-icons";

const TopSearchedVideos = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#fff",
        position: "relative",
      }}
    >
      <View
        style={{
          flex: 1,
          paddingTop: Platform.OS === "ios" ? 0 : 30,
        }}
      >

        
        
        <View
          style={{
            flex: 0.12,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 30,
          }}
        >
          {/* Return Back Arrow */}
          <Pressable style={{ padding: 5 }} onPress={() => navigation.goBack()}>
            <Image
              source={require("../../assets/images/backArrow.png")}
              resizeMode="cover"
              style={{
                width: 21,
                height: 20,
              }}
            />
          </Pressable>

          <View style={{ flexDirection: "row", gap: 15 }}>
            <TouchableOpacity
              style={{}}
            >
              <Image
                source={userSearchedVideo.profile_photo}
                resizeMode="cover"
                style={{
                    width: 35.1,
                    height: 35.1,
                    borderRadius: 9999,
                }}
              />
            </TouchableOpacity>

          </View>

          
        </View>

        <View style={{justifyContent: "center", alignItems: "center", marginBottom: 10, paddingHorizontal: 30}}>
            <View style={{width: "100%"}}>
                <View style={{width: "100%"}}>
                {/* Search Field */}
                <View
                    style={{
                    height: 45,
                    width: "100%",
                    backgroundColor: "#F0F0F0",
                    flexDirection: "row",
                    alignItems: "center",
                    overflow: "hidden",
                    borderRadius: 8,
                    paddingHorizontal: 16,
                    }}
                >
                    <AntDesign name="search1" size={25} color="#000000" />

                    <TextInput
                    style={{
                        width: "100%",
                        height: "100%",
                        paddingHorizontal: 13,
                        fontSize: 14,
                        fontFamily: "Montserrat_600SemiBold",

                    }}
                    placeholder="Search for a Video or Category"
                    placeholderTextColor="#4A4A4A"
                    />
                </View>
                </View>
            </View>
        </View>


        {/* Give this a max width */}
        <View style={{ flex: 0.89 }}>
          <ScrollView>

            <View style={{paddingHorizontal: 30}}>
                <Text
                style={{
                    
                    fontFamily: "Montserrat_700Bold",
                    fontSize: 18,
                    marginBottom: 40,
                    paddingTop: 40,
                }}
                >
                Top Searches
                </Text>

                <View>
                    {userSearchedVideo.searches.map((item, index) => (
                        <View key={item.id} style={{
                            alignItems: "center",
                            justifyContent: "space-between",
                            flexDirection: "row",
                            backgroundColor: "#F4F4F4",
                            minHeight: 80,
                            width: "100%",
                            marginBottom: 10,
                            borderRadius: 15,
                            overflow: "hidden",
                            paddingRight: 12,

                        }}>
                            <Image
                                source={item.photo}
                                resizeMode="cover"
                                style={{
                                    width: 120,
                                    height: "100%",
                                    borderRadius: 15,
                                }}
                            />

                            <View style={{
                                alignItems: "center",
                                flexDirection: "row",
                                gap: 31
                            }}>
                                {/* Settings Icon */}
                                <Text
                                    style={{
                                        fontFamily: "Montserrat_600SemiBold",
                                        fontSize: 13,
                                        maxWidth: 120
                                    }}
                                >{item.name}</Text>
                            </View>
                            <TouchableOpacity>
                                <Image
                                    source={require("../../assets/images/videoPlayButton.png")}
                                    resizeMode="cover"
                                    style={{
                                        width: 25,
                                        height: 25,
                                    }}
                                />
                            </TouchableOpacity>
                            
                            
                        </View>
                    ))}
                </View>
            </View>

            <View style={{marginBottom: 100}} />

          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default TopSearchedVideos;

const styles = StyleSheet.create({});