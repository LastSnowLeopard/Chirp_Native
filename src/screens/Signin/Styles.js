import { RFValue } from "react-native-responsive-fontsize";
import { COLORS, FONTS, H, RFVALUE, STYLESHEET, W } from "../../constants/StyleCommon";


export default STYLESHEET.create({
    continer: {
        flex: 1,
        backgroundColor:COLORS.WHITE
    },
    middleContiner: {
        width: W(100),
        alignSelf: 'center',
        backgroundColor:COLORS.WHITE,
        flex:1
    },
    logoAfterontiner: {
        width: W(84),
        alignSelf: 'center'
    },
    doNotTextStyle: {
        color: COLORS.PLACHOLDERTEXTCOLOR,
        fontSize: RFValue(12),
        fontWeight: '400',
        fontFamily: FONTS.REGULAR,
    },
    signUpTextStyle: {
        fontSize: RFVALUE(12),
        color: COLORS.PRIMARY,
        fontFamily: FONTS.SEMIBOLD,
        marginTop: H(2),
        textAlign: 'center'
    },
    donotHaveAccountTextContiner: {
        alignSelf: 'center',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',  
    },
    forgotBtnTxt:{
        color:COLORS.PRIMARY,
        fontSize:RFVALUE(12),
        fontFamily:FONTS.REGULAR,
    },
    forgotBtn:{
        alignSelf:'flex-end',
        marginTop:H(-1),
        paddingRight:H(1)
    }
})