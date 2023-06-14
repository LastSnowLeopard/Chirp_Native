import React from 'react'
import { Text } from 'react-native';
import { COLORS, FONTS, RFVALUE, STYLESHEET } from '../../constants/StyleCommon';

const Heading = (props) => {
    return (
        <Text style={styles.textStyle}>{props.TEXT}</Text>
    )
}

const styles = STYLESHEET.create({
    textStyle: {
        fontSize: RFVALUE(38),
        color: COLORS.PRIMARY,
        fontFamily: FONTS.BOLD,

    }
})
export default Heading