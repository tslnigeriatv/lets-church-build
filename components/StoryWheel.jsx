import { FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { feedData } from "../data/feed";
import { colors, ScreenWidth } from "./shared";
import { images } from '../assets/images';
import { useNavigation } from '@react-navigation/native';


const StoryWheel = () => {
    const navigation = useNavigation();

  return (
    <FlatList 
        data={feedData}
        style={{
            width: ScreenWidth,
            marginVertical: 39,
            maxHeight: 84,
            marginHorizontal: 20,
        }}
        horizontal
        scrollEventThrottle={35}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
            <View style={{ alignItems: "center" }}>
                <View 
                    style={{ 
                        position: "relative", 
                        width: 64, 
                        height: 64, 
                        borderRadius: 32, 
                        backgroundColor: "#FF3131",
                        justifyContent: "center",
                        alignItems: "center",
                        marginHorizontal: 10
                    }}>
                        {item.type !== "me" ? (
                            <Image
                                source={item.image}
                                resizeMode={"cover"}
                                style={{
                                    width: 59,
                                    height: 59,
                                    borderRadius: 29.5,
                                    borderWidth: 2,
                                    borderColor: colors.white
                                }}
                            />
                        ) : (
                            <Pressable
                            onPress={() => navigation.navigate("NewPost")}
                            style={{ 
                                backgroundColor: "#F0F6F8", 
                                width: "95%", 
                                height: "95%",
                                borderRadius: "50%",
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                                <Image 
                                    source={images.Plus}
                                    resizeMode={"contain"}
                                    style={{
                                        width: 22,
                                        height: 21
                                    }}
                                />
                            </Pressable>
                        )}
                    </View>
                    <Text style={{ marginTop: 6, fontSize: 12, fontFamily: "Montserrat_600SemiBold", color: item.type === "me" ? colors.red : null }}>{item.type !== "me" ? item.name : "Me"}</Text>
            </View>
        )}
    />
  )
}

export default StoryWheel

const styles = StyleSheet.create({
    
})