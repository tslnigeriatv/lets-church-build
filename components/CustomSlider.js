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
  import { colors, ScreenWidth } from "./shared";
  import { images } from "../assets/images";
  import { onShare } from "../utils/utilities";
  import { Actionsheet, Center, useDisclose } from "native-base";
  
  
  
  
  
  const CustomSlider = ({ item }) => {
    const scrollX = useRef(new Animated.Value(0)).current;
  
  
    const Indicator = ({ scrollX }) => {
      return (
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            marginTop: 20
          }}
        >
          {item.images.map((_, i) => {
            const inputRange = [(i - 1) * ScreenWidth, i * ScreenWidth, (i + 1) * ScreenWidth];
    
            const bg = scrollX.interpolate({
              inputRange,
              outputRange: ["#DADADA", colors.primary, "#DADADA"],
              extrapolate: "clamp",
            });

            const width = scrollX.interpolate({
              inputRange,
              outputRange: [7, 15, 7],
              extrapolate: "clamp",
            })
    
            return (
              <Animated.View
                key={`indicator-${i}`}
                style={{
                  width: width,
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
        <View style={{}}>
          {/* If the user wants to upload short 30mins videos, 
            I should update this code to check if the src it's getting is an image 
            or a video and render video/image comonent depending on which one it's receiving 
          */}
          {/* Slider */}
          <Animated.FlatList
            data={item.images}
            style={{ width: ScreenWidth, minHeight: 200 }}
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
              <View style={{ width: ScreenWidth, justifyContent: "center", alignItems: "center", height: 200 }}>
                <Image
                  source={item.image}
                  resizeMode={"cover"}
                  style={{
                    height: 195,
                    width: ScreenWidth - 40,
                    borderRadius: 15
                  }}
                />
              </View>
            )}
          />

          <Indicator scrollX={scrollX}  />
      </View>
    )
}

export default CustomSlider;