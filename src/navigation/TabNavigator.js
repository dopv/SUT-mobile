import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomePage from '../screens/auth/home/HomePage';
import Account from '../screens/auth/account/Account';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomePage} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
}
