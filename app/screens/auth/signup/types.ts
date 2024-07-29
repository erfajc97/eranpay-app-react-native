export interface FormToSignUpProps {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  firstName: string;
  setFirstName: React.Dispatch<React.SetStateAction<string>>;
  lastName: string;
  setLastName: React.Dispatch<React.SetStateAction<string>>;
  country: string;
  setCountry: React.Dispatch<React.SetStateAction<string>>;
  phoneNumber: string;
  setPhoneNumber: React.Dispatch<React.SetStateAction<string>>;
  dob: Date;
  setDob: React.Dispatch<React.SetStateAction<Date>>;
}

export interface signUpWithEmailProps {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  dob: Date;
  phoneNumber: string;
  country: string;
}
