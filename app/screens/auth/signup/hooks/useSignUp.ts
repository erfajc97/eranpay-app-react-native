import { useState } from 'react';
import { signUpWithEmailProps } from '../types';
import { supabase } from '@/lib/supabase';
import { Alert } from 'react-native';

const useSignUp = () => {
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [dob, setDob] = useState<Date>(new Date());
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [country, setCountry] = useState<string>('EC');

  const signUpWithEmail = async ({
    email,
    password,
    firstName,
    lastName,
    dob,
    phoneNumber,
    country,
  }: signUpWithEmailProps) => {
    setLoading(true);
    try {
      const response = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            first_name: firstName,
            // last_name: lastName,
            // age: 24,
            // phone_number: phoneNumber,
            // country: country,
            // user_name: email.split('@')[0], // Assuming you use the email prefix as username
            // code_area: '+593',
          },
        },
      });
      // console.log(response);

      if (response.error) {
        if (response.error.message.includes('Email rate limit exceeded')) {
          throw new Error(
            'You have exceeded the number of sign-up attempts. Please try again later.'
          );
        } else {
          throw new Error(response.error.message);
        }
      }

      Alert.alert('Success', 'Please check your inbox for email verification!');
    } catch (error: any) {
      console.error('Signup failed', error);
      Alert.alert('Signup failed', error.message);
    } finally {
      setLoading(false);
    }
  };
  return {
    signUpWithEmail,
    email,
    setEmail,
    password,
    setPassword,
    firstName,
    setFirstName,
    lastName,
    setLastName,
    dob,
    setDob,
    phoneNumber,
    setPhoneNumber,
    country,
    setCountry,
    loading,
  };
};

export default useSignUp;
