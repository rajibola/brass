import {useSearch} from 'hooks/useSearch';
import React, {useEffect, useState} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {IBanks} from 'redux/models';
import {RootDispatch, RootState} from 'redux/store';
import {ModalView, SearchBar} from 'shared';
import {TextInputField} from 'shared/text-input-field';
import {hp} from 'utils/responsive-dimensions';
import {styles} from './styles';

export const CreatePayment = () => {
  const {getBanks, verifyAccount} = useDispatch<RootDispatch>().Banks;
  const {banks} = useSelector((state: RootState) => state.Banks);

  const [accountNumber, setAccountNumber] = useState<string>('');
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
      if (!!response) {
        console.log({response});
      }
    };

    verify();
  }, [accountNumber, selectedBank]);

  const transfer = () => {};

  const _renderItem = ({item}: {item: IBanks}) => {
    return (
      <TouchableOpacity
        style={styles.listItem}
        onPress={() => {
          setSelectedBank(item);
          setModal(false);
        }}>
        <Text style={{fontSize: hp(15)}}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text>Create Payment</Text>
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
      />

      <TextInputField
        onChangeText={setAmount}
        placeholder="Enter amount"
        value={amount}
        editable={!!selectedBank}
        // maxLength={10}
      />

      <ModalView visible={modal} onClickExit={() => setModal(false)}>
        <SearchBar onChangeText={setSearch} />
        <FlatList
          data={filteredBanks}
          keyExtractor={item => item.id.toString()}
          renderItem={_renderItem}
        />
      </ModalView>
    </View>
  );
};
