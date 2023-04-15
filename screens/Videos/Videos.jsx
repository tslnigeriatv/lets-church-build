import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { SimpleLineIcons } from '@expo/vector-icons';
import { colors, ScreenHeight, ScreenWidth } from '../../components/shared';
import { AudioMedia, CustomSlider } from '../../components';

const user = {
  name: "Annette!"
}

const slider = {
  images: [
    { id: 1, image: require("../../data/images/photo1.jpg")},
    { id: 2, image: require("../../data/images/photo2.jpg")},
    { id: 3, image: require("../../data/images/photo3.jpg")},
    { id: 4, image: require("../../data/images/photo4.jpg")},
    { id: 5, image: require("../../data/images/photo5.jpg")},
    { id: 6, image: require("../../data/images/photo1.jpg")}
  ]
}

const playList = [
  { id: 1, artist: "Green Day", songTitle: "His Unfailing Love", audio: require("../../assets/media/Asake.mp3"), thumbnail: require("../../data/images/photo1.jpg") },
  { id: 2, artist: "Day Green", songTitle: "Unfailing His Love", audio: require("../../assets/media/Davido.mp3"), thumbnail: require("../../data/images/photo2.jpg") },
  { id: 3, artist: "Green Light", songTitle: "No Hesitation", audio: require("../../assets/media/Victony.mp3"), thumbnail: require("../../data/images/photo3.jpg") },
  { id: 4, artist: "Light Green", songTitle: "Only Love", audio: require("../../assets/media/Victony-Soweto.mp3"), thumbnail: require("../../data/images/photo4.jpg") },
  { id: 5, artist: "Green Day", songTitle: "His Unfailing Love", audio: require("../../assets/media/burna-1.mp3"), thumbnail: require("../../data/images/photo5.jpg") },
  { id: 6, artist: "Day Green", songTitle: "Unfailing His Love", audio: require("../../assets/media/burna-2.mp3"), thumbnail: require("../../data/images/photo6.jpg") },
  { id: 7, artist: "Green Light", songTitle: "No Hesitation", audio: require("../../assets/media/burna-3.mp3"), thumbnail: require("../../data/images/photo7.jpg") },
  { id: 8, artist: "Light Green", songTitle: "Only Love", audio: require("../../assets/media/Ruger.mp3"), thumbnail: require("../../data/images/photo4.jpg") },
  { id: 8, artist: "Light Song", songTitle: "Love Only", audio: require("../../assets/media/Moelogo.mp3"), thumbnail: require("../../data/images/photo5.jpg") },
]

const Videos = () => {
  const [tabIndex, setTabIndex] = useState("tab1");

  

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContent}>
        <View>
          <Text style={{
            fontSize: 17,
            fontFamily: "Montserrat_700Bold"
          }}>Hello, {user.name}</Text>
          <Text style={{

          }}>{"Good to see you"}</Text>
        </View>

        <SimpleLineIcons name="grid" size={24} color="black" />
      </View>

      <View style={{ flexDirection: "row", justifyContent: "space-around", width: ScreenWidth }}>
        <Pressable onPress={() => setTabIndex("tab1")} style={[styles.tab, { borderWidth: tabIndex === "tab1" ? 0 : 1, borderColor: colors.primary, borderStyle: "solid", backgroundColor:  tabIndex ==="tab1" ? colors.primary : "#FFE4D4", }]}>
          <Text style={{ fontFamily: "Montserrat_600SemiBold", fontSize: 14, color: tabIndex === "tab1" ? colors.white : colors.primary }}>Trending</Text>
        </Pressable>
        <Pressable onPress={() => setTabIndex("tab2")} style={[styles.tab, { borderWidth: tabIndex === "tab2" ? 0 : 1, borderColor: colors.primary, borderStyle: "solid", backgroundColor:  tabIndex ==="tab2" ? colors.primary : "#FFE4D4", }]}>
          <Text style={{ fontFamily: "Montserrat_600SemiBold", fontSize: 14, color: tabIndex === "tab2" ? colors.white : colors.primary }}>Popular</Text>
        </Pressable>
        <Pressable onPress={() => setTabIndex("tab3")} style={[styles.tab, { borderWidth: tabIndex === "tab3" ? 0 : 1, borderColor: colors.primary, borderStyle: "solid", backgroundColor:  tabIndex ==="tab3" ? colors.primary : "#FFE4D4", }]}>
          <Text style={{ fontFamily: "Montserrat_600SemiBold", fontSize: 14, color: tabIndex === "tab3" ? colors.white : colors.primary }}>Top Chart</Text>
        </Pressable>
      </View>

      {/* Tabs */}
      <View style={{}}>
        {/* Tab1 */}
          <View style={{ marginTop: 35 }}>
            <CustomSlider item={slider} />
            <Text style={{ fontSize: 16, fontFamily: "Montserrat_700Bold", marginLeft: 20, marginTop: 20, marginBottom: 40 }}>Recently Played</Text>
              {/* Tab 1 */}
                <View style={{ height: ScreenHeight / 2, paddingBottom: 30 }}>
                  <ScrollView>
                    {/* Adio Media */}
                    {playList.map((song, i) => (
                      <AudioMedia key={i} sermon={song} />
                    ))}
                  </ScrollView>
                </View>
              {/* Tab2 */}
            
              {/* Tab3 */}
            <View></View>
          </View>
      </View>
    </SafeAreaView>
  )
}

export default Videos

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    justifyContent: "flex-start",
    alignItems: "center",
    // backgroundColor: "green",
    paddingHorizontal: 20,

  },
  headerContent: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 20,
    // backgroundColor: "yellow",
    width: ScreenWidth,
    paddingHorizontal: 20,
    marginTop: 20,
    marginBottom: 30
  },
  tab: {
    borderRadius: 30,
    width: (ScreenWidth / 3) - 30,
    height: 42,
    justifyContent: "center",
    alignItems: "center",
    
  }
})