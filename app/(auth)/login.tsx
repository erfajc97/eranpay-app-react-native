import React from 'react';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import LogoE_Svg from '@/assets/svg/LogoE_Svg';
import PrimaryButton from '@/components/PrimaryButton';
import { Link } from 'expo-router';
import { Text, View } from 'react-native';
import FacebookIcon from '@/assets/svg/FacebookIcon';
import GoogleIcon from '@/assets/svg/GoogleIcon';
import FormToLogin from './components/login/FormToLogin';

export default function LoginScreen() {
  return (
    <ThemedView screenContainer className="flex-1 justify-evenly">
      <ThemedView center>
        <LogoE_Svg />
        <ThemedText className="mt-5" center type="title">
          {'Sign in to your\nAccount'}
        </ThemedText>
        <ThemedText className="" center type="small">
          Don't have an account?{' '}
          <ThemedText className="text-[#FF950F]" type="small">
            <Link href="/signup">Sign up</Link>
          </ThemedText>
        </ThemedText>
      </ThemedView>
      <FormToLogin />
      <ThemedView center>
        <PrimaryButton goTo="" bgColor="#ff9500c4" text="Login" />
      </ThemedView>
      <ThemedView center className="w-[100%] flex flex-row h-5">
        <View className="h-[1px] bg-gray-500 w-[43%]"></View>
        <Text className="text-[10px] text-center text-gray-400 mx-2">Or</Text>
        <View className="h-[1px] bg-gray-500 w-[43%]"></View>
      </ThemedView>
      <ThemedView className="flex gap-y-4">
        <ThemedView center>
          <PrimaryButton
            Icon={<GoogleIcon />}
            bgIsPressed="white"
            goTo=""
            colorText="#1A1C1E"
            typeText="defaultSemiBold"
            bgColor="#fff"
            text="Continue with Google"
          />
        </ThemedView>
        <ThemedView center>
          <PrimaryButton
            Icon={<FacebookIcon />}
            bgIsPressed="white"
            goTo=""
            typeText="defaultSemiBold"
            bgColor="#fff"
            colorText="#1A1C1E"
            text="Continue with Facebook"
          />
        </ThemedView>
      </ThemedView>
      <ThemedText
        type="link"
        center
        className="text-[14px] underline text-gray-400 "
      >
        <Link href="">Forgot Your Password ?</Link>
      </ThemedText>
    </ThemedView>
  );
}
