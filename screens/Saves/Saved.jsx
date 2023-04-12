import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react';
import { songs } from './saves';

const CustomMusicList = ({ data }) => {

  return (
    <>
      <View style={styles.songContainer}>
        <Text>Something</Text>
      </View>
      <View 
        style={{
          borderBottomColor: "#EDEDED",
          borderBottomWidth: 1,
        }}
      />
    </>
  )
}

const Saved = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTxt}>My Saves</Text>
      </View>
      <View style={styles.body}>
        <FlatList 
          data={songs}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ data }) => <CustomMusicList data={data} />}
        />
      </View>
    </View>
  )
}

export default Saved

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFE4D4"
    },
    header: {
        flex: 0.15,
        paddingHorizontal: 20,
        justifyContent: "flex-end",
        paddingBottom: 20
    },
    body: {
        flex: 0.85,
        borderTopLeftRadius: 26,
        borderTopRightRadius: 26,
        backgroundColor: "white",
        paddingHorizontal: 20
    },
    headerTxt: {
        color: "#F26A1D",
        fontSize: 24,
        fontFamily: "Montserrat_700Bold"
    },
    songContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      padding: 20
    }
})