import {useSearch} from 'hooks';
import React, {useEffect, useState} from 'react';
import {
  Alert,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Button, ModalView, SearchBar, TextInputField} from 'shared';
import {Background} from 'shared/background';
import {Loader} from 'shared/loader';
import {IBanks, RootDispatch, RootState} from 'types/types';
import {hp} from 'utils';
import {styles} from './styles';

export const CreatePayment = () => {
  const {
    Banks: {getBanks, verifyAccount},
    Transfers: {initiateTransfer},
  } = useDispatch<RootDispatch>();
  const {banks, isVerifying, isLoading} = useSelector(
    (state: RootState) => state.Banks,
  );

  const [accountNumber, setAccountNumber] = useState<string>('');
  const [accountName, setAccountName] = useState<string>('');
  const [amount, setAmount] = useState<string>();
  const [selectedBank, setSelectedBank] = useState<IBanks>();
  const [search, setSearch] = useState<string>('');
  const [modal, setModal] = useState<boolean>(false);

  const filteredBanks = useSearch(banks as IBanks[], ['name'], search);

  useEffect(() => {
    getBanks();
  }, []);

  useEffect(() => {
    if (accountNumber?.length !== 10) return;

    const verify = async () => {
      const response = await verifyAccount({
        bank_code: selectedBank?.code!,
        account_number: accountNumber,
      });
      if (!!response?.account_name) {
        setAccountName(response.account_name);
      } else {
        setAccountName('');
        Alert.alert('Account not found');
      }
    };

    verify();
  }, [accountNumber, selectedBank]);

  const transfer = () => {
    if (+amount! < 100 || +amount! > 10000000) {
      Alert.alert('Amount must be between ₦100 and ₦10,000,000');
      return;
    }
    initiateTransfer({
      amount: amount!,
      account_number: accountNumber,
      recipient_name: accountName,
      bank_code: selectedBank?.code!,
      onSuccess: () => {
        setAccountNumber('');
        setAccountName('');
        setAmount('');
      },
    });
  };

  const _renderItem = ({item}: {item: IBanks}) => {
    return (
      <TouchableOpacity
        style={styles.listItem}
        onPress={() => {
          setSelectedBank(item);
          setSearch('');
          setModal(false);
        }}>
        <Text style={styles.name}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Background text="BRASS" variant="big" />
      <View>
        <Text style={styles.brass}>Brass</Text>
        <Text style={styles.subText}>Transfer funds made easy!</Text>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View>
          <TextInputField
            placeholder="Select bank"
            clickable
            onPress={() => setModal(true)}
            value={selectedBank?.name}
          />

          <TextInputField
            onChangeText={setAccountNumber}
            placeholder="Account number"
            value={accountNumber}
            editable={!!selectedBank}
            maxLength={10}
            keyboardType="number-pad"
          />

          <TextInputField
            placeholder="Account name"
            value={accountName}
            editable={false}
          />

          <TextInputField
            onChangeText={setAmount}
            placeholder="Enter amount"
            value={amount}
            editable={!!selectedBank}
            keyboardType="number-pad"
          />

          <Button
            data={[amount, accountName, accountNumber, selectedBank?.code]}
            onPress={transfer}
          />

          <ModalView visible={modal} onClickExit={() => setModal(false)}>
            <SearchBar
              onChangeText={setSearch}
              value={search}
              placeholder="Search banks"
            />
            <FlatList
              data={filteredBanks}
              keyExtractor={item => item.id.toString()}
              renderItem={_renderItem}
              contentContainerStyle={{paddingBottom: 40}}
              onRefresh={getBanks}
              refreshing={!!isLoading}
            />
          </ModalView>
        </View>

        <Loader isLoading={isVerifying! || isLoading!} />
      </KeyboardAvoidingView>
    </View>
  );
};
