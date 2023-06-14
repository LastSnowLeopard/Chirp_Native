import { COLORS, FONTS, H, RFVALUE, STYLESHEET, W } from "../../../constants/StyleCommon";


export default STYLESHEET.create({
    mainContiner: {
        width: W(100),
        height: H(100),
        backgroundColor: COLORS.WHITE
    },
    userDetailContiner: {
        width: W(100),
        paddingHorizontal: H(2),
        backgroundColor: COLORS.LIGHTBACKGROUNDCOLOR,
        flexDirection: 'row',
        alignItems: 'center',
    },
    profileImageStyle: {
        width: W(12),
        height: W(12),
        borderRadius: W(12)
    },
    rightContinerProfile: {
        paddingLeft: H(1),
    },
    globeContnainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.WHITE,
        // width: W(25),
        justifyContent: 'space-between',
        borderRadius: H(0.4),
        paddingHorizontal: H(1)
    },
    nameTxt: {
        fontSize: RFVALUE(12),
        color: COLORS.BLACK,
        fontFamily: FONTS.MEDIUM
    },
    globeImageStyle: {
        width: W(4),
        height: H(4)
    },
    txtInputStyle: {
        width: W(100),
        alignSelf: 'center',
        height: H(30),
        padding: H(1.5),
        textAlignVertical: 'top',
        color: 'rgba(0, 0, 0, 0.5)',
        fontSize: RFVALUE(12),
        fontFamily: FONTS.LIGHT,
        backgroundColor: COLORS.LIGHTBACKGROUNDCOLOR,
    },
    bottomContiner: {
        backgroundColor: COLORS.WHITE
    },
    photVideo: {
        width: W(4.7),
        height: H(4.5)
    },
    txtStyle: {
        color: COLORS.BLACK,
        fontSize: RFVALUE(13),
        fontFamily: FONTS.LIGHT,
        paddingLeft: H(2)
    },
    btnStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: H(2),
        padding: H(0.5)
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
    btnStyleSheet: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    imgStyle: {
        width: W(30),
        height: H(15),
        overflow: 'hidden',
        borderRadius: H(1),
    },
    deleteBtnStyle: {
        backgroundColor: COLORS.LIGHTGREY,
        position: 'absolute',
        right: H(1),
        height: H(3.5),
        width: W(7),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: H(0.5),
        top: H(1)
    },
    postContiner: {
        backgroundColor: COLORS.LIGHTBACKGROUNDCOLOR,
        paddingTop: H(2),

    },
    halfDownArrowStyle: {
        width: W(3),
        height: H(3)
    },
    lineStyle: {
        borderWidth: 0.5,
        borderColor: 'rgba(0, 0, 0, 0.5)'
    },
    crossStyle: {
        width: W(3),
        height: H(3)
    },
    headerContiner: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: H(1),
        marginVertical: H(1)
    },
    bgImg: {
        width: W(24),
        height: H(10),
        borderRadius: H(1)
    },
    flatlistContiner: {
        alignItems: 'center',
        justifyContent: 'space-between',
        width: W(99),
        alignSelf: 'center',
        marginTop: H(0.3)
    },
    backgroundImg: {
        width: W(100),
        height: H(30),
        marginVertical: H(1),
        alignItems: 'center',
        justifyContent: 'center'
    },
    backgroundImgInutStyle: {
        fontSize: RFVALUE(20),
        color: COLORS.WHITE,
        width: W(90),
        alignSelf: 'center',
        textAlign:'center',
        fontFamily:FONTS.BOLD
    }
})