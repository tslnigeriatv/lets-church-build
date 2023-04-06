import { Platform, SafeAreaView, StyleSheet, Text, View, Image, TouchableWithoutFeedback, FlatList } from 'react-native'
import React from 'react'
import StoryWheel from '../../components/StoryWheel'
import { colors, ScreenWidth } from '../../components/shared'
import { images } from '../../assets/images'
import { useNavigation } from '@react-navigation/native'
import { FeedCard } from '../../components'
import { postData } from './data'

const Home = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View>
          <View style={styles.header}>
            <Text style={styles.headerTxt}>Feed</Text>
            <TouchableWithoutFeedback onPress={() => navigation.navigate("MessageScreen")}>
              <Image 
                source={images.Message}
                resizeMode={"contain"}
                style={{
                  width: 24,
                  height: 24
              }} />
            </TouchableWithoutFeedback>
          </View>
      </View>
      <StoryWheel />
      <View style={{ width: "100%", height: 2, backgroundColor: "#F3F3F3"}} />
      <FlatList  
        data={postData}
        style={{flex: 1}}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <FeedCard 
            item={item}
          />
        )}
      />

    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: Platform.OS === "android" ? 35 : 20,
    backgroundColor: colors.white
  },
  header: {
    width: ScreenWidth,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30
  },
  headerTxt: {
      fontSize: 20,
      fontFamily: "Montserrat_700Bold",
  },
})