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
    width: W(30),
    marginLeft: W(1),
    backgroundColor: COLORS.DARKSTORYBACKGROUND,
    height: H(20),
    marginTop: H(2),
    borderRadius: H(1.5),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    overflow: 'hidden',
  },
  createTxt: {
    color: COLORS.PRIMARY,
    fontFamily: FONTS.MEDIUM,
    fontSize: RFVALUE(10),
    fontWeight: '400',
    marginTop: H(0.5),
  },
  storyImgWrapper: {
    backgroundColor: 'red',
    height: H(14),
    margin: 0,
    padding: 0,
  },
  imageWrapper: {},
  imgStyle: {
    width: H(7),
    height: H(7),
    marginTop: H(-3),
    borderRadius: 50,
    shadowColor: 'pink',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 1,
    shadowRadius: 10,
  },

  addStory: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.WHITE,
    height: H(6),
    paddingBottom: H(1),
    borderBottomEndRadius: H(1.5),
    borderBottomStartRadius: H(1.5),
  },
});
