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
    alignSelf: 'center',
    borderRadius: H(1),
    backgroundColor: COLORS.WHITE,
    // height: H(21),
    marginTop: H(2),
    paddingHorizontal: H(2),
    paddingBottom: H(3),
  },
  createTxt: {
    color: 'rgba(0, 0, 0, 0.5)',
    fontFamily: FONTS.MEDIUM,
    fontSize: RFVALUE(14),
  },
  imageContiner: {
    flexDirection: 'row',
    alignItems: 'center',
    width: W(35),
    justifyContent: 'space-around',
    height: H(5),
  },
  imgStyle: {
    width: W(5),
    height: H(5),
  },
  middleContiner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: H(2),
  },
  profileImg: {
    width: W(12),
    height: W(12),
    borderRadius: W(12),
  },
  txtStyle: {
    color: 'rgba(0, 0, 0, 0.5)',
    fontFamily: FONTS.LIGHT,
    fontSize: RFVALUE(13),
    paddingLeft: H(1),
    marginTop: H(1),
  },
  txtInputContiner: {
    flexDirection: 'row',
    borderWidth: 1,
    paddingTop: H(1.2),
    borderColor: 'rgba(0, 0, 0, 0.2)',
    height: H(12),
    paddingLeft: H(1),
    borderRadius: H(1.5),
  },
});
