import { COLORS, FONTS, H, RFVALUE, STYLESHEET, W } from "../../constants/StyleCommon";


export default STYLESHEET.create({
    mainContiner: {
        width: W(45),
        // alignSelf: 'flex-start',
        marginLeft: W(1),
        backgroundColor: COLORS.DARKSTORYBACKGROUND,
        height: H(30),
        marginTop: H(2),
        borderRadius: H(1.5),
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        justifyContent: "flex-end",
        marginHorizontal: W(2.5)
    }, bgImg: {
        width: W(45),
        // alignSelf: 'flex-start',
        height: H(30),
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",

    },
    listWrapper: {
        backgroundColor: "pink",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",

    },


    createTxt: {
        color: COLORS.WHITE,
        fontFamily: FONTS.MEDIUM,
        fontSize: RFVALUE(10),
        fontWeight: "400",
        marginTop: H(.5)

    },
    storyImgWrapper: {

        height: H(14),
        margin: 0,
        padding: 0
    },
    imageWrapper: {

        //    padding: W(4),


    },
    imgStyle: {
        width: H(7),
        height: H(7),
        marginTop: H(-3),
        borderRadius: 50,
        // borderColor: "black", borderWidth: 1,
        shadowColor: 'pink',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 1,
        shadowRadius: 10,


    },


    addStory: {

        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        height: H(6),
        paddingBottom: H(1),
        borderBottomEndRadius: H(1.5),
        borderBottomStartRadius: H(1.5)



    },
})