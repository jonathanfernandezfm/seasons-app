import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
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
      <Path d="M4 9h16M4 15h16M10 3L8 21M16 3l-2 18" />
    </Svg>
  );
};
