import React from "react";
import { TouchableOpacity, Text } from 'react-native';
import { COLORS, FONTS, H, RFVALUE, STYLESHEET } from "../../constants/StyleCommon";

const Button = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress} activeOpacity={0.9} style={styles.btn}>
            <Text style={styles.btnText}>{props.BTNNAME}</Text>
        </TouchableOpacity>
    )
}

const styles = STYLESHEET.create({
    btn: {
        width: '100%',
        height: H(5.3),
        borderRadius: H(1),
        backgroundColor: COLORS.PRIMARY,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnText: {
        color: COLORS.WHITE,
        fontFamily: FONTS.SEMIBOLD,
        fontSize: RFVALUE(12)
    }
})

export default Button;