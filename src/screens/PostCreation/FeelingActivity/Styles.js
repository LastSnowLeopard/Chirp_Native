import { COLORS, STYLESHEET, W, H, FONTS, RFVALUE } from "../../../constants/StyleCommon";


export default STYLESHEET.create({
    mainContiner: {
        flex: 1,
        // backgroundColor: COLORS.WHITE
    },
    searchInputStyle: {
        width: W(90),
        backgroundColor: COLORS.LIGHTGREY,
        height: H(5),
        borderRadius: H(3),
        paddingLeft: H(2),
        fontSize: RFVALUE(14),
        color: COLORS.BLACK,
        fontFamily: FONTS.REGULAR,
    },
    searchContiner: {
        backgroundColor: COLORS.WHITE,
        padding: H(1)
    },
    sugTxt: {
        color: COLORS.BLACK,
        fontFamily: FONTS.BOLD,
        fontSize: RFVALUE(14),
        paddingHorizontal: H(1),
        marginVertical: H(1)
    },
    cardContiner: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.WHITE,
        width: W(100),
        marginVertical: H(0.2),
        height: H(7),
        padding: H(2)
    },
    iconStyle: {
        width: W(15),
        height: H(5)
    },
    feelingTxt:{
        color:COLORS.BLACK,
        fontFamily:FONTS.MEDIUM,
        fontSize:RFVALUE(13)
    }
})