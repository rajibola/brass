import moment from 'moment';
import React, {FC} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {getInitials} from 'utils';
import {formatMoney} from 'utils/format-money';
import {styles} from './styles';

export const TransactionList: FC<{
  name: string;
  status: string;
  amount: number;
  date: string;
  onPress?: (e: any) => void;
}> = ({name, status, amount, date, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.row}>
        <View style={styles.avatar}>
          <Text style={styles.initials}>{getInitials(name)}</Text>
        </View>
        <View>
          <Text style={styles.name} ellipsizeMode="tail" numberOfLines={1}>
            {name}
          </Text>
          <Text>{moment(date).format('ll')}</Text>
        </View>
      </View>
      <View style={styles.flexEnd}>
        <Text style={styles.amount}>{formatMoney(amount)}</Text>
        <Text>{status}</Text>
      </View>
    </TouchableOpacity>
  );
};
