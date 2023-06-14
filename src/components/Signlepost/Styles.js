import {
  STYLESHEET,
  W,
  H,
  COLORS,
  RFVALUE,
  FONTS,
} from '../../constants/StyleCommon';
export default STYLESHEET.create({
  container: {
    width: W(100),
    alignSelf: 'center',
    backgroundColor: COLORS.WHITE,
    // borderRadius: H(1.5),
    marginTop: H(2),
    paddingBottom: H(1),
  },
  userDetailContiner: {
    width: W(98),
    alignSelf: 'center',
    marginVertical: H(2),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  userImageStyle: {
    width: W(15),
    height: W(15),
    borderRadius: W(15),
  },
  userDetail: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: H(1),
  },
  userNameProfessionCOntiner: {
    paddingLeft: H(1),
  },
  userNameStyle: {
    fontSize: RFVALUE(14),
    fontFamily: FONTS.MEDIUM,
    color: COLORS.BLACK,
  },
  normalText: {
    fontSize: RFVALUE(12),
    fontFamily: FONTS.REGULAR,
    color: COLORS.darkColor,
  },
  userProfesionTextStyle: {
    fontSize: RFVALUE(12),
    fontFamily: FONTS.LIGHT,
    color: 'rgba(0, 0, 0, 0.5)',
  },
  verticalDotsImageStyle: {
    width: W(3),
    height: H(1.5),
    resizeMode: 'contain',
  },
  sliderBoxContiner: {
    width: W(100),
    height: H(30),
  },
  imageStyle: {
    width: W(100),
    height: H(30),
  },
  socailIconStyle: {
    width: W(9),
    height: H(2.5),
  },
  socailiconContiner: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: H(1),

    justifyContent: 'space-between',
    paddingHorizontal: H(1),
    marginTop: H(2),
  },
  desTextStyle: {
    fontSize: RFVALUE(12),
    fontFamily: FONTS.REGULAR,
    color: COLORS.BLACK,
    textAlign: 'left',
  },
  textStyleContiner: {
    width: '95%',
    alignSelf: 'center',
    // backgroundColor: '#36D5FD',
    height: H(25),
    alignItems: 'center',
    justifyContent: 'center',
    // borderRadius: H(1),
    overflow: 'hidden',
  },
  optionsContainerStyle: {
    backgroundColor: COLORS.WHITE,
    borderRadius: H(1),
    padding: H(1),
    width: W(33),
  },
  menuOptionTxt: {
    fontSize: RFVALUE(14),
    fontFamily: FONTS.REGULAR,
    color: '#111111',
  },
  sliderBoxbackground: {
    backgroundColor: COLORS.WHITE,
    alignItems: 'center',
  },
  desTxt: {
    color: COLORS.WHITE,
    fontFamily: FONTS.SEMIBOLD,
    fontSize: RFVALUE(25),
    width: W(87),

    textAlign: 'center',
    marginBottom: H(1),
  },
  globleImgStyle: {
    width: W(5),
    height: H(3),
  },
  globeTimeContiner: {
    // flexDirection: 'row',
    // alignItems: 'center',
  },
  taggedTxtStyle: {
    color: COLORS.FACEBOOKBTNCOLOR,
    fontSize: RFVALUE(14),
    fontFamily: FONTS.REGULAR,
  },
  likeImageContiner: {
    width: W(30),
    flexDirection: 'row',
    alignItems: 'center',
  },
  totalLikesTxt: {
    fontSize: RFVALUE(11),
    fontFamily: FONTS.REGULAR,
    color: 'rgba(0, 0, 0, 0.6)',
    // marginTop:H(0.5)
  },
  subHeadingTxt: {
    color: '#949494',
    fontFamily: FONTS.SEMIBOLD,
    fontSize: RFVALUE(16),
    marginTop: H(0.6),
  },
  Txt: {
    fontSize: RFVALUE(19),
    fontFamily: FONTS.SEMIBOLD,
    color: COLORS.PRIMARY,
    marginTop: H(1),
  },
  line: {
    width: W(90),
    alignSelf: 'center',
    height: H(0.1),
    borderRadius: H(1),
    backgroundColor: '#E1E1E1',
    marginTop: H(1),
  },
  sheetContiner: {
    marginTop: H(1.5),
  },
  btnStyle: {
    justifyContent: 'center',
    paddingLeft: H(7),
  },
});
