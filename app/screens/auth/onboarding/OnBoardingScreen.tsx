import { Link } from 'expo-router';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';

import EranPayWalletSvg from '@/assets/svg/EranPayWalletSvg';
import PrimaryButton from '@/components/PrimaryButton';
import LogoEranPay from '@/components/LogoEranPay';

export default function OnBoardingScreen() {
  return (
    <ThemedView screenContainer className="flex justify-around">
      <ThemedView center>
        <EranPayWalletSvg />
        <LogoEranPay />
      </ThemedView>
      <ThemedView center>
        <ThemedText className="text-[20px]" center>
          {'Transfiere dinero de \n país a país.'}
        </ThemedText>
        <ThemedText center className="mt-4 text-[20px]">
          {'A la mejor tasa del \n mercado.'}
        </ThemedText>
        <ThemedText center className="mt-8 text-[20px]">
          {
            'Compra criptomonedas y o \nretíralas de tus casinos o \nagencias de trading.'
          }
        </ThemedText>
        <ThemedText center className="mt-8 text-[20px]">
          {'Nunca antes había sido \n tan fácil.'}
        </ThemedText>
      </ThemedView>
      <ThemedView center>
        <PrimaryButton
          goTo="(routes)/signup"
          bgColor="#ff9500c4"
          text="Crear cuenta"
        />
        <ThemedText type="link" center className="mt-2 text-[#FF950F] ">
          <Link href="(routes)/login">Ya tengo cuenta</Link>
        </ThemedText>
      </ThemedView>
    </ThemedView>
  );
}
