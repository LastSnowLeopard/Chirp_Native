import {
  COLORS,
  FONTS,
  H,
  IMAGES,
  RFVALUE,
  STYLESHEET,
  W,
} from '../../constants/StyleCommon';
export default STYLESHEET.create({
  mainContiner: {
    width: W(92),
    marginTop: H(2),
    alignSelf: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  topBar: {
    display: 'flex',
    width: W(92),
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: H(2),
  },

  closeIcon: {
    width: 10,
    height: 10,
  },
  heading: {
    color: COLORS.PRIMARY,
    fontSize: RFVALUE(16),
    fontWeight: '600',
    fontFamily: FONTS.SEMIBOLD,
  },
  cameraIcon: {
    width: 15,
    height: 14,
  },
  actions: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: W(80),
    marginTop: H(10),
  },
  singleAction: {
    width: W(14),
    height: W(14),
  },
  actionText: {
    color: COLORS.BLACK,
    fontSize: RFVALUE(13),
    fontWeight: '500',
    marginTop: H(3),
    fontFamily: FONTS.REGULAR,
  },
  imgTxtContiner: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgStyle: {
    width: W(28.5),
    height: H(18),
    borderRadius: H(1),
    overflow: 'hidden',
  },
  columnWrapperStyle: {
    justifyContent: 'space-between',
    marginTop: H(1),
    width: W(90),
    alignSelf: 'center',
  },
  imgContiner: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
    borderRadius: H(1),
  },
  headerSadow: {
    backgroundColor: '#fff',
    width: W(100),
    height: 60,
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: H(2),
    justifyContent: 'space-between',
  },
  arrowLeftImg: {
    width: W(3.5),
    height: H(2),
  },
  cameraImg: {
    width: W(8),
    height: H(6),
  },
  galleryTxt: {
    color: COLORS.BLACK,
    fontFamily: FONTS.REGULAR,
    fontSize: RFVALUE(14),
  },
  selectTxt: {
    fontSize: RFVALUE(8),
    color: COLORS.BLACK,
    fontFamily: FONTS.REGULAR,
    paddingLeft: H(0.3),
  },
  multipleImg: {
    width: W(4),
    height: H(3),
  },
  imgTxt: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: H(5),
    borderWidth: H(0.1),
    padding: H(0.2),
  },
  topContiner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: H(1),
    marginVertical: H(0.5),
  },
  doneBtn: {
    position: 'absolute',
    bottom: H(4),
    width: W(90),
    alignSelf: 'center',
  },
  emptyCircle: {
    width: W(5),
    height: H(4),
  },
  btnStyle: {
    position: 'absolute',
    right: 10,
  },
});