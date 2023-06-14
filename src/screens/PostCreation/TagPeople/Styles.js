import { COLORS, FONTS, H, RFVALUE, STYLESHEET, W } from "../../../constants/StyleCommon";


export default STYLESHEET.create({
    mainContiner: {
        flex: 1,
        backgroundColor:COLORS.WHITE
    },
    searchInputStyle: {
        backgroundColor: COLORS.LIGHTGREY,
        borderRadius: H(3),
        paddingLeft: H(2),
        fontSize: RFVALUE(14),
        color: COLORS.BLACK,
        fontFamily: FONTS.REGULAR,
        
    },
    searchContiner: {
        padding: H(1)
    },
    sugTxt: {
        color: COLORS.BLACK,
        fontFamily: FONTS.SEMIBOLD,
        fontSize: RFVALUE(14),
        paddingHorizontal: H(1),
        marginVertical: H(1)
    },
    profileImageStyle: {
        width: W(11),
        height: W(11),
        borderRadius: W(11)
    },
    btnStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        // backgroundColor: COLORS.WHITE,
        borderBottomColor: COLORS.LIGHTGREY,
        // borderBottomWidth: 1,
        paddingHorizontal:H(2),
        justifyContent: 'space-between'
    },
    nameTxt: {
        color: COLORS.BLACK,
        paddingLeft: H(1.5),
        fontFamily: FONTS.MEDIUM,
        fontSize:RFVALUE(12)
    },
    nameImgStyle: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    bottomBtn:{
        width:W(95),
        alignSelf:'center'
    },
    checkBoxImg:{
        width:W(15),
        height:H(7)
    },
    searchImg:{
        width:W(5),
        height:H(4)
    },
    inpurContiner:{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#EAEAEA',
        borderRadius:H(1),
        paddingLeft:H(2),
        width:W(90),
        alignSelf:'center',
        height:H(5.5),
       
    }
})