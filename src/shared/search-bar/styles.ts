import colors from 'constants/colors';
import {StyleSheet} from 'react-native';
import {hp, wp} from 'utils/responsive-dimensions';

export const styles = StyleSheet.create({
  clear: {
    width: wp(25),
    height: hp(25),
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: hp(25),
  },
  input: {height: '100%', flex: 1, fontSize: hp(16)},
  container: {
    height: hp(40),
    borderWidth: wp(1),
    borderRadius: hp(3),
    borderColor: 'grey',
    marginHorizontal: wp(20),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp(10),
    marginBottom: hp(15),
  },
});
