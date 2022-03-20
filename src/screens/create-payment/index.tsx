import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootDispatch, RootState} from 'redux/store';
import {styles} from './styles';

export const CreatePayment = () => {
  const {getAllTranfers} = useDispatch<RootDispatch>().Transfers;
  const Transfers = useSelector((state: RootState) => state.Transfers).data;

  useEffect(() => {
    getAllTranfers();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Create Payment</Text>

      <Text>{JSON.stringify(Transfers)}</Text>
    </View>
  );
};
