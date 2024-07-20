import { useWindowDimensions } from "react-native"
const useScreenSize = () => {

const { height, width } = useWindowDimensions()

const isDeskTop = width > 768
  return {
    height,
    width,
    isDeskTop
  }
};

export default useScreenSize;