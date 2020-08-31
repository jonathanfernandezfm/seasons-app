import {StyleSheet, View, Text} from 'react-native';
import React from 'react';
import {TITLE_SIZES} from '../../Constants';

interface TitleProps {
  children: string;
  size: 's' | 'm' | 'l' | 'xl';
  color?: string;
}

export default ({children, size, color}: TitleProps) => {
  return (
    <Text
      style={{
        fontSize: TITLE_SIZES[size],
        color: color ? color : 'black',
        ...styles.title,
      }}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  title: {
    marginTop: 20,
    fontFamily: 'SFSemiBold',
  },
});
