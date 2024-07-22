import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import 'react-native-reanimated';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { Stack } from 'expo-router';
import { useColorScheme } from '@/hooks/useColorScheme';
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('@/assets/fonts/SpaceMono-Regular.ttf'),
  });
  const [isAppReady, setIsAppReady] = useState(false);
  const colorScheme = useColorScheme();
  const [userToken, setUserToken] = useState(true);
  useEffect(() => {
    if (loaded) {
      const prepareApp = async () => {
        await new Promise(resolve => setTimeout(resolve, 1000));
        await SplashScreen.hideAsync();
        setIsAppReady(true);
      };
      prepareApp();
    }
  }, [loaded]);

  if (!isAppReady) {
    return null;
  }

  return (
    <Provider store={store}>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <SafeAreaProvider>
          {userToken ? <AuthenticatedFlow /> : <AuthFlow />}
        </SafeAreaProvider>
      </ThemeProvider>
    </Provider>
  );
}

const AuthenticatedFlow: React.FC = () => {
  console.log('Entering AuthenticatedFlow');
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
};

const AuthFlow: React.FC = () => {
  console.log('Entering AuthFlow');
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="(auth)" />
    </Stack>
  );
};
