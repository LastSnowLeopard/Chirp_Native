import React from "react";
import { View, Text } from 'react-native';
import { COLORS, FONTS, RFVALUE, STYLESHEET } from "../../constants/StyleCommon";

const SubHeading = (props) => {
    return (
        <Text style={styles.textStyle}>{props.TEXT}</Text>
    )
}

const styles = STYLESHEET.create({
    textStyle: {
        fontSize: RFVALUE(18),
        color: COLORS.LIGHTBLACK,
        fontFamily: FONTS.SEMIBOLD,
    }
})

export default SubHeading;