import colors from 'constants/colors';
import React, {FC} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {ButtonComponentProps as Props} from 'types/types';
import {styles} from './styles';

export const Button: FC<Props> = ({data, onPress, buttonStyle, textStyle}) => {
  const filled = data.every(item => !!item);
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {backgroundColor: filled ? colors.green : 'grey'},
        buttonStyle,
      ]}
      onPress={onPress}
      disabled={!filled}>
      <Text style={[styles.text, textStyle]}>TRANSFER NOW</Text>
    </TouchableOpacity>
  );
};
