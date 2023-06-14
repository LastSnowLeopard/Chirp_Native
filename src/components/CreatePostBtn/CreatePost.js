import React from "react";
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useSelector } from "react-redux";
import { IMAGEBASEURL } from "../../config/api/HttpUtils";
import { CREATEPOST } from "../../constants/Navigation";
import { IMAGES } from "../../constants/StyleCommon";
import styles from './Styles'

const CreatePost = (props) => {

    const profileData = useSelector((state) => state?.user?.profileData);

    return (
        <TouchableOpacity
            onPress={() => props.navigation.navigate(CREATEPOST)}
            activeOpacity={0.9} style={styles.mainContiner}>
            <View style={styles.middleContiner}>
                <Text style={styles.createTxt}>Create Post</Text>
                <View style={styles.imageContiner}>
                    {/* <Image style={styles.imgStyle} source={IMAGES.LIVE} resizeMode={'contain'} />
                    <Image style={styles.imgStyle} source={IMAGES.PHOTOVIDEO} resizeMode={'contain'} />
                    <Image style={styles.imgStyle} source={IMAGES.CAMERA} resizeMode={'contain'} /> */}
                </View>
            </View>
            <View style={styles.txtInputContiner}>
                <Image resizeMode={'cover'} style={styles.profileImg} source={profileData?.profile_image_url !== null && profileData?.profile_image_url !== undefined ? { uri: IMAGEBASEURL + profileData?.profile_image_url } : IMAGES.PROFILE_IMAGE} />
                <Text style={styles.txtStyle}>What’s on your mind?</Text>
            </View>
        </TouchableOpacity>
    )
}

export default CreatePost;