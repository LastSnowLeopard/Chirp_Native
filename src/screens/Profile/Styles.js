import { COLORS, FONTS, H, RFVALUE, STYLESHEET, W } from "../../constants/StyleCommon";

export default STYLESHEET.create({
    continer: {
        flex: 1,
        backgroundColor: COLORS.WHITE
    },
    backgroundStyle: {
        width: W(100),
        height: H(30),
        marginTop: H(3)
    },
    EditCamerBg: {
        width: W(9),
        height: H(9)
    },
    editBgBtn: {
        position: 'absolute',
        right: H(2),
        bottom: 0
    },
    profileStyle: {
        width: W(30),
        height: H(15),
    },
    nameTxt: {
        fontSize: RFVALUE(24),
        fontFamily: FONTS.BOLD,
        color: COLORS.BLACK,
        textAlign:'center'
    },
    imageStyle:{
        width:W(3),
        height:H(3)
    },
    editProfileContiainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        width:W(90),
        alignSelf:'center',
        marginVertical:H(2)
    },
    bioTxt:{
        textAlign:'center',
        color:COLORS.BLACK,
        fontFamily:FONTS.MEDIUM,
        fontSize:RFVALUE(10),
        width:W(80),
        alignSelf:'center'
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