import React, { useState } from 'react'
import { StyleSheet, Text, View, Button, Image, Pressable, ScrollView } from 'react-native'
import { Audio } from 'expo-av';
import { useEffect } from 'react';
import { Actionsheet, Center, useDisclose } from "native-base";
import { images } from '../assets/images';
import { colors, ScreenHeight, ScreenWidth } from './shared';


const AudioMedia = ({ sermon }) => {
  const [sound, setSound] = useState(null);
  const [duration, setDuration] = useState(null);
  const [like, setLike] = useState(false);
  const [play, setPlay] = useState(false);
  const [position, setPosition] = useState(null); // new state variable
  const {
    isOpen,
    onOpen,
    onClose
  } = useDisclose();

  useEffect(() => {
    loadSound();
    return unloadSound; // This cleanup function will run when the component unmounts
  }, []);

  useEffect(() => {
    const updatePosition = async () => {
      if (sound) {
        const status = await sound.getStatusAsync();
        if (status.isLoaded && status.isPlaying) {
          setPosition(status.positionMillis);
          console.log(status);
        }
      }
    };
    const interval = setInterval(updatePosition, 1000); // update every second
    return () => clearInterval(interval);
  }, [sound]);


  async function loadSound() {
    try {
      const { sound } = await Audio.Sound.createAsync(
        sermon.audio,
        { shouldPlay: false }
      );
      setSound(sound);
        
      const status = await sound?.getStatusAsync();
      const duration = status && status.durationMillis ? status.durationMillis : null;
      console.log("duration", duration);
      setDuration(duration);
    } catch (error) {
      console.error(error);
    }
  }

  async function unloadSound() {
    if (sound) {
      await sound.unloadAsync();
      setSound(null);
      setDuration(null);
    } 
  }

  async function playSound() {
    if (sound) {
      await sound?.playAsync();
    } else {
      await loadSound();
      await sound?.playAsync();
    }
  }

  async function pauseSound() {
    if (sound) {
      await sound?.pauseAsync();
    }
  }


  // return (
  //   <View>
  //     <Text>Duration: {duration ? duration : "Loading..."}</Text>
  //     <Button title="Play" onPress={playSound} />
  //     <Button title="Pause" onPress={pauseSound} />
  //     <Button title="Stop" onPress={unloadSound} />
  //   </View>
  // )

  return (
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
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", flex: 0.6 }}>
          <Image 
            source={sermon.thumbnail}
            resizeMode={"cover"}
            style={{
              borderRadius: 8,
              width: 68,
              height: 59,
            }}
          />

          <View>
            <Text style={{ fontSize: 14, fontFamily: "Montserrat_700Bold" }}>His Unfailing Love</Text>
            <Text style={{ fontSize: 11, fontFamily: "Montserrat_600SemiBold" }}>Green Day</Text>
          </View>
        </View>
        <View style={{ flex: 0.4, flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
          <Text>{duration ? duration : "Time"}</Text>
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

      <Center>
            <Actionsheet style={{ backgroundColor: colors.primary }} isOpen={isOpen} onClose={onClose}>
                <Actionsheet.Content style={{ height: ScreenHeight }}>
                  <ScrollView style={{ marginTop: 79 }} contentContainerStyle={{ alignItems: "center" }}>
                    <View>
                      <Image 
                        source={sermon.thumbnail}
                        style={{ 
                          width: 213, 
                          height: 213, 
                          borderRadius: 213 / 2, 
                          shadowColor: "#F26A1D", 
                          shadowOffset: { height: 4, width: 0 }, 
                          elevation: 4,
                          shadowOpacity: 0.2,
                          shadowRadius: 1.41,
                        }}
                      />
                    </View>
                    <Text style={{ fontSize: 24, fontFamily: "Montserrat_700Bold", marginTop: 46 }}>{sermon.songTitle}</Text>
                    <Text style={{ color: "#9E9894", fontSize: 14, fontFamily: "Montserrat_700Bold", marginTop: 14 }}>{sermon.artist}</Text>

                    <View style={{ marginTop: 46 }}>
                      {position !== null ? (
                        <View style={{ width: "100%", height: 5, backgroundColor: "#EDEDED", marginTop: 40 }}>
                          <View style={{ width: `${(position / duration) * 100}%`, height: "100%", backgroundColor: "#F26A1D" }} />
                        </View>
                      ) : <Text>Progres...</Text>}
                    </View>

                    {/* Controls */}
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: ScreenWidth, paddingHorizontal: 20, marginTop: 68 }}>
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
                      {play ? (
                        <Pressable onPress={() => setPlay(!play)} style={{ padding: 5 }}>
                          <Image 
                            source={images.Pause}
                            style={{
                              width: 90,
                              height: 90
                            }}
                          />
                        </Pressable>
                      ) : (
                        <Pressable onPress={() => setPlay(!play)} style={{ padding: 5 }}>
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
    </Pressable>
  )
}

export default AudioMedia

const styles = StyleSheet.create({})