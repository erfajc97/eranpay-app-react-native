import React, { useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

interface FormToLoginProps {
  token: string;
  setToken: React.Dispatch<React.SetStateAction<string>>;
}

const FormToLogin: React.FC<FormToLoginProps> = ({ token, setToken }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  const handleDone = () => {
    Keyboard.dismiss();
  };

  return (
    <View style={styles.container}>
      <View
        className="border-b-[1px] border-gray-300 rounded-lg rounded-b-none"
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
          value={token}
          onChangeText={setToken}
          keyboardType="email-address"
          autoCapitalize="none"
          returnKeyType="done"
          onSubmitEditing={handleDone}
        />
      </View>
      <View className="rounded-lg rounded-t-none" style={styles.inputContainer}>
        <Ionicons
          name="lock-closed-outline"
          size={24}
          color="#FF950Fc1"
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="gray"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!isPasswordVisible}
          autoCapitalize="none"
          keyboardType="default"
          returnKeyType="done"
          onSubmitEditing={handleDone}
        />
        <TouchableOpacity
          onPress={togglePasswordVisibility}
          style={styles.eyeIconContainer}
        >
          <Ionicons
            name={isPasswordVisible ? 'eye-outline' : 'eye-off-outline'}
            size={24}
            color="gray"
          />
        </TouchableOpacity>
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

export default FormToLogin;
