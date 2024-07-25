import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

import AsyncStorage from '@react-native-async-storage/async-storage';
import PrimaryButton from '@/components/PrimaryButton';
import { useAppDispatch } from '@/app/store/hooks/store';
import { signOutThunk } from '@/app/store/auth/thunk';

export default function HomeScreen() {
  // console.log('HOME SCREEN');
  const dispatch = useAppDispatch();
  const handleSignOut = async () => {
    await AsyncStorage.removeItem('@token');
    dispatch(signOutThunk());
  };
  return (
    <ThemedView screenContainer className="flex-1 justify-between">
      <ThemedText center type="title">
        Home
      </ThemedText>
      <ThemedView center>
        <PrimaryButton text="Sign Out" goAction={handleSignOut} />
      </ThemedView>
    </ThemedView>
  );
}
