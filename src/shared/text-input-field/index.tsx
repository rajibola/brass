import React from 'react';
import {FC} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';

export const TextInputField: FC<{
  onChangeText?: (e: string) => void;
  placeholder: string;
  clickable?: boolean;
  onPress?: () => void;
  value?: string;
  [x: string]: any;
}> = ({onPress, value, clickable, onChangeText, placeholder, ...props}) => {
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
