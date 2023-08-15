import {StyleSheet} from 'react-native';
import {hp} from 'utils';

export const styles = StyleSheet.create({
  properties: {fontSize: hp(16), fontWeight: '300'},
  value: {fontSize: hp(16)},
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: hp(50),
    width: '100%',
  },
});
