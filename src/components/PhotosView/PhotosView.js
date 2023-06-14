import React from "react";
import { View, Text, Dimensions, TouchableOpacity, Image } from 'react-native';
import Modal from 'react-native-modal';
import Video from 'react-native-video';
import { IMAGEBASEURL } from "../../config/api/HttpUtils";
import { COLORS, H, IMAGES, STYLESHEET, W } from "../../constants/StyleCommon";


const PhotosView = (props) => {

    const { isVisible, onPressClose, item } = props
    const { height, width } = Dimensions.get('window');
    return (
        <Modal backdropOpacity={0.9} isVisible={isVisible} style={styles.modal}>

            <View style={{ height, width }}>
                {item.media_type === 'image' ? (
                    <Image
                        source={{ uri: IMAGEBASEURL + item.media_url }}
                        resizeMode={'contain'}
                        style={{ height: height, width: width }}
                    />
                ) : (
                    <Video
                        source={{ uri: IMAGEBASEURL + item?.media_url }}
                        resizeMode="contain"
                        disableFullscreen={true}
                        disablePlayPause={true}
                        disableSeekbar={true}
                        disableVolume={true}
                        disableTimer={true}
                        disableBack={true}
                        poster={`http://img.youtube.com/vi/${'czVVcL_4D18'}/default.jpg`}
                        muted={false}
                        repeat={true}
                        controls={true}
                        ignoreSilentSwitch={'ignore'}
                        paused={false}
                        onError={e => console.log('error in video is ', e)}
                        style={{ width: width, height: height }}
                    />
                )}
                <TouchableOpacity
                    onPress={onPressClose}
                    style={styles.closeBtn}>
                    <Image source={IMAGES.CROSSICON} style={styles.closeIcon} />
                </TouchableOpacity>
            </View>
        </Modal>
    )
}

const styles = STYLESHEET.create({
    imageStyle: {
        width: W(85),
        height: H(28),
        borderRadius: H(1),
        alignSelf: 'center',

    },
    modal: {
        padding: 0,
        margin: 0,
        flex: 1,
        backgroundColor: COLORS.LIGHTGREY,
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
})

export default PhotosView