import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  text: {
    fontSize: 190,
    fontWeight: '900',
    transform: [{rotate: '90deg'}],
    opacity: 0.09,
  },
  container: {
    flex: 1,
    position: 'absolute',
    right: '-80%',
    top: '20%',
    width: '170%',
    height: '100%',
    justifyContent: 'center',
  },
});

export const textVariant = StyleSheet.create({
  big: {
    fontSize: 190,
    fontWeight: '900',
    transform: [{rotate: '90deg'}],
    opacity: 0.09,
  },
  small: {
    fontSize: 170,
    fontWeight: '900',
    transform: [{rotate: '90deg'}],
    opacity: 0.09,
  },
  biggest: {
    fontSize: 220,
    fontWeight: '900',
    transform: [{rotate: '90deg'}],
    opacity: 0.09,
  },
});
