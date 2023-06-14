import { COLORS, FONTS, H, RFVALUE, STYLESHEET, W } from "../../../constants/StyleCommon";


export default STYLESHEET.create({
    mainContiner: {
        flex: 1,
        backgroundColor: COLORS.WHITE
    },
    imgStyle: {
        width: W(30.5),
        height: H(18),
        borderRadius: H(1),
        overflow: 'hidden'
    },
    columnWrapperStyle: {
        justifyContent: 'space-between',
        marginTop: H(1),
        width: W(97),
        alignSelf: 'center'
    },
    imgContiner: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 10,
        borderRadius: H(1)
    },
    headerSadow: {
        backgroundColor: '#fff',
        width: W(100),
        height: 60,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.4,
        shadowRadius: 3,
        elevation: 5,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: H(2),
        justifyContent: 'space-between',
    },
    arrowLeftImg: {
        width: W(3.5),
        height: H(2)
    },
    cameraImg: {
        width: W(8),
        height: H(6)
    },
    galleryTxt: {
        color: COLORS.BLACK,
        fontFamily: FONTS.REGULAR,
        fontSize: RFVALUE(14)
    },
    selectTxt: {
        fontSize: RFVALUE(8),
        color: COLORS.BLACK,
        fontFamily: FONTS.REGULAR,
        paddingLeft: H(0.3)
    },
    multipleImg: {
        width: W(4),
        height: H(3)
    },
    imgTxtContiner: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: H(5),
        borderWidth: H(0.1),
        padding: H(0.2),

    },
    topContiner: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: H(1),
        marginVertical: H(0.5)
    },
    doneBtn: {
        position: 'absolute',
        bottom: H(4),
        width: W(90),
        alignSelf: 'center'
    },
    emptyCircle:{
        width:W(5),
        height:H(4)
    },
    btnStyle:{
        position:'absolute',
        right:10
    }
})