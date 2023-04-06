import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
} from "react-native";
import React, { useState } from "react";
import { userFinance } from "../../data";
import { SimpleLineIcons } from "@expo/vector-icons";

const Transaction = () => {
  const [notification, setNotification] = useState(true);
  const user = userFinance;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View
        style={{
          flex: 0.07,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
            paddingHorizontal: 42,
          }}
        >
          <View style={{ position: "relative" }}>
            {notification && (
              <View
                style={{
                  position: "absolute",
                  backgroundColor: "red",
                  width: 11,
                  height: 11,
                  borderRadius: 9999,
                  zIndex: 10,
                  right: -5,
                  top: -5,
                }}
              />
            )}
            <SimpleLineIcons name="grid" size={26} color="black" />
          </View>

          <Image
            source={user.profile_photo}
            style={{
              width: 42,
              height: 42,
              borderRadius: 9999,
            }}
          />
        </View>
      </View>

      <View style={{ flex: 0.93 }}>
        <ScrollView contentContainerStyle={{ position: "relative" }}>
          <View
            style={{
              position: "absolute",
              right: 0,
              left: 0,
              height: 300,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                width: 359,
                height: 200,
                backgroundColor: "#F4F4F4",
                borderRadius: 17,
                overflow: "hidden",
                padding: 11,
              }}
            >
            <View style={{flexDirection: "column", justifyContent: "space-between", height: "100%"}}>
            
              <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                
                <View>
                  <View style={{ alignItems: "center", flexDirection: "row", gap: 5 }}>
                    <Image
                      source={require("../../assets/images/nairaSign.png")}
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

                <View style={{gap: 11}}>
                    <Text style={{fontFamily: "Montserrat_700Bold", fontSize: 15, color: "#000000", marginTop: 8}}>{user.username}</Text>
                    <Image 
                        source={require("../../assets/images/atmSteel.png")}
                        resizeMode="cover"
                        style={{
                            width: 33,
                            height: 33,
                            alignSelf: "flex-end"
                        }}
                    />
                </View>

              </View>

              {/* Here */}
              <View style={{flexDirection: "row", justifyContent: "space-between",width: "100%", height: 20, marginBottom: 18}}>
                <Image 
                    source={require("../../assets/images/masterCardSymbol.png")}
                    resizeMode="cover"
                    style={{
                        width: 43.5,
                        height: 28,
                    }}
                />
                <Text style={{fontFamily: "Montserrat_700Bold", fontSize: 15, color: "#000000"}}>{user.account_last_digits}</Text>
              </View>

              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Transaction;

const styles = StyleSheet.create({});
