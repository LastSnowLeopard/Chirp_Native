import { COLORS, STYLESHEET, W, H, RFVALUE, FONTS } from "../../../constants/StyleCommon";


export default STYLESHEET.create({
    mainContiner: {
        flex: 1,
        backgroundColor: COLORS.WHITE
    },
    btnContiner: {
        width: W(94),
        alignSelf: 'center',
        position: 'absolute',
        bottom: H(4)
    },
    txtImageContiner: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: H(1)
    },
    golbeImg: {
        width: W(5),
        height: H(5)
    },
    txtStyle: {
        fontSize: RFVALUE(12),
        color: COLORS.BLACK,
        fontFamily: FONTS.REGULAR,
        paddingLeft: H(1)
    },
    addHobbiesTxt: {
        color: COLORS.BLACK,
        fontFamily: FONTS.BOLD,
        fontSize: RFVALUE(14),
        paddingLeft: H(1.5)
    },
    pargraphTxt: {
        color: COLORS.PRIMARY,
        fontSize: RFVALUE(12),
        padding: H(1.5),
        textAlign: 'justify',
        width: W(90)
    },
    chipContiner: {
        flexDirection: 'row',
        alignItems: 'center',
        height: H(4),
        borderRadius: H(5),
        borderWidth: 1,
        borderColor: COLORS.BORDERCOLOR,
        // minWidth:W(25),
        justifyContent: 'center',
        marginLeft: H(1),
        marginVertical: H(0.5),
        paddingHorizontal: H(2)
    },
    chipMainContiner: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        width: W(95),
        alignSelf: 'center'
    },
    iconStyle:{
        width:W(3),
        height:H(5)
    },
    txtChip:{
        fontSize:RFVALUE(12),
        color:COLORS.BLACK,
        fontFamily:FONTS.REGULAR,
        paddingLeft:H(1)
    }
})