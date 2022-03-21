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
          //  tabBarIcon: ({ focused, color, size }) => {
          //   let iconName;

          //   if (route.name === 'Home') {
          //     iconName = focused
          //       ? 'ios-information-circle'
          //       : 'ios-information-circle-outline';
          //   } else if (route.name === 'Settings') {
          //     iconName = focused ? 'ios-list-box' : 'ios-list';
          //   }

          //   // You can return any component that you like here!
          //   return <Ionicons name={iconName} size={size} color={color} />;
          // },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen name="Home" component={CreatePayment} />
        <Tab.Screen name="History" component={PaymentHistory} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
