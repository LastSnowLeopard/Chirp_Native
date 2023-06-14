import {
  COLORS,
  FONTS,
  H,
  RFVALUE,
  STYLESHEET,
  W,
} from '../../constants/StyleCommon';

export default STYLESHEET.create({
  continer: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  innerContiner: {
    // backgroundColor: '#C00709',
  },
  notifcationTxt: {
    color: COLORS.PRIMARY,
    fontFamily: FONTS.MEDIUM,
    fontSize: RFVALUE(22),
    paddingHorizontal: H(2),
    marginVertical: H(1),
  },
  profileImgStyle: {
    width: W(18),
    height: H(7),
    borderRadius: H(1),
    overflow: 'hidden',
  },
  cardContiner: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: H(2),
    backgroundColor: '#F6E6E7',
    padding: H(1),
  },
  txtStyle: {
    width: W(70),
    paddingLeft: H(1),
    fontSize: RFVALUE(12),
    color: COLORS.BLACK,
  },
  nameTxt: {
    fontFamily: FONTS.BOLD,
  },
  verticonIcon: {
    width: W(4),
    height: H(3),
  },
});
