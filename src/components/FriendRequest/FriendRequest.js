import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {
  COLORS,
  FONTS,
  H,
  RFVALUE,
  STYLESHEET,
  W,
} from '../../constants/StyleCommon';

const FriendsRequest = ({uri, Name, mutal, confrim}) => {
  return (
    <View style={styles.mainContiner}>
      <View style={styles.topContiner}>
        <Image
          style={styles.imgStyle}
          resizeMode={'cover'}
          source={{uri: uri}}
        />
        <View style={styles.rightContiner}>
          <Text style={styles.nameTxt}>{Name}</Text>
          <Text style={styles.mutalTxt}>
            {mutal || 0}
            {' mutual friends'}
          </Text>
        </View>
      </View>
      <View style={styles.btnContiner}>
        <TouchableOpacity onPress={confrim} style={styles.confrimBtn}>
          <Text style={styles.confrimTxt}>Confirm</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.deleteBtn}>
          <Text style={styles.deleteTxt}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = STYLESHEET.create({
  mainContiner: {
    width: W(90),
    alignSelf: 'center',
    marginVertical: H(2),
  },
  imgStyle: {
    width: W(20),
    height: W(20),
    borderRadius: W(20),
  },
  topContiner: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nameTxt: {
    color: '#4D5154',
    fontSize: RFVALUE(16),
    fontFamily: FONTS.BOLD,
  },
  mutalTxt: {
    color: '#C1C6CD',
    fontSize: RFVALUE(16),
    fontFamily: FONTS.REGULAR,
  },
  rightContiner: {
    paddingLeft: H(2),
    marginTop: H(-1),
  },
  btnContiner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: H(1),
    marginVertical: H(1.5),
  },
  confrimBtn: {
    backgroundColor: COLORS.PRIMARY,
    height: H(6),
    width: W(40),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: H(1),
  },
  confrimTxt: {
    color: COLORS.WHITE,
    fontFamily: FONTS.SEMIBOLD,
    fontSize: RFVALUE(16),
  },
  deleteBtn: {
    backgroundColor: COLORS.WHITE,
    height: H(6),
    width: W(40),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: H(1),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  deleteTxt: {
    color: '#7E7E7E',
    fontSize: RFVALUE(16),
    fontFamily: FONTS.SEMIBOLD,
  },
});

export default FriendsRequest;
