import React,{useState} from "react";
import { View, Text, Image, FlatList, ImageBackground, TouchableOpacity } from 'react-native';
import { useSelector } from "react-redux";
import PhotosView from "../../components/PhotosView/PhotosView";
import { COLORS, FONTS, H, IMAGES, RFVALUE, STYLESHEET, W } from "../../constants/StyleCommon";


const Videos = () => {

    const videos = useSelector((state) => state.user.userVideo);
    const [isModalVisbile, setIsModalVisibile] = useState(false);
    const [selectedVideo ,setSelectedVideo] = useState('')

    const renderItem = ({item}) => {
        return (
            <TouchableOpacity onPress={() =>{ setIsModalVisibile(true),setSelectedVideo(item)}}>
            <Image
                resizeMode={'cover'}
                style={styles.imgStyle}
                source={IMAGES.VIDEOTHUMBNAILS} />
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.mainContiner}>
            <View style={styles.btnContiner}>
                <TouchableOpacity>
                    <Text style={styles.evntTxt}>Videos</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.seeTxt}>See all</Text>
                </TouchableOpacity>
            </View>
            <PhotosView
                isVisible={isModalVisbile}
                onPressClose={() => setIsModalVisibile(false)}
                item={selectedVideo}
            />
            <FlatList
                numColumns={2}
                data={videos}
                columnWrapperStyle={{ alignItems: 'center', justifyContent: 'space-between', marginTop: H(1) }}
                renderItem={renderItem}
            />
        </View>
    )
}

const styles = STYLESHEET.create({
    mainContiner: {
        width: W(95),
        alignSelf: 'center',
        backgroundColor: COLORS.WHITE,
        paddingBottom: H(1),
        paddingTop: H(1),
        paddingHorizontal: H(0.2),
        borderRadius: H(1.5),
        marginTop: H(2)
    },
    imgStyle: {
        width: W(46),
        height: H(25),
        borderRadius: H(2),
        overflow: 'hidden'
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

export default Videos