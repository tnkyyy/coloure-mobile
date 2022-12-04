import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import { useFonts, Inter_500Medium } from '@expo-google-fonts/inter';
import { useEffect, useCallback } from 'react';
import Toast from 'react-native-toast-message';
import ShareScreen from './screens/ShareScreen';
import { Provider } from 'react-redux';
import store from './store';
import * as SplashScreen from 'expo-splash-screen';

const Stack = createNativeStackNavigator();

SplashScreen.preventAutoHideAsync();

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_500Medium
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <Provider store={store}>
      <NavigationContainer onReady={onLayoutRootView}>
        <Stack.Navigator
          initialRouteName="HomeScreen"
          screenOptions={{
            headerShown: false
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Share" component={ShareScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      <Toast />
    </Provider>
  );
}
