import React, {FC} from 'react';
import {TextInput, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import {styles} from './styles';

export const SearchBar: FC<SearchBarProps> = ({
  onChangeText,
  value,
  ...props
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search"
        style={styles.input}
        onChangeText={onChangeText}
        value={value}
        {...props}
        testID="input"
      />

      {Boolean(value) && (
        <TouchableOpacity style={styles.clear} onPress={() => onChangeText('')}>
          <Icon name="close" size={20} color="#fff" />
        </TouchableOpacity>
      )}
    </View>
  );
};
