import {StyleSheet, View, Text, ImageBackground, Image} from 'react-native';
import React, {ReactElement} from 'react';
import EyeIcon from '../../assets/icons/EyeIcon';
import ListIcon from '../../assets/icons/ListIcon';

interface ListItemProps {
  icon?: ReactElement;
  name: string;
}

export default ({icon = <ListIcon size={20} />, name}: ListItemProps) => {
  return (
    <View style={styles.listItem}>
      {icon}
      <Text style={styles.text}>{name}</Text>
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
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 15,
  },
  text: {
    fontSize: 18,
    fontFamily: 'SFRegular',
    marginLeft: 10,
  },
});
