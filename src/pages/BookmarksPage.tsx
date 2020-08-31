import {View, SafeAreaView, Text, StyleSheet, ScrollView} from 'react-native';
import React, {ReactElement, useState, cloneElement} from 'react';
import Title from '../components/Title/Title';
import ListItem from '../components/List/ListItem';
import ListItemIconText from '../components/List/ListItemIconText';
import AddIcon from '../assets/icons/AddIcon';
import EyeIcon from '../assets/icons/EyeIcon';
import TickIcon from '../assets/icons/TickIcon';
import BookmarkIcon from '../assets/icons/BookmarkIcon';
import {LISTS} from '../testing/Lists';

export default () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.pageContainer}>
          <Title size={'xl'}>Your series</Title>
          <Title size={'l'}>Lists</Title>
          <View style={styles.listContainer}>
            <ListItem icon={<EyeIcon size={20} />} name={'Pending'} />
            <ListItem icon={<BookmarkIcon size={20} />} name={'Following'} />
            <ListItem icon={<TickIcon size={20} />} name={'Watched'} />
            {LISTS.map((item: any, index) => {
              return <ListItem key={index} name={item.name} />;
            })}
            <ListItemIconText icon={<AddIcon size={20} />} text={'Add'} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    margin: 15,
    marginTop: 0,
  },
  listContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 10,
  },
});
