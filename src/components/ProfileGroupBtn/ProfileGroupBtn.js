import React from "react";
import { View, Image, TouchableOpacity } from 'react-native';
import { CREATEPOST, EDITPROFILE, SCAN } from "../../constants/Navigation";
import { IMAGES, STYLESHEET, W, H } from "../../constants/StyleCommon";
import SmBtn from "../SmallBtn/SmallBtn";


const ProfileGroupBtn = (props) => {
    return (
        <View style={styles.editProfileContiainer}>

            <SmBtn
                TXT={'Edit profile'}
                source={IMAGES.EDITICON}
                icon={true}
                onPress={() => props.navigation.navigate(EDITPROFILE)}
            />
            <TouchableOpacity 
            onPress={() => props.navigation.navigate(SCAN)}
            style={styles.btn}>
                <Image resizeMode={'contain'} style={styles.qrCodeStyle} source={IMAGES.QRCODE} />
            </TouchableOpacity>
        </View>
    )
}

const styles = STYLESHEET.create({
    editProfileContiainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: W(90),
        alignSelf: 'center',
        marginVertical: H(2),
        
    },
    imageStyle: {
        width: W(3),
        height: H(3)
    },
    qrCodeStyle:{
        width:W(6),
        height:H(4)
    },
    btn:{
        width:W(25),
        height:H(6),
        backgroundColor:'#939393',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:H(0.5),
        marginRight:H(3)
    }
})
export default ProfileGroupBtn;