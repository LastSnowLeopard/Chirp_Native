import { COLORS, STYLESHEET ,W,H,FONTS,RFVALUE} from "../../constants/StyleCommon";


export default STYLESHEET.create({
    mainContiner:{
        flex:1,
        backgroundColor:COLORS.WHITE
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
    profileImageStyle: {
        width: W(15),
        height: W(15),
        borderRadius: W(15)
    },
    btnStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.WHITE,
        borderBottomColor: COLORS.LIGHTGREY,
        borderBottomWidth: 1,
        padding: H(1),
        justifyContent: 'space-between'
    },
    nameTxt: {
        color: COLORS.BLACK,
        paddingLeft: H(0.6),
        fontFamily: FONTS.MEDIUM,
    },
    nameImgStyle: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    bottomBtn:{
        width:W(95),
        alignSelf:'center'
    }
})