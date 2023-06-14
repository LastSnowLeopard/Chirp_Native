import {
  COLORS,
  FONTS,
  H,
  RFVALUE,
  STYLESHEET,
  W,
} from '../../constants/StyleCommon';

export default STYLESHEET.create({
  mainContiner: {
    flex: 1,
    backgroundColor: COLORS.BLACK,
  },
  bgImgStyle: {
    width: W(100),
    height: H(100),
  },
  crossImg: {
    width: W(10),
    height: H(8),
  },
  crossImgbtn: {
    alignSelf: 'flex-end',
    paddingRight: H(2),
    marginTop: H(5),
  },
  singleAction: {
    tintColor: COLORS.WHITE,
    width: W(13),
    height: H(6),
  },
  actionText: {
    color: COLORS.WHITE,
    fontSize: RFVALUE(13),
    fontWeight: '500',
    marginTop: H(0.5),
    fontFamily: FONTS.REGULAR,
  },
  btnContiner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: H(3),
  },
  imgTxtContiner: {
    alignItems: 'center',
  },
  inputStyle: {
    alignSelf: 'center',
    fontSize: RFVALUE(30),
    marginTop: H(20),
    color: COLORS.WHITE,
    textAlign: 'center',
    width: '95%',
  },
});
