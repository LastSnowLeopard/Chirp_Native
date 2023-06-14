import { COLORS, FONTS, H, RFVALUE, STYLESHEET, W } from "../../constants/StyleCommon";


export default STYLESHEET.create({
    mainContainer: {
        flex: 1,
        // backgroundColor:COLORS.WHITE
    },
    continer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginVertical: H(1)
    },
    profileImg: {
        width: W(20),
        height: W(20),
        borderRadius: W(20),
        alignSelf: 'center',
        marginVertical: H(1)
    },
    nameStyle: {
        fontFamily: FONTS.BOLD,
        fontSize: RFVALUE(15),
        color: COLORS.BLACK,
        textAlign: 'center'
    },
    qrCodeimg: {
        width: W(50),
        height: H(30),
        alignSelf: 'center'
    },
    desTxt: {
        color: '#161010',
        fontFamily: FONTS.REGULAR,
        fontSize: RFVALUE(14),
        textAlign: 'center',
        width: W(80),
        alignSelf: 'center'
    },
    shareImg:{
        width:W(6),
        height:H(6)
    },
    btnTxt:{
        color:COLORS.PRIMARY,
        fontFamily:FONTS.MEDIUM,
        fontSize:RFVALUE(16),
        paddingLeft:H(1)
    },
    btn:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:COLORS.WHITE,
        width:W(95),
        alignSelf:'center',
        marginVertical:H(1),
        height:H(7),
        borderRadius:H(1)
    },
    txtStyle:{
        color:COLORS.BLACK,
        fontSize:RFVALUE(14),
        fontFamily:FONTS.SEMIBOLD,
        textAlign:'center',
        marginVertical:H(2)
    },
    qrCodebox:{
        width:W(60),
        alignSelf:'center',
        height:H(30),
        backgroundColor:COLORS.BLACK,
        marginVertical:H(3)
    }
})