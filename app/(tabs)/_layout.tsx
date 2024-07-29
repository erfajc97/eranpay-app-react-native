import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, ViewStyle } from 'react-native';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const tabBarStyle: ViewStyle = {
    backgroundColor: Colors[colorScheme ?? 'light'].background,
    paddingBottom: Platform.OS === 'android' ? 10 : 25,
    paddingTop: 2,
    borderTopColor: Colors[colorScheme ?? 'light'].border,
    borderTopWidth: 1,
  };

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarStyle: tabBarStyle,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? 'home' : 'home-outline'}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="qr"
        options={{
          title: 'QR',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? 'qr-code-sharp' : 'qr-code-outline'}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="moreServices"
        options={{
          title: 'More',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? 'color-filter-sharp' : 'color-filter-outline'}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
