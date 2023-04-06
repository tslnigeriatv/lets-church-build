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
  import { popularCategoriesList, hotDealsBookList} from "../../data";
  
  import { AntDesign } from "@expo/vector-icons";

const HotDealsPopularCategories = () => {


    const [addToSavedItems, setAddToSavedItems] = useState(false);


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
            {/* <SimpleLineIcons name="grid" size={24} color="black" /> */}
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
                            Hot Deals
                        </Text>
                        <Text style={{fontFamily: "Montserrat_700Bold", fontSize: 15, color: "#F26A1D"}}>Show All</Text>
                    </View>
                    
                    {/* Hot Deals Items */}
                    <View>
                        <ScrollView 
                            horizontal
                            showsHorizontalScrollIndicator={false}
                        >
                            {/* Items */}
                            {hotDealsBookList.map((book, index) => (
                                <View key={book.id} 
                                    style={{
                                        width: 267,
                                        minHeight: 206,
                                        backgroundColor: "#F4F4F4",
                                        borderRadius: 17,
                                        overflow: "hidden",
                                        marginRight: 27,
                                        marginLeft: (index === 0 ) ? 30 : 0,
                                        padding: 12
                                    }}
                                >
                                    <TouchableOpacity style={{
                                        height: 120,
                                        borderRadius: 7,
                                        overflow: "hidden",
                                    }}>
                                        <Image 
                                            source={book.image}
                                            resizeMode="cover"
                                            style={{
                                                width: "100%",
                                                height: "100%",
                                            }}
                                        />
                                    </TouchableOpacity>
                                    
                                    <View style={{justifyContent: "space-between", flexDirection: "row", paddingTop: 10}}>

                                        <View style={{gap: 4}}>
                                            <Text style={{color: "#232323", fontSize: 13, fontFamily: "Montserrat_700Bold", maxWidth: 170}}>{book.name}</Text>
                                            <Text style={{color: "#535353", fontSize: 12, fontFamily: "Montserrat_700Bold",}}>{book.author}</Text>
                                        </View>

                                        <Pressable onPress={() => setAddToSavedItems(prev => !prev)}>
                                            {addToSavedItems ? (
                                                <Image 
                                                source={require("../../assets/images/pinkStar.png")}
                                                resizeMode="cover"
                                                style={{
                                                    width: 16,
                                                    height: 15
                                                }}
                                            />
                                            ) : (
                                                <Image 
                                                    source={require("../../assets/images/transparentStarIcon.png")}
                                                    resizeMode="cover"
                                                    style={{
                                                        width: 16,
                                                        height: 15
                                                    }}
                                                />
                                            )}
                                            
                                            
                                        </Pressable>
                                    </View>
                                </View>
                            ))}
                        </ScrollView>
                    </View>
                
                </View>

                <View style={{marginBottom: 40, paddingTop: 40, flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 30}}>
                    <Text
                        style={{
                            
                            fontFamily: "Montserrat_700Bold",
                            fontSize: 18,
                        }}
                    >
                        Popular Categories
                    </Text>
                    <Text style={{fontFamily: "Montserrat_700Bold", fontSize: 15, color: "#F26A1D"}}>Show All</Text>
                </View>

                <View style={{paddingHorizontal: 30}}>
                    {popularCategoriesList.map((category, index) => (
                        <TouchableOpacity key={category.id} style={{
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

                        }}>
                            <View style={{
                                alignItems: "center",
                                flexDirection: "row",
                                gap: 31
                            }}>
                                {/* Settings Icon */}
                                <View style={{height: 46, width: 45, backgroundColor: "#FFFFFF", justifyContent: "center", alignItems: "center"}}>
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
                                        maxWidth: 220
                                    }}
                                >{category.name}</Text>
                            </View>

                            <Image
                                source={require("../../assets/images/categoryNextIcon.png")}
                                resizeMode="cover"
                                style={{
                                    width: 11,
                                    height: 11,
                                }}
                            />
                            
                        </TouchableOpacity>
                    ))}
                </View>
            </View>

            <View style={{marginBottom: 100}} />

            </ScrollView>
        </View>
        </View>
    </SafeAreaView>
)
}

export default HotDealsPopularCategories;

const styles = StyleSheet.create({})