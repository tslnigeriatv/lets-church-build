import { NavigationContainer } from '@react-navigation/native';
// import { Text, View } from 'react-native';
import { AppRoot } from "./navigation";

export default function App() {
  return (
    <NavigationContainer>
      <AppRoot />
    </NavigationContainer>
  );
}