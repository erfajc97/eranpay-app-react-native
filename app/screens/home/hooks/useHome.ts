import  { useEffect } from 'react';
import { NativeEventSubscription, BackHandler } from 'react-native';
import { router, } from 'expo-router';
import { supabase } from '@/lib/supabase';
import { useAppDispatch } from '@/app/store/hooks/store';


const useHome = () => {
  
  useEffect(() => {
    if (!supabase.auth.getUser()) {
      router.replace('/(routes)/login');
    }
    const backHandler: NativeEventSubscription = BackHandler.addEventListener(
      'hardwareBackPress',
      () => true
    );

    return () => backHandler.remove();
  }, []);

  const dispatch = useAppDispatch();
  const handleSignOut = async () => {
    supabase.auth.signOut();
    router.replace('/(routes)/login');
  };

  return { handleSignOut }
};


export default useHome;