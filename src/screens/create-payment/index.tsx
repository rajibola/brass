import {useSearch} from 'hooks/useSearch';
import React, {FC, useEffect, useState} from 'react';
import {FlatList, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {IBanks} from 'redux/models';
import {RootDispatch, RootState} from 'redux/store';
import {ModalView} from 'shared';
import {hp} from 'utils/responsive-dimensions';
import {styles} from './styles';

export const CreatePayment = () => {
  const {getBanks} = useDispatch<RootDispatch>().Banks;
  const {banks} = useSelector((state: RootState) => state.Banks);

  const [selectedBank, setSelectedBank] = useState<IBanks>();
  const [search, setSearch] = useState<string>('');
  const [modal, setModal] = useState<boolean>(false);

  const filteredBanks = useSearch(banks as IBanks[], ['name'], search);

  useEffect(() => {
    getBanks();
  }, []);

  const _renderItem = ({item}: {item: IBanks}) => {
    return (
      <TouchableOpacity
        style={styles.listItem}
        onPress={() => setSelectedBank(item)}>
        <Text style={{fontSize: hp(15)}}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text>Create Payment</Text>

      <ModalView visible={modal}>
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

export const SearchBar: FC<{onChangeText: (text: string) => void}> = ({
  onChangeText,
}) => {
  return (
    <View
      style={{
        height: 40,
        borderWidth: 1,
        marginHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
      }}>
      <TextInput
        placeholder="Search"
        style={{height: '100%', flex: 1, fontSize: 16}}
        onChangeText={onChangeText}
      />
      <TouchableOpacity
        style={{
          width: 20,
          height: 20,
          backgroundColor: 'red',
        }}></TouchableOpacity>
    </View>
  );
};
