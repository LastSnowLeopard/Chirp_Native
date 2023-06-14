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
    width: W(95),
    paddingBottom: H(1),
    paddingTop: H(1),
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: H(1),
    alignSelf: 'center',
    marginTop: H(3),
    paddingHorizontal: H(1.5),
  },
  friendTxt: {
    color: COLORS.PRIMARY,
    fontFamily: FONTS.SEMIBOLD,
    fontSize: RFVALUE(16),
  },
  imgStyle: {
    width: W(15),
    height: W(15),
    borderRadius: W(15),
  },
  nameTxt: {
    fontSize: RFVALUE(14),
    color: COLORS.BLACK,
    fontFamily: FONTS.MEDIUM,
  },
  mutTxt: {
    color: 'rgba(0, 0, 0, 0.4)',
    fontFamily: FONTS.REGULAR,
    fontSize: RFVALUE(10),
  },
  friendcon: {
    width: W(20),
    height: H(4),
  },
  continer: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  innnerContiner: {
    flex: 1,
    backgroundColor: COLORS.LIGHTGREY,
  },
  emptyTxt: {
    textAlign: 'center',
    color: COLORS.PRIMARY,
    marginVertical: H(2),
  },
});
