import { RFValue } from "react-native-responsive-fontsize";
import { COLORS, FONTS, H, RFVALUE, STYLESHEET, W } from "../../constants/StyleCommon";


export default STYLESHEET.create({
    continer: {
        flex: 1,
    },
    middleContiner: {
        width: W(90),
        alignSelf: 'center',
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
})