import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { Stack } from 'expo-router';
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useAppDispatch, useAppSelector } from '../store/hooks/store';
import { RootState } from '../store/store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { restoreTokenThunk } from '../store/auth/thunk';

interface StacksFlowProps {}

const StacksFlow: React.FC<StacksFlowProps> = () => {
  // const { userToken, isLoading } = useAppSelector(
  //   (state: RootState) => state.auth
  // );
  const colorScheme = useColorScheme();
  const dispatch = useAppDispatch();
  const [userToken, setUserToken] = useState(true);
  useEffect(() => {
    const getToken = async () => {
      try {
        const value = await AsyncStorage.getItem('@token');
        console.log('Token retrieved from storage:', value);
        dispatch(restoreTokenThunk(value ? value : null));
      } catch (error) {
        console.log('Error retrieving token:', error);
      }
    };

    getToken();
  }, [dispatch]);

  // useEffect(() => {
  //   console.log('User Token:', userToken);
  //   console.log('Is Loading:', isLoading);
  // }, [userToken, isLoading]);

  // if (isLoading) {
  //   return (
  //     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  //       <ActivityIndicator size="large" color="#000" />
  //     </View>
  //   );
  // }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <SafeAreaProvider>
        {userToken ? <AuthenticatedFlow /> : <AuthFlow />}
      </SafeAreaProvider>
    </ThemeProvider>
  );
};

export default StacksFlow;

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
