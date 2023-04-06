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

import { AntDesign } from "@expo/vector-icons";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("screen");

const SearchPopularCategories = () => {
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
            {/* <SimpleLineIcons name="grid" size={24} color="black" /> */}
            <TouchableOpacity
              style={{
                width: 35.1,
                height: 35.1,
                backgroundColor: "#E9E9E9",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 9999,
              }}
            >
              <Image
                source={require("../../assets/images/star.png")}
                resizeMode="cover"
                style={{
                  width: 17,
                  height: 16,
                }}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                width: 35.1,
                height: 35.1,
                backgroundColor: "#E9E9E9",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 9999,
              }}
            >
              <Image
                source={require("../../assets/images/threeDots.png")}
                resizeMode="cover"
                style={{
                  width: 19,
                  height: 19,
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
                    placeholder="What Are You Looking For?"
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
                    paddingTop: 40
                }}
                >
                Popular Categories
                </Text>

                <View>
                    {popularCategoriesList.map((category, index) => (
                        <View key={category.id} style={{
                            alignItems: "center",
                            justifyContent: "space-between",
                            flexDirection: "row",
                            backgroundColor: "#F4F4F4",
                            minHeight: 67,
                            width: "100%",
                            marginBottom: 10,
                            borderRadius: 7,
                            overflow: "hidden",
                            padding: 12,

                        }}>
                            <View style={{
                                alignItems: "center",
                                flexDirection: "row",
                                gap: 31
                            }}>
                                {/* Settings Icon */}
                                <View style={{height: 46, width: 45, backgroundColor: "#FFFFFF", justifyContent: "center", alignItems: "center"}}>
                                    <Image
                                        source={require("../../assets/images/categorySettingsIcon.png")}
                                        resizeMode="cover"
                                        style={{
                                            width: 18,
                                            height: 18,
                                        }}
                                    />
                                    
                                </View>
                                <Text
                                    style={{
                                        fontFamily: "Montserrat_700Bold",
                                        fontSize: 13,
                                        maxWidth: 220
                                    }}
                                >{category.name}</Text>
                            </View>

                            <Image
                                source={require("../../assets/images/categoryNextIcon.png")}
                                resizeMode="cover"
                                style={{
                                    width: 11,
                                    height: 11,
                                }}
                            />
                            
                        </View>
                    ))}
                </View>
            </View>

            <View style={{marginBottom: 100}} />

          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SearchPopularCategories;

const styles = StyleSheet.create({});
