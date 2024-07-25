// import Loader from '@/components/Loader';

import { Redirect } from 'expo-router';
import { useAppDispatch, useAppSelector } from './store/hooks/store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { restoreTokenThunk } from './store/auth/thunk';
import { useEffect } from 'react';
import Loader from '@/components/Loader';

export default function TabsIndex() {
  const { userToken, isLoading } = useAppSelector(state => state.auth);
  const dispatch = useAppDispatch();
  console.warn(userToken);

  useEffect(() => {
    getValue();
  }, []);

  const getValue = async () => {
    try {
      const value = await AsyncStorage.getItem('@token');
      if (value !== null) {
        dispatch(restoreTokenThunk(value));
      } else {
        dispatch(restoreTokenThunk(null));
      }
    } catch (error) {
      console.log('Error retrieving tokens:', error);
    }
  };
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Redirect href={!userToken ? '/(routes)/onboarding' : '/(tabs)'} />
      )}
    </>
  );
}
