import {STYLESHEET, W, H, COLORS} from '../../constants/StyleCommon';

export default STYLESHEET.create({
  postContiner: {
    width: W(100),
    height: H(15),
    backgroundColor: COLORS.WHITE,
    flexDirection: 'row',
    alignItems: 'center',
    padding: H(2),
  },
  listWrapper: {},
});
