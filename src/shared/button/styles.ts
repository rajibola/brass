import {StyleSheet} from 'react-native';
import {hp} from 'utils';

export const styles = StyleSheet.create({
  text: {color: 'white', fontWeight: 'bold', letterSpacing: 1},
  container: {
    width: '100%',
    height: hp(60),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp(20),
  },
});
