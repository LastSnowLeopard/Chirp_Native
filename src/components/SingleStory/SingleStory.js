import {View, Text, Image, TouchableOpacity} from 'react-native';
import {IMAGES, W, H} from '../../constants/StyleCommon';

import React, {useState, useRef} from 'react';
import {ALLSTORIES} from '../../constants/Navigation';
import styles from './Styles';
import {IMAGEBASEURL} from '../../config/api/HttpUtils';
const SingleStory = ({item, onPress}) => {
  const {
    profile_image_url,
    full_name,
    music_url,
    thumb_nail_url,
    media_url,
    background_id,
  } = item;
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.9}
      style={styles.mainContiner}>
      <View style={styles.storyImgWrapper}>
        <Image
          source={
            thumb_nail_url === undefined || thumb_nail_url === null
              ? IMAGES.PROFILE_IMAGE
              : {
                  uri:
                    background_id === ''
                      ? IMAGEBASEURL + media_url
                      : IMAGEBASEURL + thumb_nail_url,
                }
          }
          resizeMode="cover"
          style={{
            width: W(30),
            height: H(14),
          }}
        />
      </View>
      <View style={styles.addStory}>
        <View style={styles.imageWrapper}>
          <Image
            style={styles.imgStyle}
            source={
              profile_image_url === undefined || profile_image_url === null
                ? IMAGES.PROFILE_IMAGE
                : {uri: IMAGEBASEURL + profile_image_url}
            }
          />
        </View>
        <Text style={styles.createTxt}>{full_name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SingleStory;
