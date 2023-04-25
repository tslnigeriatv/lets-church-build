import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { feedData } from "../data/feed";
import { colors, ScreenWidth } from "./shared";
import { images } from "../assets/images";
import { useNavigation } from "@react-navigation/native";
import { getReelsData } from "../lib/data/getReelsData";
import { client } from "../lib/client";

const StoryWheel = () => {
  const navigation = useNavigation();
  const [reelsData, setReelsData] = useState([]);

  // The userId should be gotten from the User Object
  // We will implement this when we add user authentication.
  // The userId will be generated from firebase (uid) and sanity (userId)
  // But for now let's use sanity auto generated _id attribute.

  // Current userId
  const userId = "5f97137a-1da6-4379-9fbb-38e38c747815";

  useEffect(() => {
    client
      .fetch(getReelsData())
      .then((data) => {
        setReelsData(data);
      })
      .catch((error) => console.log(error));

    return () => {};
  }, []);

//   console.log(reelsData);

  return (
    <FlatList
      data={reelsData}
      style={{
        width: ScreenWidth,
        marginVertical: 10,
        maxHeight: 84,
        marginHorizontal: 20,
      }}
      horizontal
      scrollEventThrottle={35}
      pagingEnabled={true}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(user) => user.id}
      renderItem={({ item }) => (
        <View style={{ alignItems: "center" }}>
          <View
            style={{
              width: 64,
              height: 64,
              borderRadius: 32,
              backgroundColor: "#FF3131",
              justifyContent: "center",
              alignItems: "center",
              marginHorizontal: 10,
            }}
          >
            {item?.postedBy?._id !== userId ? (
              <Pressable
                onPress={() => navigation.navigate("Post")}
                style={{
                  backgroundColor: "#F0F6F8",
                  width: "95%",
                  height: "95%",
                  borderRadius: 9999,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={images.Plus}
                  resizeMode={"contain"}
                  style={{
                    width: 22,
                    height: 21,
                  }}
                />
              </Pressable>
            ) : (
              <Image
                source={{ uri: item?.postedBy?.avatar?.url }}
                resizeMode={"cover"}
                style={{
                  width: 59,
                  height: 59,
                  borderRadius: 29.5,
                  borderWidth: 2,
                  borderColor: colors.white,
                }}
              />
            )}
          </View>
          <Text
            style={{
              marginTop: 6,
              fontSize: 14,
              fontFamily: "Montserrat_600SemiBold",
              color: item.type === "me" ? colors.red : null,
            }}
          >
            {item.type !== "me" ? item.name : "Me"}
          </Text>
        </View>
      )}
    />
  );
};

export default StoryWheel;

const styles = StyleSheet.create({});
