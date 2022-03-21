import {useSearch} from 'hooks';
import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootDispatch, RootState} from 'redux/store';
import {SearchBar, TransactionList} from 'shared';
import {styles} from './styles';

export const PaymentHistory = () => {
  const {getAllTranfers} = useDispatch<RootDispatch>().Transfers;
  const {data} = useSelector((state: RootState) => state.Transfers);

  const [search, setSearch] = useState<string>('');

  const filteredList = useSearch(
    data.map(item => {
      const container = {...item, name: item.recipient.name};
      return container;
    }),
    ['name', 'amount', 'status'],
    search,
  );

  useEffect(() => {
    getAllTranfers();
  }, []);
  return (
    <View style={styles.container}>
      <SearchBar
        placeholder="Search by name, amount and status"
        onChangeText={setSearch}
        value={search}
      />
      {filteredList?.map((item, i) => {
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
