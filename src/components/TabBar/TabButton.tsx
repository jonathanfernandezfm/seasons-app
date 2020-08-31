import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableHighlight,
} from 'react-native';
import React, {ReactElement, useState, cloneElement} from 'react';

interface TabButtonProps {
  children: ReactElement;
  onPress: () => void;
  active: number;
  index: number;
}

export default ({children, active, index, onPress}: TabButtonProps) => {
  const isActive = active === index;
  return (
    <TouchableWithoutFeedback {...{onPress}} accessibilityRole="button">
      <View style={styles.tabButtonContainer}>
        {cloneElement(children, {active: isActive})}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  tabButtonContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
