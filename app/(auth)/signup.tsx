import React from "react";
import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";

export default function SignupScreen() {
  const router = useRouter();

  const handleSignup = () => {
    // Aquí deberías manejar la lógica de registro y establecer el usuario en el estado global o contexto
    console.log("Signup");
  };

  return (
    <ThemedView screenContainer>
      <ThemedText>Signup Screen</ThemedText>
      <Button title="Signup" onPress={handleSignup} />
      <Button title="Go to Login" onPress={() => router.push("/login")} />
    </ThemedView>
  );
}
