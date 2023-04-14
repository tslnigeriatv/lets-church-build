// import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import NewPostCopy from "./screens/NewPostCopy";
import { NativeBaseProvider } from "native-base";
import 'react-native-url-polyfill/auto';
// Expo Google Fonts --- Montserrat

import AppRoot from './navigation/AppRoute'

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
// import { Community, KidsZone, SearchPopularCategories, HotDealsPopularCategories, SavedDeals, Transaction, Saved, NewPost } from './screens';

import { useEffect } from 'react';
import { client } from './lib/client';
import { userQuery } from './lib/data/getUser';

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
        <AppRoot />
      </NativeBaseProvider>
    </NavigationContainer>
  );
}


