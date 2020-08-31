import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {ReactElement, useState, cloneElement} from 'react';
import ExploreIcon from '../../assets/icons/ExploreIcon';
import TabButton from './TabButton';
import UserIcon from '../../assets/icons/UserIcon';
import SocialIcon from '../../assets/icons/SocialIcon';
import BookmarkIcon from '../../assets/icons/BookmarkIcon';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {ICONSIZE} from '../../Constants';

interface TabButton {
  route: string;
  icon: ReactElement;
}

const tabs: TabButton[] = [
  {
    route: 'Explore',
    icon: <ExploreIcon size={ICONSIZE} />,
  },
  {
    route: 'Bookmarks',
    icon: <BookmarkIcon size={ICONSIZE} />,
  },
  {
    route: 'Social',
    icon: <SocialIcon size={ICONSIZE} />,
  },
  {
    route: 'Profile',
    icon: <UserIcon size={ICONSIZE} />,
  },
];

export default ({state, descriptors, navigation}: BottomTabBarProps) => {
  const [active, setActive] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.tabs}>
        {tabs.map(({route, icon}: TabButton, index) => {
          return (
            <View key={index} style={styles.tabButtonContainer}>
              <TabButton
                onPress={() => {
                  setActive(index);
                  navigation.navigate(route);
                }}
                {...{active, index}}>
                {icon}
              </TabButton>
            </View>
          );
        })}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    elevation: 5,
  },
  tabs: {
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row',
    height: 60,
  },
  tabButtonContainer: {
    flex: 1,
  },
});
