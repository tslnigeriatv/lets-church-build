import {
  View,
  Text,
  Image,
  Animated,
  Dimensions,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Platform,
} from "react-native";
import React, { useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "react-native";
import { images } from "../assets/images";
import { colors } from "../components/shared";

const { width, height } = Dimensions.get("screen");

const DATA = [
  {
    id: 1,
    image: images.SlideOne,
  },
  {
    id: 2,
    image: images.SlideTwo,
  },
  {
    id: 3,
    image: images.SlideThree,
  },
];

const Indicator = ({ scrollX }) => {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
      }}
    >
      {DATA.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
        const measurement = scrollX.interpolate({
          inputRange,
          outputRange: [8, 20, 8],
          extrapolate: "clamp",
        });

        const bg = scrollX.interpolate({
          inputRange,
          outputRange: [colors.lightGray, colors.black, colors.lightGray],
          extrapolate: "clamp",
        });

        return (
          <Animated.View
            key={`indicator-${i}`}
            style={{
              width: measurement,
              height: 8,
              backgroundColor: bg,
              borderRadius: 100 / 2,
              margin: 5,
            }}
          ></Animated.View>
        );
      })}
    </View>
  );
};

const Welcome = () => {
  const navigation = useNavigation();

  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <View style={{ flex: 1, backgroundColor: colors.onboardBg }}>
      <StatusBar />
      <View style={{
        flex: Platform.OS === "ios" ? 0.95 : 0.98,
      }}>
      <View style={{
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 50
      }}>
        <Image 
          source={images.Logo}
          style={{
            width: 27,
            height: 69
          }}
          resizeMode={"contain"}
        />
      </View>
      <Animated.FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        horizontal
        scrollEventThrottle={35}
        pagingEnabled={true}
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center"
        }}
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        renderItem={({ item, index }) => {
          const inputRange = [
            (index - 1) * width,
            index * width,
            (index + 1) * width,
          ];
          const translateY = scrollX.interpolate({
            inputRange,
            outputRange: [0, -50, 0],
          });
          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.5, 1, 0.5],
          });
          const scale = scrollX.interpolate({
            inputRange,
            outputRange: [0.8, 1, 0.8],
          });
          return (
            <Animated.View
              style={{
                width,
                height: height * 0.8,
                justifyContent: "center",
                alignItems: "center",
                transform: [{ translateY }, { scale }],
                opacity,
              }}
            >
              <TouchableWithoutFeedback onPress={() => navigation.navigate("Login")}>
                <Image
                  source={item.image}
                  resizeMode={"contain"}
                  style={{
                    width: Platform.OS === "android" ? "100%" : "80%",
                    height: Platform.OS === "android" ? "70%" : "100%",
                    marginTop: Platform.OS === "android" ? 100 : null
                  }}
                />
              </TouchableWithoutFeedback>
            </Animated.View>
          );
        }}
      />
      </View>

      <View>
        <Indicator scrollX={scrollX} />
      </View>
    </View>
  );
};

export default Welcome;