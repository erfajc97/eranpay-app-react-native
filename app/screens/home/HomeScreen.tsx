import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

import PrimaryButton from '@/components/PrimaryButton';
import useHome from './hooks/useHome';

export default function HomeScreen() {
  const { handleSignOut } = useHome();
  return (
    <ThemedView screenContainer className="flex-1 justify-between">
      <ThemedText className="mt-3" center type="title">
        Home
      </ThemedText>
      <ThemedView center>
        <PrimaryButton text="Sign Out" goAction={handleSignOut} />
      </ThemedView>
    </ThemedView>
  );
}
