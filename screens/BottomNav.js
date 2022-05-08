import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import {
  TabBar,
  ThemeProvider,
  Headline,
  NavigationRow,
  Icon,
  RowItem,
  ArrowRight } from 'react-native-ios-kit';
import Constants from 'expo-constants';
import { MaterialIcons, MaterialCommunityIcons, Foundation, FontAwesome5, FontAwesome } from '@expo/vector-icons';
import {
  NavigationContainer,
  NavigationHelpersContext,
  useNavigationBuilder,
  TabRouter,
  TabActions,
} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Card } from 'react-native-paper';
import { BalanceScreen } from "./Balance";
import TapOn from "./TapOn"
import RouteScreen from "./RouteScreen"
import Account from "./Account"
import Trip from "./Trip"

const Tab = createBottomTabNavigator();

export default function BottomNavigation() {
  return (
      <Tab.Navigator
        //independent={true}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Tap On') {
              iconName = focused ? 'contactless-payment' : 'contactless-payment';
              return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
            } else if (route.name === 'Balance') {
              iconName = focused ? 'account-balance-wallet' : 'account-balance-wallet';
              return <MaterialIcons name={iconName} size={size} color={color} />;
            } else if (route.name === 'Trip') {
              iconName = focused ? 'map' : 'map';
              return <Foundation name={iconName} size={size} color={color} />;
            } else if (route.name === 'Account') {
              iconName = focused ? 'account-circle' : 'account-circle';
              return <MaterialIcons name={iconName} size={size} color={color} />;
            } else if (route.name === 'Route') {
              iconName = focused ? 'route' : 'route';
              return <FontAwesome5 name={iconName} size={size} color={color} />;
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: 'blue',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Balance" component={BalanceScreen} />
        <Tab.Screen name="Tap On" component={TapOn} />
        <Tab.Screen name="Trip" component={Trip} />
        <Tab.Screen name="Route" component={RouteScreen} />
        <Tab.Screen name="Account" component={Account} />
      </Tab.Navigator>
  );
}
