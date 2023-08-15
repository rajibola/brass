import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';

export const TwoItemList: FC<TwoListProps> = ({properties, value}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.properties}>{properties}: </Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};
