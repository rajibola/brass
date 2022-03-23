import COLORS from 'constants/colors';
import {StyleSheet} from 'react-native';
import {hp, wp} from 'utils/responsive-dimensions';

export const styles = StyleSheet.create({
  empty: {
    textAlign: 'center',
    fontSize: hp(16),
    marginTop: hp(20),
  },
  name: {fontSize: hp(15)},
  subText: {
    fontSize: hp(34),
    fontWeight: '300',
    // color: 'rgb(94,202,105)',
  },
  brass: {
    fontSize: hp(54),
    fontWeight: 'bold',
    color: 'rgb(94,202,105)',
    marginTop: hp(40),
    marginBottom: hp(10),
    letterSpacing: hp(2),
  },
  listItem: {
    height: hp(40),
    borderBottomWidth: 0.5,
    borderBottomColor: '#ccc',
    justifyContent: 'center',
    paddingHorizontal: wp(20),
  },
  container: {
    flex: 1,
    paddingVertical: hp(50),
    paddingHorizontal: wp(20),
    backgroundColor: COLORS.white,
    justifyContent: 'space-between',
    paddingBottom: hp(90),
  },
});
