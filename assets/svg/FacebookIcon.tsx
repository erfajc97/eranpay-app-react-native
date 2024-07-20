import * as React from 'react';
import Svg, {
  SvgProps,
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
} from 'react-native-svg';
const FacebookIcon = (props: SvgProps) => (
  <Svg
    // xmlns="http://www.w3.org/2000/svg"
    width={props.width || 19}
    height={props.height || 19}
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        fill="url(#b)"
        d="M8.015 18.248C3.74 17.483.5 13.793.5 9.338c0-4.95 4.05-9 9-9s9 4.05 9 9c0 4.455-3.24 8.145-7.515 8.91l-.495-.405H8.51l-.495.405Z"
      />
      <Path
        fill="#fff"
        d="m13.01 11.858.405-2.52H11.03V7.583c0-.72.27-1.26 1.35-1.26h1.17V4.028c-.63-.09-1.35-.18-1.98-.18-2.07 0-3.51 1.26-3.51 3.51v1.98H5.81v2.52h2.25v6.345a8.286 8.286 0 0 0 2.97 0v-6.345h1.98Z"
      />
    </G>
    <Defs>
      <LinearGradient
        id="b"
        x1={9.5}
        x2={9.5}
        y1={17.712}
        y2={0.335}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#0062E0" />
        <Stop offset={1} stopColor="#19AFFF" />
      </LinearGradient>
      <ClipPath id="a">
        <Path fill="#fff" d="M.5.338h18v18H.5z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default FacebookIcon;
