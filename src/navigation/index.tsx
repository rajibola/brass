import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import React from 'react';
import {CreatePayment, PaymentHistory} from 'screens';
import {RootStackParamList} from 'types/types';

const options = {
  headerShown: false,
  gestureEnabled: false,
};

const Tab = createBottomTabNavigator<RootStackParamList>();

export const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          header: () => null,
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen name="Home" component={CreatePayment} />
        <Tab.Screen name="History" component={PaymentHistory} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
