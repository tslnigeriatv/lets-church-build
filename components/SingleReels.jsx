import React, {useRef, useState} from 'react';
import { Text, View, Dimensions, StyleSheet, Button, useWindowDimensions, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Octicons } from '@expo/vector-icons';
// import Video from 'react-native-video';

import { Video, ResizeMode } from 'expo-av';
import { Feather, Ionicons } from '@expo/vector-icons';

const {width: WindowWidth, height: WindowHeight} = Dimensions.get("screen");


const SingleReels = ({item, index, currentIndex, currentVideo}) => {

    const ref = useRef(null);
    const [status, setStatus] = React.useState({});

    const [isLiked, setIsLiked] = useState(false);
    const [following, setFollowing] = useState(false);

    const [mute, setMute] = useState(true);
    const [showMuteIcon, setShowMutIcon] = useState(false);



    return (
        <View style={{
            width: WindowWidth, 
            height: WindowHeight,
            justifyContent: "center", 
            alignItems: "center", 
            backgroundColor: "black"
        }}>
            <Video
                ref={ref}
                
                style={{
                    width: WindowWidth, 
                    height: WindowHeight,
                }}
                source={item.video}
                useNativeControls={false}
                resizeMode={ResizeMode.CONTAIN}
                isLooping
                shouldPlay={(currentIndex === index) ? true : false}
                onPlaybackStatusUpdate={status => setStatus(() => status)}
            />

            <View style={{
                position: "absolute",
                left: 0,
                right: 0,
                bottom: 0,
                top: 0,
                backgroundColor: "transparent",
                justifyContent: "center",
                alignItems: "center",
                }}
                // onPress={() => }
            >
                <TouchableOpacity onPress={() => setMute(prev => !prev)}>
                    {mute ? (
                        <Octicons name="unmute" size={24} color="white" />
                    ) : (
                        <Ionicons name="volume-mute-outline" size={24} color="white" />
                    )}
                </TouchableOpacity>
                
                
            </View> 
            <View style={{
                position: "absolute",
                bottom: 130,
                left: 0,
                right: 0,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                zIndex: 20,
                padding: 10
            }}>
                <View>
                    <View style={{}}>
                        <View style={{flexDirection: "row", alignItems: "center", gap: 7, }}>
                            <Image 
                                source={item.postedBy.photoURL} 
                                style={{
                                    width: 30,
                                    height: 30,
                                    borderRadius: 9999,

                                }}
                            />
                            <Text style={{
                                color: "white",
                                fontFamily: "Montserrat_600SemiBold"
                            }}>{item.postedBy.name}</Text>

                            <TouchableOpacity onPress={() => setFollowing(prev => !prev)} style={{
                                borderWidth: 0.5,
                                borderColor: "white",
                                paddingHorizontal: 25,
                                paddingVertical: 5,
                                borderRadius: 10
                            }}>
                                {following ? (
                                    <Text style={{color: "white"}}>Following</Text>
                                ): (
                                    <Text style={{color: "white"}}>Follow</Text>
                                )}
                            </TouchableOpacity>
                        </View>

                        <Text style={{color: "white", marginTop: 10, maxWidth: 300}}>{item.description}</Text>

                        <View style={{flexDirection: "row", marginTop: 15}}>
                            {item.postedBy.followers.map((follower, index) => (
                                <View key={follower.id}
                                    style={{
                                        marginLeft: index === 0 ? 0 : -8,
                                    }}
                                >
                                    <Image
                                        source={follower.photoURL}
                                        style={{
                                            width: 20,
                                            height: 20,
                                            borderRadius: 10,
                                            marginVertical: 10
                                        }}
                                    />
                                </View>
                            ))}
                            
                            
                        </View>
                        <View style={{flexDirection: "row", gap: 2}}>
                            <Text style={{color: "gray", fontSize: 12}}>
                                Followed by 
                            </Text>

                            {item.postedBy.followers.map((follower, index) => {
                                return (
                                    <Text style={{color: "gray", fontSize: 12}}>
                                        {(index == 0 ) && follower.name}
                                    </Text>
                                )
                            })}
                            <Text style={{color: "gray", fontSize: 12}}>and {item.postedBy.followers.length - 1} others.</Text>
                        </View>
                        
                    </View>
                </View>
                <View style={{
                    gap: 20
                }}>
                    <TouchableOpacity onPress={() => setIsLiked(prev => !prev)}>
                        {
                            isLiked ? (
                                <Ionicons name="md-heart-sharp" style={{fontSize: 35}} color="red" />
                            ) : (
                                <Ionicons name="md-heart-outline" style={{fontSize: 35}} color="white" />
                            )
                        }
                        <Text style={{color: "white", fontFamily: "Montserrat_700Bold"}}>{item.likes}</Text>
                    </TouchableOpacity>
                    
                    <Feather name="send" size={31} color="white" />
                    
                    
                    <Feather name="message-circle" size={35} color="white" />
                </View>
                
            </View>
            

        <View>
            
      </View>
        </View>
    
    )
}

var styles = StyleSheet.create({
    // backgroundVideo: {
    //   position: 'absolute',
    //   top: 0,
    //   left: 0,
    //   bottom: 0,
    //   right: 0,
    // },
});  


export default SingleReels;