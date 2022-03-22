import {useSearch} from 'hooks';
import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {SearchBar, TransactionList} from 'shared';
import {Loader} from 'shared/loader';
import {Preview} from 'shared/preview';
import {ITransferHistory, RootDispatch, RootState} from 'types/types';
import {styles} from './styles';

export const PaymentHistory = () => {
  const {getAllTranfers} = useDispatch<RootDispatch>().Transfers;
  const {data, isLoading} = useSelector((state: RootState) => state.Transfers);

  const [search, setSearch] = useState<string>('');
  const [transaction, setTransaction] = useState<ITransferHistory>();

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

  const _renderItem = ({item}: {item: any}) => {
    const {recipient, status, amount, createdAt} = item;
    return (
      <TransactionList
        name={recipient.name}
        status={status}
        amount={amount}
        date={createdAt}
        onPress={() => setTransaction(item)}
      />
    );
  };

  return (
    <View style={styles.container}>
      <SearchBar
        placeholder="Search by name, amount and status"
        onChangeText={setSearch}
        value={search}
      />

      <FlatList
        data={filteredList}
        renderItem={_renderItem}
        onRefresh={getAllTranfers}
        refreshing={isLoading}
      />
      <Preview data={transaction!} onExit={() => setTransaction(undefined)} />
      <Loader isLoading={isLoading} />
    </View>
  );
};
