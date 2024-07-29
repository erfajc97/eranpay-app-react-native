import { View, type ViewProps, StyleProp, ViewStyle } from 'react-native';
import { useThemeColor } from '@/hooks/useThemeColor';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import useScreenSize from '@/constants/useScreenSize';
import { Platform } from 'react-native';

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
  className?: string;
  screenContainer?: boolean;
  center?: boolean;
};

export function ThemedView({
  className,
  style,
  lightColor,
  darkColor,
  screenContainer,
  center,
  ...otherProps
}: ThemedViewProps) {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    'background'
  );
  const insets = useSafeAreaInsets();
  const { width, height } = useScreenSize();

  const containerStyle: StyleProp<ViewStyle> = {
    paddingBottom:
      Platform.OS === 'android' && insets.bottom === 0 ? 20 : insets.bottom,
    paddingTop: insets.top,
    width: width,
    height: height,
    flex: 1,
  };

  const centerView = 'flex justify-center items-center';

  return (
    <View
      className={`${className} ${center && centerView}`}
      style={[{ backgroundColor }, style, screenContainer && containerStyle]}
      {...otherProps}
    />
  );
}
