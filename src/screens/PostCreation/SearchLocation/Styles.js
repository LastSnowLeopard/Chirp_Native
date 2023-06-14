import { COLORS, FONTS, H, RFVALUE, STYLESHEET, W } from "../../../constants/StyleCommon";



export default STYLESHEET.create({
    mainContiner: {
        backgroundColor:COLORS.WHITE,
        flex: 1
    },
    txtInputStyle: {
        width: W(98),
        height: H(5),
        backgroundColor: COLORS.WHITE,
        alignSelf: 'center',
        marginVertical: H(1),
        paddingHorizontal: H(1),
        borderColor: COLORS.BORDERCOLOR,
        borderWidth: 1
    },
    getLocationTxt: {
        padding: H(1),
        color: COLORS.BLACK,
        fontFamily: FONTS.REGULAR,
        fontSize: RFVALUE(14)
    },
    locationContiner:{
        width:W(100),
        height:H(7),
        backgroundColor:COLORS.WHITE,
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:H(2)
    },
    pinLocationStyle:{
        width:W(8),
        height:H(8)
    },
    LocationTxt:{
        fontFamily:FONTS.MEDIUM,
        color:COLORS.LIGHTBLACK,
        fontSize:RFVALUE(14),
        paddingLeft:H(1)
    },
    subLocationTxt:{
        fontFamily:FONTS.MEDIUM,
        color:'grey',
        fontSize:RFVALUE(12),
        paddingLeft:H(1)
    },
    middleContiner:{
        flex:1,
        backgroundColor:COLORS.LIGHTBACKGROUNDCOLOR
    },
    searchImg:{
        width:W(5),
        height:H(3)
    }
})