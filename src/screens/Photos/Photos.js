import React, { useState } from "react";
import { View, Text, Image, FlatList, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import { useSelector } from "react-redux";
import PhotosView from "../../components/PhotosView/PhotosView";
import { IMAGEBASEURL } from "../../config/api/HttpUtils";
import { SEEALLPHOTOS } from "../../constants/Navigation";
import { COLORS, FONTS, H, IMAGES, RFVALUE, STYLESHEET, W } from "../../constants/StyleCommon";
import Styles from "../FriendsList/Styles";

const Photos = (props) => {

    const photos = useSelector((state) => state.user.userPhoto);
    const [isModalVisbile, setIsModalVisibile] = useState(false);
    const [selectedPhotos, setSelectedPhotos] = useState('')

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => { setIsModalVisibile(true), setSelectedPhotos(item) }} activeOpacity={0.2} >
                <Image
                    resizeMode={'cover'}
                    style={styles.imgStyle}
                    source={item?.media_url === null ? IMAGES.PROFILE_IMAGE : { uri: IMAGEBASEURL + item?.media_url }} />
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.mainContiner}>
            <View style={styles.btnContiner}>
                <TouchableOpacity>
                    <Text style={styles.evntTxt}>Photos</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>props.navigation.navigate(SEEALLPHOTOS,{images:photos})}>
                    <Text style={styles.seeTxt}>See all</Text>
                </TouchableOpacity>
            </View>
            <PhotosView
                isVisible={isModalVisbile}
                onPressClose={() => setIsModalVisibile(false)}
                item={selectedPhotos}
            />
            <FlatList
                data={props.slice === true ? photos.slice(0, 2) : photos}
                numColumns={2}
                renderItem={renderItem}
                columnWrapperStyle={{ alignItems: 'center', justifyContent: 'space-between', marginTop: H(1), paddingBottom: H(1) }}
            />
        </View>
    )
}

const styles = STYLESHEET.create({
    mainContiner: {
        width: W(90),
        alignSelf: 'center',
        backgroundColor: COLORS.WHITE,
        paddingBottom: H(1),
        paddingTop: H(1),
        paddingHorizontal: H(0.6),
        borderRadius: H(1.5),
        marginTop: H(2)
    },
    imgStyle: {
        width: W(43),
        height: H(25),
        borderRadius: H(1)
    },
    seeTxt: {
        fontFamily: FONTS.BOLD,
        color: COLORS.PRIMARY,
        fontSize: RFVALUE(14)
    },
    evntTxt: {
        fontSize: RFVALUE(18),
        fontFamily: FONTS.SEMIBOLD,
        color: COLORS.PRIMARY
    },
    btnContiner: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: H(2),
        paddingHorizontal: H(0.5)
    }
})

export default Photos