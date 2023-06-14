import React, {useEffect} from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import SoundPlayer from 'react-native-sound-player';
import {
  getAboutData,
  getBackGroundImage,
  getFeelingList,
  getFriendsList,
  getHobby,
  getNewsFeed,
  getPhotos,
  getProfileData,
  getRequestList,
  getUserPost,
  getVideos,
  notifcationList,
  stopLoading,
  storiesList,
} from '../../config/Redux/action';
import {useSelector, useDispatch} from 'react-redux';
import AppHeader from '../../components/AppHeader/AppHeader';
import Post from '../../components/Post/Post';
import styles from './Styles';
import Stories from '../../components/Stories/Stories';

const Home = props => {
  let dispatch = useDispatch();
  const userData = useSelector(state => state?.user?.userData);
  const newsFeed = useSelector(state => state?.user?.newsFeed);

  useEffect(() => {
    const userId = JSON.stringify({
      userId: userData?.user_id,
    });
    const postData = JSON.stringify({
      userId: userData?.user_id,
      page: 1,
      pageSize: 20,
    });

    const profileData = JSON.stringify({
      user_id: userData?.user_id,
      type: 'others',
    });

    const newsFeedData = {
      page: '1',
      pageSize: '25',
      userId: userData?.user_id,
    };
    dispatch(getNewsFeed(newsFeedData));
    dispatch(stopLoading());
    dispatch(getProfileData(userId));
    dispatch(getFriendsList(userId));
    dispatch(getRequestList({userId: userData?.user_id}));
    dispatch(getUserPost(postData));
    dispatch(getHobby());
    dispatch(getFeelingList());
    dispatch(getPhotos(profileData));
    dispatch(getVideos(profileData));
    dispatch(
      notifcationList({
        userId: userData?.user_id,
      }),
    );
    dispatch(
      storiesList({
        user_id: userData?.user_id,
      }),
    );
    dispatch(getBackGroundImage());
    dispatch(
      getAboutData(
        JSON.stringify({
          user_id: userData?.user_id,
        }),
      ),
    );
    SoundPlayer.stop();
  }, []);

  return (
    <SafeAreaView style={styles.continer}>
      <View style={{overflow: 'hidden', paddingBottom: 1}}>
        <AppHeader {...props} />
      </View>
      <ScrollView style={styles.innerContiner}>
        <Stories {...props} />
        <Post postData={newsFeed?.length > 0 && newsFeed} {...props} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
