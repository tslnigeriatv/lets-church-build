import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
  Image,
  TouchableOpacity,
  Platform,
} from "react-native";
import React from "react";
import { kidsVideos } from "../../data/feed";
import { Feather } from "@expo/vector-icons";

const KidsZone = () => {
  const data = kidsVideos;

  return (
    <View style={{ flex: 1 }}>
      {/* Top */}
      <View
        style={{
          flex: Platform.OS === "ios" ? 0.35 : 0.4,
          // overflow: "hidden",
          position: "relative",
        }}
      >
        <View
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            justifyContent: "center",
            alignItems: "center",
            zIndex: 100000000000,
          }}
        >
          {/* Play Button */}
          <TouchableOpacity
            style={{
              flexDirection: "row",
              backgroundColor: "#F26A1D",
              width: 112,
              height: 32,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 12,
              marginBottom: 10,
              gap: 4,
            }}
          >
            <Image
              source={require("../../data/images/PlayButton.png")}
              style={{
                width: 11.36,
                height: 11.36,
              }}
            />
            <Text style={{ color: "white" }}>Play</Text>
          </TouchableOpacity>
        </View>



        {/* Here */}
        <ImageBackground
          source={data.image}
          style={{
            borderWidth: 0,
            backgroundColor: "transparent",
            width: "100%",
            height: "100%",
          }}
          resizeMode="cover"
        >
          <View>
            <View
              style={{
                justifyContent: "space-between",
                flexDirection: "row",
                paddingHorizontal: 40,
                paddingVertical: 40,
              }}
            >
              <TouchableOpacity>
                <Feather name="search" size={30} color="white" />
              </TouchableOpacity>
              <Image
                source={data.profile_photo}
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 9999,
                }}
              />
            </View>

            <View
              style={{
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
                paddingHorizontal: 65,
              }}
            >
              <TouchableOpacity>
                <Text
                  style={{
                    color: "#FFFFFF",
                    fontSize: 13,
                    fontFamily: "Montserrat_600SemiBold",
                  }}
                >
                  TV Show
                </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text
                  style={{
                    color: "#FFFFFF",
                    fontSize: 13,
                    fontFamily: "Montserrat_600SemiBold",
                  }}
                >
                  Sermons
                </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text
                  style={{
                    color: "#FFFFFF",
                    fontSize: 13,
                    fontFamily: "Montserrat_600SemiBold",
                  }}
                >
                  My List
                </Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginTop: Platform.OS === "ios" ? 45 : 30,
              }}
            >
              <Text
                style={{
                  fontSize: 24,
                  fontFamily: "Montserrat_400Regular",
                  color: "#FFFFFF",
                }}
              >
                {data.name}
              </Text>
            </View>
          </View>
        </ImageBackground>
      </View>
      {/* Here */}

      {/* Bottom */}
      <View
        style={{
          //   paddingTop: 40,
          flex: Platform.OS === "ios" ? 0.65 : 0.6,
        }}
      >
        <ScrollView style={{}}>
          {/* Here */}
          {data.category.map((cat) => (
            <View key={cat.id}>
              <View
                style={{
                  marginLeft: 20,
                  marginBottom: 30,
                }}
              >
                <Text
                  style={{
                    color: "#333333",
                    fontSize: 14,
                    fontFamily: "Montserrat_700Bold",
                    marginTop: 30,
                  }}
                >
                  {cat.name}
                </Text>
              </View>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {cat.videos.map((reel, index) => (
                  <TouchableOpacity
                    key={reel.id}
                    style={{
                      borderRadius: 10,
                      overflow: "hidden",
                      marginLeft: 20,
                      marginRight: index === cat.videos.length - 1 ? 20 : 0,
                      width: 130,
                      height: 152,
                      position: "relative",
                    }}
                  >
                    <ImageBackground
                      source={reel.photo}
                      resizeMode="cover"
                      style={{
                        width: "100%",
                        height: "100%",
                        backgroundColor: "transparent",
                        
                      }}
                    >
                      <Text style={{
                        maxWidth: 65,
                        color: "white",
                        fontSize: 16,
                        paddingLeft: 5,
                        paddingTop: 5,
                        fontFamily: "Montserrat_500Medium",
                      }}>{reel.name}</Text>

                      <Image 
                        source={require("../../data/images/starIcon.png")}
                        style={{
                          width: 16,
                          height: 16,
                          position: "absolute",
                          right: 8,
                          top: 8,
                        }}
                      />

                    </ImageBackground>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
          ))}
          <View
            style={{
              marginBottom: 70,
            }}
          />
        </ScrollView>
      </View>

      {/* Here */}
    </View>
  );
};

export default KidsZone;

const styles = StyleSheet.create({});