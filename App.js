import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import { useFonts, Inter_500Medium } from '@expo-google-fonts/inter';
import AppLoading from 'expo-app-loading';
import Toast from 'react-native-toast-message';

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_500Medium
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <>
        <NavigationContainer>
          <HomeScreen />
        </NavigationContainer>
        <Toast />
      </>
    );
  }
}
