import React from "react";
import { SafeAreaView, View, Text, FlatList, Image ,TouchableOpacity} from 'react-native';

import { useSelector } from "react-redux";
import { IMAGEBASEURL } from "../../config/api/HttpUtils";
import { COLORS, FONTS, H, IMAGES, RFVALUE, STYLESHEET, W } from "../../constants/StyleCommon";

const Friends = (props) => {

    const friendsList = useSelector((state) => state?.user?.userTagFriends)
    const renderItem = ({ item }) => (
        <View style={styles.imagecontiner}>
            <Image
                resizeMode={'cover'}
                style={styles.frinedsImg}
                source={item?.friend_profile_image === null || item?.friend_profile_image === undefined ? IMAGES.PROFILE_IMAGE : { uri: IMAGEBASEURL + item?.friend_profile_image }} />
        </View>
    )

    return (
        <SafeAreaView style={styles.mainContiner}>
            <View style={styles.btnContiner}>
            <Text style={styles.friendTxt}>Friends</Text>
            <TouchableOpacity>
                <Text style={styles.seeTxt}>See all</Text>
            </TouchableOpacity>
            </View>
            <FlatList
                data={friendsList?.length > 0 && friendsList?.slice(0, 6)}
                numColumns={3}
                renderItem={renderItem}
                
            />
        </SafeAreaView>
    )
}


const styles = STYLESHEET.create({
    mainContiner: {
        flex: 1,
        paddingHorizontal: H(2)
    },
    friendTxt: {
        color: COLORS.BLACK,
        fontFamily: FONTS.SEMIBOLD,
        fontSize: RFVALUE(14)
    },
    frinedsImg: {
        width: W(29),
        height: H(15),
        borderRadius: W(1)
    },
    imagecontiner:{
        marginLeft:H(0.7),
        marginVertical:H(1)
    },
    btnContiner:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    seeTxt:{
        color:COLORS.PRIMARY,
        fontFamily:FONTS.SEMIBOLD
    }

})

export default Friends;