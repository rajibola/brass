import {StyleSheet} from 'react-native';
import {hp, wp} from 'utils/responsive-dimensions';

export const styles = StyleSheet.create({
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
  },
});
