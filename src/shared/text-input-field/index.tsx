import React, {FC} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {TextFieldProps as Props} from 'types/types';
import {styles} from './styles';

export const TextInputField: FC<Props> = ({
  onPress,
  value,
  clickable,
  onChangeText,
  placeholder,
  ...props
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      {!clickable ? (
        <TextInput
          placeholder={placeholder}
          style={{height: 40, paddingHorizontal: 10}}
          {...props}
          value={value}
          onChangeText={onChangeText}
        />
      ) : (
        <View
          style={{
            height: 40,
            paddingHorizontal: 10,
            justifyContent: 'center',
          }}>
          <Text>{value ? value : placeholder}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};
