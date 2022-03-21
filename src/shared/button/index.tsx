import React from 'react';
import {FC} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';

export const Button: FC<{data: any[]; onPress: () => void}> = ({
  data,
  onPress,
}) => {
  const filled = data.every(item => !!item);
  return (
    <TouchableOpacity
      style={[styles.container, {backgroundColor: filled ? 'blue' : 'grey'}]}
      onPress={onPress}
      disabled={!filled}>
      <Text style={styles.text}>TRANSFER NOW</Text>
    </TouchableOpacity>
  );
};
