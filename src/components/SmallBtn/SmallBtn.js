import React from "react";
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { COLORS, FONTS, H, RFVALUE, STYLESHEET, W } from "../../constants/StyleCommon";
import LinearGradient from "react-native-linear-gradient";

const SmBtn = (props) => {
    const { TXT, onPress, isDark, source } = props
    return (
        <TouchableOpacity style={[styles.btnStyle, { backgroundColor: isDark ? COLORS.WHITE : COLORS.PRIMARY, }]} onPress={onPress}>
            {props?.icon === true && <Image
                resizeMode={'contain'}
                style={styles.iconStyle}
                source={source} />
            }
            <Text style={[styles.btnTxt, { color: isDark ? COLORS.BLACK : COLORS.WHITE }]}>{TXT}</Text>
        </TouchableOpacity>
    )
}

const styles = STYLESHEET.create({
    btnTxt: {
        color: COLORS.WHITE,
        fontFamily: FONTS.SEMIBOLD,
        fontSize: RFVALUE(15),
    },
    btnStyle: {
        width: W(48),
        height: H(6),
        borderRadius: H(0.6),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.PRIMARY,
        borderWidth: 1,
        borderColor: COLORS.PRIMARY,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingHorizontal: H(2)
    },
    iconStyle: {
        width: W(5),
        height: H(4)
    }
})

export default SmBtn;