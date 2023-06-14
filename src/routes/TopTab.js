import React from 'react';
import {Image, Platform} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {COLORS, H, IMAGES, STYLESHEET, W} from '../constants/StyleCommon';
import Notifcation from '../screens/Notifcation/Notifcation';
import Profile from '../screens/Profile/Profile';
import Friends from '../screens/Friends/Friends';
import Video from '../screens/Video/Video';
import Home from '../screens/Home/Home';
import Menu from '../screens/Menu/Menu';
import {
  FRIENDS,
  FRIENDSLIST,
  HOME,
  MENU,
  NOTIFCATION,
  PROFILE,
  VIDEO,
} from '../constants/Navigation';
import FrinedList from '../screens/FriendsList/FriendsList';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName={HOME}
      screenOptions={{
        headerShown: false,
        tabBarStyle: {height: H(12)},
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <Image
                style={styles.iconStyle}
                resizeMode={'contain'}
                source={IMAGES.ACTIVEHOME}
              />
            ) : (
              <Image
                style={styles.iconStyle}
                resizeMode={'contain'}
                source={IMAGES.HOMEACTIVE}
              />
            ),
        }}
        name={HOME}
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <Image
                style={styles.iconStyle}
                resizeMode={'contain'}
                source={IMAGES.ACTIVEFRIENDS}
              />
            ) : (
              <Image
                style={styles.iconStyle}
                resizeMode={'contain'}
                source={IMAGES.FRIENDSACTIVE}
              />
            ),
        }}
        name={FRIENDSLIST}
        component={FrinedList}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <Image
                style={styles.iconStyle}
                resizeMode={'contain'}
                source={IMAGES.ACTIVEPROFILE}
              />
            ) : (
              <Image
                style={styles.iconStyle}
                resizeMode={'contain'}
                source={IMAGES.LAYERS}
              />
            ),
        }}
        name={PROFILE}
        component={Profile}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <Image
                style={[styles.iconStyle, {height: H(4.5), width: W(4.5)}]}
                resizeMode={'contain'}
                source={IMAGES.ACTIVENOTIFCATION}
              />
            ) : (
              <Image
                style={[styles.iconStyle, {height: H(4.5), width: W(4.5)}]}
                resizeMode={'contain'}
                source={IMAGES.NOTIFCATIONACTIVE}
              />
            ),
        }}
        name={NOTIFCATION}
        component={Notifcation}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <Image
                style={[styles.iconStyle, {height: H(4.5), width: W(4.5)}]}
                resizeMode={'contain'}
                source={IMAGES.MENU}
              />
            ) : (
              <Image
                style={[styles.iconStyle, {height: H(4.5), width: W(4.5)}]}
                resizeMode={'contain'}
                source={IMAGES.MENU}
              />
            ),
        }}
        name={MENU}
        component={Menu}
      />
    </Tab.Navigator>
  );
};

const styles = STYLESHEET.create({
  iconStyle: {
    height: H(5.5),
    width: W(5.5),
  },
});

export default Tabs;
