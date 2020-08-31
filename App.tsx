/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';
import { useFonts } from 'expo-font';
import * as Font from 'expo-font';

import TabBar from './src/components/TabBar/TabBar';
import ExplorePage from './src/pages/ExplorePage';
import BookmarksPage from './src/pages/BookmarksPage';
import SocialPage from './src/pages/SocialPage';
import ProfilePage from './src/pages/ProfilePage';

declare const global: {HermesInternal: null | {}};

const Tab = createBottomTabNavigator();

const App = () => {
  const [loaded] = useFonts({
    SFLight: require('./src/assets/fonts/SFProDisplay-Light.ttf'),
    SFMedium: require('./src/assets/fonts/SFProDisplay-Medium.ttf'),
    SFRegular: require('./src/assets/fonts/SFProDisplay-Regular.ttf'),
    SFSemiBold: require('./src/assets/fonts/SFProDisplay-Semibold.ttf'),
    SFThin: require('./src/assets/fonts/SFProDisplay-Thin.ttf'),
    SFUltraLight: require('./src/assets/fonts/SFProDisplay-UltraLight.ttf'),
  })

  if (!loaded) {
    return null;
  }
  
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.body}>
      <Tab.Navigator tabBar={props => <TabBar {...props}/>}>
        <Tab.Screen name="Explore" component={ExplorePage} />
        <Tab.Screen name="Bookmarks" component={BookmarksPage} />
        <Tab.Screen name="Social" component={SocialPage} />
        <Tab.Screen name="Profile" component={ProfilePage} />
      </Tab.Navigator>        
      </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
