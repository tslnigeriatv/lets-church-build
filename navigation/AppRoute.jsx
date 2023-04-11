import { View, Text, StyleSheet, TouchableOpacity, Image, Pressable, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DrawerActions, NavigationContainer, useNavigation } from '@react-navigation/native';
import { 
  createDrawerNavigator, 
  DrawerContentScrollView, 
  DrawerItem, 
  DrawerItemList 
} from '@react-navigation/drawer';
import URLSearchParams from 'url-search-params';
import { 
  ChangePassword,
  Gifts,
  Home, 
  Login, 
  NewPost, 
  Notification, 
  ResetPassword, 
  Videos, 
  Welcome,
  MessageList,
  MessageDetail,
  Confirmation,
  Successful,
  SupportTeam,
  SupportMessageDetail,
  KidsZone
} from "../screens/index";
import { ScreenHeight, ScreenWidth } from '../components/shared';
import { images } from '../assets/images';
import { client } from '../lib/client';
import { userQuery } from '../lib/data/getUser';

const AppStack = createNativeStackNavigator();
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Auth = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Message = createNativeStackNavigator();

const AppStackScreen = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        screenOptions={() => ({
          headerShown: false,
        })}
      >
        <AppStack.Screen name="home-screen" component={Home} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

// Main Home Navigators


const HomeStack = () => {
  return (
        <Stack.Navigator screenOptions={() => ({
            "headerShown": false
        })}>
            <Stack.Screen name={"Feed"} component={Home} />
            <Stack.Screen name={"MessageScreen"} component={MessageScreens} />
        </Stack.Navigator>
  )
}

const dummyProfile = {
  profilePhoto: require("../data/images/photo7.jpg"),
  name: "Na me be this"
}

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <ScrollView 
      showsVerticalScrollIndicator={false}
      style={{
        maxHeight: ScreenHeight
      }}
        contentContainerStyle={{ 
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "column",
          marginHorizontal: 10,
          flex: 1,
          height: ScreenHeight
        }}>
          <View style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            marginVertical: 33,
          }}>
            <Image 
              source={dummyProfile.profilePhoto}
              resizeMode={"cover"}
              style={{
                width: 63,
                height: 63,
                borderRadius: 63 / 2
              }}
            />
            <Text style={{ fontSize: 18, fontFamily: "Montserrat_700Bold" }}>{dummyProfile.name}</Text>
          </View>
          <View style={{ 
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            marginVertical: 33
          }}>
            <View style={{ 
              backgroundColor: "#F6F6F6", 
              height: 103, 
              alignItems: "center",
              justifyContent: "center",
              marginLeft: 10,
              width: 75,
              borderRadius: 11,
              marginRight: 27,
            }}>
              <Image 
                source={images.Person}
                style={{
                  width: 12.83,
                  height: 13.69,
                }}
                resizeMode={"contain"}
              />
              <DrawerItem
              style={{
                marginRight: -20,
              }}
              labelStyle={{
                fontSize: 12,
                fontFamily: "Montserrat_500Medium",
              }}
                label="Profile"
                onPress={() => {}}
              />
            </View>
            <View style={{ 
              backgroundColor: "#F6F6F6", 
              height: 103, 
              alignItems: "center",
              justifyContent: "center",
              marginRight: 10,
              width: 75,
              borderRadius: 11
            }}>
              <Image 
                source={images.Saved}
                style={{
                  width: 12.83,
                  height: 13.69,
                }}
                resizeMode={"contain"}
              />
              <DrawerItem
              style={{
                marginRight: -20,
              }}
              labelStyle={{
                fontSize: 12,
                fontFamily: "Montserrat_500Medium",
              }}
                label="Saved"
                onPress={() => {}}
              />
            </View>
          </View>
          <View style={{ 
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            marginVertical: 33
          }}>
            <View style={{ 
              backgroundColor: "#F6F6F6", 
              height: 103, 
              alignItems: "center",
              justifyContent: "center",
              marginLeft: 10,
              width: 75,
              borderRadius: 11,
              marginRight: 27,
            }}>
              <Image 
                source={images.Shopping}
                style={{
                  width: 12.83,
                  height: 13.69,
                }}
                resizeMode={"contain"}
              />
              <DrawerItem
              style={{
                marginRight: -20,
              }}
              labelStyle={{
                fontSize: 12,
                fontFamily: "Montserrat_500Medium",
              }}
                label="Shop"
                onPress={() => {}}
              />
            </View>
            <View style={{ 
              backgroundColor: "#F6F6F6", 
              height: 103, 
              alignItems: "center",
              justifyContent: "center",
              marginRight: 10,
              width: 75,
              borderRadius: 11
            }}>
              <Image 
                source={images.Search}
                style={{
                  width: 12.83,
                  height: 13.69,
                }}
                resizeMode={"contain"}
              />
              <DrawerItem
              style={{
                marginRight: -20,
              }}
              labelStyle={{
                fontSize: 12,
                fontFamily: "Montserrat_500Medium",
              }}
                label="Explore"
                onPress={() => {}}
              />
            </View>
          </View>
          <View style={{ 
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            marginVertical: 33
          }}>
            <View style={{ 
              backgroundColor: "#F6F6F6", 
              height: 103, 
              alignItems: "center",
              justifyContent: "center",
              marginLeft: 10,
              width: 75,
              borderRadius: 11,
              marginRight: 27,
            }}>
              <Image 
                source={images.Support}
                style={{
                  width: 12.83,
                  height: 13.69,
                }}
                resizeMode={"contain"}
              />
              <DrawerItem
              style={{
                marginRight: -20,
              }}
              labelStyle={{
                fontSize: 12,
                fontFamily: "Montserrat_500Medium",
              }}
                label="Support"
                onPress={() => {}}
              />
            </View>
            <View style={{ 
              backgroundColor: "#F6F6F6", 
              height: 103, 
              alignItems: "center",
              justifyContent: "center",
              marginRight: 10,
              width: 75,
              borderRadius: 11
            }}>
              <Image 
                source={images.Settings}
                style={{
                  width: 12.83,
                  height: 13.69,
                }}
                resizeMode={"contain"}
              />
              <DrawerItem
              style={{
                marginRight: -20,
              }}
              labelStyle={{
                fontSize: 12,
                fontFamily: "Montserrat_500Medium",
              }}
                label="Settings"
                onPress={() => {}}
              />
            </View>
          </View>
          <Pressable 
            style={{ 
            width: "90%", 
            alignItems: "center", 
            paddingHorizontal: 10,
            marginTop: 150,
            backgroundColor: "#F0F0F0",
            flexDirection: "row",
            height: 34,
            marginBottom: 30,
            borderRadius: 5
          }}>
            <Image
              source={images.Logout}
              resizeMode={"contain"}
              style={{
                width: 12.83,
                height: 13.69,
                paddingLeft: 15
              }}
            />
            <DrawerItem
            style={{
              width: "100%",
            }}
            labelStyle={{
              fontSize: 13,
              fontFamily: "Montserrat_700Bold"
            }}
            label="Logout"
            onPress={() => {}}
            />
          </Pressable>
        </ScrollView>
    </DrawerContentScrollView>
  );
}

// Drawer Navigation

const DrawerNavigator = (props) => {

  return (
    <Drawer.Navigator 
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      initialRouteName='HomeApp'
      defaultStatus={"open"}
      screenOptions={() => ({
        headerShown: true
      })}
    >
      <Drawer.Screen options={() =>({
        drawerActiveBackgroundColor: "white",
        drawerActiveTintColor: "white",
        headerTitle: "",
        drawerContentStyle: {
          display: 'none'
        }
      })} onPress={() => props.navigation.dispatch(DrawerActions.closeDrawer())} name="HomeApp" component={HomeApp} />
    </Drawer.Navigator>
  );
}

// Authentication Screens

const AuthStack = () => {
    return (
        <Auth.Navigator initialRouteName='Welcome' screenOptions={() => ({
            "headerShown": false
        })}>
            <Auth.Screen name="Welcome" component={Welcome} />
            <Auth.Screen name="Login" component={Login} />
            <Auth.Screen name="ResetPassword" component={ResetPassword} />
            <Auth.Screen name="ChangePassword" component={ChangePassword} />
            <Auth.Screen name="Confirmation" component={Confirmation} />
            <Auth.Screen name="Successful" component={Successful} />
        </Auth.Navigator>
    )
}

const CustomTabButton = ({ children, onPress }) => (
  <TouchableOpacity style={{
    top: -15,
    justifyContent: "center",
    alignItems: "center",
  }} onPress={onPress}>
    <View style={{
      width: 48,
      height: 48,
      borderRadius: 24,
      backgroundColor: "#303030",
      borderWidth: 5,
      borderStyle: "solid",
      borderColor: "white"
    }}>{children}</View>
  </TouchableOpacity>
)

// Bottom TabNavigator


const HomeApp = () => {
    return (
        <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {
            elevation: 0,
            borderTopRightRadius: 21,
            borderTopLeftRadius: 21,
            paddingHorizontal: 20,
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
          }
        }}>
          <Tab.Screen 
          options={{headerShown: false, tabBarIcon: ({ focused, color, size }) => focused ? (
            <View>
              <View style={styles.activeTab}>
                <Ionicons name='home' size={12} color={"black"} />
                <Text style={{ marginLeft: 10, fontWeight: "700"}}>Home</Text>
              </View>
            </View>
          ) : <Ionicons name='home-outline' size={12} color={"black"} />
          }} name='Home' component={HomeStack} />
          <Tab.Screen options={{headerShown: false, tabBarIcon: ({ focused, color, size }) => focused ? (
            <View>
              <View style={styles.activeTab}>
                <Ionicons name='ios-gift-sharp' size={12} color={"black"} />
                <Text style={{ marginLeft: 10, fontWeight: "700"}}>Gifts</Text>
              </View>
            </View>
          ) : <Ionicons name='ios-gift-outline' size={12} color={"black"} />
          }} name='Gifts' component={Gifts} />
          <Tab.Screen 
            options={{
            tabBarButton: (props) => <CustomTabButton {...props} />, 
            tabBarIcon: () => 
            <Ionicons name='add-sharp' size={30} color={"white"} />
          }} name='NewPost' component={NewPost} />
          <Tab.Screen options={{headerShown: false, tabBarIcon: ({ focused, color, size }) => focused ? (
            <View>
              <View style={styles.activeTab}>
                <Ionicons name='ios-grid' size={12} color={"black"} />
                <Text style={{ marginLeft: 10, fontWeight: "700"}}>Inbox</Text>
              </View>
            </View>
          ) : <Ionicons name='ios-grid-outline' size={12} color={"black"} />
          }} name='Notification' component={Notification} />
          <Tab.Screen options={{headerShown: false, tabBarIcon: ({ focused, color, size }) => focused ? (
            <View>
              <View style={styles.activeTab}>
                <Ionicons name='play-circle' size={12} color={"black"} />
                <Text style={{ marginLeft: 10, fontWeight: "700"}}>Videos</Text>
              </View>
            </View>
          ) : <Ionicons name='play-circle-outline' size={12} color={"black"} />
          }} name='Videos' component={Videos} />
        </Tab.Navigator>
    )
}


// Message Screens

const MessageScreens = () => {
  return (
    <Message.Navigator initialRouteName='Messages'>
      <Message.Screen name="Messages" component={MessageList} />
      <Message.Screen options={{headerShown: false}} name="MessageDetail" component={MessageDetail}  />
      <Message.Screen options={{headerShown: false}} name="SupportTeam" component={SupportTeam}  />
      <Message.Screen options={{headerShown: false}} name="SupportMessageDetail" component={SupportMessageDetail}  />

      {/* OtherScreens */}
      <Message.Screen options={{headerShown: false}} name="KidsZone" component={KidsZone}  />

    </Message.Navigator>
  )
}



const AppRoot = () => {

  
  const [userToken, setUserToken] = useState("jgkghgksgkgshggsg");


    return !userToken ? (
        <AppStack.Navigator
          screenOptions={() => ({
            headerShown: false,
          })}
        >
          <AppStack.Screen name="AuthStack" component={AuthStack} />
        </AppStack.Navigator>
    ) : <DrawerNavigator />
}

export default AppRoot;

const styles = StyleSheet.create({
  activeTab: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#E2E2E2",
    borderRadius: 28,
    padding: 10
  }
})



