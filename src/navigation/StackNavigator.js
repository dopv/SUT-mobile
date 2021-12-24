import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator from './TabNavigator';
import SignIn from '../screens/unAuth/signIn/SignIn';
import ForgotPassword from '../screens/unAuth/forgotPassword/ForgotPassword';
import Welcome from '../screens/unAuth/welcome/Welcome';
import { useContainer } from '../store/stores';
import { WELCOME_SCREEN, FORGOT_PASSWORD,SIGN_IN, TAB_BOTTOM } from './ScreenName';

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
      initialRouteName={WELCOME_SCREEN}
    >
      {token ? (
        <Stack.Screen name={TAB_BOTTOM} component={TabNavigator} />
      ) : (
        <>
          <Stack.Screen name={WELCOME_SCREEN} component={Welcome} />
          <Stack.Screen name={SIGN_IN} component={SignIn} />
          <Stack.Screen name={FORGOT_PASSWORD} component={ForgotPassword} />
        </>
      )}
    </Stack.Navigator>
  );
}
