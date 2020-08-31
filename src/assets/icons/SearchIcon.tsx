import * as React from 'react';
import Svg, {Path, Circle} from 'react-native-svg';
import {IconProps, ICONSIZE, COLORS} from '../../Constants';

export default ({size, active}: IconProps) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={COLORS.black}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round">
      <Circle cx={11} cy={11} r={8} />
      <Path d="M21 21l-4.35-4.35" />
    </Svg>
  );
};
