import React, {FC} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';

export const SearchBar: FC<{
  onChangeText: (text: string) => void;
  value: string;
  [x: string]: any;
}> = ({onChangeText, value, ...props}) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search"
        style={styles.input}
        onChangeText={onChangeText}
        value={value}
        {...props}
      />

      {!!value && (
        <TouchableOpacity onPress={() => onChangeText('')}>
          <Text>clear</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
