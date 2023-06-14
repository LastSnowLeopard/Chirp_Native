import React from "react";
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { IMAGES } from "../../constants/StyleCommon";
import styles from './Styles'

const AppHeader = () => {
    return (
        <View style={styles.mainContiner}>
            <Image
                source={IMAGES.APPLOGO}
                resizeMode={'contain'}
                style={styles.applogoImg}
            />
            <View style={styles.rightContiner}>
                <TouchableOpacity style={styles.btnStyle}>
                    <Image
                        resizeMode={'contain'}
                        style={styles.searchImgStyle}
                        source={IMAGES.SEARCH} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnStyle}>
                    <Image
                        resizeMode={'contain'}
                        style={styles.searchImgStyle}
                        source={IMAGES.MESSAGEICON} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default AppHeader;