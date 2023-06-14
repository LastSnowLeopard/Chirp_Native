import React from 'react';
import {View, Text, FlatList, Image, SafeAreaView} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import AppHeader from '../../components/AppHeader/AppHeader';
import AppLoading from '../../components/AppLoading/AppLoading';
import FriendsRequest from '../../components/FriendRequest/FriendRequest';
import {IMAGEBASEURL} from '../../config/api/HttpUtils';
import {acceptRequest} from '../../config/Redux/action';
import {COLORS, H, IMAGES} from '../../constants/StyleCommon';
import styles from './Styles';

const FrinedList = props => {
  let dispatch = useDispatch();
  const friendsList = useSelector(state => state?.user?.userTagFriends);
  const userData = useSelector(state => state?.user?.userData);
  const Loading = useSelector(state => state.user.loading);
  const friendsRequestList = useSelector(
    state => state?.user?.friendRequestList,
  );

  const acceptFriendRequest = item => {
    dispatch(
      acceptRequest(
        {
          userId: userData?.user_id,
          friendId: item?.friend_id,
        },
        {userId: userData?.user_id},
      ),
    );
  };

  const renderItem = ({item}) => {
    return (
      <View style={{flexDirection: 'row'}}>
        <Image
          source={
            item?.friend_profile_image === null
              ? IMAGES.PROFILE_IMAGE
              : {uri: IMAGEBASEURL + item?.friend_profile_image}
          }
          resizeMode={'cover'}
          style={styles.imgStyle}
        />
        <View style={{paddingLeft: H(1)}}>
          <Text style={styles.nameTxt}>{item?.friend_name}</Text>
          <Text style={styles.mutTxt}>
            {item?.Mutalfriend || 0 + ' '}Mutal friends
          </Text>
          <Image
            resizeMode={'contain'}
            style={styles.friendcon}
            source={IMAGES.FRIENDSICON}
          />
        </View>
      </View>
    );
  };

  const renderItemRequest = ({item}) => {
    return (
      <FriendsRequest
        Name={item?.friend_name}
        uri={IMAGEBASEURL + item?.friend_profile_image}
        confrim={() => acceptFriendRequest(item)}
      />
    );
  };

  return (
    <SafeAreaView style={styles.continer}>
      {AppLoading.renderLoading(Loading)}
      <View style={{overflow: 'hidden', paddingBottom: 1}}>
        <AppHeader {...props} />
      </View>
      <View style={styles.innnerContiner}>
        <View style={styles.mainContiner}>
          <Text style={styles.friendTxt}>Friends</Text>
          <FlatList
            numColumns={2}
            data={friendsList}
            columnWrapperStyle={{
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: H(1),
            }}
            ListEmptyComponent={() => (
              <Text style={styles.emptyTxt}>No frineds found!</Text>
            )}
            renderItem={renderItem}
          />
        </View>
        <View style={styles.mainContiner}>
          <Text style={styles.friendTxt}>Friends Request</Text>
          <FlatList
            ListEmptyComponent={() => (
              <Text style={styles.emptyTxt}>No Request found!</Text>
            )}
            data={friendsRequestList}
            renderItem={renderItemRequest}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default FrinedList;
