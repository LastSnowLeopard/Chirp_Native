import React from "react";
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useSelector } from "react-redux";
import IMAGES from "../../assets/images/images";
import { EDITABOUT } from "../../constants/Navigation";
import { COLORS, FONTS, H, RFVALUE, STYLESHEET, W } from "../../constants/StyleCommon";


const About = (props) => {

    const profileData = useSelector((state) => state?.user?.profileData);
    const aboutData = useSelector((state) => state.user.aboutData)
    const userHobby = useSelector((state) => state?.user?.userAddedHobby)

    return (
        <TouchableOpacity onPress={() => props.navigation.navigate(EDITABOUT)} style={styles.mainContiner}>
            <Text style={styles.aboutHeadingTxt}>About</Text>

            <Text style={styles.overViewTxt}>{profileData?.overview_text}</Text>
            {profileData?.privacy !== null && (
                <View style={styles.imgTxtContiner}>
                    <Image
                        resizeMode={'contain'}
                        style={styles.locationImg}
                        source={IMAGES.PRIVACYTAGIMAGE} />
                    <View>
                        <Text style={styles.locTxt}>{profileData?.privacy}</Text>
                        <Text style={styles.locTxt}>Whats up, how are you?</Text>
                    </View>
                </View>
            )}
            {aboutData?.education?.length > 0 && (
                aboutData?.education?.slice(0, 2)?.map((item) => {
                    return (
                        <View style={styles.imgTxtContiner}>
                            <Image
                                resizeMode={'contain'}
                                style={styles.locationImg}
                                tintColor={COLORS.PRIMARY}
                                source={IMAGES.EDUCATIONICON} />
                            <Text>
                                <Text>  Studied at </Text>
                                <Text style={[styles.locTxt, { fontFamily: FONTS.SEMIBOLD }]}>{item?.college}</Text>
                            </Text>
                        </View>
                    )
                }))}
            {aboutData?.work?.length > 0 && (
                aboutData?.work?.slice(0, 2)?.map((item) => {
                    return (
                        <View style={[styles.imgTxtContiner]}>
                            <Image
                                resizeMode={'contain'}
                                style={styles.locationImg}
                                tintColor={COLORS.PRIMARY}
                                source={IMAGES.WORKICON} />
                            <Text style={styles.locTxt}>
                                <Text>{'Work at ' + item?.city_town + " in "}</Text>
                                <Text style={{ fontFamily: FONTS.SEMIBOLD }}>{item?.company}</Text>
                            </Text>
                        </View>
                    )
                }))}
            {aboutData?.placesLived?.length > 0 && (
                aboutData?.placesLived?.slice(0, 2)?.map((item) => {
                    return (
                        <View style={styles.imgTxtContiner}>
                            <Image
                                resizeMode={'contain'}
                                style={styles.locationImg}
                                source={IMAGES.LOCATION} />
                            <Text numberOfLines={2} style={{ width: W(76) }}>
                                <Text style={styles.locTxt}>{'  Lives' + " in "}</Text>
                                <Text style={[styles.locTxt, { fontFamily: FONTS.SEMIBOLD }]}>{item?.city}</Text>
                            </Text>
                        </View>
                    )
                }))}

            {aboutData?.RelationShip?.length > 0 && (
                aboutData?.RelationShip?.slice(0, 2)?.map((item) => {
                    return (
                        <View style={styles.imgTxtContiner}>
                            <Image
                                resizeMode={'contain'}
                                style={styles.locationImg}
                                source={IMAGES.RELATIONSHIP} />
                            <Text style={styles.locTxt}>{item?.full_name + " " + item?.relationship}</Text>
                        </View>
                    )
                })
            )}
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
        </TouchableOpacity>
    )
}

const styles = STYLESHEET.create({
    mainContiner: {
        width: W(90),
        backgroundColor: COLORS.WHITE,
        paddingBottom: H(1),
        paddingTop: H(1),
        alignSelf: 'center',
        marginTop: H(2),
        borderRadius: H(0.7),
        paddingHorizontal: H(1.5)
    },
    aboutHeadingTxt: {
        color: '#4D5154',
        fontFamily: FONTS.SEMIBOLD,
        fontSize: RFVALUE(19)
    },
    overViewTxt: {
        color: COLORS.BLACK,
        fontFamily: FONTS.SEMIBOLD,
        fontSize: RFVALUE(14)
    },
    locationImg: {
        width: W(6),
        height: H(6)
    },
    imgTxtContiner: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    locTxt: {
        color: '#4D5154',
        fontFamily: FONTS.REGULAR,
        fontSize: RFVALUE(13),
        paddingLeft: H(1.4)
    },
    chipContiner: {
        flexDirection: 'row',
        alignItems: 'center',
        height: H(4),
        borderRadius: H(5),
        borderWidth: 1,
        borderColor: COLORS.BORDERCOLOR,
        // minWidth:W(25),
        justifyContent: 'center',
        marginLeft: H(1),
        marginVertical: H(0.5),
        paddingHorizontal: H(3)
    },
    chipMainContiner: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        width: W(90),
        alignSelf: 'center'
    },
    iconStyle: {
        width: W(3),
        height: H(5)
    },
    txtChip: {
        fontSize: RFVALUE(12),
        color: COLORS.BLACK,
        fontFamily: FONTS.REGULAR,
        paddingLeft: H(1)
    }
})

export default About