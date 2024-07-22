import React, { useState, ReactNode } from 'react';
import {
  Pressable,
  StyleProp,
  ViewStyle,
  Animated,
  View,
  StyleSheet,
} from 'react-native';
import { ThemedText } from './ThemedText';
import { useRouter } from 'expo-router';
import { useThemeColor } from '@/hooks/useThemeColor';

interface PrimaryButtonProps {
  lightColor?: string;
  darkColor?: string;
  goTo?: string;
  bgColor?: string;
  bgIsPressed?: string;
  text?: string;
  className?: string;
  colorText?: string;
  goAction?: () => void;
  typeText?:
    | 'default'
    | 'title'
    | 'defaultSemiBold'
    | 'subtitle'
    | 'link'
    | 'small';
  Icon?: ReactNode;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  goTo,
  goAction,
  lightColor,
  darkColor,
  bgColor = '#ff9500c4',
  bgIsPressed = '#ff9500a1',
  text = 'Primary Button',
  className,
  colorText = '#fff',
  typeText,
  Icon,
}) => {
  const [isPressed, setIsPressed] = useState(false);
  const router = useRouter();
  const [scaleValue] = useState(new Animated.Value(1));
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  const handlePress = () => {
    if (goTo) {
      router.push(goTo);
    }
    if (goAction) {
      goAction();
    }
  };

  const handlePressIn = () => {
    setIsPressed(true);
    Animated.spring(scaleValue, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    setIsPressed(false);
    Animated.spring(scaleValue, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  const animatedStyle = {
    transform: [{ scale: scaleValue }],
    width: '91.5%',
    borderRadius: 8,
  };

  return (
    <Animated.View
      className={'shadow-lg shadow-[#1c1c1c]' + className}
      style={animatedStyle as StyleProp<ViewStyle>}
    >
      <Pressable
        style={
          {
            backgroundColor: isPressed ? bgIsPressed : bgColor,
            width: '100%',
            height: 50,
            borderRadius: 8,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          } as StyleProp<ViewStyle>
        }
        onPress={handlePress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
      >
        {Icon && <View style={styles.iconContainer}>{Icon}</View>}
        <ThemedText
          style={{ color: colorText ? colorText : color }}
          type={typeText ? typeText : 'defaultSemiBold'}
          className="text-center my-auto mx-0"
        >
          {text}
        </ThemedText>
      </Pressable>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    marginRight: 8, // Espacio entre el icono y el texto
  },
});

export default PrimaryButton;
