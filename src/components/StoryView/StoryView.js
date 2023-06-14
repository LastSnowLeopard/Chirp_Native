import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import {IMAGEBASEURL} from '../../config/api/HttpUtils';
import SoundPlayer from 'react-native-sound-player';
import styles from './styles';
import {COLORS, FONTS, H, IMAGES, W} from '../../constants/StyleCommon';
const StoryView = props => {
  const {
    media_url,
    thumb_nail_url,
    background_id,
    music_url,
    profile_image_url,
    full_name,
    text_content,
  } = props?.route?.params?.item;

  useEffect(() => {
    if (music_url !== '' && music_url !== 'https' && music_url !== 'null') {
      SoundPlayer.resume();
      SoundPlayer.playUrl(music_url);
    }
  }, []);

  return (
    <ImageBackground
      resizeMode={'contain'}
      style={{
        width: W(100),
        height: H(100),
        backgroundColor: COLORS.LIGHTGREY,
      }}
      source={{
        uri:
          background_id == ''
            ? IMAGEBASEURL + media_url
            : IMAGEBASEURL + thumb_nail_url,
      }}>
      <TouchableOpacity
        style={styles.crossImgbtn}
        onPress={() => {
          props.navigation.goBack(), SoundPlayer.stop();
        }}>
        <Image
          resizeMode={'contain'}
          style={styles.crossImg}
          source={IMAGES.CROSSICON}
        />
      </TouchableOpacity>
      <View style={styles.storyCotnier}>
        <Image
          resizeMode={'cover'}
          style={styles.profileImg}
          source={{uri: IMAGEBASEURL + profile_image_url}}
        />
        <Text style={styles.nameTxt}>{full_name}</Text>
      </View>
      <View
        style={{
          position: 'absolute',
          bottom: H(6),
          alignSelf: 'center',
          width: '95%',
        }}>
        <Text
          style={{
            color: COLORS.PRIMARY,
            fontFamily: FONTS.MEDIUM,
            textAlign: 'center',
            alignSelf: 'center',
          }}>
          {text_content}
        </Text>
      </View>
    </ImageBackground>
  );
};

export default StoryView;
