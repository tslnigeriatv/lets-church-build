import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import { 
  ChangePassword,
  Gifts,
  Home, 
  Login, 
  NewPost, 
  Notification, 
  Register, 
  ResetPassword, 
  Videos, 
  Welcome 
} from "../screens/index";

const AppStack = createNativeStackNavigator();

const AppStackScreen = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        screenOptions={() => ({
          headerShown: false,
        })}
      >
        {/* All available screen */}
        <AppStack.Screen name="home-screen" component={Home} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
        <Stack.Navigator screenOptions={() => ({
            "headerShown": false
        })}>
            <Stack.Screen name={"HomeStack"} component={Home} />
        </Stack.Navigator>
  )
}



const Auth = createNativeStackNavigator();

const AuthStack = () => {
    return (
        <Auth.Navigator initialRouteName='Welcome' screenOptions={() => ({
            "headerShown": false
        })}>
            <Auth.Screen name="Welcome" component={Welcome} />
            <Auth.Screen name="Login" component={Login} />
            <Auth.Screen name="ResetPassword" component={ResetPassword} />
            <Auth.Screen name="Register" component={Register} />
            <Auth.Screen name="ChangePassword" component={ChangePassword} />
        </Auth.Navigator>
    )
}


const CustomTabButton = ({ children, onPress }) => (
  <TouchableOpacity style={{
    top: -30,
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


const Tab = createBottomTabNavigator();

const HomeApp = () => {
    return (
        <Tab.Navigator screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {
            elevation: 0,
            // backgroundColor: "#F3F3F3",
            height: 81,
            borderTopRightRadius: 21,
            borderTopLeftRadius: 21,
            paddingHorizontal: 20,
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
          }
        }}>
          <Tab.Screen options={{tabBarIcon: ({ focused, color, size }) => focused ? (
            <View>
              <View style={styles.activeTab}>
                <Ionicons name='home' size={12} color={"black"} />
                <Text style={{ marginLeft: 10, fontWeight: "700"}}>Home</Text>
              </View>
            </View>
          ) : <Ionicons name='home-outline' size={12} color={"black"} />
          }} name='Home' component={HomeStack} />
          <Tab.Screen options={{tabBarIcon: ({ focused, color, size }) => focused ? (
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
          <Tab.Screen options={{tabBarIcon: ({ focused, color, size }) => focused ? (
            <View>
              <View style={styles.activeTab}>
                <Ionicons name='ios-grid' size={12} color={"black"} />
                <Text style={{ marginLeft: 10, fontWeight: "700"}}>Inbox</Text>
              </View>
            </View>
          ) : <Ionicons name='ios-grid-outline' size={12} color={"black"} />
          }} name='Notification' component={Notification} />
          <Tab.Screen options={{tabBarIcon: ({ focused, color, size }) => focused ? (
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

const AppRoot = () => {
  // let accessToken = "sfsdfafaf";
  const [userToken, setUserToken] = useState("");


    return (
    <AppStack.Navigator
      screenOptions={() => ({
        headerShown: false,
      })}
    >
      {userToken ? (
        <AppStack.Screen name="HomeTabs" component={HomeApp} />
      ) : (
        <AppStack.Screen name="AuthStack" component={AuthStack} />
      )}
    </AppStack.Navigator>
    )
}

export default AppRoot;

const styles = StyleSheet.create({
  activeTab: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#E2E2E2",
    height: 30,
    borderRadius: 28,
    padding: 10
  }
})