import {StyleSheet} from 'react-native';
import {hp} from 'utils';

export const styles = StyleSheet.create({
  properties: {fontSize: 16, fontWeight: '300'},
  value: {fontSize: 16},
  container: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: hp(50),
    width: '100%',
  },
});
