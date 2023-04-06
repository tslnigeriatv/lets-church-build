import { FlatList, Image, Platform, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { colors, ScreenWidth } from "../../components/shared";
import { PostCarousel } from '../../components';
import { data } from './DevotionalData';

console.log(data);

const DailyDevotional = () => {
  return (
    <SafeAreaView style={styles.container}>
    <View style={{ flex: 0.17 }}>
        <View style={{ position: "relative", marginHorizontal: 20 }}>
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
                    width: ScreenWidth * 0.9,
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
    </View>
    <View style={{ flex: 0.83}}>
        <View style={[styles.HeaderTxt, { marginHorizontal: 20 }]}>
            <Text style={{ fontSize: 20, fontFamily: "Montserrat_700Bold" }}>Daily Devotional</Text>
            <Pressable onPress={() => {}}>
                <Text style={{ fontFamily: "Montserrat_600SemiBold", fontSize: 12, color: colors.primary }}>Visit Timeline</Text>
            </Pressable>
        </View>
      <Text style={{ marginVertical: 10, marginHorizontal: 20, fontSize: 10, fontFamily: "Montserrat_600SemiBold" }}>Get Daily Inspiration from the word every</Text>
      <View>
        <FlatList 
            data={data}
            renderItem={({ item }) => <PostCarousel type={"devotional"} item={item} />}
        />
      </View>
    </View>
    </SafeAreaView>
  )
}

export default DailyDevotional

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    HeaderTxt: {
        flexDirection: "row",
        justifyContent: "space-between",
        // marginTop: 47
    }
});