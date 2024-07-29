import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import LogoE_Svg from '@/assets/svg/LogoE_Svg';
import PrimaryButton from '@/components/PrimaryButton';
import { Link } from 'expo-router';
import FormToSignup from './components/FormToSignup';
import { KeyboardAvoidingView } from 'react-native';
import useSignUp from './hooks/useSignUp';

export default function SignupScreen() {
  const {
    signUpWithEmail,
    setCountry,
    setDob,
    country,
    dob,
    email,
    setEmail,
    password,
    setPassword,
    firstName,
    setFirstName,
    lastName,
    setLastName,
    phoneNumber,
    setPhoneNumber,
    loading,
  } = useSignUp();

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
            <Link href="(routes)/login">Login</Link>
          </ThemedText>
        </ThemedText>
      </ThemedView>
      <KeyboardAvoidingView behavior="padding">
        <FormToSignup
          firstName={firstName}
          setFirstName={setFirstName}
          lastName={lastName}
          setLastName={setLastName}
          country={country}
          setCountry={setCountry}
          phoneNumber={phoneNumber}
          setPhoneNumber={setPhoneNumber}
          dob={dob}
          setDob={setDob}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
        />
      </KeyboardAvoidingView>
      <ThemedView center>
        <PrimaryButton
          disabled={
            loading ||
            !email ||
            !password ||
            !firstName ||
            !lastName ||
            !dob ||
            !phoneNumber ||
            !country
          }
          loading={loading}
          goTo="(routes)/systemAuth"
          goAction={() =>
            signUpWithEmail({
              email,
              password,
              firstName,
              lastName,
              dob,
              phoneNumber,
              country,
            })
          }
          bgColor="#ff9500c4"
          text="Registarse"
        />
      </ThemedView>
    </ThemedView>
  );
}
