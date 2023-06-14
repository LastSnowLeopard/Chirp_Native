import moment from 'moment';
import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useSelector} from 'react-redux';
import AppHeader from '../../components/AppHeader/AppHeader';
import {IMAGEBASEURL} from '../../config/api/HttpUtils';
import {COLORS, H, IMAGES} from '../../constants/StyleCommon';
import styles from './Styles';
const Notifcation = props => {
  const notifcationData = useSelector(state => state.user.notifcationListing);

  const renderItem = ({item}) => {
    return (
      <View style={styles.cardContiner}>
        <Image
          resizeMode={'cover'}
          style={styles.profileImgStyle}
          source={{uri: IMAGEBASEURL + item?.profile_image_url}}
        />
        <Text style={styles.txtStyle}>
          <Text style={styles.nameTxt}>{item?.full_name + ' '}</Text>
          <Text>{item?.notification_text}</Text>
          <View>
            <Text style={[styles.txtStyle, {color: 'grey', marginTop: H(0.5)}]}>
              {moment(item?.created_at).fromNow()}
            </Text>
          </View>
        </Text>
        <TouchableOpacity>
          <Image
            resizeMode={'contain'}
            style={styles.verticonIcon}
            source={IMAGES.VERTICALICON}
          />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.continer}>
      <View style={{overflow: 'hidden', paddingBottom: 1}}>
        <View style={styles.innerContiner}>
          <AppHeader {...props} />
          <Text style={styles.notifcationTxt}>Notifcations</Text>
          <FlatList data={notifcationData} renderItem={renderItem} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Notifcation;
