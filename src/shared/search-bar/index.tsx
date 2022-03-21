import React, {FC} from 'react';
import {TextInput, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';

export const SearchBar: FC<{onChangeText: (text: string) => void}> = ({
  onChangeText,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search"
        style={styles.input}
        onChangeText={onChangeText}
      />
      <TouchableOpacity style={styles.clear}></TouchableOpacity>
    </View>
  );
};
