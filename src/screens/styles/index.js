import {StyleSheet} from 'react-native';
import Colors, {images, fonts} from '../../constants';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const mainStyle = StyleSheet.create({
  backimg: {
    flex: 1,
    width: wp(100),
    height: hp(100),
    paddingTop: hp(10),
    paddingHorizontal: wp(5),
  },
  welcome: {
    fontSize: 22,
    color: Colors.black,
    fontFamily: fonts.semibold,
    textAlign: 'center',
    marginTop: hp(1),
  },
  title: {
    fontSize: 22,
    color: Colors.black,
    fontFamily: fonts.bold,
  },
  belowtxt: {
    fontSize: 12,
    color: Colors.third,
    fontFamily: fonts.medium,
    marginTop: hp(1),
    textAlign: 'center',
  },
  view1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: hp(0.3),
  },
  view2: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  txt: {
    fontSize: 12,
    color: Colors.black,
    fontFamily: fonts.medium,
  },
});

export default mainStyle;
