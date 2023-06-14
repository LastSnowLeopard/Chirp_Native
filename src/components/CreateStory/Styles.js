import { COLORS, FONTS, H, RFVALUE, STYLESHEET, W } from "../../constants/StyleCommon";


export default STYLESHEET.create({
    mainContiner: {
        width: W(30),
        // alignSelf: 'flex-start',

        marginLeft: W(1),
        backgroundColor: COLORS.DARKSTORYBACKGROUND,
        height: H(20),
        marginTop: H(2),
        borderRadius: H(1.5),

        display: "flex",
        flexDirection: "column",

        justifyContent: "flex-end"
    },
    createTxt: {
        color: COLORS.PRIMARY,
        fontFamily: FONTS.MEDIUM,
        fontSize: RFVALUE(10),
        fontWeight: "400",

    },
    imageWrapper: {
        backgroundColor: "white",
        padding: W(4),
        marginTop: H(-3),
        borderRadius: 50,
        shadowColor: 'pink',
        borderColor: COLORS.BORDERCOLOR,
        borderWidth: 0.5,
        shadowOffset: { width: 10, height: 10 },
        shadowOpacity: 1,
        shadowRadius: 10,
        elevation: 5
    },
    imgStyle: {
        width: W(5),
        height: W(5),


        // borderColor: "black", borderWidth: 1,


    },


    addStory: {

        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.WHITE,
        height: H(6),
        paddingBottom: H(1),
        borderBottomEndRadius: H(1.5),
        borderBottomStartRadius: H(1.5)



    },

})