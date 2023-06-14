import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Text, Image, Platform, PermissionsAndroid, FlatList, TouchableOpacity, ImageBackground } from 'react-native';
import { CameraRoll } from "@react-native-camera-roll/camera-roll";
import styles from './Styles'
import { COLORS, H, IMAGES, W } from "../../../constants/StyleCommon";
import Button from "../../../components/Button/Button";


const PhotoVideo = (props) => {

    const [allMedia, setAllMedia] = useState([])
    useEffect(() => {
        getAllMedia();
    }, [])

    const _handleImages = (item, index) => {
        let temp = [...allMedia]
        temp[index].selected = !item?.selected
        setAllMedia([...temp])
    }

    async function hasAndroidPermission() {
        const permission = Platform.Version >= 33 ? PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES : PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE;
        const hasPermission = await PermissionsAndroid.check(permission);
        if (hasPermission) {
            return true;
        }

        const status = await PermissionsAndroid.request(permission);
        return status === 'granted';
    }

    async function getAllMedia() {
        if (Platform.OS === "android" && !(await hasAndroidPermission())) {
            return;
        }


        try {
            await CameraRoll.getPhotos({ first: 1000, assetType: 'All' })
                .then(r => {
                    const images = r.edges.map((item) => {
                        const data = {
                            ...item,
                            selected: false
                        }
                        return data;
                    })
                    setAllMedia(images);
                })
        } catch (error) {
            console.log(error);
        }
    };

    const _handleImage = () => {

        let temp = []
        allMedia.map((item) => {
            if (item?.selected === true) {
                temp.push(item)
            }
        })
        if (temp.length === 0) {
            alert('Kindly select 1 image or video')
        }
        else {
            props.route.params.setImages(temp)
            props.navigation.goBack()
        }
    }

    const renderItem = ({ item, index }) => (
        <TouchableOpacity onPress={() => _handleImages(item, index)} style={[styles.imgContiner]}>
            <ImageBackground
                source={{ uri: item.node.image.uri }}
                style={styles.imgStyle}
            >
                <TouchableOpacity style={styles.btnStyle} onPress={() => _handleImages(item, index)}>
                    <Image resizeMode={'contain'} style={styles.emptyCircle} source={item?.selected?IMAGES.CHECKCIRCLE: IMAGES.UNCHECKCIRCLE} />
                </TouchableOpacity>
            </ImageBackground>
        </TouchableOpacity>
    )

    return (
        <SafeAreaView style={styles.mainContiner}>
            <View style={{ overflow: 'hidden', paddingBottom: 5 }}>
                <View style={styles.headerSadow}>
                    <TouchableOpacity onPress={() => props.navigation.goBack()}>
                        <Image
                            resizeMode={'contain'}
                            style={styles.arrowLeftImg}
                            source={IMAGES.CROSS} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.postBtnStyle}>
                        <Image resizeMode={'contain'} style={styles.cameraImg} source={IMAGES.CAMERA} />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.topContiner}>
                <Text style={styles.galleryTxt}>Gallery</Text>
                {/* <TouchableOpacity style={styles.imgTxtContiner}>
                    <Image 
                     resizeMode={'contain'}
                     style={styles.multipleImg}
                    source={IMAGES.GALLERYIMAGE} />
                    <Text style={styles.selectTxt}>Select multiple</Text>
                </TouchableOpacity> */}
            </View>
            <FlatList
                numColumns={3}
                data={allMedia}
                columnWrapperStyle={styles.columnWrapperStyle}
                renderItem={renderItem}
            />
            <View style={styles.doneBtn}>
                <Button
                    BTNNAME={'Done'}
                    onPress={() => _handleImage()}
                />
            </View>
        </SafeAreaView>
    )
}

export default PhotoVideo