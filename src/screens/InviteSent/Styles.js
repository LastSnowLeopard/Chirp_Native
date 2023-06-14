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
    txtstyle: {
        color: COLORS.LIGHTBLACK,
        fontSize: RFVALUE(20.5),
        fontFamily: FONTS.SEMIBOLD,
        marginVertical: H(2),
        textAlign:'left'
    },
    checkStyle: {
        width: W(23),
        height: H(15),
        alignSelf: 'center',
       
    }
})