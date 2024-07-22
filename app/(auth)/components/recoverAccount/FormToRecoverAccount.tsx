import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const FormToRecoverAccount: React.FC = () => {
  const [email, setEmail] = useState('');

  return (
    <View style={styles.container}>
      <View
        className="border-b-[1px] border-gray-300 rounded-lg "
        style={styles.inputContainer}
      >
        <Ionicons
          name="mail-outline"
          size={24}
          color="#FF950Fc1"
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="gray"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 18,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    marginBottom: 0,
    paddingHorizontal: 12,
    height: 50,
  },
  input: {
    flex: 1,
    color: 'black',
    fontSize: 16,
  },
  icon: {
    marginRight: 8,
  },
  eyeIconContainer: {
    marginLeft: 8,
  },
});

export default FormToRecoverAccount;
