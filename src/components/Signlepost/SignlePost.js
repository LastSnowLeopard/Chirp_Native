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
import SliderBox from '../SliderBox/SliderBox';
import {useSelector, useDispatch} from 'react-redux';
import React, {useState, useRef} from 'react';
import styles from './Styles';
import moment from 'moment';
import {IMAGEBASEURL} from '../../config/api/HttpUtils';
import {deletePost, likePost} from '../../config/Redux/action';
import RBSheet from 'react-native-raw-bottom-sheet';
import {COMMENT} from '../../constants/Navigation';

const SignlePost = props => {
  const {item} = props;
  let dispatch = useDispatch();
  const refRBSheet = useRef();
  const [isliked, setIsLiked] = useState(
    item?.PostLikes?.length > 0 ? true : false,
  );
  const [isLoading, setIsLoading] = useState(false);
  const userData = useSelector(state => state?.user?.userData);

  const handleLikePost = id => {
    const data = JSON.stringify({
      post_id: id,
      user_id: userData?.user_id,
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

    dispatch(likePost(data, postData, newsFeedData));
  };

  const _deletePost = id => {
    const postData = JSON.stringify({
      userId: userData?.user_id,
      page: 1,
      pageSize: 20,
    });
    const deletePostData = JSON.stringify({
      user_id: userData?.user_id,
      post_id: id,
    });

    dispatch(deletePost(deletePostData, postData));
  };

  const sharePost = async item => {
    try {
      const result = await Share.share({
        message: item?.content,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.userDetailContiner}>
        <TouchableOpacity style={styles.userDetail}>
          <Image
            source={
              item?.profile_image_url === undefined
                ? IMAGES.PROFILE_IMAGE
                : {uri: IMAGEBASEURL + item?.profile_image_url}
            }
            resizeMode={'cover'}
            style={styles.userImageStyle}
          />
          <View style={styles.userNameProfessionCOntiner}>
            <View style={{}}>
              <Text style={{textAlign: 'justify', width: W(55)}}>
                <Text style={styles.userNameStyle}>{item?.full_name}</Text>
                {item?.feelings_name !== null && (
                  <>
                    <Text style={styles.normalText}>{' is '}</Text>
                    <Image
                      resizeMode={'contain'}
                      source={{uri: item?.feelings_icon_url}}
                      style={styles.globleImgStyle}
                    />
                    <Text style={styles.normalText}>
                      {' feeling ' + '\n' + item?.feelings_name}
                    </Text>
                  </>
                )}
                {item?.tagged_user?.length > 0 && (
                  <>
                    <Text> is with </Text>
                    <Text style={styles.taggedTxtStyle}>
                      {item?.tagged_user[0].full_name}
                    </Text>
                    {item?.tagged_user.length > 1 && (
                      <Text style={styles.taggedTxtStyle}>
                        {' and ' + item?.tagged_user?.length + ' other'}
                      </Text>
                    )}
                  </>
                )}
                {!(
                  item?.location === 'Add Location' ||
                  item?.location === null ||
                  item.location === undefined
                ) && (
                  <Text>
                    <Text>
                      {item?.location === 'Add Location' ||
                      item?.location === null ||
                      item.location === undefined
                        ? ''
                        : ' in '}
                    </Text>
                    <Text style={{fontFamily: FONTS.SEMIBOLD}}>
                      {item?.location}
                    </Text>
                  </Text>
                )}
              </Text>
            </View>
            <View style={styles.globeTimeContiner}>
              <Text style={styles.userProfesionTextStyle}>
                {moment(item?.created_at).fromNow()}
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        <View
          style={{
            marginRight: H(2),
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: W(10),
          }}>
          <TouchableOpacity onPress={() => refRBSheet.current.open()}>
            <Image
              resizeMode="contain"
              source={IMAGES.VERTICALICON}
              style={styles.verticalDotsImageStyle}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => _deletePost(item?.post_id)}>
            <Image
              resizeMode="contain"
              source={IMAGES.CROSS}
              style={styles.verticalDotsImageStyle}
            />
          </TouchableOpacity>
        </View>
      </View>
      <Text
        style={[
          styles.desTxt,
          {
            textAlign: 'left',
            color: COLORS.BLACK,
            fontSize: RFVALUE(14),
            paddingHorizontal: H(2),
            fontFamily: FONTS.REGULAR,
          },
        ]}>
        {item?.content}
      </Text>
      {item?.background_image_url !== null && (
        <ImageBackground
          resizeMode={'cover'}
          source={{uri: IMAGEBASEURL + item?.background_image_url}}
          style={[styles.textStyleContiner, {width: W(100)}]}>
          <Text style={styles.desTxt}>{item?.content}</Text>
        </ImageBackground>
      )}
      {/* {item?.media?.length === 0 && ( */}

      {/* )} */}
      {item?.media?.length > 0 && (
        <View style={styles.sliderBoxbackground}>
          <SliderBox data={item?.media} preViewPost={false} />
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
            backgroundColor: COLORS.PRIMARY,
            width: W(28),
            height: H(0.5),
          },
          container: {
            backgroundColor: 'white',
            height: H(48),
          },
        }}>
        <View style={styles.sheetContiner}>
          <TouchableOpacity style={styles.btnStyle}>
            <Text style={styles.Txt}>Save Post</Text>
            <Text style={styles.subHeadingTxt}>
              Add this to your saved items.
            </Text>
          </TouchableOpacity>
          <View style={styles.line} />
          <TouchableOpacity style={styles.btnStyle}>
            <Text style={styles.Txt}>Hide Post</Text>
            <Text style={styles.subHeadingTxt}>See fewer post like this.</Text>
          </TouchableOpacity>
          <View style={styles.line} />
          <TouchableOpacity style={styles.btnStyle}>
            <Text style={styles.Txt}>Report Post</Text>
            <Text style={styles.subHeadingTxt}>
              I’m concerned about this post.
            </Text>
          </TouchableOpacity>
          <View style={styles.line} />
          <TouchableOpacity style={styles.btnStyle}>
            <Text style={styles.Txt}>Delete Post</Text>
            <Text style={styles.subHeadingTxt}>This post will be delete.</Text>
          </TouchableOpacity>
        </View>
      </RBSheet>

      <View style={styles.socailiconContiner}>
        <View style={styles.likeImageContiner}>
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}
            onPress={() => handleLikePost(item.post_id)}>
            {isliked ? (
              <Image
                style={[styles.socailIconStyle]}
                resizeMode={'contain'}
                source={IMAGES.LIKEICON}
              />
            ) : (
              <Image
                style={[styles.socailIconStyle]}
                resizeMode={'contain'}
                source={IMAGES.LIKEICON}
              />
            )}

            <Text style={styles.totalLikesTxt}>
              {item?.total_likes + ' Like'}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.likeImageContiner, {marginRight: H(2.5)}]}>
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}
            onPress={() => props.navigation.navigate(COMMENT, {item})}>
            <Image
              style={styles.socailIconStyle}
              resizeMode={'contain'}
              source={IMAGES.COMMENTICON}
            />
            <Text style={styles.totalLikesTxt}>
              {item?.commets?.length + ' Comment'}
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => sharePost(item)}>
          <Image
            style={styles.socailIconStyle}
            resizeMode={'contain'}
            source={IMAGES.SHAREICONS}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignlePost;
