import {useSearch} from 'hooks';
import React, {FC, useEffect, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {ITransferHistory} from 'redux';
import {RootDispatch, RootState} from 'redux/store';
import {ModalView, SearchBar, TransactionList} from 'shared';
import {deviceHeight} from 'utils';
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

export const Preview: FC<{
  data: ITransferHistory;
  onExit: () => void;
}> = ({data, onExit}) => {
  return (
    <ModalView visible={!!data} onClickExit={onExit}>
      <View
        style={{
          flex: 1,
        }}>
        <Text style={{fontSize: 18}}>{data?.amount}</Text>
      </View>
    </ModalView>
  );
};

export const Loader: FC<{isLoading: boolean | string}> = ({isLoading}) => {
  return (
    <ModalView visible={!!isLoading} full>
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
  );
};
