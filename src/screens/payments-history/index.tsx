import React, {useEffect} from 'react';
import {View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootDispatch, RootState} from 'redux/store';
import {TransactionList} from 'shared';
import {styles} from './styles';

export const PaymentHistory = () => {
  const {getAllTranfers} = useDispatch<RootDispatch>().Transfers;
  const {data} = useSelector((state: RootState) => state.Transfers);

  useEffect(() => {
    getAllTranfers();
  }, []);
  return (
    <View style={styles.container}>
      {data?.map((item, i) => {
        const {recipient, status, amount, createdAt} = item;
        return (
          <TransactionList
            name={recipient.name}
            status={status}
            amount={amount}
            date={createdAt}
          />
        );
      })}
    </View>
  );
};
