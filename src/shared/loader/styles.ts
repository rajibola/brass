import {StyleSheet} from 'react-native';
import {deviceHeight} from 'utils';

export const styles = StyleSheet.create({
  text: {color: 'white', fontSize: 28},
  container: {
    flex: 1,
    position: 'absolute',
    // justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: deviceHeight,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 5,
    paddingTop: '70%',
  },
});
