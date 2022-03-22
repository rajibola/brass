import {useSearch} from 'hooks';
import moment from 'moment';
import React, {FC, useEffect, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootDispatch, RootState} from 'redux/store';
import {ModalView, SearchBar, TransactionList} from 'shared';
import {ITransferHistory} from 'types/types';
import {deviceHeight, formatMoney, hp, wp} from 'utils';
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
          paddingHorizontal: wp(25),
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 16,
            lineHeight: 28,
            fontWeight: 'bold',
            marginBottom: hp(20),
          }}>
          Fund transfer from Ridwan Ajibola to {data?.recipient.name}
        </Text>
        <TwoItemList properties="Amount" value={formatMoney(data?.amount)} />
        <TwoItemList
          properties="Transaction Date"
          value={moment(data?.createdAt).format('lll')}
        />
        <TwoItemList properties="Sender" value={'Ridwan Ajibola'} />
        <TwoItemList properties="Reference Number" value={data?.reference} />
        <TwoItemList properties="Receiver" value={data?.recipient.name} />
        <TwoItemList
          properties="Account Number"
          value={data?.recipient.details.account_number}
        />
        <TwoItemList
          properties="Receiving Bank"
          value={data?.recipient.details.bank_name}
        />

        <View style={{borderTopWidth: 1, marginTop: hp(20)}}>
          <Text
            style={{
              paddingTop: hp(20),
            }}>
            Disclaimer: Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quas iusto consequatur consequuntur placeat recusandae minus iste
            autem quod fugit architecto. Consequuntur nihil soluta, illum minima
            reiciendis ducimus aspernatur beatae reprehenderit fuga ullam
            incidunt deleniti? Natus aliquid nostrum minus dignissimos adipisci.
          </Text>
        </View>
      </View>
    </ModalView>
  );
};

export const TwoItemList: FC<{properties: string; value: string | number}> = ({
  properties,
  value,
}) => {
  return (
    <View
      style={{
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: hp(50),
        width: '100%',
      }}>
      <Text style={{fontSize: 16, fontWeight: '300'}}>{properties}: </Text>
      <Text style={{fontSize: 16}}>{value}</Text>
    </View>
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
        <Text style={{color: 'white', fontSize: 28}}>
          {typeof isLoading == 'string' ? isLoading : 'Loading...'}
        </Text>
      </View>
    </ModalView>
  );
};
