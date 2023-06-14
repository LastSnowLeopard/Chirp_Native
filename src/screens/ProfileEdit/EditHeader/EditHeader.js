import React from "react";
import { View, Text, TouchableOpacity } from 'react-native';
import { COLORS, FONTS, H, RFVALUE, STYLESHEET, W } from "../../../constants/StyleCommon";


const EditHeader = (props) => {
    return (
        <View style={styles.editHeaderContiner}>
            <Text style={styles.txtStyle}>{props.TEXT}</Text>
            <TouchableOpacity onPress={props.onPress}>
                <Text style={styles.btnTxt}>{props.BTNTEXT}</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = STYLESHEET.create({
    editHeaderContiner: {
        width: W(94),
        alignSelf: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        height: H(4),
        marginVertical: H(1)
    },
    btnTxt: {
        color: COLORS.PRIMARY,
        fontSize: RFVALUE(14),
        fontFamily: FONTS.MEDIUM
    },
    txtStyle: {
        color: COLORS.BLACK,
        fontFamily: FONTS.BOLD,
        fontSize: RFVALUE(14)
    }
})

export default EditHeader;