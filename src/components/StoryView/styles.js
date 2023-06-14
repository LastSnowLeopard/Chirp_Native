import {
  STYLESHEET,
  W,
  H,
  COLORS,
  FONTS,
  RFVALUE,
} from '../../constants/StyleCommon';

export default STYLESHEET.create({
  crossImg: {
    width: W(7),
    height: H(8),
  },
  crossImgbtn: {
    alignSelf: 'flex-end',
    paddingRight: H(2),
    marginTop: H(5),
  },
  profileImg: {
    width: W(15),
    height: W(15),
    borderRadius: W(15),
  },
  nameTxt: {
    color: COLORS.PRIMARY,
    fontFamily: FONTS.MEDIUM,
    fontSize: RFVALUE(13),
    paddingLeft: H(2),
    marginTop: H(-2),
  },
  storyCotnier: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: H(2),
  },
});
