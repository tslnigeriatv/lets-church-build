import {
  View,
  Text,
  Image,
  Animated,
  Dimensions,
  Pressable,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import React, { useRef, useState } from "react";
import { ScreenWidth } from "./shared";
import { images } from "../assets/images";
import { onShare } from "../utils/utilities";
const { width, height } = Dimensions.get("screen");




const PostCarousel = ({ item, type }) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const [like, setLike] = useState(false);
  const [showComs, setShowComs] = useState(false);



  const Indicator = ({ scrollX, styles }) => {
    return (
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          ...styles
        }}
      >
        {item.images.map((_, i) => {
          const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
  
          const bg = scrollX.interpolate({
            inputRange,
            outputRange: ["#C6C6C6", "#8EAEFF", "#C6C6C6"],
            extrapolate: "clamp",
          });
  
          return (
            <Animated.View
              key={`indicator-${i}`}
              style={{
                width: 5,
                height: 5,
                backgroundColor: bg,
                borderRadius: 5 / 2,
                margin: 1,
              }}
            ></Animated.View>
          );
        })}
      </View>
    );
  };


  return (
    <View style={{ minHeight: 295 }}>
      {/* If the user wants to upload short 30mins videos, 
        I should update this code to check if the src it's getting is an image 
        or a video and render video/image comonent depending on which one it's receiving 
      */}
      <Animated.FlatList
        data={item.images}
        style={{ width: ScreenWidth, minHeight: 295 }}
        keyExtractor={(item) => Math.random() * 100}
        horizontal={true}
        scrollEventThrottle={35}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        renderItem={({ item }) => (
          <Image
            source={item.image}
            resizeMode={"contain"}
            style={{
              width: ScreenWidth,
              minHeight: 295,
            }}
          />
        )}
      />
      {/* Post Interactions */}
        <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 20, marginVertical:10, alignItems: "center" }}>
          <View style={{ flexDirection: "row", flex: 1 }}>
            {/* Like */}
              <View style={{ marginRight: 10 }}>
                <TouchableOpacity onPress={() => setLike(!like)}>
                  {like ? (
                    <Image 
                      source={images.LikeActive}
                      resizeMode={"contain"}
                      style={{
                        width: 15,
                        height: 15
                      }}
                    />
                  ) : (
                    <Image 
                      source={images.Like}
                      resizeMode={"contain"}
                      style={{
                        width: 15,
                        height: 15
                      }}
                  />
                  )}
                </TouchableOpacity>

                {/* Likes count */}
                <Text style={{ fontSize: 9 }}>{like ? item.likes + 1 : item.likes} Likes</Text>
              </View>
              {/* Comments */}
              <View style={{ marginRight: 10 }}>
                <Pressable onPress={() => setShowComs(!showComs)}>
                    <Image 
                      source={images.Comment}
                      resizeMode={"contain"}
                      style={{
                        width: 15,
                        height: 15
                      }}
                    />
                  </Pressable>
                {/* Comments Section */}
                <Text style={{ fontSize: 9 }}>{item.comments.length} Comments</Text>
              </View>
              <Pressable onPress={() => onShare(item.images[0].image)}>
                <Image 
                  source={images.Share}
                  resizeMode={"contain"}
                  style={{
                    width: 15,
                    height: 15
                  }}
                />
              </Pressable>
          </View>
          <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between" }}>
            <Indicator styles={{
              marginLeft: -11
            }} scrollX={scrollX} />
            <Pressable>
              <Image 
                source={images.BookMark}
                resizeMode={"contain"}
                style={{
                  width: 15,
                  height: 15
                }}
              />
            </Pressable>
          </View>
        </View>
        <View>
        {type === "devotional" && <Text style={{ fontSize: 11, fontFamily: "Montserrat_600SemiBold", marginVertical: 18, marginHorizontal: 20 }}>{item.excert}</Text>}
        {showComs && (
          <>
            <ScrollView 
            vertical
            showsVerticalScrollIndicator={true}
            style={{
              // paddingTop: 0
              
            }}
            contentContainerStyle={{ 
              justifyContent: "flex-start", 
              maxHeight: 200, 
            }}>
              <View style={{ 
                width: "100%", 
                alignItems: "center", 
                paddingBottom: 10
              }}>
                {item?.comments.map((comment) => (
                  <View key={comment.id}>
                    <View style={{ 
                        flexDirection: "row", 
                        marginTop: 10,
                        width: ScreenWidth,
                        justifyContent: "flex-start",
                        paddingHorizontal: 20, 
                      }}>
                        <View style={{ 
                          marginTop: 20,
                          marginRight: 15
                        }}>
                          <Image 
                            source={comment.image}
                            resizeMode="cover"
                            style={{ width: 29, height: 29, borderRadius: 29 / 2 }} />
                        </View>
                        <View style={{ justifyContent: "space-between", width: "100%" }}>
                          <Text style={{
                            color: "#000000", 
                            fontSize: 10, 
                            fontFamily: "Montserrat_700Bold", 
                            marginLeft: 15
                          }}>{comment?.friend}</Text>
                            <Text style={{ 
                              color: "#626262", 
                              maxWidth: "60%", 
                              paddingHorizontal: 11, 
                              paddingVertical: 4,
                              marginVertical: 5,
                              fontSize: 10,
                              fontFamily: "Montserrat_600SemiBold",
                              backgroundColor: "#E9E9E9",
                              borderTopLeftRadius: 10,
                              borderBottomRightRadius: 10,
                              borderBottomLeftRadius: 3,
                              borderTopRightRadius: 3
                            }}>{comment.message}</Text>
                        </View>
                      </View>
                  </View>
                ))}

                
              </View>
          </ScrollView>
          <View style={{ width: ScreenWidth, paddingHorizontal: 20, marginTop: 30 }}>
                <View style={{
                  flexDirection: "row",
                  width: "100%",
                  alignItems: "flex-end"
                }}>
                  <Image 
                    source={item.profilePoto} 
                    style={{
                      width: 29,
                      height: 29,
                      borderRadius: 29 / 2,
                      marginRight: 20
                    }}
                  />
                    <View style={{ justifyContent: "space-between", width: "100%" }}>
                      <Text style={{
                        color: "#000000", 
                        fontSize: 10, 
                        fontFamily: "Montserrat_700Bold", 
                        marginLeft: 15
                      }}>{item?.name}</Text>
                        <TextInput 
                        placeholder="Add a public comment"
                        style={{ 
                          color: "#626262", 
                          maxWidth: "60%", 
                          paddingHorizontal: 11, 
                          paddingVertical: 4,
                          marginVertical: 5,
                          fontSize: 10,
                          fontFamily: "Montserrat_600SemiBold",
                          backgroundColor: "#E9E9E9",
                          borderTopLeftRadius: 10,
                          borderBottomRightRadius: 10,
                          borderBottomLeftRadius: 3,
                          borderTopRightRadius: 3
                        }} />
                    </View>
                </View>
              </View>
          </>
        )}
        </View>
    </View>
  );
};

export default PostCarousel;