import { COLORS, FONTS, H, RFVALUE, STYLESHEET, W } from "../../constants/StyleCommon";


export default STYLESHEET.create({
    googleBtn: {
        width: '100%',
        height: H(5.3),
        borderRadius: H(1),
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginVertical:H(1)
    },
    iconStyle: {
        width: W(7),
        height: H(2.5)
    },
    fbTxtStyle: {
        color: COLORS.WHITE,
        fontFamily: FONTS.SEMIBOLD,
        fontSize: RFVALUE(11)
    }
})