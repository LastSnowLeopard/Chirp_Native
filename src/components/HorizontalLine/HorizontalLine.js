import React from "react";
import { View, Text } from 'react-native';
import { H, STYLESHEET, W } from "../../constants/StyleCommon";

const HorizontallLine = () => {
    return (
        <View style={styles.line} />
    )
}

const styles = STYLESHEET.create({
    line: {
        width: W(100),
        height: H(0.1),
        backgroundColor: '#AAAAAA'
    }
})

export default HorizontallLine;