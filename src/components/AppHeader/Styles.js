import { COLORS, H, STYLESHEET, W } from "../../constants/StyleCommon";


export default STYLESHEET.create({
    mainContiner: {
        backgroundColor: '#fff',
        width: W(100),
        height: H(8),
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.4,
        shadowRadius: 3,
        elevation: 5,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: H(1),
        justifyContent: 'space-between',
    },
    applogoImg: {
        width: W(20),
        height: H(10)
    },
    searchImgStyle: {
        width: W(5),
        height: H(5)
    },
    btnStyle: {
        backgroundColor: '#F5F5F5',
        borderRadius: W(10),
        width: W(10),
        height: W(10),
        alignItems: 'center',
        justifyContent: 'center'
    },
    rightContiner: {
        flexDirection: 'row',
        alignItems: 'center',
        width: W(30),
        justifyContent: 'space-around'
    }
})