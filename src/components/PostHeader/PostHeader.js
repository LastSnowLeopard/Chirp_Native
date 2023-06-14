import React from "react";
import { View, Text, TouchableOpacity, Image,Platform } from 'react-native';
import { COLORS, FONTS, H, IMAGES, RFVALUE, STYLESHEET, W } from "../../constants/StyleCommon";


const PostHeader = (props) => {
    return (
        <View style={styles.headerContienr}>
            <View style={{ overflow: 'hidden', paddingBottom: 5 }}>
                <View style={styles.headerSadow}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', height: H(7),marginTop:Platform.OS === 'android'? H(1):H(0) }}>
                        <TouchableOpacity onPress={() => props.navigation.goBack()}>
                            <Image
                                resizeMode={'contain'}
                                style={styles.imgStyle}
                                source={IMAGES.ARRROWLEFT} />
                        </TouchableOpacity>
                        <Text style={styles.cretePostTxt}>{props.TXT}</Text>
                    </View>
                    {
                        props.postBtn && (
                            <TouchableOpacity onPress={props.onPressPost} style={[styles.postBtnStyle, { backgroundColor: props.enable ? COLORS.PRIMARY : '#F5F5F5' }]}>
                                <Text style={[styles.btnTxt, { color: props.enable ? COLORS.WHITE : 'rgba(0, 0, 0, 0.3)' }]}>Post</Text>
                            </TouchableOpacity>
                        )
                    }
                </View>
            </View>
        </View>
    )
}

const styles = STYLESHEET.create({
    headerContienr: {
        width: W(100),
        height: H(7),
        backgroundColor: COLORS.WHITE,
        borderBottomWidth: 1.5,
        borderBottomColor: COLORS.LIGHTGREY,
        flexDirection: 'row',
        alignItems: 'center',
    },
    cretePostTxt: {
        color: COLORS.PRIMARY,
        fontFamily: FONTS.REGULAR,
        fontSize: RFVALUE(16),
        paddingLeft: H(2)
    },
    imgStyle: {
        width: W(9),
        height: H(3)
    },
    headerSadow: {
        backgroundColor: '#fff',
        width: W(100),
        height: 60,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.4,
        shadowRadius: 3,
        elevation: 5,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: H(1),
        justifyContent: 'space-between',
    },
    postBtnStyle: {
        width: W(20),
        height: H(4),
        backgroundColor: COLORS.PRIMARY,
        borderRadius: H(0.5),
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnTxt: {
        fontSize: RFVALUE(14),
        color: 'rgba(0, 0, 0, 0.3)',
        fontFamily: FONTS.REGULAR
    }
})

export default PostHeader