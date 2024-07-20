import * as React from 'react';
import Svg, {
  SvgProps,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg';
const LogoE_Svg = (props: SvgProps) => (
  <Svg
    // xmlns="http://www.w3.org/2000/svg"
    width={47}
    height={47}
    fill="none"
    {...props}
  >
    <Path
      fill="#FF9500"
      d="M35.556 30.855c-5.622 9.07-10.924 8.496-15.498 7.58-5.916-1.184-6.212-7.236-1.914-7.706 4.298-.469 7.513-1.641 7.513-1.641 9.746-2.056 16.063-8.352 14.11-14.06-1.953-5.71-11.436-8.671-21.182-6.615-6.72 1.417-11.809 4.85-13.682 8.718v-.002l-.012.03c-.16.334-.299.671-.41 1.011-5.7 14.911 7.358 25.058 20.53 25.222 13.478.168 17.486-12.786 17.486-12.786l-6.941.25ZM9.768 19.495c-.265-3.526 4.698-6.433 11.083-6.49 6.386-.06 11.777 2.753 12.042 6.28.265 3.526-4.698 6.433-11.083 6.49-6.385.06-11.777-2.752-12.042-6.28Z"
    />
    <Path
      fill="url(#a)"
      d="M39.767 15.028c-1.953-5.71-11.436-8.671-21.182-6.615-.282.06-.56.123-.835.19-.027.018-5.237 3.595-7.27 8.414 1.576-2.316 5.572-3.969 10.371-4.012 6.386-.059 11.777 2.754 12.041 6.28.218 2.901-3.103 5.382-7.842 6.203 3.474-.443 11.414-1.296 14.31-5.168.824-1.727 1.007-3.537.407-5.292Z"
    />
    <Path
      fill="url(#b)"
      d="M22.081 2.96c.59-.013 1.065-.052 1.372-.107h.002c-.448.05-.906.087-1.374.107Z"
    />
    <Path fill="url(#c)" d="M17.387 8.723h-.004a.563.563 0 0 0 .004 0Z" />
    <Path
      fill="url(#d)"
      d="M35.723 40.011c5.035-3.789 6.774-9.405 6.774-9.405l-6.94.25c-5.623 9.07-10.925 8.495-15.5 7.58a8.332 8.332 0 0 1-1.295-.37c3.363 1.74 10.66 4.734 16.961 1.945Z"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={19.492}
        x2={45}
        y1={15.458}
        y2={19.956}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FF9602" />
        <Stop offset={0.503} stopColor="#9A5B03" />
        <Stop offset={1} stopColor="#613902" />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={22.111}
        x2={23.425}
        y1={2.791}
        y2={3.023}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#007E3D" />
        <Stop offset={0.503} stopColor="#55B848" />
        <Stop offset={1} stopColor="#A2CC39" />
      </LinearGradient>
      <LinearGradient
        id="c"
        x1={17.383}
        x2={17.396}
        y1={8.725}
        y2={8.728}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#007E3D" />
        <Stop offset={0.503} stopColor="#55B848" />
        <Stop offset={1} stopColor="#A2CC39" />
      </LinearGradient>
      <LinearGradient
        id="d"
        x1={28.01}
        x2={41.98}
        y1={38.453}
        y2={23.935}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FF9602" />
        <Stop offset={0.503} stopColor="#B46900" />
        <Stop offset={1} stopColor="#5F3803" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default LogoE_Svg;
