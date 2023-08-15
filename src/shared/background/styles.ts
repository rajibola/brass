import {StyleSheet} from 'react-native';
import {hp} from 'utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    right: '-70%',
    top: '20%',
    width: '170%',
    height: '100%',
    justifyContent: 'center',
  },
});

export const textVariant = StyleSheet.create({
  big: {
    fontSize: hp(165),
    lineHeight: hp(160),
    fontWeight: '900',
    transform: [{rotate: '90deg'}],
    opacity: 0.09,
    textAlign: 'center',
  },
  small: {
    fontSize: hp(150),
    fontWeight: '900',
    transform: [{rotate: '90deg'}],
    opacity: 0.09,
  },
  biggest: {
    fontSize: hp(200),
    fontWeight: '900',
    transform: [{rotate: '90deg'}],
    opacity: 0.09,
  },
});
