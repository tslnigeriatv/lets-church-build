import {
  View,
  Text,
  Image,
  Animated,
  Dimensions,
  TouchableOpacity,
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
    image: images.OnboardOne,
  },
  {
    id: 2,
    image: images.OnboardTwo,
  },
  {
    id: 3,
    image: images.OnboardThree,
  },
];

const Indicator = ({ scrollX }) => {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        marginBottom: 30
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
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <StatusBar />
      <Animated.FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        horizontal
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
              width: width,
              height: height,
            }}
          />
        )}
      />

      <View>
        <Indicator scrollX={scrollX} />
      </View>
    </View>
  );
};

export default Welcome;