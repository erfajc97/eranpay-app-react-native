import { useAppDispatch } from '@/app/store/hooks/store';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Alert, AppState } from 'react-native';

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useAppDispatch();
  const route = useRouter();

  AppState.addEventListener('change', state => {
    if (state === 'active') {
      supabase.auth.startAutoRefresh();
    } else {
      supabase.auth.stopAutoRefresh();
    }
  });

  async function signInWithEmail({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) {
    setLoading(true);
    try {
      const response = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });
      if (response.error) Alert.alert(response.error.message);

      if (response.data?.user?.email && !response.error) {
        route.replace('/(tabs)');
      }
    } catch (error: any) {
      Alert.alert('Sign in failed', error.message);
    } finally {
      setLoading(false);
    }
  }
  return { signInWithEmail, email, setEmail, password, setPassword, loading };
};

export default useLogin;
