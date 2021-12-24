import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator from './TabNavigator';
import SignIn from '../screens/unAuth/signIn/SignIn';
import ForgotPassword from '../screens/unAuth/forgotPassword/ForgotPassword';
import Welcome from '../screens/unAuth/welcome/Welcome';
import { useContainer } from '../store/stores';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {

  const token =  useContainer((container) => container.token);
  // console.log(token);
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        // cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
      initialRouteName="SignIn"
    >
      {token ? (
        <Stack.Screen name="TabBottom" component={TabNavigator} />
      ) : (
        <>
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        </>
      )}
    </Stack.Navigator>
  );
}
