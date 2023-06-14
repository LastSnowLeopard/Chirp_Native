import { COLORS, FONTS, H, RFVALUE, STYLESHEET, W } from "../../../constants/StyleCommon";


export default STYLESHEET.create({
    mainContiner: {
        flex: 1,
    },
    headingTxt: {
        fontFamily: FONTS.MEDIUM,
        fontSize: RFVALUE(14),
        color: COLORS.BLACK
    },
    middleContiner: {
        backgroundColor: COLORS.WHITE,
        padding: H(2)
    },
    subHeadingTxt: {
        fontFamily: FONTS.REGULAR,
        fontSize: RFVALUE(12),
        color: COLORS.BLACK,
        marginTop: H(1)
    },
    globeImg: {
        width: W(8),
        height: H(6)
    },
    btnContiner: {
        flexDirection: 'row',
        alignItems: 'center',
        height: H(8)
    },
    txtStyle: {
        fontSize: RFVALUE(14),
        paddingLeft: H(1),
        fontFamily: FONTS.MEDIUM
    }
})