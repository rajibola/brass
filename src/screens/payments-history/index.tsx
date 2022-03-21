import {useSearch} from 'hooks';
import React, {useEffect, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootDispatch, RootState} from 'redux/store';
import {ModalView, SearchBar, TransactionList} from 'shared';
import {deviceHeight} from 'utils';
import {styles} from './styles';

export const PaymentHistory = () => {
  const {getAllTranfers} = useDispatch<RootDispatch>().Transfers;
  const {data, isLoading} = useSelector((state: RootState) => state.Transfers);

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

  const _renderItem = ({item}: {item: any}) => {
    const {recipient, status, amount, createdAt} = item;
    return (
      <TransactionList
        name={recipient.name}
        status={status}
        amount={amount}
        date={createdAt}
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
      <ModalView visible={isLoading} full>
        <View
          style={{
            flex: 1,
            position: 'absolute',
            // justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: deviceHeight,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 5,
            paddingTop: '50%',
          }}>
          <Text style={{color: 'white', fontSize: 18}}>
            Loading Transaction History...
          </Text>
        </View>
      </ModalView>
    </View>
  );
};
