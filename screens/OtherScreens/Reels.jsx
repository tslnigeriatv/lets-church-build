import { Text, View, Dimensions, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';
import ReelsComponent from '../../components/ReelsComponent';
import { Ionicons } from '@expo/vector-icons';


const Reels = () => {
    
    const {width: windowWidth, height: windowHeight} = Dimensions.get("screen");

    

    return (
        <View style={{
            // width: windowWidth,
            // height: windowHeight,
            backgroundColor: "white",
            position: "relative",
            backgroundColor: "black",
            // paddingTop: 50
        }}>
            {/* Remove the SafeAreaView after you are done */}
            <SafeAreaView>

            <View style={{
                position: "absolute",
                top: 45,
                left: 0,
                right: 0,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                zIndex: 20,
                padding: 10
            }}>
                <Text style={{fontSize: 24, fontWeight: "bold", color: "white"}}>Reels</Text>
                <Feather name="camera" style={{fontSize: 27}} color="white" />
            </View>

            


            <ReelsComponent />

            </SafeAreaView>
            
            
        </View>
    )
}

export default Reels;