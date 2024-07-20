import * as React from 'react';
import Svg, {
  SvgProps,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg';
const EranPayLoginSvg = (props: SvgProps) => (
  <Svg
    // xmlns="http://www.w3.org/2000/svg"
    width={200}
    height={200}
    fill="none"
    {...props}
  >
    <Path
      stroke="#FF9500"
      strokeWidth={1.5}
      d="M158.333 166.667H41.667C32.462 166.667 25 159.205 25 150V75c0-9.205 7.462-16.667 16.667-16.667h116.666C167.538 58.333 175 65.795 175 75v75c0 9.205-7.462 16.667-16.667 16.667ZM58.334 58.333V30a5 5 0 0 1 5-5h73.333a5 5 0 0 1 5 5v28.333M83.334 25v33.333M100 25v33.333"
    />
    <Path
      fill="#FF9500"
      stroke="#FF9500"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M137.5 116.667a4.167 4.167 0 1 1 0-8.335 4.167 4.167 0 0 1 0 8.335Z"
    />
    <Path
      fill="#FF9500"
      d="M103.225 120.855c-5.622 9.07-10.924 8.496-15.498 7.581-5.915-1.185-6.212-7.237-1.914-7.707 4.298-.469 7.513-1.641 7.513-1.641 9.747-2.056 16.063-8.352 14.111-14.06-1.953-5.71-11.437-8.671-21.183-6.616-6.72 1.418-11.808 4.851-13.681 8.719v-.002l-.013.029c-.16.335-.299.672-.41 1.012-5.7 14.911 7.358 25.058 20.53 25.222 13.478.168 17.487-12.786 17.487-12.786l-6.942.249Zm-25.787-11.359c-.265-3.527 4.698-6.434 11.083-6.492 6.385-.058 11.777 2.754 12.041 6.281.265 3.526-4.697 6.433-11.083 6.491-6.385.058-11.777-2.753-12.041-6.28Z"
    />
    <Path
      fill="url(#a)"
      d="M107.437 105.028c-1.953-5.71-11.437-8.671-21.183-6.615-.281.06-.56.123-.835.19-.027.018-5.236 3.595-7.27 8.414 1.577-2.316 5.572-3.969 10.371-4.012 6.386-.059 11.777 2.754 12.042 6.28.218 2.901-3.103 5.382-7.843 6.203 3.475-.443 11.414-1.296 14.311-5.168.823-1.727 1.007-3.537.407-5.292Z"
    />
    <Path
      fill="url(#b)"
      d="M89.75 92.96c.591-.013 1.066-.052 1.372-.107h.002a20.2 20.2 0 0 1-1.373.107Z"
    />
    <Path fill="url(#c)" d="M85.057 98.723h-.004l.012.008-.008-.008Z" />
    <Path
      fill="url(#d)"
      d="M103.393 130.011c5.034-3.789 6.774-9.405 6.774-9.405l-6.941.249c-5.623 9.07-10.924 8.496-15.499 7.581a8.283 8.283 0 0 1-1.296-.371c3.364 1.741 10.661 4.735 16.962 1.946Z"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={87.161}
        x2={112.67}
        y1={105.458}
        y2={109.956}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FF9602" />
        <Stop offset={0.503} stopColor="#9A5B03" />
        <Stop offset={1} stopColor="#613902" />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={89.781}
        x2={91.095}
        y1={92.791}
        y2={93.022}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#007E3D" />
        <Stop offset={0.503} stopColor="#55B848" />
        <Stop offset={1} stopColor="#A2CC39" />
      </LinearGradient>
      <LinearGradient
        id="c"
        x1={85.052}
        x2={85.066}
        y1={98.725}
        y2={98.728}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#007E3D" />
        <Stop offset={0.503} stopColor="#55B848" />
        <Stop offset={1} stopColor="#A2CC39" />
      </LinearGradient>
      <LinearGradient
        id="d"
        x1={95.679}
        x2={109.649}
        y1={128.453}
        y2={113.935}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FF9602" />
        <Stop offset={0.503} stopColor="#B46900" />
        <Stop offset={1} stopColor="#5F3803" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default EranPayLoginSvg;
