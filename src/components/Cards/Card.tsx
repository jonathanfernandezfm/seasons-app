import {StyleSheet, View, Text, ImageBackground, Image} from 'react-native';
import React from 'react';

interface CardSeriesData {
  id: string;
  name: string;
  year: string;
  image: string;
  imdbrating: number;
  seen: boolean;
}
interface CardProps {
  data: CardSeriesData;
}

export default ({data}: CardProps) => {
  return (
    <View style={styles.card}>
      <ImageBackground
        source={{
          uri: data.image,
        }}
        style={styles.image}
        imageStyle={{borderRadius: 5}}>
        <View style={styles.bottomInformation}>
          <Text style={styles.text}>{data.name}</Text>
          <Text style={styles.textYear}>{data.year}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    height: 200,
    width: 140,
    borderRadius: 5,
    elevation: 3,
    marginRight: 15,
    marginBottom: 10,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
    overflow: 'hidden',
  },
  bottomInformation: {
    backgroundColor: 'rgba(0,0,0,0.65)',
    paddingLeft: 10,
    paddingBottom: 10,
    paddingTop: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  text: {
    color: 'white',
    fontSize: 14,
  },
  textYear: {
    color: '#cccccccc',
    fontSize: 10,
  },
});
