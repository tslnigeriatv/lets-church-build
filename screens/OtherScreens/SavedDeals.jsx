import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    ScrollView,
    Image,
    Pressable,
    Platform,
    TextInput,
    Dimensions,
    TouchableOpacity
  } from "react-native";
  import React, { useState } from "react";
  import { hotDealsBookList} from "../../data";
  
  import { AntDesign } from "@expo/vector-icons";
  
  const { width: WIDTH, height: HEIGHT } = Dimensions.get("screen");



const SavedDeals = () => {

    const paddingFromBothSides = 15 * 3;

    const productWidth = (WIDTH - paddingFromBothSides) / 2;


    console.log(WIDTH)




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
                flex: 0.12,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingHorizontal: 30,
            }}
            >
            {/* Return Back Arrow */}
            <Pressable style={{ padding: 5 }} onPress={() => navigation.goBack()}>
                <Image
                source={require("../../assets/images/backArrow.png")}
                resizeMode="cover"
                style={{
                    width: 21,
                    height: 20,
                }}
                />
            </Pressable>

            <View style={{ flexDirection: "row", gap: 15 }}>
                <TouchableOpacity
                style={{
                    width: 35.1,
                    height: 35.1,
                    backgroundColor: "#E9E9E9",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 9999,
                }}
                >
                <Image
                    source={require("../../assets/images/star.png")}
                    resizeMode="cover"
                    style={{
                    width: 17,
                    height: 16,
                    }}
                />
                </TouchableOpacity>

                <TouchableOpacity
                style={{
                    width: 35.1,
                    height: 35.1,
                    backgroundColor: "#E9E9E9",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 9999,
                }}
                >
                <Image
                    source={require("../../assets/images/threeDots.png")}
                    resizeMode="cover"
                    style={{
                    width: 19,
                    height: 19,
                    }}
                />
                </TouchableOpacity>
            </View>

            
            </View>

            <View style={{justifyContent: "center", alignItems: "center", marginBottom: 10, paddingHorizontal: 30}}>
                <View style={{width: "100%"}}>
                    <View style={{width: "100%"}}>
                    {/* Search Field */}
                    <View
                        style={{
                        height: 45,
                        width: "100%",
                        backgroundColor: "#F0F0F0",
                        flexDirection: "row",
                        alignItems: "center",
                        overflow: "hidden",
                        borderRadius: 8,
                        paddingHorizontal: 16,
                        }}
                    >
                        <AntDesign name="search1" size={25} color="#000000" />

                        <TextInput
                        style={{
                            width: "100%",
                            height: "100%",
                            paddingHorizontal: 13,
                            fontSize: 14,
                            fontFamily: "Montserrat_600SemiBold",

                        }}
                        placeholder="What Are You Looking For?"
                        placeholderTextColor="#4A4A4A"
                        />
                    </View>
                    </View>
                </View>
            </View>


            {/* Give this a max width */}
            <View style={{ flex: 0.89 }}>
            <ScrollView>

                <View style={{}}>
                    {/* Hot Deals */}
                    <View>
                        <View style={{marginBottom: 40, paddingTop: 40, flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 30}}>
                            <Text
                                style={{
                                    
                                    fontFamily: "Montserrat_700Bold",
                                    fontSize: 18,
                                }}
                            >
                                Saved
                            </Text>
                        </View>
                        
                        {/* Hot Deals Items */}
                        <View>
                            <ScrollView 
                                
                                showsVerticalScrollIndicator={false}
                                contentContainerStyle={{
                                    justifyContent: "center",
                                    flexWrap: "wrap",
                                    flexDirection: "row",
                                    gap: 12
                                }}

                            >
                                {/* Items */}
                                {hotDealsBookList.map((book, index) => (
                                    <TouchableOpacity key={book.id} 
                                        style={{
                                            width: productWidth,
                                            // minHeight: 206,
                                            backgroundColor: "#F4F4F4",
                                            borderRadius: 7,
                                            overflow: "hidden",
                                            padding: 6
                                        }}
                                    >
                                        <Image 
                                            source={book.image}
                                            resizeMode="cover"
                                            style={{
                                                width: "100%",
                                                height: 100,
                                                borderRadius: 7,
                                                overflow: "hidden",

                                            }}
                                        />
                                        <View style={{justifyContent: "space-between", flexDirection: "row", paddingTop: 10}}>

                                            <View style={{gap: 4}}>
                                                <Text style={{color: "#232323", fontSize: 11, fontFamily: "Montserrat_700Bold", maxWidth: 140}}>{book.name}</Text>
                                                <Text style={{color: "#535353", fontSize: 10, fontFamily: "Montserrat_700Bold",}}>{book.author}</Text>
                                            </View>

                                            <View>
                                                <Image 
                                                    source={require("../../assets/images/pinkStar.png")}
                                                    resizeMode="cover"
                                                    style={{
                                                        width: 16,
                                                        height: 15
                                                    }}
                                                />
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                ))}
                            </ScrollView>
                        </View>
                    
                    </View>

                </View>

                <View style={{marginBottom: 100}} />

            </ScrollView>
            </View>
        </View>
        </SafeAreaView>
    )
}

export default SavedDeals

const styles = StyleSheet.create({})