import { COLORS, FONTS, H, RFVALUE, STYLESHEET, W } from "../../../constants/StyleCommon";


export default STYLESHEET.create({
    mainContiner: {
        flex: 1,
        backgroundColor: COLORS.WHITE
    },
    bioTxt: {
        color: COLORS.PRIMARY,
        fontSize: RFVALUE(13),
        fontFamily: FONTS.MEDIUM,
        paddingHorizontal: H(2),
        marginVertical: H(2)
    },
    bioTxtInput: {
        width: W(94),
        alignSelf: 'center',
        height: H(15),
        borderRadius: H(1),
        borderWidth: 1,
        borderColor: COLORS.BORDERCOLOR,
        fontSize: RFVALUE(13),
        fontFamily: FONTS.REGULAR,
        padding: H(1)
    },
    bottomTxt: {
        color: COLORS.PRIMARY,
        fontFamily: FONTS.REGULAR,
        fontSize: RFVALUE(11),
        textAlign: 'justify',
        width: W(90),
        alignSelf: 'center',
        marginTop: H(1),
        letterSpacing:1
    },
    btnContiner:{
        width:W(94),
        alignSelf:'center',
        position:'absolute',
        bottom:H(4)
    }
})