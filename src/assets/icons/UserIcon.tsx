import * as React from 'react';
import Svg, {Path, Circle} from 'react-native-svg';
import {IconProps, ICONSIZE, COLORS} from '../../Constants';

export default ({size, active}: IconProps) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={active ? COLORS.secondary : 'none'}
      stroke={active ? COLORS.primary : COLORS.black}
      strokeWidth={active ? 3 : 2}
      strokeLinecap="round"
      strokeLinejoin="round">
      <Path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
      <Circle cx={12} cy={7} r={4} />
    </Svg>
  );
};
