import React from 'react';
import {ToastAndroid, Platform} from 'react-native';
import Toast from 'react-native-simple-toast';
const Alert = message => {
  if (Platform.OS === 'ios') {
    setTimeout(() => {
      Toast.showWithGravity(message, Toast.SHORT, Toast.BOTTOM);
    }, 700);
  } else {
    ToastAndroid.show(message, ToastAndroid.LONG);
  }
};
export default Alert;
