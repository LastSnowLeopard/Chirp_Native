import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';

import { COLORS, FONTS, H, IMAGES, RFVALUE, STYLESHEET, W } from "../../constants/StyleCommon";

const Events = () => {

    const renderItem = () => {
        return (
            <View style={styles.cardContiner}>
                <Image
                    resizeMode={'cover'}
                    style={styles.eventStyle}
                    source={IMAGES.EVEWNTSPHOTO} />
                <View style={{ paddingLeft: H(1) }}>
                    <Text style={styles.happTxt}>Happening Now</Text>
                    <Text style={styles.desTxt}>Black Sparrow Black Sparrow</Text>
                    <Text style={styles.timTxt}>Manhattan East, NY</Text>
                    <Text style={styles.timTxt}>Monday, 5:12PM</Text>
                </View>
            </View>
        )
    }

    return (
        <View style={styles.mainContiner}>
            <View style={styles.btnContiner}>
                <TouchableOpacity>
                    <Text style={styles.evntTxt}>Recent Events</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.seeTxt}>See all</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={[1, 2, 3, 4, 5, 6, 7, 8]}
                renderItem={renderItem}
            />
        </View>
    )
}

const styles = STYLESHEET.create({
    mainContiner: {
        width: W(95),
        alignSelf: 'center',
        paddingBottom: H(1),
        paddingBottom: H(1),
        paddingHorizontal: H(1),
        backgroundColor: COLORS.WHITE,
        borderRadius: H(1),
        borderRadius:H(1.5),
        marginTop:H(2)
    },
    eventStyle: {
        width: W(40),
        height: H(14),
        borderRadius: H(1)
    },
    happTxt: {
        color: '#6D6D6D',
        fontSize: RFVALUE(14),
        fontFamily: FONTS.LIGHT
    },
    desTxt: {
        color: '#474747',
        fontSize: RFVALUE(14),
        fontFamily: FONTS.SEMIBOLD,
        width: W(50)
    },
    timTxt: {
        color: '#474747',
        fontFamily: FONTS.REGULAR,
        fontSize: RFVALUE(15)
    },
    cardContiner: {
        flexDirection: 'row',
        marginTop: H(1),
        alignItems: 'center'
    },
    seeTxt:{
        fontFamily:FONTS.BOLD,
        color:COLORS.PRIMARY,
        fontSize:RFVALUE(14)
    },
    evntTxt:{
        fontSize:RFVALUE(18),
        fontFamily:FONTS.SEMIBOLD,
        color:COLORS.PRIMARY
    },
    btnContiner:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginVertical:H(2),
        paddingHorizontal:H(0.5)
    }
})

export default Events;