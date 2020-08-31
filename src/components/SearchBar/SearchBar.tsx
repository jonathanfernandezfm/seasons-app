import {View, StyleSheet} from 'react-native';
import React from 'react';
import SearchIcon from '../../assets/icons/SearchIcon';

export default () => {
  return (
    <View style={styles.searchBarContainer}>
      <SearchIcon size={24}></SearchIcon>
    </View>
  );
};

const styles = StyleSheet.create({
  searchBarContainer: {
    position: 'absolute',
    left: 15,
    right: 15,
    top: 15,
    elevation: 8,
    backgroundColor: 'white',
    borderRadius: 4,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
});
