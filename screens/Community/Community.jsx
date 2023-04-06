import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  Platform,
} from "react-native";
import React from "react";

//  Icons
import { Entypo } from "@expo/vector-icons";

import { categoryList, communityGroups, communityReels } from "../../data";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("screen");

const Community = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ flex: 1 }}>
        {/* First Section */}
        <View style={{ flex: Platform.OS === "ios" ? 0.24 : 0.3 }}>
          <View style={{ position: "relative" }}>
            <View
              style={{
                position: "absolute",
                top: Platform.OS === "ios" ? 20 : 50,
                left: 0,
                right: 0,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  height: 60,
                  width: WIDTH * 0.9,
                  backgroundColor: "#FFEDE2",
                  borderRadius: 12,
                  overflow: "hidden",
                  alignItems: "center",
                  paddingHorizontal: 10,
                  paddingVertical: 4,
                  flexDirection: "row",
                }}
              >
                <View
                  style={{
                    width: 72,
                    backgroundColor: "#F26A1D",
                    height: "100%",
                    borderRadius: 12,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    source={require("../../assets/images/Vector.png")}
                    resizeMode="cover"
                    style={{
                      width: 18,
                      height: 16.11,
                    }}
                  />
                </View>

                <Text
                  style={{
                    fontFamily: "Montserrat_600SemiBold",
                    marginLeft: 16,
                    color: "#F26A1D",
                  }}
                >
                  Wallet
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              marginLeft: (WIDTH * 0.1) / 2 - 5,
            }}
          >
            <Text
              style={{
                marginTop: Platform.OS === "ios" ? 120 : 135,
                fontFamily: "Montserrat_700Bold",
                fontSize: 25,
                color: "#000000",
              }}
            >
              Community
            </Text>
          </View>
        </View>

        {/* Second Section */}
        <View style={{ flex: 0.8 }}>
          <ScrollView>
            <View
              style={{
                marginLeft: (WIDTH * 0.1) / 2 - 5,
                marginTop: 30,
              }}
            >
              {/* Category List */}
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {categoryList.map((category, index) => (
                  <TouchableOpacity
                    key={category.id}
                    style={{
                      flexDirection: "row-reverse",
                      backgroundColor: "#F0F0F0",
                      width: 97,
                      height: 39,
                      marginHorizontal: 13 / 2,
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: 10,
                    }}
                  >
                    <Text
                      style={{
                        marginLeft: 4,
                        fontFamily: "Montserrat_600SemiBold",
                        fontSize: 10,
                      }}
                    >
                      {category.name}
                    </Text>
                    <Image
                      source={category.icon}
                      resizeMode="cover"
                      style={{
                        width: 17,
                        height: 17,
                      }}
                    />
                  </TouchableOpacity>
                ))}
              </ScrollView>

              {/* Community Reels */}
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                  marginTop: 40,
                }}
              >
                {communityReels.map((reel, index) => (
                  <TouchableOpacity
                    key={reel.id}
                    style={{
                      borderRadius: 10,
                      overflow: "hidden",
                      marginRight: 10,
                    }}
                  >
                    <ImageBackground
                      source={reel.post_pic}
                      resizeMode="cover"
                      style={{
                        width: 110,
                        height: 132,
                        backgroundColor: "transparent",
                        position: "relative",
                      }}
                    >
                      {/* User Photo */}
                      <Image
                        source={reel.user_photo}
                        style={{
                          width: 40,
                          height: 40,
                          borderRadius: 19,
                          borderWidth: 1,
                          borderColor: "#1A4F38",
                          position: "absolute",
                          top: 6,
                          left: 6,
                        }}
                      />
                    </ImageBackground>
                  </TouchableOpacity>
                ))}
              </ScrollView>

              {/* Join Group */}
              <View style={{}}>
                {communityGroups && (
                  <View>
                    <Text
                      style={{
                        marginTop: 41,
                        marginBottom: 15,
                        fontFamily: "Montserrat_700Bold",
                        fontSize: 25,
                        color: "#000000",
                      }}
                    >
                      Group
                    </Text>

                    <View
                      style={{
                        marginRight: (WIDTH * 0.1) / 2 - 5 + 10,
                        marginLeft: 10,
                      }}
                    >
                      {communityGroups.map((group, index) => (
                        <View
                          key={group.id}
                          style={{
                            width: "100%",
                            // height: 80,
                            backgroundColor: "#F0F0F0",
                            marginTop: 10,
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: 10,
                            paddingVertical: 10,
                            paddingLeft: 10,
                            paddingRight: 20,
                          }}
                        >
                          <View
                            style={{
                              flexDirection: "row",
                              flex: 1,
                              width: "100%",
                              alignItems: "center",
                              justifyContent: "space-around",
                            }}
                          >
                            <View
                              style={{
                                flexDirection: "row",
                                flex: 1,
                                width: "100%",
                                gap: 15,
                                height: "100%",
                              }}
                            >
                              <ImageBackground
                                source={group.groupImage}
                                resizeMode="cover"
                                style={{
                                  width: 80,
                                  height: "100%",
                                  borderRadius: 10,
                                  overflow: "hidden",
                                }}
                              />
                              <View>
                                <Text
                                  style={{
                                    fontFamily: "Montserrat_600SemiBold",
                                    fontSize: 16,
                                  }}
                                >
                                  {group.name}
                                </Text>
                                <View style={{ flexDirection: "column" }}>
                                  <View style={{ flexDirection: "row" }}>
                                    {/* Photos of friends */}
                                    {group.friendsInGroup.map(
                                      (friend, index) => (
                                        <View
                                          key={friend.id}
                                          style={{
                                            marginLeft: index === 0 ? 0 : -8,
                                          }}
                                        >
                                          <Image
                                            source={friend.photo}
                                            style={{
                                              width: 20,
                                              height: 20,
                                              borderRadius: 10,
                                              borderWidth: 1,
                                              borderColor: "#ffffff",
                                            }}
                                          />
                                        </View>
                                      )
                                    )}
                                  </View>

                                  <View style={{
                                    width: "100%",
                                    flexDirection: "row",
                                    marginTop: 3,
                                    maxWidth: 140,
                                    overflow: "hidden"
                                  }}>
                                    {/* Names of friends */}
                                    <Text style={{
                                      fontSize: 7.6
                                    }}>
                                    {group.friendsInGroup.map(
                                      (friend, index) => {
                                        if (index === group.friendsInGroup.length - 1) {
                                          return (
                                            <Text key={friend.id}>
                                              {friend.name} 
                                              and others you may know have joined.
                                            </Text>
                                          )
                                        } else {
                                          return (
                                            <Text key={friend.id}>
                                              {friend.name}, {""}
                                            </Text>
                                          )
                                        }
                                      }
                                    )}
                                    </Text>
                                    
                                  </View>
                                </View>
                              </View>
                            </View>

                            {/* Join Group + Icon */}
                            <TouchableOpacity
                              style={{
                                width: 50,
                                justifyContent: "center",
                                alignItems: "center",
                                flexDirection: "row",
                                height: 48,
                                backgroundColor: "#F26A1D",
                                borderRadius: 10,
                              }}
                            >
                              <Entypo name="plus" size={22} color="white" />
                            </TouchableOpacity>
                          </View>
                        </View>
                      ))}
                    </View>
                  </View>
                )}
              </View>
            </View>
            <View style={{ marginBottom: 100 }} />
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Community;

const styles = StyleSheet.create({});
