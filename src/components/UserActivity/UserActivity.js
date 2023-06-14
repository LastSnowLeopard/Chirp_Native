import React from "react";
import { View, Text } from 'react-native';
import { COLORS, FONTS, H, RFVALUE, STYLESHEET, W } from "../../constants/StyleCommon";
import HorizontallLine from "../HorizontalLine/HorizontalLine";
import { useSelector } from "react-redux";

const UserActivity = (props) => {

    const profileData = useSelector((state) => state?.user?.profileData)
    return (
        <>
            <HorizontallLine />
            <View style={styles.activityContiner}>
                <View style={styles.innerContiner}>
                    <Text style={styles.txtStyle}>Posts</Text>
                    <Text style={styles.txtStyle}>{profileData?.totalPost||0}</Text>
                </View>
                <View style={styles.innerContiner}>
                    <Text style={styles.txtStyle}>Friends</Text>
                    <Text style={styles.txtStyle}>{profileData?.total_friends}</Text>
                </View>
            </View>
            <HorizontallLine />
        </>
    )
}

const styles = STYLESHEET.create({
    txtStyle: {
        color: COLORS.PRIMARY,
        fontSize: RFVALUE(14),
        fontFamily: FONTS.BOLD,
        textAlign: 'center'
    },
    activityContiner: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: H(2),
        alignSelf: 'center'
    },
    innerContiner: {
        width: W(25),
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default UserActivity;