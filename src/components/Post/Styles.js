import { STYLESHEET, W, H, FONTS, RFVALUE, COLORS } from "../../constants/StyleCommon";


export default STYLESHEET.create({
    postContiner: {
        width: W(100),
        height: H(15),
        backgroundColor: COLORS.WHITE,
        flexDirection: 'row',
        alignItems: 'center',
        padding: H(2)
    },
    profileStyle: {
        width: W(12),
        height: W(12),
        borderRadius: W(12)
    },
    textContiner: {
        backgroundColor: COLORS.LIGHTGREY,
        padding: H(1),
        marginLeft: H(2),
        borderRadius: H(1),
        flexDirection: 'row',
        width: W(60),
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    galleryImage: {
        width: W(4),
        height: H(3)
    },
    searchImageStyle: {
        width: W(10),
        height: H(10),
        marginHorizontal: H(2)
    }
}) 