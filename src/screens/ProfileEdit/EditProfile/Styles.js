import { COLORS, FONTS, H, RFVALUE, STYLESHEET, W } from "../../../constants/StyleCommon";


export default STYLESHEET.create({
    mainContiner: {
        flex: 1,
        backgroundColor: COLORS.WHITE
    },
    profileImageStyle: {
        width: W(50),
        height: W(50),
        borderRadius: W(50),
        alignSelf: 'center'
    },
    coverImageStyle: {
        width: W(94),
        alignSelf: 'center',
        height: H(25),
        borderRadius: H(1)
    },
    txtStyle: {
        color: COLORS.LIGHTBLACK,
        fontSize: RFVALUE(13),
        fontFamily: FONTS.MEDIUM,
        textAlign: 'center',
        width: W(90),
        alignSelf: 'center'
    },
    btnContniner:{
        width:W(95),
        alignSelf:'center'
    },
    sheetContiner: {
        paddingHorizontal: H(3)
    },
    btnText: {
        fontSize: RFVALUE(16),
        fontFamily: FONTS.SEMIBOLD,
        color: COLORS.PRIMARY,
        paddingLeft: H(1.5)
    },
    editCameraStyle: {
        width: W(8),
        height: H(8)
    },
    btnStyle: {
        flexDirection: 'row',
        alignItems: 'center'
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