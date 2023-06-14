import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import PostHeader from '../../components/PostHeader/PostHeader';
import {COLORS, H, IMAGES, RFVALUE} from '../../constants/StyleCommon';
import Button from '../../components/Button/Button';
import styles from './Styles';
import {useSelector} from 'react-redux';
import SoundPlayer from 'react-native-sound-player';
import {Buffer} from 'buffer';
import axios from 'axios';

const Music = props => {
  const [music, setMusic] = useState('');
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [searchMusics, setSearchMusic] = useState('');

  const headerComponet = () => (
    <View style={styles.searchContiner}>
      <View style={styles.inpurContiner}>
        <Image
          resizeMode={'contain'}
          style={styles.searchImg}
          source={IMAGES.SEARCH}
        />
        <TextInput
          placeholder="Search..."
          style={styles.searchInputStyle}
          onChangeText={e => {
            searchMusic(e), setSearchMusic(e);
          }}
          value={searchMusics}
        />
      </View>
      <View style={{height: H(1)}} />
      <Text style={styles.sugTxt}>{'All Music'}</Text>
    </View>
  );

  const _handleChecked = (index, e) => {
    let temp = [...music];
    temp[index].checked = e;
    setMusic([...temp]);
  };

  const searchMusic = async query => {
    const clientId = '74769cbd532d408abea1de6f60e4b6fd';
    const clientSecret = 'f23a8a8fc1f74ecd9016b8178705be5c';
    const credentials = Buffer.from(`${clientId}:${clientSecret}`).toString(
      'base64',
    );

    try {
      const response = await axios.post(
        'https://accounts.spotify.com/api/token',
        'grant_type=client_credentials',
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: `Basic ${credentials}`,
          },
        },
      );
      const accessToken = response.data.access_token;

      const searchResponse = await axios.get(
        `https://api.spotify.com/v1/search?q=${encodeURIComponent(
          query,
        )}&type=track`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );
      setMusic(searchResponse?.data?.tracks?.items);
    } catch {
      console.log(console.error());
    }
  };

  const playAudio = url => {
    SoundPlayer.pause();
    clearIntervals();
    setTimeout(() => {
      SoundPlayer.playUrl(url);
    }, 500);
  };

  const clearIntervals = () => {
    let interval_id = setInterval(() => {}, 1000);
    for (let i = 1; i <= interval_id; i++) {
      clearInterval(i);
    }
  };

  const handlmusic = data => {
    SoundPlayer.stop();
    props.route.params.setMusic(data);
    props.navigation.goBack();
  };

  const renderItem = ({item, index}) => (
    <TouchableOpacity
      onPress={() => handlmusic(item?.preview_url)}
      style={styles.btnStyle}>
      <View style={styles.nameImgStyle}>
        <Image
          resizeMode={'cover'}
          style={styles.profileImageStyle}
          source={{uri: item?.album?.images[0].url}}
        />
        <Text style={[styles.nameTxt, {width: '70%'}]}>
          {item?.album?.name}
        </Text>
      </View>
      <TouchableOpacity onPress={() => playAudio(item?.preview_url)}>
        <Text>Play</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.mainContiner}>
      <PostHeader {...props} TXT={'Search Music'} />
      <View style={{flex: 1, backgroundColor: COLORS.LIGHTBACKGROUNDCOLOR}}>
        {headerComponet()}
        <FlatList
          data={music}
          renderItem={renderItem}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <Text
              style={{
                color: COLORS.PRIMARY,
                textAlign: 'center',
                fontSize: RFVALUE(14),
              }}>
              No Results found!
            </Text>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Music;
