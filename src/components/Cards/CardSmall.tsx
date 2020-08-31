import {StyleSheet, View, Text, ImageBackground, Image} from 'react-native';
import React from 'react';

interface CardPlatformProps {
  id: string;
  name: string;
  image: string;
  imagesmall: string;
}
interface CardProps {
  data: CardPlatformProps;
}

export default ({data}: CardProps) => {
  return (
    <View style={styles.card}>
      <ImageBackground
        source={{
          uri: data.imagesmall,
        }}
        style={styles.image}
        imageStyle={{borderRadius: 5}}></ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    height: 140,
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
    backgroundColor: 'rgba(0,0,0,0.5)',
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
