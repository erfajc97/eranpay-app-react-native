import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

interface ProfileUserScreenProps {
  // Define your prop types here
  exampleProp: string;
}

const ProfileUserScreen: React.FC<ProfileUserScreenProps> = ({ exampleProp }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs once when the component mounts
    console.log('ProfileUserScreen mounted');
    return () => {
      // This cleanup runs once when the component unmounts
      console.log('ProfileUserScreen unmounted');
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Count: {count}</Text>
      <Button title="Increase" onPress={() => setCount(count + 1)} />
      <Text style={styles.text}>exampleProp: {exampleProp}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
});

export default ProfileUserScreen;