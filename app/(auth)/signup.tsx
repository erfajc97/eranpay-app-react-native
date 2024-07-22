import React from 'react';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import LogoE_Svg from '@/assets/svg/LogoE_Svg';
import PrimaryButton from '@/components/PrimaryButton';
import { Link } from 'expo-router';
import FormToSignup from './components/signup/FormToSignup';

export default function SignupScreen() {
  return (
    <ThemedView screenContainer className="flex-1 justify-evenly">
      <ThemedView center>
        <LogoE_Svg />
        <ThemedText className="mt-5" center type="title">
          {'Create account'}
        </ThemedText>
        <ThemedText className="" center type="small">
          Already have an account?{' '}
          <ThemedText className="text-[#FF950F]" type="small">
            <Link href="/login">Login</Link>
          </ThemedText>
        </ThemedText>
      </ThemedView>
      <FormToSignup />
      <ThemedView center>
        <PrimaryButton goTo="" bgColor="#ff9500c4" text="Registarse" />
      </ThemedView>
    </ThemedView>
  );
}
