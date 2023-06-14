import React from "react";
import { View, Text, Image ,TouchableOpacity} from 'react-native';
import { EDITABOUT } from "../../constants/Navigation";
import { COLORS, FONTS, H, IMAGES, RFVALUE, STYLESHEET, W } from "../../constants/StyleCommon";
import HorizontallLine from "../HorizontalLine/HorizontalLine";

const UserBio = (props) => {
    return (
        <TouchableOpacity onPress={()=>props.navigation.navigate(EDITABOUT)}>
            <View style={{marginTop:H(2)}} />
            <View style={styles.innerContiner}>
                <Image style={styles.icon} source={IMAGES.COMPANY}/>
                <Text style={styles.mainTxt}>
                    <Text numberOfLines={1} style={styles.txtStyle}>{'Founder and CEO at '}</Text>
                    <Text numberOfLines={1} style={styles.normaltxtStyle}>{'A to Z company Ltd.'}</Text>
                </Text>
            </View>
            <View style={styles.innerContiner}>
                <Image style={styles.icon} source={IMAGES.EDUCATONPROFILE}/>
                <Text style={styles.mainTxt}>
                    <Text numberOfLines={1} style={styles.txtStyle}>{'Studied Computer Science at '}</Text>
                    <Text numberOfLines={1}style={styles.normaltxtStyle}>{'Harvard University'}</Text>
                </Text>
            </View>
            <View style={styles.innerContiner}>
                <Image style={styles.icon} source={IMAGES.HOMEPROFILEICON}/>
                <Text style={styles.mainTxt}>
                    <Text numberOfLines={1} style={styles.txtStyle}>{'Lives in '}</Text>
                    <Text numberOfLines={1} style={styles.normaltxtStyle}>{'Mumbai, Maharastra'}</Text>
                </Text>
            </View>
            <View style={styles.innerContiner}>
                <Image style={styles.icon} source={IMAGES.LOCATIONPIN}/>
                <Text style={styles.mainTxt}>
                    <Text numberOfLines={1} style={styles.txtStyle}>{'From '}</Text>
                    <Text numberOfLines={1} style={styles.normaltxtStyle}>{'Mumbai, India.'}</Text>
                </Text>
            </View>
            <View style={{marginTop:H(2)}} />
            <HorizontallLine />
            <View>
                <Text></Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = STYLESHEET.create({
    innerContiner:{
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:H(2),
        marginVertical:H(0.2)
    },
    icon:{
        width:W(5),
        height:H(3),
        resizeMode:'contain'
    },
    txtStyle:{
        color:'grey',
        fontFamily:FONTS.MEDIUM,
        fontSize:RFVALUE(12)
    },
    normaltxtStyle:{
        color:COLORS.BLACK,
        fontFamily:FONTS.MEDIUM,
        fontSize:RFVALUE(12)
    },
    mainTxt:{
        paddingLeft:H(1)
    }
})

export default UserBio;