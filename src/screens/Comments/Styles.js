import { COLORS, FONTS, H, RFVALUE, STYLESHEET, W } from "../../constants/StyleCommon";


export default STYLESHEET.create({
    mainContiner: {
        flex: 1,
        backgroundColor: COLORS.WHITE
    },
    mainCardContiner: {
        width: W(90),
        alignSelf: 'center',
        flexDirection: 'row',
        marginVertical: H(1),
    },
    imgStyle: {
        width: W(13),
        height: W(13),
        borderRadius: W(13)
    },
    darkContiner: {
        backgroundColor: '#F5F5F5',
        minHeight: H(8),
        width: W(70),
        borderRadius: H(0.5),
        paddingHorizontal:H(1.5),
        paddingTop:H(1)
    },
    rightContiner: {
        paddingLeft: H(1)
    },
    userNameTxt:{
        fontFamily:FONTS.MEDIUM,
        color:COLORS.BLACK,
        fontSize:RFVALUE(10)
    },
    commentTxt:{
        fontFamily:FONTS.LIGHT,
        fontSize:RFVALUE(8),
        color:COLORS.BLACK,
    },
    timeTxt:{
        color:'rgba(0, 0, 0, 0.6)',
        fontFamily:FONTS.REGULAR,
        fontSize:RFVALUE(10)
    },
    bottomContiner:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:H(0.5),
        paddingTop:H(0.5)
    }
})