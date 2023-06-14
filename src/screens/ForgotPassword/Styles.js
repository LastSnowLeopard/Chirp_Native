import { COLORS, FONTS, H, RFVALUE, STYLESHEET, W } from "../../constants/StyleCommon";


export default STYLESHEET.create({
    continer: {
        flex: 1,
    },
    middleContiner: {
        width: W(90),
        alignSelf: 'center',
    },
    logoAfterontiner: {
        width: W(84),
        alignSelf: 'center'
    },
    txtstyle:{
        color:COLORS.PRIMARY,
        fontSize:RFVALUE(13),
        fontFamily:FONTS.MEDIUM,
        marginVertical:H(2)
    }
})