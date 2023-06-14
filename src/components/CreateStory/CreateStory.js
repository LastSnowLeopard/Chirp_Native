import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import {IMAGEBASEURL} from '../../config/api/HttpUtils';
import {CREATEPOST, CREATESTORY} from '../../constants/Navigation';
import {IMAGES} from '../../constants/StyleCommon';
import styles from './Styles';

const CreateStory = props => {
  const profileData = useSelector(state => state?.user?.profileData);

  return (
    <TouchableOpacity
      onPress={() => props.navigation.navigate(CREATESTORY)}
      activeOpacity={0.9}
      style={styles.mainContiner}>
      <View style={styles.addStory}>
        <View style={styles.imageWrapper}>
          <Image style={styles.imgStyle} source={IMAGES.PLUSICON} />
        </View>
        <Text style={styles.createTxt}>Add Story</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CreateStory;
