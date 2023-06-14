import { COLORS, FONTS, H, RFVALUE, STYLESHEET, W } from "../../../constants/StyleCommon";



export default STYLESHEET.create({
    mainContiner: {
        flex: 1,
        // backgroundColor: COLORS.WHITE
    },
    middleContiner: {
        backgroundColor: COLORS.WHITE,
        padding: H(2)
    },
    eduTxt: {
        color: COLORS.LIGHTBLACK,
        fontFamily: FONTS.BOLD,
        fontSize: RFVALUE(16)
    },
    imgstyle: {
        width: W(9),
        height: H(8)
    },
    btnContiner: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    txtStyle: {
        color: COLORS.PRIMARY,
        paddingLeft: H(1),
        fontFamily: FONTS.SEMIBOLD,
        fontSize: RFVALUE(14)
    },
    txtStyles: {
        color: '#7E7E7E',
        paddingLeft: H(1),
        fontFamily: FONTS.SEMIBOLD,
        fontSize: RFVALUE(12),
        marginTop:H(1)
    },
    iconStyle:{
        width:W(8),
        height:H(2)
    },
    educationContiner:{
        flexDirection:'row',
        alignItems:'center',
        marginVertical:H(0.5),
        justifyContent:'space-between'
    }
})