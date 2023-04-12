import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  Platform,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import { userFinance } from "../../data";
import { SimpleLineIcons } from "@expo/vector-icons";
import { DebitCard } from "../../components";

const { width: WIDTH, height: HEIGTH } = Dimensions.get("screen");

const Transaction = () => {
  const [notification, _] = useState(true);

  const horizontalPaddingFromBothSides = 42;
  const widthOfCard = WIDTH - horizontalPaddingFromBothSides;

  const user = userFinance;

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
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
            paddingHorizontal: 21,
            paddingVertical: 12,
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
            <SimpleLineIcons name="grid" size={22} color="black" />
          </View>

          <Image
            source={user.profile_photo}
            style={{
              width: 34,
              height: 34,
              borderRadius: 9999,
            }}
          />
        </View>

        {/* Scrollable View */}
        <View style={{ flex: 1 }}>
          <ScrollView style={{ flex: 1 }}>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                paddingVertical: 20,
              }}
            >
              <DebitCard user={user} />
            </View>
            <View
              style={{
                paddingHorizontal: horizontalPaddingFromBothSides / 2,
              }}
            >
              <View
                style={{
                  marginBottom: 40,
                  paddingTop: 40,
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{
                    fontFamily: "Montserrat_600SemiBold",
                    fontSize: 18,
                  }}
                >
                  Recent Transactions
                </Text>
                <Text
                  style={{
                    fontFamily: "Montserrat_600SemiBold",
                    fontSize: 15,
                    color: "#F26A1D",
                  }}
                >
                  View Stats
                </Text>
              </View>
              {/* Start */}
              <View>
                {user.recent_transaction.map((transaction, index) => (
                  <View
                    key={transaction.id}
                    style={{
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
                    }}
                  >
                    <View
                      style={{
                        alignItems: "center",
                        flexDirection: "row",
                        gap: 31,
                      }}
                    >
                      {/* Settings Icon */}
                      <View
                        style={{
                          height: 46,
                          width: 45,
                          backgroundColor: "#FFFFFF",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
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
                          maxWidth: 220,
                        }}
                      >
                        {transaction.type}
                      </Text>
                    </View>

                    <View style={{
                      justifyContent: "center",
                      alignItems: "flex-start"
                    }}>
                      <Text style={{textAlign: "right", alignSelf: "flex-end", color: "#F26A1D", fontFamily: "Montserrat_700Bold"}}>{transaction.amoount}.00</Text>
                      <Text style={{textAlign: "right", alignSelf: "flex-end", fontFamily: "Montserrat_600SemiBold"}}>{transaction.date}</Text>
                    </View>
                    
                  </View>
                ))}
              </View>

              {/* End */}
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Transaction;

const styles = StyleSheet.create({});
