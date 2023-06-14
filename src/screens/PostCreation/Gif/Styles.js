import { COLORS, H, STYLESHEET, W } from "../../../constants/StyleCommon";


export default STYLESHEET.create({
    mainContiner:{
        flex:1,
        backgroundColor:COLORS.LIGHTBACKGROUNDCOLOR
    },
    searchIcon:{
        width:W(10),
        height:H(3)
    },
    searchContiner:{
        flexDirection:'row',
        alignItems:'center',
        width:W(90),
        alignSelf:'center',
        backgroundColor:COLORS.DARKBACKGROUND,
        marginVertical:H(2),
        paddingLeft:H(1),
        borderRadius:H(0.5),
        height:H(6)
    }
})