import COLORS from 'constants/COLORS';
import React, {FC} from 'react';
import {StyleProp, Text, TouchableOpacity, ViewStyle} from 'react-native';
import {styles} from './styles';

export const Button: FC<ButtonComponentProps> = ({
  dependencies,
  onPress,
  buttonStyle,
  textStyle,
  text,
}) => {
  const isFilled = dependencies.every(item => Boolean(item));

  const containerStyles: StyleProp<ViewStyle>[] = [
    styles.container,
    {backgroundColor: isFilled ? COLORS.green : 'grey'},
    buttonStyle,
  ];

  return (
    <TouchableOpacity
      style={containerStyles}
      onPress={onPress}
      disabled={!isFilled}>
      <Text style={[styles.text, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};
