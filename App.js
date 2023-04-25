// import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import NewPostCopy from "./screens/NewPostCopy";
import { NativeBaseProvider } from "native-base";
import AppRoute from "./navigation/AppRoute.jsx";
import 'react-native-url-polyfill/auto';
// Expo Google Fonts --- Montserrat

import AppRoot from './navigation/AppRoute'

// Expo dev client for connecting to a native build
import "expo-dev-client";




import {
  useFonts,
  Montserrat_100Thin,
  Montserrat_200ExtraLight,
  Montserrat_300Light,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
  Montserrat_800ExtraBold,
  Montserrat_900Black,
  Montserrat_100Thin_Italic,
  Montserrat_200ExtraLight_Italic,
  Montserrat_300Light_Italic,
  Montserrat_400Regular_Italic,
  Montserrat_500Medium_Italic,
  Montserrat_600SemiBold_Italic,
  Montserrat_700Bold_Italic,
  Montserrat_800ExtraBold_Italic,
  Montserrat_900Black_Italic,
} from '@expo-google-fonts/montserrat';
import { Home, Login, Videos } from './screens';


import { useEffect } from 'react';
import { client } from './lib/client';
import { userQuery } from './lib/data/getUser';
import { Community, HotDealsPopularCategories, KidsZone, NewPost, Saved, SavedDeals, SearchPopularCategories, Transaction } from './screens';
import Reels from './screens/OtherScreens/Reels';

export default function App() {

  let [fontsLoaded] = useFonts({
    Montserrat_100Thin,
    Montserrat_200ExtraLight,
    Montserrat_300Light,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
    Montserrat_800ExtraBold,
    Montserrat_900Black,
    Montserrat_100Thin_Italic,
    Montserrat_200ExtraLight_Italic,
    Montserrat_300Light_Italic,
    Montserrat_400Regular_Italic,
    Montserrat_500Medium_Italic,
    Montserrat_600SemiBold_Italic,
    Montserrat_700Bold_Italic,
    Montserrat_800ExtraBold_Italic,
    Montserrat_900Black_Italic,
  });

  if(!fontsLoaded){
    return null;
  }
  
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <AppRoute />
      </NativeBaseProvider>
    </NavigationContainer>
  );
}


