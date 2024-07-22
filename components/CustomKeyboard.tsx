import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { ThemedText } from './ThemedText';
import { ThemedView } from './ThemedView';
import { useThemeColor } from '@/hooks/useThemeColor';

interface CustomKeyboardProps {
  onKeyPress: (key: string) => void;
  onBiometricPress: () => void;
  disableInput: boolean;
  lightColor?: string;
  darkColor?: string;
  biometricType: string;
}

const CustomKeyboard: React.FC<CustomKeyboardProps> = ({
  onKeyPress,
  onBiometricPress,
  disableInput,
  lightColor,
  darkColor,
  biometricType,
}) => {
  const keys = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
    [biometricType, '0', '←'],
  ];
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return (
    <ThemedView className="items-center justify-center">
      {keys.map((row, rowIndex) => (
        <View key={rowIndex} className="flex-row justify-center mb-2">
          {row.map((key, keyIndex) => (
            <TouchableOpacity
              key={keyIndex}
              className="w-20 h-20 justify-center items-center mx-5 my-2"
              onPress={() =>
                key === '←'
                  ? onKeyPress('backspace')
                  : key === 'fingerprint' || key === 'face'
                    ? onBiometricPress()
                    : onKeyPress(key)
              }
              disabled={
                disableInput &&
                key !== '←' &&
                key !== 'fingerprint' &&
                key !== 'face'
              }
            >
              {key === '←' ? (
                <Ionicons name="backspace-outline" size={24} color={color} />
              ) : key === 'fingerprint' || key === 'face' ? (
                <Ionicons
                  name={
                    key === 'face' ? 'eye-off-sharp' : 'finger-print-outline'
                  }
                  size={24}
                  color={color}
                />
              ) : (
                <ThemedText className="text-2xl">{key}</ThemedText>
              )}
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </ThemedView>
  );
};

export default CustomKeyboard;

