import React, {useEffect, useRef, useState} from 'react';
import {
  SafeAreaView,
  Text,
  Image,
  View,
  TouchableOpacity,
  TextInput,
  Platform,
  PermissionsAndroid,
  ImageBackground,
  ScrollView,
  FlatList,
} from 'react-native';
import PostHeader from '../../../components/PostHeader/PostHeader';
import {IMAGEBASEURL} from '../../../config/api/HttpUtils';
import styles from './Styles';
import {useSelector, useDispatch} from 'react-redux';
import {COLORS, H, IMAGES, W} from '../../../constants/StyleCommon';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Button from '../../../components/Button/Button';
import {
  FEELINGACTIVITY,
  GIF,
  PHOTOVIDEO,
  PRIVACY,
  SEARCHLOCATION,
  TAGFRIENDS,
} from '../../../constants/Navigation';
import RBSheet from 'react-native-raw-bottom-sheet';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import AppLoading from '../../../components/AppLoading/AppLoading';
import Alert from '../../../components/Alert/Alert';
import {createPost} from '../../../config/Redux/action';

const captureOptions = {
  saveToPhotos: true,
  mediaType: 'photo',
  includeBase64: false,
};

const libraryOptions = {
  maxHeight: 200,
  maxWidth: 200,
  mediaType: 'photo',
  includeBase64: false,
};

const CreatePost = props => {
  let dispatch = useDispatch();
  const refRBSheet = useRef();
  const Loading = useSelector(state => state.user.loading);
  const profileData = useSelector(state => state?.user?.profileData);
  const userData = useSelector(state => state?.user?.userData);
  const backgroundImages = useSelector(state => state?.user?.backgroundImages);

  const [backgroundLayer, setBackgroundLayer] = useState(false);
  const [images, setImages] = useState([]);
  const [privacy, setPrivacy] = useState('Public');
  const [postDes, setPostDes] = useState('');
  const [location, setLocation] = useState('Add Location');
  const [feelingActivity, setFeelingActivity] = useState('Feeling/Activity');
  const [tagPeople, setTagPeople] = useState('Tag friends');
  const [backGroundImage, setbackgroundImage] = useState('');
  const [gif, setGif] = useState('');
  const [latLng, setlatlng] = useState('');
  const [tagId, setTagId] = useState([]);

  useEffect(() => {}, []);

  const pickImage = async () => {
    refRBSheet.current.close();
    setTimeout(() => {
      launchImageLibrary(libraryOptions, response => {
        if (response.assets) {
          const newImages = [...images];
          newImages.push(response.assets[0]);
          setImages(newImages);
        }
      });
    }, 700);
  };

  const pickImageFromCamera = async () => {
    refRBSheet.current.close();
    setTimeout(async () => {
      if (Platform.OS === 'android') {
        const grantedcamera = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'App Camera Permission',
            message: 'App needs access to your camera ',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        if (grantedcamera === PermissionsAndroid.RESULTS.GRANTED) {
          launchCamera(captureOptions, response => {
            if (response.assets) {
              const newImages = [...images];
              newImages.push(response.assets[0]);
              setImages(newImages);
            }
          });
        }
      }
      launchCamera(captureOptions, response => {
        if (response.assets) {
          const newImages = [...images];
          newImages.push(response.assets[0]);
          setImages(newImages);
        }
      });
    }, 700);
  };

  const deleteImage = (item, indexx) => {
    const filterarray = images.filter((item, index) => index !== indexx);
    setImages(filterarray);
  };

  const handleLocation = (data, detail) => {
    setLocation(detail.name);
    setlatlng(detail.geometry.location.lat, detail.geometry.location.lng);
  };

  const hankdeFeelingActivty = data => {
    setFeelingActivity(data);
  };

  const handlePrivacy = data => {
    setPrivacy(data);
  };

  const handleTagPeople = (data, id) => {
    setTagPeople(data);
    setTagId(id);
  };

  const handleImage = data => {
    setImages(data);
  };

  const handleGif = data => {
    setGif(data);
  };

  const renderItem = ({item}) => (
    <TouchableOpacity onPress={() => setbackgroundImage(item)}>
      <Image
        source={{uri: IMAGEBASEURL + item?.image_url}}
        resizeMode={'cover'}
        style={styles.bgImg}
      />
    </TouchableOpacity>
  );

  const _handleCreatePost = () => {
    var formdata = new FormData();
    formdata.append('userid', userData?.user_id);
    formdata.append('tagged_user', tagId);
    formdata.append('content', postDes);
    formdata.append('privacy', privacy);
    formdata.append('location', location);
    formdata.append('location_lat_lng', latLng);
    formdata.append('post_type', 'normal');
    formdata.append('feeling_id', feelingActivity?.feelings_id);
    formdata.append('life_event_id', '');
    formdata.append('event_date', '');
    formdata.append('background_id', backGroundImage?.id);
    formdata.append('gif_image_url', gif?.user?.avatar_url);
    images?.forEach((element, index) => {
      formdata.append('media', {
        uri: element.node.image.uri,
        name: 'postImaeg',
        type: 'image/jpeg',
      });
    });
    const postData = JSON.stringify({
      userId: userData?.user_id,
      page: 1,
      pageSize: 20,
    });

    const newsFeedData = {
      page: '1',
      pageSize: '25',
      userId: userData?.user_id,
    };

    dispatch(createPost(formdata, props, postData, newsFeedData));
  };

  return (
    <SafeAreaView style={styles.mainContiner}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {AppLoading.renderLoading(Loading)}
        <PostHeader
          onPressPost={() => _handleCreatePost()}
          enable={
            postDes != '' || backGroundImage != '' || images?.length > 0
              ? true
              : false
          }
          postBtn={true}
          TXT={'Create post'}
          {...props}
        />
        <View style={styles.postContiner}>
          <View style={styles.userDetailContiner}>
            <Image
              resizeMode={'cover'}
              style={styles.profileImageStyle}
              source={
                profileData?.profile_image_url !== null &&
                profileData?.profile_image_url !== undefined
                  ? {uri: IMAGEBASEURL + profileData?.profile_image_url}
                  : IMAGES.PROFILE_IMAGE
              }
            />
            <View style={styles.rightContinerProfile}>
              <Text style={styles.nameTxt}>{userData?.full_name}</Text>
              <TouchableOpacity
                onPress={() =>
                  props.navigation.navigate(PRIVACY, {
                    setPrivacy: handlePrivacy,
                  })
                }
                style={styles.globeContnainer}>
                <Image
                  style={styles.globeImageStyle}
                  resizeMode={'contain'}
                  source={IMAGES.GLOABE}
                />
                <Text style={{paddingLeft: H(1)}}>
                  {privacy === 'public'
                    ? 'Public'
                    : privacy === 'friends_only'
                    ? 'Friends'
                    : 'Only me'}
                </Text>
                <View style={{paddingLeft: H(1)}} />
                <Image
                  style={styles.halfDownArrowStyle}
                  resizeMode={'contain'}
                  source={IMAGES.HALFDOWNARROW}
                />
              </TouchableOpacity>
            </View>
          </View>
          {backGroundImage === '' ? (
            <View>
              <TextInput
                multiline={true}
                placeholder={`What's on your mind?`}
                onChangeText={e => setPostDes(e)}
                placeholderTextColor={'rgba(0, 0, 0, 0.5)'}
                style={styles.txtInputStyle}
              />
            </View>
          ) : (
            <ImageBackground
              resizeMode={'cover'}
              style={styles.backgroundImg}
              source={{uri: IMAGEBASEURL + backGroundImage.image_url}}>
              <TextInput
                placeholder={`What's on your mind?`}
                placeholderTextColor={COLORS.WHITE}
                style={styles.backgroundImgInutStyle}
                multiline={true}
                onChangeText={e => setPostDes(e)}
              />
            </ImageBackground>
          )}
        </View>

        {backgroundLayer === false ? (
          <View style={styles.bottomContiner}>
            <View style={styles.lineStyle} />
            <TouchableOpacity
              onPress={() =>
                props.navigation.navigate(PHOTOVIDEO, {
                  setImages: handleImage,
                })
              }
              style={styles.btnStyle}>
              <Image
                resizeMode={'contain'}
                style={styles.photVideo}
                source={IMAGES.PHOTOVIDEO}
              />
              <Text style={styles.txtStyle}>Photos/Videos</Text>
            </TouchableOpacity>

            <View style={styles.lineStyle} />
            {images.length > 0 && <View style={{height: H(2)}} />}
            <ScrollView
              horizontal
              nestedScrollEnabled
              showsHorizontalScrollIndicator={false}>
              {images.length > 0 &&
                images?.map((item, index) => {
                  return (
                    <View style={[styles.imgStyle, {width: W(32)}]}>
                      <ImageBackground
                        style={styles.imgStyle}
                        source={{uri: item.node.image.uri}}>
                        <TouchableOpacity
                          onPress={() => deleteImage(item, index)}
                          style={styles.deleteBtnStyle}>
                          <MaterialIcons name="delete" size={22} />
                        </TouchableOpacity>
                      </ImageBackground>
                    </View>
                  );
                })}
            </ScrollView>
            <TouchableOpacity
              onPress={() =>
                props.navigation.navigate(TAGFRIENDS, {
                  setTagPeople: handleTagPeople,
                })
              }
              style={styles.btnStyle}>
              <Image
                resizeMode={'contain'}
                style={styles.photVideo}
                source={IMAGES.TAGPEOPLE}
              />
              <Text style={styles.txtStyle}>{tagPeople}</Text>
            </TouchableOpacity>
            {/* <View style={styles.lineStyle} />
                        <TouchableOpacity
                            // onPress={() => props.navigation.navigate(FEELINGACTIVITY, {
                            //     setFeelingActivity: hankdeFeelingActivty
                            // })}
                            style={styles.btnStyle}>
                            <Image
                                resizeMode={'contain'}
                                style={styles.photVideo}
                                source={IMAGES.FEELLING} />
                            <Text style={styles.txtStyle}>{feelingActivity?.feelings_name || feelingActivity}</Text>
                        </TouchableOpacity> */}
            <View style={styles.lineStyle} />
            <TouchableOpacity
              onPress={() =>
                props.navigation.navigate(SEARCHLOCATION, {
                  setLocation: handleLocation,
                })
              }
              style={styles.btnStyle}>
              <Image
                resizeMode={'contain'}
                style={styles.photVideo}
                source={IMAGES.LOCATION}
              />
              <Text style={styles.txtStyle}>{location}</Text>
            </TouchableOpacity>
            <View style={styles.lineStyle} />
            <TouchableOpacity style={styles.btnStyle}>
              <Image
                resizeMode={'contain'}
                style={styles.photVideo}
                source={IMAGES.LIVE}
              />
              <Text style={styles.txtStyle}>Go live</Text>
            </TouchableOpacity>
            <View style={styles.lineStyle} />
            <TouchableOpacity
              onPress={() => setBackgroundLayer(true)}
              style={styles.btnStyle}>
              <Image
                resizeMode={'contain'}
                style={styles.photVideo}
                source={IMAGES.TEXTBACKGROUND}
              />
              <Text style={styles.txtStyle}>Background Color</Text>
            </TouchableOpacity>
            <View style={styles.lineStyle} />
            <TouchableOpacity
              onPress={() => pickImageFromCamera()}
              style={styles.btnStyle}>
              <Image
                resizeMode={'contain'}
                style={styles.photVideo}
                source={IMAGES.CAMERA}
              />
              <Text style={styles.txtStyle}>Camera</Text>
            </TouchableOpacity>
            <View style={styles.lineStyle} />
            <TouchableOpacity
              onPress={() =>
                props.navigation.navigate(GIF, {
                  setGif: handleGif,
                })
              }
              style={styles.btnStyle}>
              <Image
                resizeMode={'contain'}
                style={styles.photVideo}
                source={IMAGES.GIF}
              />
              <Text style={styles.txtStyle}>GIF</Text>
            </TouchableOpacity>
            <View style={styles.lineStyle} />
            <View style={{height: H(3)}} />
          </View>
        ) : (
          <View>
            <View style={styles.headerContiner}>
              <Text>Choose Background</Text>
              <TouchableOpacity
                onPress={() => {
                  setBackgroundLayer(false), setbackgroundImage('');
                }}>
                <Image
                  style={styles.crossStyle}
                  resizeMode={'contain'}
                  source={IMAGES.CROSS}
                />
              </TouchableOpacity>
            </View>
            <FlatList
              numColumns={4}
              renderItem={renderItem}
              columnWrapperStyle={styles.flatlistContiner}
              data={backgroundImages}
              showsVerticalScrollIndicator={false}
              ListFooterComponent={() => <View style={{height: H(50)}} />}
            />
          </View>
        )}
        <RBSheet
          ref={refRBSheet}
          closeOnDragDown={true}
          closeOnPressMask={false}
          customStyles={{
            wrapper: {
              backgroundColor: '#0002',
            },
            draggableIcon: {
              backgroundColor: '#000',
            },
            container: {
              backgroundColor: 'white',
              height: H(25),
            },
          }}>
          <View style={styles.sheetContiner}>
            <TouchableOpacity
              onPress={() => pickImageFromCamera()}
              style={styles.btnStyleSheet}>
              <Image
                resizeMode={'contain'}
                style={styles.editCameraStyle}
                source={IMAGES.EDITCAMERA}
              />
              <Text style={styles.btnText}>Take Photo</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => pickImage()}
              style={styles.btnStyleSheet}>
              <Image
                resizeMode={'contain'}
                style={styles.editCameraStyle}
                source={IMAGES.EDITCAMERA}
              />
              <Text style={styles.btnText}>Pick from gallery</Text>
            </TouchableOpacity>
          </View>
        </RBSheet>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreatePost;
