import {StyleSheet} from 'react-native';
import {hp, wp} from 'utils/responsive-dimensions';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: hp(70),
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp(15),
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  avatar: {
    width: wp(50),
    height: wp(50),
    borderRadius: wp(50),
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: wp(10),
  },

  name: {fontWeight: '600', fontSize: hp(14), marginBottom: hp(2), width: 200},

  amount: {
    color: 'green',
    fontWeight: '600',
    marginBottom: hp(2),
    fontSize: hp(16),
  },

  flexEnd: {alignItems: 'flex-end'},
});
