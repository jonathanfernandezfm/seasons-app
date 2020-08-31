import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconDefaultProps} from '../../Constants';

export default ({size}: IconDefaultProps) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round">
      <Path d="M5 12h14M12 5l7 7-7 7" />
    </Svg>
  );
};
