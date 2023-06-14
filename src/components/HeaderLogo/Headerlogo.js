import React from "react";
import { Image } from 'react-native';
import { H, IMAGES, STYLESHEET, W } from "../../constants/StyleCommon";

const HeaderLogo = () => {
    return (
        <Image
            source={IMAGES.APPLOGO}
            resizeMode={'contain'}
            style={styles.logoStyle}
        />
    )
}

const styles = STYLESHEET.create({
    logoStyle: {
        width: W(27),
        height: H(17),
    }
})
export default HeaderLogo;