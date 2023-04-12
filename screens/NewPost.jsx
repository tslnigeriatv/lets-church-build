import React, { useState, useEffect } from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as MediaLibrary from 'expo-media-library';

const NewPostScreen = () => {
  const [media, setMedia] = useState([]);
  console.log("<----------------------------------Checking Out ---------------------------->")
  console.log(media);
  const [recentMedia, setRecentMedia] = useState([]);

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
    const media = await MediaLibrary.getAssetsAsync({ first: 5 });
    setRecentMedia(media.assets);
  };

  const launchImageLibrary = async () => {
    const { canceled, assets} = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      quality: 1,
      allowsEditing: true,
      allowsMultipleSelection: true,
      base64: true,
      selectionLimit: 3,
      videoQuality: ImagePicker.UIImagePickerControllerQualityType.High
    });

    if (!canceled) {
      setMedia([...media, ...assets]);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create a New Post</Text>
      <Button title="Select Media" onPress={launchImageLibrary} />
      {recentMedia.length > 0 && (
        <>
          <Text style={styles.subtitle}>Recent Media</Text>
          <View style={styles.mediaContainer}>
            {recentMedia.map((item) => (
              <View key={item.id} style={styles.imageContainer}>
                <Image style={styles.image} source={{ uri: item.uri }} />
              </View>
            ))}
          </View>
        </>
      )}
      {/* {media.map((item, index) => (
        <View key={index}>
          <Image style={styles.image} source={{ uri: item.uri }} />
        </View>
      ))} */}
      {console.log(media)}
      <Button title="Create Post" onPress={() => console.log('Post Created!')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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