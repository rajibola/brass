import {StyleSheet} from 'react-native';
import {deviceHeight} from 'utils';

export const styles = StyleSheet.create({
  text: {color: 'white', fontSize: 28},
  container: {
    flex: 1,
    position: 'absolute',
    alignItems: 'center',
    width: '100%',
    height: deviceHeight,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    zIndex: 5,
    paddingTop: '70%',
  },
});
