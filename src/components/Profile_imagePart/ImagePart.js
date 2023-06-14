import React, { useRef, useState } from "react";
import { Platform, PermissionsAndroid, ImageBackground, Image, TouchableOpacity, Text, View } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'
import { H, IMAGES } from "../../constants/StyleCommon";
import { useSelector, useDispatch } from "react-redux";
import RBSheet from "react-native-raw-bottom-sheet";
import styles from './Styles';
import AppLoading from "../AppLoading/AppLoading";
import { deleteCoverImage, deleteProfileImage, updateCoverImage, updateProfileImage } from "../../config/Redux/action";
import { IMAGEBASEURL } from "../../config/api/HttpUtils";
import AppHeader from "../AppHeader/AppHeader";

const captureOptions = {
    saveToPhotos: true,
    mediaType: 'photo',
    includeBase64: false,
}

const libraryOptions = {
    maxHeight: 200,
    maxWidth: 200,
    mediaType: 'photo',
    includeBase64: false,
}

const ImagePart = (props) => {

    const refRBSheet = useRef();
    let dispatch = useDispatch()
    const [isCover, setisCover] = useState(false);
    const profileData = useSelector((state) => state?.user?.profileData)
    const userData = useSelector((state) => state?.user?.userData)
    const Loading = useSelector(state => state.user.loading);

    const pickImage = async () => {
        refRBSheet.current.close();
        setTimeout(() => {

            launchImageLibrary(libraryOptions, (response) => {
                if (response.assets) {
                    isCover ? updateCoverPhoto(response.assets[0]) : updateProfilePhoto(response.assets[0])
                }
            })
        }, 700);
    }

    const pickImageFromCamera = async () => {
        refRBSheet.current.close();
        setTimeout(async () => {
            if (Platform.OS === 'android') {
                const grantedcamera = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.CAMERA,
                    {
                        title: "App Camera Permission",
                        message: "App needs access to your camera ",
                        buttonNeutral: "Ask Me Later",
                        buttonNegative: "Cancel",
                        buttonPositive: "OK"
                    }
                );
                if (grantedcamera === PermissionsAndroid.RESULTS.GRANTED) {
                    launchCamera(captureOptions, (response) => {
                        if (response.assets) {
                            isCover ? updateCoverPhoto(response.assets[0]) : updateProfilePhoto(response.assets[0])
                        }
                    })
                }

            }
            launchCamera(captureOptions, (response) => {
                if (response.assets) {
                    isCover ? updateCoverPhoto(response.assets[0]) : updateProfilePhoto(response.assets[0])
                }
            })
        }, 700);
    };

    const _deleteImage = () => {
        refRBSheet.current.close();
        const data = JSON.stringify({
            "userId": profileData?.user_id,
            "profileId": profileData?.profile_id
        })
        const userData = JSON.stringify({
            "userId": profileData?.user_id
        })
        if (isCover) {
            dispatch(deleteCoverImage(data, userData))
        }
        else {
            dispatch(deleteProfileImage(data, userData))
        }
    }

    const updateCoverPhoto = (image) => {
        var formdata = new FormData();
        formdata.append('userId', profileData?.user_id);
        formdata.append('profileId', profileData?.profile_id);
        formdata.append('cover_image', {
            uri: image.uri,
            name: image.fileName,
            type: image.type,
        });

        const userData = JSON.stringify({
            "userId": profileData?.user_id
        })
        dispatch(updateCoverImage(formdata, userData))
    }

    const updateProfilePhoto = (image) => {
        var formdata = new FormData();
        formdata.append('userId', profileData?.user_id);
        formdata.append('profileId', profileData?.profile_id);
        formdata.append('profile_image', {
            uri: image.uri,
            name: image.fileName,
            type: image.type,
        });
        const userData = JSON.stringify({
            "userId": profileData?.user_id
        })
        dispatch(updateProfileImage(formdata, userData))
    }

    return (
        <>
            <View style={styles.imageContiner}>
                {AppLoading.renderLoading(Loading)}
                <ImageBackground
                    source={profileData?.cover_photo_url !== null && profileData?.cover_photo_url !== undefined ? { uri: IMAGEBASEURL + profileData?.cover_photo_url } : IMAGES.BACKGROUNDIMAGE}
                    style={styles.backgroundStyle}>
                    {/* <TouchableOpacity
                        onPress={() => {
                            // refRBSheet.current.open()
                            // setisCover(true)
                        }}
                        style={styles.editBgBtn}>
                        <Image
                            source={IMAGES.EDITCAMERA}
                            resizeMode={'contain'}
                            style={styles.EditCamerBg}
                        />
                    </TouchableOpacity> */}
                </ImageBackground>
                <View style={styles.userDetailContiner}>
                    <Image
                        resizeMode={'cover'}
                        style={styles.profileStyle}
                        source={profileData?.profile_image_url !== null && profileData?.profile_image_url !== undefined ? { uri: IMAGEBASEURL + profileData?.profile_image_url } : IMAGES.PROFILE_IMAGE}
                    />
                    <View style={styles.userDetail}>
                        <Text style={styles.nameTxt}>{userData?.full_name}</Text>
                        <Text style={styles.totalFriendTxt}>{'4k Friends'}</Text>
                    </View>
                </View>
            </View>
        </>
    )
}

export default ImagePart;