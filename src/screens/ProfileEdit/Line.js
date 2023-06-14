import React from "react";
import { View } from 'react-native';
import { COLORS, H, STYLESHEET, W } from "../../constants/StyleCommon";


const Line = () => {
    return (
        <View style={styles.lineStyle} />
    )
}

const styles = STYLESHEET.create({
    lineStyle: {
        width: W(94),
        alignSelf: 'center',
        height: H(0.2),
        backgroundColor: COLORS.LIGHTGREY,
        marginVertical:H(1.5)
    }
})
export default Line;