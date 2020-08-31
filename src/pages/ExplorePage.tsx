import {View, SafeAreaView, Text, StyleSheet, FlatList, ScrollView} from 'react-native';
import React, {ReactElement, useState, cloneElement} from 'react';
import SearchBar from '../components/SearchBar/SearchBar';
import Title from '../components/Title/Title';
import Card from '../components/Cards/Card';
import {SERIES} from '../testing/Series';
import CardSmall from '../components/Cards/CardSmall';
import CardIconText from '../components/Cards/CardIconText';
import RigthArrowIcon from '../assets/icons/RigthArrowIcon';
import {PLATFORMS} from '../testing/Platforms';

export default () => {
  const normalCards = ({item}: any) => <Card data={item} />;
  const smallCards = ({item}: any) => <CardSmall data={item} />;

  return (
    <SafeAreaView>
      <SearchBar></SearchBar>
      <ScrollView>
        <View style={styles.searchBarBack} />
        <View style={styles.pageContainer}>
          <Title size={'xl'}>Explore</Title>
          <ScrollView
            style={styles.cardScrollContainer}
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            {SERIES.map((item: any, index) => {
              return <Card key={index} data={item}></Card>;
            })}
            <CardIconText icon={<RigthArrowIcon size={34} />} text={'More'} />
          </ScrollView>
          <Title size={'xl'}>Recent</Title>
          <ScrollView
            style={styles.cardScrollContainer}
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            {SERIES.map((item: any, index) => {
              return <Card key={index} data={item}></Card>;
            })}
            <CardIconText icon={<RigthArrowIcon size={34} />} text={'More'} />
          </ScrollView>
          <Title size={'l'}>Categories</Title>
          <FlatList
            data={PLATFORMS}
            renderItem={smallCards}
            keyExtractor={(item) => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={styles.cardScrollContainer}
          />
          <Title size={'l'}>Platforms</Title>
          <FlatList
            data={PLATFORMS}
            renderItem={smallCards}
            keyExtractor={(item) => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={styles.cardScrollContainer}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  searchBarBack: {
    height: 60,
  },
  pageContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    margin: 15,
    marginTop: 0,
  },
  cardScrollContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
  },
});
