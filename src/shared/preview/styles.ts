import {StyleSheet} from 'react-native';
import {hp, wp} from 'utils';

export const styles = StyleSheet.create({
  disclaimerContainer: {borderTopWidth: 1, marginTop: hp(20)},
  disclaimer: {
    paddingTop: hp(20),
  },
  container: {
    flex: 1,
    paddingHorizontal: wp(25),
  },
  heading: {
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 28,
    fontWeight: 'bold',
    marginBottom: hp(20),
  },
});
