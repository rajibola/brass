import {StyleSheet} from 'react-native';
import {hp} from 'utils/responsive-dimensions';

export const styles = StyleSheet.create({
  clear: {
    width: 20,
    height: 20,
    backgroundColor: 'red',
  },
  input: {height: '100%', flex: 1, fontSize: 16},
  container: {
    height: 40,
    borderWidth: 1,
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: hp(15),
  },
});
