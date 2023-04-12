import React, { useState, useEffect } from 'react';
import { View, Text, Pressable, Image, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as MediaLibrary from 'expo-media-library';
import { images } from '../assets/images';
import { ScreenWidth, colors } from "../components/shared";
import { AntDesign } from '@expo/vector-icons';


const NewPostScreen = () => {
  const [media, setMedia] = useState([]);
  const [recentMedia, setRecentMedia] = useState([]);
  const [imageUri, setImageUri] = useState(null);
  // console.log("<----------------------------------Checking Out ---------------------------->")
  // console.log(imageUri);

  const IMAGE_WIDTH = (ScreenWidth / 3) - 27; 


  useEffect(() => {
    requestPermission();
    getRecentMedia();
  }, []);

  const requestPermission = async () => {
    try {
      await MediaLibrary.requestPermissionsAsync();
      await MediaLibrary.migrateAlbumIfNeededAsync('AppName');
    } catch (error) {
      alert('You need to allow access to your media files.');
    }
  };

  const getRecentMedia = async () => {
    const media = await MediaLibrary.getAssetsAsync({ first: 12 });
    setRecentMedia(media.assets);
    recentMedia?.forEach(item => console.log(item?.split(".").join()));
  };

  const launchImageLibrary = async () => {
    const { canceled, assets } = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      quality: 1,
      allowsMultipleSelection: true,
      base64: true,
      selectionLimit: 3,
      videoQuality: ImagePicker.UIImagePickerControllerQualityType.High
    });

    if (!canceled) {
      setMedia([...media, ...assets]);
    }
  };

  const takePicture = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    console.log(status)
    if (status === 'granted') {
      const { canceled, assets } = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
      });
      if (canceled) {
        setImageUri(assets[0].uri);
        await MediaLibrary.saveToLibraryAsync(assets[0].uri);
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1 }}>
        <View style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={{
              flex: 0.3,
              justifyContent: "space-between",
              alignItems: "center",
          }}>
            <View style={{ width: ScreenWidth, height: 1, backgroundColor: colors.lightGray }} />
            {media?.length > 0 ? (
              <>
                  {
                      media?.length == 1 ? (
                          <Image  
                              source={{
                                  uri: media[0].uri
                              }}
                              resizeMode={"cover"}
                              style={{
                                  flex: 1
                              }}
                          />
                      ) : (
                        <>
                          {media?.map((item, index) => (
                            <Image  
                              key={index}
                              source={{
                                  uri: item.uri
                              }}
                              resizeMode={"cover"}
                              style={{
                                  flex: 0.33
                              }}
                            />
                          ))}
                        </>
                      )
                  }
              </>
          ) : (
              <View style={{ justifyContent: "space-between", alignItems: "center"}}>
                <Pressable onPress={launchImageLibrary}>
                  <Image  
                    source={images.Upload}
                    resizeMode={"contain"}
                    style={{
                      width: 124,
                      height: 124
                    }}
                  />
                </Pressable>
              </View>
          )}
          <View style={{ width: ScreenWidth, height: 1, backgroundColor: colors.lightGray }} />
        </View>
        <ScrollView style={{flex: 0.7, paddingVertical: 10, width: ScreenWidth, paddingHorizontal: 20}}>
          <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingTop: 20, marginHorizontal: 20 }}>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "flex-start", width: ScreenWidth / 3 }}>
              <Text style={{ fontSize: 24, fontFamily: "Montserrat_700Bold" }}>Galary</Text>
              <AntDesign name="arrowdown" size={12} color="black" />
            </View>
            {/* Space between both sides */}
            {/* <View style={{ width: ScreenWidth / 3 }} /> */}
            <View style={{  width: ScreenWidth / 3, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
              <Pressable onPress={launchImageLibrary}>
                <Image 
                  source={images.Gallery}
                  style={{
                    width: 39,
                    height: 39,
                    borderRadius: 39/2
                  }} 
                />
              </Pressable>
              <Pressable onPress={takePicture}>
                <Image 
                  source={images.Camera}
                  style={{
                    width: 39,
                    height: 39,
                    borderRadius: 39/2
                  }} 
                />
              </Pressable>
            </View>
          </View>
          {/* Recent Photos */}
          <View style={{ marginTop: 30, marginHorizontal: 20, backgroundColor: "green", }}>
            <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "center", alignItems: "center" }}>
              {recentMedia.map((item, i) => (
                <Image 
                  key={i}
                  source={{ uri: item.uri }}
                  style={{
                    width: IMAGE_WIDTH,
                    height: IMAGE_WIDTH
                  }}
                />
              ))} 
            </View>
          </View>
        </ScrollView>
      </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
  },
  mediaContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  imageContainer: {
    width: '48%',
    height: 150,
    marginBottom: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

export default NewPostScreen;