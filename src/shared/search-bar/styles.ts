import colors from 'constants/colors';
import {StyleSheet} from 'react-native';
import {hp} from 'utils/responsive-dimensions';

export const styles = StyleSheet.create({
  clear: {
    width: 25,
    height: 25,
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  input: {height: '100%', flex: 1, fontSize: 16},
  container: {
    height: 40,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: 'grey',
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: hp(15),
  },
});
