import { View, Text, ActivityIndicator } from 'react-native';
import React from 'react';
import { useThemeColor } from '@/hooks/useThemeColor';

interface LoaderProps {
  size?: 'small' | 'large';
  color?: string;
  lightColor?: string;
  darkColor?: string;
}
const Loader: React.FC<LoaderProps> = ({
  size = 'large',
  color = '#fff',
  lightColor = '',
  darkColor = '',
}) => {
  const colorTheme = useThemeColor(
    { light: lightColor, dark: darkColor },
    'text'
  );
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size={size} color={color ? color : colorTheme} />
    </View>
  );
};

export default Loader;
