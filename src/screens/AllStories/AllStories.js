import React from 'react';
import {FlatList} from 'react-native';
import {CREATEPOST, CREATESTORY} from '../../constants/Navigation';
import styles from './Styles';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Share,
  ImageBackground,
} from 'react-native';
import {
  COLORS,
  IMAGES,
  STRINGS,
  W,
  H,
  RFVALUE,
  FONTS,
} from '../../constants/StyleCommon';

const AllStories = props => {
  const stories = [1, 2, 3, 4, 5, 6, 7, 7, 7, 7];
  const _renderItem = ({item}) => {
    return (
      <>
        {item === 'create' ? (
          <TouchableOpacity
            //   onPress={() => props.navigation.navigate(CREATEPOST)}
            activeOpacity={0.9}
            style={styles.mainContiner}>
            <ImageBackground resizeMode="contain" style={styles.bgImg}>
              <View style={styles.addStory}>
                <View style={styles.imageWrapper}>
                  <Image
                    style={styles.imgStyle}
                    source={IMAGES.PROFILE_IMAGE}
                  />
                </View>
                <Text style={styles.createTxt}>Add Story</Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            //   onPress={() => props.navigation.navigate(CREATEPOST)}
            activeOpacity={0.9}
            style={styles.mainContiner}>
            <ImageBackground
              source={IMAGES.GALLERYIMAGE}
              resizeMode="contain"
              style={styles.bgImg}>
              <View style={styles.addStory}>
                <View style={styles.imageWrapper}>
                  <Image
                    style={styles.imgStyle}
                    source={IMAGES.PROFILE_IMAGE}
                  />
                </View>
                <Text style={styles.createTxt}>Add Story</Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        )}
      </>
    );
  };

  return (
    <View style={styles.listWrapper}>
      <FlatList
        data={['create', ...stories]}
        renderItem={_renderItem}
        style={{gap: 3, columnGap: 3}}
        numColumns={2}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default AllStories;
