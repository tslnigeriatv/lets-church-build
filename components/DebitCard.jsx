import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions
} from "react-native";
import React, { useState } from "react";


const {width: WIDTH, height: HEIGTH } = Dimensions.get("screen");

const DebitCard = ({user}) => {

  const horizontalPaddingFromBothSides = 42;
  const widthOfCard = (WIDTH - horizontalPaddingFromBothSides);


  return (
    <View
      style={{
        width: widthOfCard,
        height: 200,
        backgroundColor: "#F4F4F4",
        borderRadius: 17,
        overflow: "hidden",
        padding: 11,
      }}
    >
      <View
        style={{
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View>
            <View
              style={{ alignItems: "center", flexDirection: "row", gap: 5 }}
            >
              <Image
                source={require("../assets/images/nairaSign.png")}
                resizeMode="cover"
                style={{
                  width: 22,
                  height: 22,
                }}
              />
              <Text
                style={{
                  fontFamily: "Montserrat_800ExtraBold",
                  fontSize: 19,
                }}
              >
                {user.account_balance}.00
              </Text>
            </View>
            <Text
              style={{
                color: "#5E5E5E",
                fontFamily: "Montserrat_400Regular",
                fontSize: 14,
              }}
            >
              Balance
            </Text>
          </View>

          <View style={{ gap: 11 }}>
            <Text
              style={{
                fontFamily: "Montserrat_700Bold",
                fontSize: 15,
                color: "#000000",
                marginTop: 8,
              }}
            >
              {user.username}
            </Text>
            <Image
              source={require("../assets/images/atmSteel.png")}
              resizeMode="cover"
              style={{
                width: 33,
                height: 33,
                alignSelf: "flex-end",
              }}
            />
          </View>
        </View>

        {/* Here */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            height: 20,
            marginBottom: 18,
          }}
        >
          <Image
            source={require("../assets/images/masterCardSymbol.png")}
            resizeMode="cover"
            style={{
              width: 43.5,
              height: 28,
            }}
          />
          <Text
            style={{
              fontFamily: "Montserrat_700Bold",
              fontSize: 15,
              color: "#000000",
            }}
          >
            {user.account_last_digits}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default DebitCard;

const styles = StyleSheet.create({});
