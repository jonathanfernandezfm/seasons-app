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
      <Path d="M5 17H4a2 2 0 01-2-2V5a2 2 0 012-2h16a2 2 0 012 2v10a2 2 0 01-2 2h-1" />
      <Path d="M12 15l5 6H7l5-6z" />
    </Svg>
  );
};
