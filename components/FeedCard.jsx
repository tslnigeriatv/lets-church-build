import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScreenWidth } from './shared'
import { images } from '../assets/images'
import PostCarousel from './PostCarousel'
import { Actionsheet, Box, Button, Center, useDisclose } from 'native-base'
import { onShare, copyToClipboard } from "../utils/utilities";

const FeedCard = ({ item }) => {
    const {
        isOpen,
        onOpen,
        onClose
      } = useDisclose();
  return (
    <View style={styles.container}>
      <View style={styles.containerInner}>
          {/* Left Begins here */}
            <View style={styles.left}>
                <Image
                    source={item.profilePoto} 
                    resizeMode={"cover"}
                    style={{
                        width: 36,
                        height: 36,
                        borderRadius: 18,
                    }}
                />
                <View style={styles.leftTxt}>
                    <Text style={{ fontSize: 13, fontFamily: "Montserrat_700Bold" }}>{item.name}</Text>
                    <View style={styles.leftTxtLower}>
                        <Text style={{ color: "#333333", fontSize: 11, fontFamily: "Montserrat_600SemiBold" }}>{item.region}</Text>
                        <Text style={{ marginHorizontal: 10 }}>{"•"}</Text>
                        <Text style={{ color: "#333333", fontSize: 10, fontFamily: "Montserrat_600SemiBold", borderBottomColor: "#333333", borderBottomWidth: 0.1 }}>{item.timePosted}</Text>
                    </View>
                </View>
            </View>
            {/* Left ends here */}
            
            {/* Right begins here */}
            {/* Activates action btn */}
            <Pressable onPress={onOpen}>
                <Image  
                    source={images.More} 
                    resizeMode={"contain"}
                    style={{
                        width: 25,
                        height: 25,
                    }}
                />
            </Pressable>
      </View>
      <Text style={{ fontSize: 11, fontFamily: "Montserrat_600SemiBold", marginVertical: 25 }}>{item.excert}</Text>
      {/* Slides in here */}
      <PostCarousel type={"feed"} item={item} />
        {/* Action Sheet */}
        <Center>
            <Actionsheet isOpen={isOpen} onClose={onClose}>
                <Actionsheet.Content>
                <Actionsheet.Item>Report</Actionsheet.Item>
                <Actionsheet.Item>Turn on post notification</Actionsheet.Item>
                <Actionsheet.Item onPress={() => copyToClipboard("Hey I am still under development...")}>Copy Link</Actionsheet.Item>
                <Actionsheet.Item onPress={() => onShare("Hey I am still under development...")}>Share To</Actionsheet.Item>
                <Actionsheet.Item>Unfollow</Actionsheet.Item>
                <Actionsheet.Item>Mute</Actionsheet.Item>
                {item.type === "me" && <Actionsheet.Item>Delete</Actionsheet.Item>}
                </Actionsheet.Content>
            </Actionsheet>
        </Center>
    </View>
  )
}

export default FeedCard

const styles = StyleSheet.create({
    container: {
        width: ScreenWidth,
        paddingHorizontal: 20,
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10,
        marginTop: 20,
    },
    containerInner: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
    },
    left: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    leftTxt: {
        justifyContent: "space-between",
        marginLeft: 15
    },
    leftTxtLower: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    }
})