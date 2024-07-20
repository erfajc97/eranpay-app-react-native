
import { useNavigation } from "expo-router";
import { useEffect } from "react";
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { HelloWave } from './../../components/HelloWave';
import { StyleSheet } from "react-native";
const HomeScreen = () => {
  const navigation = useNavigation();
  const HeaderNavigation = () => {
    return (
      <ThemedView style={styles.containerHeader}>
        <ThemedText type="title">Jaely!</ThemedText>
      </ThemedView>
    );
  };

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Home",
      header: () => <HeaderNavigation />,
    });
  }, [navigation]);
  return (
    <ThemedView style={styles.titleContainer}>
      <ThemedText type="title">Jaely!</ThemedText>
      <HelloWave />
    </ThemedView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: "#202020",
    height: 100,
  },
  containerHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: "#202020",
    height: 80,
    width: "100%",
  },
});
