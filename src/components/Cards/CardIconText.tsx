import {StyleSheet, View, Text, ImageBackground, Image} from 'react-native';
import React, {ReactElement} from 'react';
import RigthArrowIcon from '../../assets/icons/RigthArrowIcon';

interface CardMoreProps {
  icon: ReactElement;
  text: string;
}

export default ({icon, text}: CardMoreProps) => {
  return (
    <View style={styles.card}>
      {icon}
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#969696',
    height: 200,
    width: 140,
    borderRadius: 5,
    elevation: 3,
    marginRight: 15,
    marginBottom: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'SFSemiBold',
  },
});
