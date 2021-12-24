import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useContainer } from '../../../store/stores';

interface SignInProps {
  navigation: any;
  route: any;
}

export default function SignIn(props: SignInProps) {
  const { navigation, route } = props;
  const setToken = useContainer((container) => container.setTokenAction);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>SignIn</Text>
      <TouchableOpacity onPress={() => {
        // setToken('abc');
        navigation.navigate("TabBottom");
      }}>
        <Text>GoHome</Text>
      </TouchableOpacity>
    </View>
  );
}
