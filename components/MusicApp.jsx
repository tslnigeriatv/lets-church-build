import { StyleSheet, Text, View, Pressable, Image, Platform, ScrollView, FlatList, Animated } from 'react-native'
import React, { useState, useRef, useEffect } from 'react'
import { Actionsheet, Center, useDisclose } from 'native-base';
import { images } from '../assets/images';
import { colors, ScreenHeight, ScreenWidth } from './shared';
import Slider from '@react-native-community/slider';
import { playList } from '../data/audioData';
import { TSLTrackPlayer } from './MusicPlayer';

const MusicApp = ({ sermon, index }) => {
    const [like, setLike] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    console.log("currentIndex: ", currentIndex);
    const {
        isOpen,
        onOpen,
        onClose
      } = useDisclose();
      const scrollX = useRef(new Animated.Value(0)).current;
      const songSlider = useRef(null);

      TSLTrackPlayer.loadSong(playList);
      TSLTrackPlayer.initializeAudio(index);

      useEffect(() => {
        scrollX.addListener(({ value }) => {
            //   console.log(`ScrollX : ${value} | Device Width : ${ScreenWidth} `);
              const index = Math.round(value / ScreenWidth);
              setCurrentIndex(index);
        });
      }, []);
    
  return (
    <>
        <Pressable onPress={onOpen}>
            <View style={{ 
                paddingHorizontal: 20, 
                flexDirection: "row", 
                justifyContent: "space-between", 
                alignItems: "center",
                borderTopColor: "#EDEDED",
                borderBottomColor: "#EDEDED",
                borderTopWidth: 1,
                borderBottomWidth: 1,
                borderStyle: "solid",
                paddingVertical: 10
            }}>
                <View style={{ flexDirection: "row", justifyContent: "flex-start", alignItems: "center", flex: 0.7 }}>
                <Image 
                    source={sermon.artwork}
                    resizeMode={"cover"}
                    style={{
                    borderRadius: 8,
                    width: 68,
                    height: 59,
                    }}
                />

                <View style={{ marginLeft: 20 }}>
                    <Text style={{ fontSize: 14, fontFamily: "Montserrat_700Bold" }}>{sermon.songTitle}</Text>
                    <Text style={{ fontSize: 11, fontFamily: "Montserrat_600SemiBold" }}>{sermon.artist}</Text>
                </View>
                </View>
                <View style={{ flex: 0.3, flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
                <Text>{"Time"}</Text>
                {like ? (
                    <Pressable onPress={() => setLike(!like)} style={{ padding: 5 }}>
                    <Image 
                        source={images.LoveFilled}
                        style={{
                        width: 21,
                        height: 21
                        }}
                    />
                    </Pressable>
                ) : (
                    <Pressable onPress={() => setLike(!like)} style={{ padding: 5 }}>
                    <Image 
                    source={images.LoveOutlined}
                    style={{
                        width: 21,
                        height: 21
                    }}
                    />
                    </Pressable>
                )}
                </View>
            </View>
      </Pressable>



      {/* Music Play Modal */}
      <Center>
            <Actionsheet style={{ backgroundColor: colors.primary }} isOpen={isOpen} onClose={onClose}>
                <Actionsheet.Content style={{ height: Platform.OS !== "web" ? ScreenHeight - 170 : ScreenHeight }}>
                  <ScrollView style={{ marginTop: 79 }} contentContainerStyle={{ alignItems: "center" }}>
                    {/* Music Artist Slider */}
                    <Animated.FlatList 
                        style={{ width: ScreenWidth }}
                        data={playList}
                        keyExtractor={item => item.id}
                        scrollEventThrottle={35}
                        pagingEnabled={true}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        onScroll={Animated.event([{nativeEvent: { contentOffset: { x: scrollX }}}],
                            { useNativeDriver: true }
                        )}
                        ref={songSlider}
                        renderItem={({ item }) => (
                            <View style={{ width: ScreenWidth, justifyContent: "center", alignItems: "center" }}>
                                <View style={{ 
                                    elevation: 4,
                                    width: 213, 
                                    height: 213, 
                                    borderRadius: 213 / 2, 
                                    shadowColor: "#F26A1D", 
                                    shadowOffset: { height: 4, width: 0 }, 
                                    
                                    shadowOpacity: 0.2,
                                    shadowRadius: 1.41
                                }}>
                                <Image 
                                  source={playList[currentIndex].artwork}
                                  style={{ 
                                    width: 213, 
                                    height: 213, 
                                    borderRadius: 213 / 2, 
                                  }}
                                />
                              </View>
                            </View>
                        )}
                    />
                    {/* <FlatList /> */}
                    <Text style={{ fontSize: 24, fontFamily: "Montserrat_700Bold", marginTop: 46 }}>{playList[currentIndex].songTitle}</Text>
                    <Text style={{ color: "#9E9894", fontSize: 14, fontFamily: "Montserrat_700Bold", marginTop: 14 }}>{playList[currentIndex].artist}</Text>

                    <View style={{ marginTop: 46, width: ScreenWidth, justifyContent: "center", alignItems: "center" }}>
                        <View style={{ flexDirection: "row", justifyContent: "space-around", alignItems: "center", width: "90%"}}>
                          <Text>00:00</Text>
                                <Slider
                                    style={{ width: "100%", marginHorizontal: 20, borderRadius: 3 }}
                                    minimumValue={0}
                                    maximumValue={TSLTrackPlayer.getDuration() ? TSLTrackPlayer.getDuration() : 100}
                                    minimumTrackTintColor="#F26A1D"
                                    thumbTintColor='#FFE4D4'
                                    maximumTrackTintColor="#EDEDED"
                                    onSlidingComplete={async value => {
                                        await TSLTrackPlayer.seekTo(value);
                                        console.log("Value of seeked event: ", value);
                                    }}
                                />
                          <Text>00:00</Text>
                        </View>
                    </View>

                    {/* Controls */}
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: ScreenWidth, paddingHorizontal: 20, marginTop: 28 }}>
                      <Pressable>
                        <Image 
                          source={images.Repeat}
                          style={{ width: 18, height: 18 }}
                          resizeMode={"contain"}
                        />
                      </Pressable>
                      <Pressable>
                        <Image 
                          source={images.Previous}
                          style={{ width: 36, height: 19 }}
                          resizeMode={"contain"}
                        />
                      </Pressable>
                      {/* Play pause */}
                      {true ? (
                        <Pressable onPress={() => {}} style={{ padding: 5 }}>
                          <Image 
                            source={images.Pause}
                            style={{
                              width: 90,
                              height: 90
                            }}
                          />
                        </Pressable>
                      ) : false ? (
                        <Pressable onPress={() => {}} style={{ padding: 5 }}>
                          <Image 
                          source={images.Play}
                          style={{
                            width: 90,
                            height: 90
                          }}
                          />
                        </Pressable>
                      ) : (
                        <Pressable onPress={() => {}} style={{ padding: 5 }}>
                          <Image 
                          source={images.Play}
                          style={{
                            width: 90,
                            height: 90
                          }}
                          />
                        </Pressable>
                      )}
                      <Pressable>
                        <Image 
                          source={images.Next}
                          style={{ width: 36, height: 19 }}
                          resizeMode={"contain"}
                        />
                      </Pressable>
                      {/* Favorite */}
                      <Pressable>
                      {like ? (
                        <Pressable onPress={() => setLike(!like)} style={{ padding: 5 }}>
                          <Image 
                            source={images.LoveFilled}
                            style={{
                              width: 21,
                              height: 21
                            }}
                          />
                        </Pressable>
                      ) : (
                        <Pressable onPress={() => setLike(!like)} style={{ padding: 5 }}>
                          <Image 
                          source={images.LoveOutlined}
                          style={{
                            width: 21,
                            height: 21
                          }}
                          />
                        </Pressable>
                      )}
                      </Pressable>
                    </View>
                  </ScrollView>
                </Actionsheet.Content>
            </Actionsheet>
        </Center>
    </>
  )
}

export default MusicApp

const styles = StyleSheet.create({});