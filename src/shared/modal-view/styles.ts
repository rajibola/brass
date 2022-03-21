import {StyleSheet} from 'react-native';
import {hp, wp} from 'utils/responsive-dimensions';

export const styles = StyleSheet.create({
  closeButton: {
    width: wp(30),
    height: wp(30),
    position: 'absolute',
    top: -50,
    backgroundColor: 'white',
    borderRadius: wp(30),
    right: 10,
  },
  innerView: {
    width: '100%',
    maxHeight: '90%',
    minHeight: '50%',
    height: '80%',
    backgroundColor: 'white',
    borderTopRightRadius: hp(30),
    borderTopLeftRadius: hp(30),
    paddingTop: hp(25),
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
});
