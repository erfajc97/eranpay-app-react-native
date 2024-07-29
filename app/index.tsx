import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import Loader from '@/components/Loader';
import { Session } from '@supabase/supabase-js';
import { supabase } from '@/lib/supabase';

export default function Index() {
  const [session, setSession] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      if (session) {
        router.replace('/(tabs)');
      } else {
        router.replace('/(routes)/onboarding');
      }
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  return <>{isLoading && <Loader />}</>;
}
