import {useSearch} from 'hooks';
import React, {useEffect, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {SearchBar, TransactionList, Loader, Preview} from 'shared';
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const _renderItem = ({item}: {item: typeof filteredList[0]}) => {
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
        ListEmptyComponent={
          <Text style={styles.empty}>Pull down to refresh</Text>
        }
      />
      <Preview data={transaction!} onExit={() => setTransaction(undefined)} />
      <Loader isLoading={isLoading} />
    </View>
  );
};
