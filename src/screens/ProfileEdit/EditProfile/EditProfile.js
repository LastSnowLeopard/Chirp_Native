import React, { useState, useRef } from "react";
import { View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView } from 'react-native';
import PostHeader from "../../../components/PostHeader/PostHeader";
import EditHeader from "../EditHeader/EditHeader";
import { useSelector, useDispatch } from "react-redux";
import RBSheet from "react-native-raw-bottom-sheet";
import styles from './Styles'
import { IMAGEBASEURL } from "../../../config/api/HttpUtils";
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'
import { COLORS, IMAGES } from "../../../constants/StyleCommon";
import Line from "../Line";
import Button from "../../../components/Button/Button";
import AppLoading from "../../../components/AppLoading/AppLoading";
import { deleteCoverImage, deleteProfileImage, updateCoverImage, updateProfileImage } from "../../../config/Redux/action";
import { EDITABOUT, EDITBIO, EDITHOBBY } from "../../../constants/Navigation";

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

const EditProfile = (props) => {

    const refRBSheet = useRef();
    let dispatch = useDispatch()
    const [isCover, setisCover] = useState(false);
    const profileData = useSelector((state) => state?.user?.profileData)
    const userHobby = useSelector((state) => state?.user?.userAddedHobby)
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
        <SafeAreaView style={styles.mainContiner}>
            {AppLoading.renderLoading(Loading)}
            <ScrollView
                showsVerticalScrollIndicator={false}>
                <PostHeader {...props} TXT={'Edit profile'} />

                {/* +++++++++++++++++++++++++++++ PROFILE PHOTO ++++++++++++++++++++++++++++++++ */}

                <EditHeader
                    TEXT={'Profile picture'}
                    BTNTEXT={'Edit'}
                    onPress={() => { setisCover(false), refRBSheet.current.open() }}
                />
                <Image
                    source={profileData?.profile_image_url !== null && profileData?.profile_image_url !== undefined ? { uri: IMAGEBASEURL + profileData?.profile_image_url } : IMAGES.PROFILE_IMAGE}
                    resizeMode={'cover'}
                    style={styles.profileImageStyle}
                />
                <Line />

                {/* +++++++++++++++++++++++++++++ COVER PHOTO ++++++++++++++++++++++++++++++++ */}

                <EditHeader
                    TEXT={'Cover photo'}
                    BTNTEXT={'Edit'}
                    onPress={() => { setisCover(true), refRBSheet.current.open() }}
                />
                <Image
                    source={profileData?.cover_photo_url !== null && profileData?.cover_photo_url !== undefined ? { uri: IMAGEBASEURL + profileData?.cover_photo_url } : IMAGES.BACKGROUNDIMAGE}
                    resizeMode={'cover'}
                    style={styles.coverImageStyle}
                />
                <Line />
                <EditHeader
                    TEXT={'Intro'}
                    BTNTEXT={'Edit'}
                    onPress={() => props.navigation.navigate(EDITBIO)}
                />
                {console.log(profileData)}
                <Text style={styles.txtStyle}>{profileData?.overview_text == undefined || profileData?.overview_text == null ? 'No intro added!' : profileData?.overview_text}</Text>
                <Line />
                {/* <EditHeader
                    TEXT={'Intro'}
                    BTNTEXT={'Edit'}
                />
                <Text style={styles.txtStyle}>{'No intro added!'}</Text>
                <Line /> */}
                <EditHeader
                    TEXT={'Hobbies'}
                    BTNTEXT={'Edit'}
                    onPress={() => props.navigation.navigate(EDITHOBBY)}
                />

                <View style={styles.chipMainContiner}>
                    {userHobby.map((item, index) => {
                        return (
                            <TouchableOpacity onPress={() => selectChip(index, item)} style={[styles.chipContiner, { backgroundColor: item?.selected === true ? COLORS.PRIMARY : COLORS.WHITE }]}>
                                <Image style={styles.iconStyle} resizeMode={'contain'} source={{ uri: item?.hobby_icon_url }} />
                                <Text style={[styles.txtChip, { color: item?.selected === true ? COLORS.WHITE : COLORS.BLACK }]}>{item?.hobby_name}</Text>
                            </TouchableOpacity>
                        )
                    })}
                </View>

                {userHobby.length === 0 && (
                    <Text style={styles.txtStyle}>{'Add youe favourite honnies to show case people of new part'}</Text>
                )}
                <Line />
                <View style={styles.btnContniner}>
                    <Button
                        onPress={() => props.navigation.navigate(EDITABOUT)}
                        BTNNAME={'Edit your About info'} />
                </View>
                <RBSheet
                    ref={refRBSheet}
                    closeOnDragDown={true}
                    closeOnPressMask={false}
                    customStyles={{
                        wrapper: {
                            backgroundColor: "#0002"
                        },
                        draggableIcon: {
                            backgroundColor: "#000"
                        },
                        container: {
                            backgroundColor: 'white'
                        }
                    }}
                >
                    <View style={styles.sheetContiner}>
                        <TouchableOpacity onPress={() => pickImageFromCamera()} style={styles.btnStyle}>
                            <Image resizeMode={'contain'} style={styles.editCameraStyle} source={IMAGES.EDITCAMERA} />
                            <Text style={styles.btnText}>Take Photo</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => pickImage()} style={styles.btnStyle}>
                            <Image resizeMode={'contain'} style={styles.editCameraStyle} source={IMAGES.EDITCAMERA} />
                            <Text style={styles.btnText}>Pick from gallery</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnStyle} onPress={() => _deleteImage()} >
                            <Image resizeMode={'contain'} style={styles.editCameraStyle} source={IMAGES.EDITCAMERA} />
                            <Text style={styles.btnText}>Delete Photo</Text>
                        </TouchableOpacity>
                    </View>
                </RBSheet>
            </ScrollView>
        </SafeAreaView>
    )
}

export default EditProfile;