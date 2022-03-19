import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import React from 'react';
import {CreatePayment, PaymentHistory} from 'screens';
import {RootStackParamList} from 'types/types';

const options: NativeStackNavigationOptions = {
  headerShown: false,
  gestureEnabled: false,
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={options}>
        <Stack.Screen name="Home" component={CreatePayment} />
        <Stack.Screen name="History" component={PaymentHistory} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
