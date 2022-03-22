import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import colors from 'constants/colors';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {CreatePayment, PaymentHistory} from 'screens';
import {RootStackParamList} from 'types/types';
import {hp} from 'utils';
Icon.loadFont();

const Tab = createBottomTabNavigator<RootStackParamList>();

export const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          header: () => null,
          tabBarActiveTintColor: colors.green,
          tabBarInactiveTintColor: 'gray',
          tabBarLabelStyle: {
            fontSize: hp(13),
          },
          tabBarIcon: ({focused, color, size}) => {
            let iconName: string;

            if (route.name === 'Home') {
              iconName = focused ? 'send' : 'send-o';
            } else if (route.name === 'History') {
              iconName = focused ? 'calendar' : 'calendar-o';
            }

            return <Icon name={iconName!} size={size} color={color} />;
          },
        })}>
        <Tab.Screen name="Home" component={CreatePayment} />
        <Tab.Screen name="History" component={PaymentHistory} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
