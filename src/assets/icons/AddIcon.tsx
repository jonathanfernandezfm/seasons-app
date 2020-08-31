import * as React from 'react';
import Svg, {Path, Circle} from 'react-native-svg';
import {IconDefaultProps} from '../../Constants';

export default ({size}: IconDefaultProps) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="black"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round">
      <Path d="M12 5v14M5 12h14" />
    </Svg>
  );
};
