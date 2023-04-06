import { StyleSheet, Text, View, ScrollView, Image, Pressable } from 'react-native';
import React, {useEffect} from 'react';

import { myNotification } from '../../data';

import { capitalizeName } from '../../utils/simple';

const NotificationTypeRender = ({ notifyActionType, notificationId, onPress, postPhoto }) => {
  switch(notifyActionType){
    case "follow":
      return (
        <View style={{paddingRight: 31}}>
          <Pressable 
            onPress={onPress}
            style={{paddingHorizontal: 18, paddingVertical: 5, borderRadius: 6, backgroundColor: "#F26A1D", justifyContent: "center", alignItems: "center"}}>
            <Text style={{color: "#fff", fontFamily: "Montserrat_700Bold" }}>Follow</Text>
          </Pressable>
        </View>
        
        
      );
      break;

    case "tag":
      return (
        <View style={{paddingRight: 31}}>
          <View style={{width: 52, height: 41, overflow: 'hidden', borderRadius: 5}}>
            <Image
              source={postPhoto}
              style={{width: "100%", height: "100%"}}
              resizeMode="cover"
            />
          </View>
        </View>
        
      );
      break;

    case "commented":
      return (
        <View style={{paddingRight: 31}}>
          <View style={{width: 52, height: 41, overflow: 'hidden', borderRadius: 5}}>
            <Image
              source={postPhoto}
              style={{width: "100%", height: "100%"}}
              resizeMode="cover"
            />
          </View>
        </View>
      );
      break;

  }
}


const Notification = () => {

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Notifications</Text>
      </View>

      <View style={{flex: 0.9}}>
      {/* Scrollable Notfications  */}
      <ScrollView>
        {/* Today Notification */}
        <View style={{marginBottom: 100}}>
          <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingLeft: 20,
                paddingVertical: 30
              }}
            >
              <Text style={{fontFamily: "Montserrat_500Medium", fontSize: 18, color: "#000000"}}>Today</Text>
              {/* Here the Notifications are marked read with an `onPress`... */}
              <Text onPress={() => console.log("Notification Cleared...")} style={{fontFamily: "Montserrat_500Medium", fontSize: 14, color: "#000000", paddingRight: 51}}>Clear</Text>
          </View>
          
          <View style={{marginTop: 20}}>
            {myNotification.map((notification, index) => (
              <View key={notification.id} >
                <View style={{paddingLeft: 20, paddingVertical: 18}}>
                  <View style={{ flexDirection: "row", justifyContent: "space-between", flex: 1, alignItems: "center"}}>
                      <Image 
                        source={notification.post_photo}
                        resizeMode="cover"
                        style={{width: 42, height: 42, borderRadius: 21, borderColor: "#F26A1D", borderWidth: 3 }}
                      />
                    <View style={{flexDirection: "column", flex: 1, paddingHorizontal: 18}}>
                      {/* Name */}
                      <Text style={{fontFamily: "Montserrat_700Bold"}}>
                        {capitalizeName(notification.friend.firstName, notification.friend.lastName)}
                        {/* {notification.friend.firstName}{" "}{notification.friend.lastName} */}
                      </Text>
                      {/* Notification Message or Information */}
                      <Text>
                        {notification.notification_message}
                      </Text>
                    </View>

                    <View>
                      <NotificationTypeRender 
                        notifyActionType={notification.action} 
                        notificationId={notification.id}
                        postPhoto={notification.post_photo}
                        onPress={() => console.log(`Action ${notification.action}`)}
                      />
                    </View>
                    
                  </View>
                </View>

                {/* Horizontal line */}
                <View
                  style={{
                    height: .4,
                    width: "100%",
                    backgroundColor: "#ECECEC",
                  }}
                />
                

              </View>
            ))}
          </View>
          
          {/* This Week */}
          <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingLeft: 20,
                paddingVertical: 30
              }}
            >
              <Text style={{fontFamily: "Montserrat_500Medium", fontSize: 18, color: "#000000"}}>This Week</Text>
              {/* Here the Notifications are marked read with an `onPress`... */}
          </View>

          <View>
          {myNotification.map((notification, index) => (
              <View key={notification.id} >
                <View style={{paddingLeft: 20, paddingVertical: 18}}>
                  <View style={{ flexDirection: "row", justifyContent: "space-between", flex: 1, alignItems: "center"}}>
                      <Image 
                        source={notification.post_photo}
                        resizeMode="cover"
                        style={{width: 42, height: 42, borderRadius: 21, borderColor: "#F26A1D", borderWidth: 3 }}
                      />
                    <View style={{flexDirection: "column", flex: 1, paddingHorizontal: 18}}>
                      {/* Name */}
                      <Text style={{fontFamily: "Montserrat_700Bold"}}>
                        {capitalizeName(notification.friend.firstName, notification.friend.lastName)}
                        {/* {notification.friend.firstName}{" "}{notification.friend.lastName} */}
                      </Text>
                      {/* Notification Message or Information */}
                      <Text>
                        {notification.notification_message}
                      </Text>
                    </View>

                    <View>
                      <NotificationTypeRender 
                        notifyActionType={notification.action} 
                        notificationId={notification.id}
                        postPhoto={notification.post_photo}
                        onPress={() => console.log(`Action ${notification.action}`)}
                      />
                    </View>
                    
                  </View>
                </View>

                {/* Horizontal line */}
                <View
                  style={{
                    height: .5,
                    width: "100%",
                    backgroundColor: "#ECECEC",
                  }}
                />
                

              </View>
            ))}
          </View>


        </View>
        
      </ScrollView>
      </View>
    </View>
  )
}

export default Notification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  header: {
    flex: 0.1,
    marginTop: 40,
    alignItems: "center",
    flexDirection: "row",
    
  },
  headerText: {
    color: "#000000",
    fontFamily: "Montserrat_700Bold",
    fontSize: 23,
    paddingLeft: 20,
  },
  headerTextSmall: {

  }
})