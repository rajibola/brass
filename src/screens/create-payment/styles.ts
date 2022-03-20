import {StyleSheet} from 'react-native';
import {hp, wp} from 'utils/responsive-dimensions';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: hp(50),
    paddingHorizontal: wp(20),
  },
});
