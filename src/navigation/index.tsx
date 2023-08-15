import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer, RouteProp} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {CreatePayment, PaymentHistory} from 'screens';
import {hp} from 'utils';
import COLORS from 'constants/COLORS';

const Tab = createBottomTabNavigator<RootStackParamList>();

interface TabBarIconProps {
  focused: boolean;
  color: string;
  size: number;
}

interface TabBarProps {
  route: RouteProp<RootStackParamList, keyof RootStackParamList>;
}

const getTabIconName = (routeName: string, focused: boolean): string => {
  const iconMappings: Record<string, string> = {
    Home: 'send',
    History: 'calendar',
  };

  const iconName = iconMappings[routeName];
  return iconName ? (focused ? iconName : `${iconName}-o`) : '';
};

const tabBarIcon = (
  {focused, color, size}: TabBarIconProps,
  routeName: string,
) => {
  const iconName = getTabIconName(routeName, focused);
  return <Icon name={iconName} size={size} color={color} />;
};

const screenOptions = ({route}: TabBarProps) => ({
  header: () => null,
  tabBarActiveTintColor: COLORS.green,
  tabBarInactiveTintColor: 'gray',
  tabBarLabelStyle: {
    fontSize: hp(13),
  },
  tabBarIcon: ({focused, color, size}: TabBarIconProps) =>
    tabBarIcon({focused, color, size}, route.name),
});

export const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen name="Home" component={CreatePayment} />
        <Tab.Screen name="History" component={PaymentHistory} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
