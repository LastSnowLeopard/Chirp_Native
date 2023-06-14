import React, {useState} from 'react';
import {SafeAreaView, Text, ScrollView, View} from 'react-native';
import {useSelector} from 'react-redux';
import About from '../../components/About/About';
import AppHeader from '../../components/AppHeader/AppHeader';
import Post from '../../components/Post/Post';
import ProfileBtn from '../../components/ProfileBtn/ProfileBtn';
import ProfileGroupBtn from '../../components/ProfileGroupBtn/ProfileGroupBtn';
import ImagePart from '../../components/Profile_imagePart/ImagePart';
import UserActivity from '../../components/UserActivity/UserActivity';
import UserBio from '../../components/UserBio/UserBio';
import {COLORS} from '../../constants/StyleCommon';
import Events from '../Events/Events';
import Friends from '../Friends/Friends';
import FrinedList from '../FriendsList/FriendsList';
import Photos from '../Photos/Photos';
import Videos from '../Videos/Videos';
import styles from './Styles';

const Profile = props => {
  const postData = useSelector(state => state?.user?.userPost);
  const userData = useSelector(state => state?.user?.userData);
  const profileData = useSelector(state => state?.user?.profileData);

  const [active, setActive] = useState(1);

  return (
    <SafeAreaView style={styles.continer}>
      <View style={{overflow: 'hidden', paddingBottom: 1}}>
        <AppHeader {...props} />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{flex: 1, backgroundColor: COLORS.LIGHTBACKGROUNDCOLOR}}>
        <ImagePart {...props} />
        <ProfileGroupBtn {...props} />
        <ProfileBtn onPress={e => setActive(e)} {...props} />
        {active === 3 && <FrinedList {...props} />}
        {active === 4 && <Photos {...props} />}
        {active === 5 && <Videos {...props} />}
        {active === 6 && <Events {...props} />}
        {active === 1 && (
          <>
            <About {...props} />
            <Photos slice={true} {...props} />
            <Post postData={postData.length > 0 && postData} {...props} />
          </>
        )}
        {active === 2 && <About {...props} />}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
