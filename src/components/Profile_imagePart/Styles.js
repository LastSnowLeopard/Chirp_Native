import { STYLESHEET, W, H, RFVALUE, FONTS, COLORS } from "../../constants/StyleCommon";


export default STYLESHEET.create({
    backgroundStyle: {
        width: W(92),
        height: H(20),
        borderRadius:H(2),
        overflow:'hidden'
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
        width: W(14),
        height: W(14),
        borderColor: COLORS.WHITE,
        borderRadius: H(14),
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
    imageContiner: {
        // height: H(),
        width:W(92),
        alignSelf:'center',
        marginTop:H(2),
        backgroundColor:COLORS.WHITE,
        borderRadius:H(2),
        paddingBottom:H(1.5)
    },
    profileImageContiner:{
        borderColor: COLORS.WHITE,
        borderRadius: H(2),
        width: W(32),
        height: H(15),
        position: 'absolute',
        bottom: H(0),
        alignSelf:'center',
    },
    profileEditCamerBg:{
        width:W(5),
        height:H(5)
    },
    profileeditBgBtn:{
        position: 'absolute',
        right: H(2),
        bottom: 0
    },
    userDetailContiner:{
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:H(2),
        marginTop:H(1)
    },
    nameTxt:{
        color:COLORS.BLACK,
        fontFamily:FONTS.BOLD,
        fontSize:RFVALUE(15)
    },
    totalFriendTxt:{
        color:COLORS.PRIMARY,
        fontFamily:FONTS.BOLD,
        fontSize:RFVALUE(13)
    },
    userDetail:{
        paddingLeft:H(1.5)
    }
})