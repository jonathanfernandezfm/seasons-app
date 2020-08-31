import {StyleSheet, View, Text, ImageBackground, Image} from 'react-native';
import React, {ReactElement} from 'react';
import {COLORS} from '../../Constants';

interface ListItemProps {
  icon: ReactElement;
  text: string;
}

export default ({icon, text}: ListItemProps) => {
  return (
    <View style={styles.listItem}>
      {icon}
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: 'white',
    height: 50,
    width: '100%',
    borderRadius: 5,
    elevation: 3,
    marginRight: 15,
    marginBottom: 10,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    borderStyle: 'solid',
    borderColor: COLORS.terciary,
    borderWidth: 2,
  },
  text: {
    fontSize: 18,
    fontFamily: 'SFRegular',
    marginLeft: 5,
  },
});
