import React, { useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Keyboard,
  Platform,
  Text,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import RNPickerSelect from 'react-native-picker-select';
import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';

const FormToSignup: React.FC = () => {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [dob, setDob] = useState<Date>(new Date());
  const [showDatePicker, setShowDatePicker] = useState<boolean>(false);
  const [country, setCountry] = useState<string>('EC');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleDateChange = (
    event: DateTimePickerEvent,
    selectedDate?: Date
  ) => {
    const currentDate = selectedDate || dob;
    setShowDatePicker(false);
    setDob(currentDate);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Ionicons
          name="person-outline"
          size={24}
          color="#FF950Fc1"
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          placeholder="Nombre"
          placeholderTextColor="gray"
          value={firstName}
          onChangeText={setFirstName}
          returnKeyType="done"
          onSubmitEditing={Keyboard.dismiss}
        />
      </View>
      <View style={styles.inputContainer}>
        <Ionicons
          name="person-outline"
          size={24}
          color="#FF950Fc1"
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          placeholder="Apellido"
          placeholderTextColor="gray"
          value={lastName}
          onChangeText={setLastName}
          returnKeyType="done"
          onSubmitEditing={Keyboard.dismiss}
        />
      </View>
      <View style={styles.inputContainer}>
        <Ionicons
          name="calendar-outline"
          size={24}
          color="#FF950Fc1"
          style={styles.icon}
        />
        <TouchableOpacity
          style={styles.dateInput}
          onPress={() => setShowDatePicker(true)}
        >
          <Text style={styles.dateText}>{dob.toLocaleDateString()}</Text>
        </TouchableOpacity>
      </View>
      {showDatePicker && (
        <DateTimePicker
          value={dob}
          mode="date"
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          onChange={handleDateChange}
          style={{ width: '100%' }} // Ajustar el tamaño en iOS para evitar el botón adicional
        />
      )}
      <View style={styles.rowContainer}>
        <View style={styles.countryPickerContainer}>
          <RNPickerSelect
            onValueChange={value => setCountry(value)}
            items={[
              { label: 'Ecuador', value: 'EC' },
              { label: 'United States', value: 'US' },
              { label: 'Argentina', value: 'AR' },
              // Agrega más opciones de países aquí
            ]}
            style={pickerSelectStyles}
            value={country}
            useNativeAndroidPickerStyle={false}
            placeholder={{ label: 'País', value: null }}
            Icon={() => {
              return <Ionicons name="chevron-down" size={24} color="gray" />;
            }}
          />
        </View>
        <View style={[styles.inputContainer, styles.phoneNumberContainer]}>
          <TextInput
            style={styles.input}
            placeholder="Número de teléfono"
            placeholderTextColor="gray"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            keyboardType="phone-pad"
            returnKeyType="done"
            onSubmitEditing={Keyboard.dismiss}
          />
        </View>
      </View>
      <View style={styles.inputContainer}>
        <Ionicons
          name="lock-closed-outline"
          size={24}
          color="#FF950Fc1"
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          placeholderTextColor="gray"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!isPasswordVisible}
          autoCapitalize="none"
          returnKeyType="done"
          onSubmitEditing={Keyboard.dismiss}
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
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 12,
    height: 50,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  countryPickerContainer: {
    flex: 1,
    marginRight: 8,
    backgroundColor: 'white',
    height: 50,
    borderRadius: 8,
  },
  phoneNumberContainer: {
    flex: 2,
  },
  input: {
    flex: 1,
    color: 'black',
    fontSize: 16,
  },
  icon: {
    marginRight: 8,
  },
  dateInput: {
    flex: 1,
    paddingVertical: 4,
  },
  dateText: {
    flex: 1,
    color: 'black',
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 0,
  },
  eyeIconContainer: {
    marginLeft: 8,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 14,
    paddingHorizontal: 9,
    borderWidth: 0,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 9,
    borderWidth: 0,
    borderColor: 'gray',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  iconContainer: {
    top: 10,
    right: 12,
  },
});

export default FormToSignup;
