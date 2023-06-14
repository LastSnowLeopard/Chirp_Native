import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground,
  Platform,
  PermissionsAndroid,
} from 'react-native';

import {
  COLORS,
  FONTS,
  H,
  IMAGES,
  RFVALUE,
  STYLESHEET,
  W,
} from '../../constants/StyleCommon';
import styles from './Styles';

import {CameraRoll} from '@react-native-camera-roll/camera-roll';
import {CREATESTORYPREVIEW} from '../../constants/Navigation';
const CreateStory = props => {
  const [allMedia, setAllMedia] = useState([]);
  useEffect(() => {
    getAllMedia();
  }, []);

  const _handleImages = (item, index) => {
    let temp = [...allMedia];
    temp[index].selected = !item?.selected;
    setAllMedia([...temp]);
  };

  async function hasAndroidPermission() {
    const permission =
      Platform.Version >= 33
        ? PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES
        : PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE;
    const hasPermission = await PermissionsAndroid.check(permission);
    if (hasPermission) {
      return true;
    }

    const status = await PermissionsAndroid.request(permission);
    return status === 'granted';
  }

  async function getAllMedia() {
    if (Platform.OS === 'android' && !(await hasAndroidPermission())) {
      return;
    }

    try {
      await CameraRoll.getPhotos({first: 1000, assetType: 'All'}).then(r => {
        const images = r.edges.map(item => {
          const data = {
            ...item,
            selected: false,
          };
          return data;
        });
        setAllMedia(images);
      });
    } catch (error) {
      console.log(error);
    }
  }

  const _handleImage = () => {
    let temp = [];
    allMedia.map(item => {
      if (item?.selected === true) {
        temp.push(item);
      }
    });
    if (temp.length === 0) {
      alert('Kindly select 1 image or video');
    } else {
      props.route.params.setImages(temp);
      props.navigation.goBack();
    }
  };
  const renderItem = ({item, index}) => (
    <TouchableOpacity
      onPress={() =>
        props.navigation.navigate(CREATESTORYPREVIEW, {
          uri: item.node.image.uri,
        })
      }
      style={[styles.imgContiner]}>
      <ImageBackground
        source={{uri: item.node.image.uri}}
        style={styles.imgStyle}>
        {/* <TouchableOpacity
          style={styles.btnStyle}
          onPress={() => _handleImages(item, index)}>
          <Image
            resizeMode={'contain'}
            style={styles.emptyCircle}
            source={item?.selected ? IMAGES.CHECKCIRCLE : IMAGES.UNCHECKCIRCLE}
          />
        </TouchableOpacity> */}
      </ImageBackground>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.mainContiner}>
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Image source={IMAGES.CLOSE} style={styles.closeIcon} />
        </TouchableOpacity>
        <Text style={styles.heading}>Create Story</Text>
        <Image
          source={IMAGES.CAMERA}
          style={styles.cameraIcon}
          resizeMode="contain"
        />
      </View>
      <View style={styles.actions}>
        <TouchableOpacity style={styles.imgTxtCntiner}>
          <Image
            source={IMAGES.OPENCAMERA}
            style={styles.singleAction}
            resizeMode="contain"
          />
          <Text style={styles.actionText}>Camera</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.imgTxtContiner}>
          <Image
            source={IMAGES.MUSIC}
            style={styles.singleAction}
            resizeMode="contain"
          />
          <Text style={styles.actionText}>Music</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.imgTxtContiner}>
          <Image
            source={IMAGES.TEXT}
            style={styles.singleAction}
            resizeMode="contain"
          />
          <Text style={styles.actionText}>Text</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        numColumns={3}
        data={allMedia}
        columnWrapperStyle={styles.columnWrapperStyle}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};

export default CreateStory;
