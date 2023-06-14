import React from "react";
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { COLORS, IMAGES } from "../../constants/StyleCommon";
import styles from './Styles';

const SocailLogin = (props) => {
    return (
        <View>
            <TouchableOpacity
             activeOpacity={0.8}
              style={[styles.googleBtn, { backgroundColor: COLORS.GOOGLEBTNCOLOR }]}>
                <Image
                    resizeMode={'contain'}
                    source={IMAGES.GOOGLE}
                    style={styles.iconStyle}
                />
                <Text style={[styles.fbTxtStyle, { color: COLORS.BLACK }]}>Continue with Google</Text>
            </TouchableOpacity>
            <TouchableOpacity 
             activeOpacity={0.8}
             style={[styles.googleBtn, { backgroundColor: COLORS.FACEBOOKBTNCOLOR }]}>
                <Image
                    resizeMode={'contain'}
                    source={IMAGES.FACEBOOK}
                    style={styles.iconStyle}
                />
                <Text style={styles.fbTxtStyle}>Continue with Facebook</Text>
            </TouchableOpacity>
        </View>
    )
}

export default SocailLogin;