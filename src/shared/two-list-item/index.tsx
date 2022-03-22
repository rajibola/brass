import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {TwoListProps as Props} from 'types/types';
import {styles} from './styles';

export const TwoItemList: FC<Props> = ({properties, value}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.properties}>{properties}: </Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};
