import React, { useState, useEffect } from 'react';
import { View, Alert, useColorScheme, Platform } from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';
import CustomKeyboard from '@/components/CustomKeyboard';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import LogoE_Svg from '@/assets/svg/LogoE_Svg';

const PinScreen: React.FC = () => {
  const [pin, setPin] = useState<string>('');
  const [biometricType, setBiometricType] = useState<string>('fingerprint');
  const colorScheme = useColorScheme();

  useEffect(() => {
    const checkBiometrics = async () => {
      const types =
        await LocalAuthentication.supportedAuthenticationTypesAsync();
      if (
        types.includes(
          LocalAuthentication.AuthenticationType.FACIAL_RECOGNITION
        )
      ) {
        setBiometricType('face');
      } else if (
        types.includes(LocalAuthentication.AuthenticationType.FINGERPRINT)
      ) {
        setBiometricType('fingerprint');
      }
    };

    checkBiometrics();
  }, []);

  const handleKeyPress = (key: string) => {
    if (key === 'backspace') {
      setPin(pin.slice(0, -1));
    } else if (pin.length < 4) {
      setPin(pin + key);
    }
  };

  const handleBiometricPress = async () => {
    const hasHardware = await LocalAuthentication.hasHardwareAsync();
    if (!hasHardware) {
      Alert.alert(
        'Error',
        'Biometric authentication is not available on this device'
      );
      return;
    }

    const isEnrolled = await LocalAuthentication.isEnrolledAsync();
    if (!isEnrolled) {
      Alert.alert('Error', 'No biometrics enrolled on this device');
      return;
    }

    const result = await LocalAuthentication.authenticateAsync();
    if (result.success) {
      Alert.alert('Success', 'Authenticated successfully');
      // Perform the login action
    } else {
      Alert.alert('Error', 'Authentication failed');
    }
  };

  return (
    <ThemedView screenContainer className="flex justify-around">
      <ThemedView center>
        <LogoE_Svg />
        <ThemedText type="title" center className="mt-5">
          Ingrese tu clave
        </ThemedText>
      </ThemedView>
      <View className="flex-row justify-center items-center mb-5">
        {[...Array(4)].map((_, index) => (
          <View
            key={index}
            className={`w-16 h-16 mx-2 bg-[#DFDFDF20] border-2 flex justify-center items-center rounded-lg ${
              pin.length > index
                ? colorScheme === 'dark'
                  ? 'border-[#DFDFDF20]'
                  : 'border-gray-400'
                : 'border-gray-400'
            }`}
          >
            {pin.length > index && (
              <ThemedText className="text-4xl  text-center">•</ThemedText>
            )}
          </View>
        ))}
      </View>
      <CustomKeyboard
        onKeyPress={handleKeyPress}
        onBiometricPress={handleBiometricPress}
        disableInput={pin.length >= 4}
        biometricType={biometricType}
      />
    </ThemedView>
  );
};

export default PinScreen;
