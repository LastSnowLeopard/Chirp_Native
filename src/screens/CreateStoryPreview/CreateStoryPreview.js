import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import {H, IMAGES} from '../../constants/StyleCommon';
import styles from './Styles';
import Button from '../../components/Button/Button';
import {MUSIC} from '../../constants/Navigation';
import {useDispatch, useSelector} from 'react-redux';
import {uploadStorytoDB} from '../../config/Redux/action';
import AppLoading from '../../components/AppLoading/AppLoading';
const CreateStoryPreview = props => {
  let dispatch = useDispatch();
  const userData = useSelector(state => state?.user?.userData);
  const Loading = useSelector(state => state.user.loading);
  const [isTextinput, setIsTextinput] = useState(false);
  const [music, setMusic] = useState('');
  const [storyText, setStorytext] = useState('');

  const _handleMusic = url => {
    setMusic(url);
  };

  const uploadStory = async () => {
    var formdata = new FormData();
    formdata.append('user_id', userData?.user_id);
    formdata.append('privacy_level', 'public');
    formdata.append('text_content', storyText);
    formdata.append('music_url', music);
    formdata.append('story_type', 'audio');
    formdata.append('background_id', '');
    formdata.append('thumb_nail_url', '');
    formdata.append('story_media', music);

    formdata.append('story_media', {
      uri: props?.route?.params?.uri,
      name: 'postImaeg',
      type: 'image/jpeg',
    });
    formdata.append('story_media', {
      uri: props?.route?.params?.uri,
      name: 'postImaeg',
      type: 'image/jpeg',
    });
    const storiesData = {
      user_id: userData?.user_id,
    };
    dispatch(uploadStorytoDB(formdata, props, storiesData));
  };

  return (
    <View style={styles.mainContiner}>
      {AppLoading.renderLoading(Loading)}
      <ImageBackground
        style={styles.bgImgStyle}
        resizeMode={'cover'}
        source={{uri: props?.route?.params?.uri}}>
        <TouchableOpacity
          style={styles.crossImgbtn}
          onPress={() => props.navigation.goBack()}>
          <Image
            resizeMode={'contain'}
            style={styles.crossImg}
            source={IMAGES.CROSSICON}
          />
        </TouchableOpacity>
        <View style={styles.btnContiner}>
          <TouchableOpacity
            onPress={() =>
              props.navigation.navigate(MUSIC, {
                setMusic: _handleMusic,
              })
            }
            style={styles.imgTxtContiner}>
            <Image
              source={IMAGES.MUSIC}
              style={styles.singleAction}
              resizeMode="contain"
            />
            <Text style={styles.actionText}>Music</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setIsTextinput(true)}
            style={styles.imgTxtContiner}>
            <Image
              source={IMAGES.TEXT}
              style={styles.singleAction}
              resizeMode="contain"
            />
            <Text style={styles.actionText}>Text</Text>
          </TouchableOpacity>
        </View>

        <TextInput
          placeholder="Enter Text"
          placeholderTextColor={'white'}
          style={styles.inputStyle}
          onChangeText={e => setStorytext(e)}
          multiline={true}
        />
        <View style={{marginTop: H(35), width: '90%', alignSelf: 'center'}}>
          <Button BTNNAME={'Done'} onPress={() => uploadStory()} />
        </View>
      </ImageBackground>
    </View>
  );
};

export default CreateStoryPreview;
