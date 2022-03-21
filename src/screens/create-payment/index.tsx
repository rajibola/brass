import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootDispatch, RootState} from 'redux/store';
import {styles} from './styles';

export const CreatePayment = () => {
  const {getBanks} = useDispatch<RootDispatch>().Banks;
  const {banks} = useSelector((state: RootState) => state.Banks);

  useEffect(() => {
    getBanks();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Create Payment</Text>

      {!!banks &&
        banks.map(item => {
          return (
            <View key={item.id}>
              <Text>{item.name}</Text>
            </View>
          );
        })}
    </View>
  );
};
