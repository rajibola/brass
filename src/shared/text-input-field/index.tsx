import React, {FC} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';

export const TextInputField: FC<TextFieldProps> = ({
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
          style={styles.input}
          {...props}
          value={value}
          onChangeText={onChangeText}
        />
      ) : (
        <View style={styles.clickable}>
          <Text>{value ? value : placeholder}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};
