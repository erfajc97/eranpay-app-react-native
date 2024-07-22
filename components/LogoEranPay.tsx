
import EranPayLogoDark from '@/assets/svg/EranPayLogoDark';
import EranPayLogoLight from '@/assets/svg/EranPayLogoLight';
import { useColorScheme } from 'react-native';


const LogoEranPay = () => {

  const colorScheme = useColorScheme();
  

  return <>{colorScheme === 'dark' ? <EranPayLogoDark /> : <EranPayLogoLight/>}</>;
};


export default LogoEranPay;