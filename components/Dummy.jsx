import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Dummy = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 0.9 }}>
        <View
          style={{
            flex: Platform.OS == "ios" ? 0.1 : 0.15,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "row",
              paddingHorizontal: 21,
            }}
          >
            <View style={{ position: "relative" }}>
              {notification && (
                <View
                  style={{
                    position: "absolute",
                    backgroundColor: "red",
                    width: 11,
                    height: 11,
                    borderRadius: 9999,
                    zIndex: 10,
                    right: -5,
                    top: -5,
                  }}
                />
              )}
              <SimpleLineIcons name="grid" size={22} color="black" />
            </View>

            <Image
              source={user.profile_photo}
              style={{
                width: 34,
                height: 34,
                borderRadius: 9999,
              }}
            />
          </View>
        </View>

        <View
          style={{
            flex: Platform.OS === "ios" ? 0.9 : 0.85,
            backgroundColor: "red",
          }}
        >
          <ScrollView contentContainerStyle={{ position: "relative", flex: 1 }}>
            <View
              style={{
                position: "absolute",
                right: 0,
                left: 0,
                height: 300,
                justifyContent: "center",
                alignItems: "center",
                paddingTop: 5,
              }}
            >
              <DebitCard user={user} />
            </View>
            <Text>Hi</Text>
            {/* Here */}
            <View></View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Dummy

const styles = StyleSheet.create({})