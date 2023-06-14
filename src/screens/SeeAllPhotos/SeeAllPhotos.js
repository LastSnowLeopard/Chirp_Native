import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Text, Image, Platform, PermissionsAndroid, FlatList, TouchableOpacity, ImageBackground } from 'react-native';
import { CameraRoll } from "@react-native-camera-roll/camera-roll";
import styles from './Styles'
import { COLORS, H, IMAGES, W } from "../../constants/StyleCommon";
import { IMAGEBASEURL } from "../../config/api/HttpUtils";
import PhotosView from "../../components/PhotosView/PhotosView";



const SeeAllPhotos = (props) => {

    const [isModalVisbile, setIsModalVisibile] = useState(false);
    const [selectedPhotos, setSelectedPhotos] = useState('')

    const renderItem = ({ item, index }) => (
        <TouchableOpacity onPress={() => { setIsModalVisibile(true), setSelectedPhotos(item) }} style={[styles.imgContiner]}>
            <ImageBackground
                source={{ uri: IMAGEBASEURL + item?.media_url }}
                style={styles.imgStyle}>
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
                            source={IMAGES.ARRROWLEFT} />
                    </TouchableOpacity>
                    {/* <TouchableOpacity style={styles.postBtnStyle}>
                        <Image resizeMode={'contain'} style={styles.cameraImg} source={IMAGES.CAMERA} />
                    </TouchableOpacity> */}
                </View>
            </View>

            <View style={styles.topContiner}>
                <Text style={styles.galleryTxt}>Photos</Text>
                {/* <TouchableOpacity style={styles.imgTxtContiner}>
                    <Image 
                     resizeMode={'contain'}
                     style={styles.multipleImg}
                    source={IMAGES.GALLERYIMAGE} />
                    <Text style={styles.selectTxt}>Select multiple</Text>
                </TouchableOpacity> */}
            </View>
            <PhotosView
                isVisible={isModalVisbile}
                onPressClose={() => setIsModalVisibile(false)}
                item={selectedPhotos}
            />
            <FlatList
                numColumns={3}
                data={props?.route?.params?.images}
                columnWrapperStyle={styles.columnWrapperStyle}
                renderItem={renderItem}
            />
        </SafeAreaView>
    )
}

export default SeeAllPhotos