import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import {H, COLORS, IMAGES, W} from '../../constants/StyleCommon';
import React, {useState} from 'react';
import Video from 'react-native-video';
import Modal from 'react-native-modal';
import {IMAGEBASEURL} from '../../config/api/HttpUtils';

const {height, width} = Dimensions.get('window');
const SliderBox = props => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPreview, setIsPreview] = useState(false);
  const [data, setData] = useState([]);

  handlePreview = (val, index) => {
    setData(val);
    setCurrentIndex(index);
    setIsPreview(true);
  };

  return (
    <>
      {isPreview && (
        <Modal backdropOpacity={0.9} isVisible={isPreview} style={styles.modal}>
          <SwiperFlatList
            data={data}
            index={currentIndex}
            onChangeIndex={e => setCurrentIndex(e.index)}
            paginationActiveColor={'#32B5FF'}
            paginationDefaultColor={'#C4C4C4'}
            paginationStyle={{
              width: 2,
              height: 9,
            }}
            paginationStyleItem={{
              width: 12,
              height: 12,
            }}
            renderItem={({item, index}) => (
              <View style={{height, width}}>
                {item.media_type === 'image' ? (
                  <Image
                    source={{uri: IMAGEBASEURL + item.media_url}}
                    resizeMode={'contain'}
                    style={{height: height, width: width}}
                  />
                ) : (
                  <Video
                    source={{uri: IMAGEBASEURL + item?.media_url}}
                    resizeMode="contain"
                    disableFullscreen={true}
                    disablePlayPause={true}
                    disableSeekbar={true}
                    disableVolume={true}
                    disableTimer={true}
                    disableBack={true}
                    poster={`http://img.youtube.com/vi/${'czVVcL_4D18'}/default.jpg`}
                    muted={true}
                    repeat={false}
                    controls={true}
                    ignoreSilentSwitch={'ignore'}
                    paused={index == currentIndex ? false : true}
                    onError={e => console.log('error in video is ', e)}
                    style={{width: width, height: height}}
                  />
                )}
              </View>
            )}
          />
          <TouchableOpacity
            onPress={() => setIsPreview(false)}
            style={styles.closeBtn}>
            <Image source={IMAGES.CROSSICON} style={styles.closeIcon} />
          </TouchableOpacity>
        </Modal>
      )}
      <SwiperFlatList
        // showPagination
        data={props.data}
        paginationActiveColor={'#32B5FF'}
        paginationDefaultColor={'#C4C4C4'}
        paginationStyle={{
          width: 2,
          height: 9,
        }}
        paginationStyleItem={{
          width: 12,
          height: 12,
        }}
        renderItem={({item, index}) => (
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => handlePreview(props.data, index)}
            style={[styles.sliderBoxContiner, {...props.customeImageStyle}]}>
            {item.media_type === 'image' ? (
              <Image
                source={{uri: IMAGEBASEURL + item?.media_url}}
                resizeMode={'cover'}
                style={
                  props.customeImageStyle
                    ? props.customeImageStyle
                    : styles.imageStyle
                }
              />
            ) : (
              <Video
                source={{uri: IMAGEBASEURL + item?.media_url}}
                resizeMode="contain"
                disableFullscreen={true}
                disablePlayPause={true}
                disableSeekbar={true}
                disableVolume={true}
                disableTimer={true}
                disableBack={true}
                poster={`http://img.youtube.com/vi/${'czVVcL_4D18'}/default.jpg`}
                muted={true}
                repeat={false}
                controls={false}
                paused={false}
                style={styles.imageStyle}
              />
            )}
          </TouchableOpacity>
        )}
      />
    </>
  );
};

const styles = StyleSheet.create({
  sliderBoxContiner: {},
  imageStyle: {
    width: W(100),
    height: H(28),
    alignSelf: 'center',
  },
  modal: {
    padding: 0,
    margin: 0,
    flex: 1,
    backgroundColor: COLORS.lightDark,
  },
  closeBtn: {
    position: 'absolute',
    top: H(8),
    right: 30,
  },
  closeIcon: {
    height: 30,
    width: 30,
  },
});
export default SliderBox;
