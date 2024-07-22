import LogoE_Svg from '@/assets/svg/LogoE_Svg';
import PrimaryButton from '@/components/PrimaryButton';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Link } from 'expo-router';
import FormToRecoverAccount from './components/recoverAccount/FormToRecoverAccount';

interface recoverAccountProps {
}

const recoverAccount: React.FC<recoverAccountProps> = ({  }) => {

  return (
    <ThemedView screenContainer className="flex-1 justify-center gap-y-20">
      <ThemedView className='mb-10' center>
        <LogoE_Svg />
        <ThemedText className="mt-5" center type="title">
          {'Recover your \nAccount'}
        </ThemedText>
        <ThemedText className="" center type="small">
          Don't have an account?{' '}
          <ThemedText className="text-[#FF950F]" type="small">
            <Link href="/signup">Sign up</Link>
          </ThemedText>
        </ThemedText>
      </ThemedView>
      <FormToRecoverAccount />
      <ThemedView center>
        <PrimaryButton goTo="" bgColor="#ff9500c4" text="Recover" />
      </ThemedView>
    </ThemedView>
  );
};



export default recoverAccount;