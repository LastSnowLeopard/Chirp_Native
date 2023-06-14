import React, { useState } from "react";
import { TouchableOpacity, Text, ScrollView,View } from 'react-native';
import { COLORS, FONTS, H, RFVALUE, STYLESHEET, W } from "../../constants/StyleCommon";


const ProfileBtn = (props) => {

    const [activeBtn, setActiveBtn] = useState(1)

    const _handleBtn = (data) => {
        setActiveBtn(data)
        props.onPress(data)
    }

    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            // contentContainerStyle={{ marginLeft: H(0), marginTop: H(1) }}
        >
            <TouchableOpacity onPress={() => { _handleBtn(1) }} style={activeBtn === 1 ? styles.activeBtnStyle : styles.btnStyle}>
                <Text style={activeBtn === 1 ? styles.activeBtnTxt : styles.btnTxt}>Posts</Text>
                {activeBtn === 1&& <View style={styles.activeBorder} />}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { _handleBtn(2) }} style={activeBtn === 2 ? styles.activeBtnStyle : styles.btnStyle}>
                <Text style={activeBtn === 2 ? styles.activeBtnTxt : styles.btnTxt}>About</Text>
                {activeBtn === 2&& <View style={styles.activeBorder} />}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { _handleBtn(3) }} style={activeBtn === 3 ? styles.activeBtnStyle : styles.btnStyle}>
                <Text style={activeBtn === 3 ? styles.activeBtnTxt : styles.btnTxt}>Friends</Text>
                {activeBtn === 3&& <View style={styles.activeBorder} />}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { _handleBtn(4) }} style={activeBtn === 4 ? styles.activeBtnStyle : styles.btnStyle}>
                <Text style={activeBtn === 4 ? styles.activeBtnTxt : styles.btnTxt}>Photos</Text>
                {activeBtn === 4&& <View style={styles.activeBorder} />}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { _handleBtn(5) }} style={activeBtn === 5 ? styles.activeBtnStyle : styles.btnStyle}>
                <Text style={activeBtn === 5 ? styles.activeBtnTxt : styles.btnTxt}>Videos</Text>
                {activeBtn === 5&& <View style={styles.activeBorder} />}
            </TouchableOpacity>
            {/* <TouchableOpacity onPress={() => { _handleBtn(6) }} style={activeBtn === 6 ? styles.activeBtnStyle : styles.btnStyle}>
                <Text style={activeBtn === 6 ? styles.activeBtnTxt : styles.btnTxt}>Events</Text>
               {activeBtn === 6&& <View style={styles.activeBorder} />}
            </TouchableOpacity> */}
        </ScrollView>
    )
}

const styles = STYLESHEET.create({
    btnTxt: {
        color: 'rgba(0, 0, 0, 0.4)',
        fontSize: RFVALUE(18),
        fontFamily: FONTS.LIGHT
    },
    btnStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        width: W(25),
        height: H(5),
        marginRight:H(1)
    },
    activeBtnStyle: {
        borderBottomColor: COLORS.PRIMARY,
        width: W(25),
        height: H(5),
        alignItems: 'center',
        justifyContent: 'center',
        marginRight:H(1)

    },
    activeBtnTxt: {
        color: COLORS.PRIMARY,
        fontSize: RFVALUE(18),
        fontFamily: FONTS.LIGHT,
    },
    activeBorder:{
        width:W(14),
        alignItems:'center',
        borderWidth:0.5,
        borderColor:COLORS.PRIMARY
    }

})

export default ProfileBtn