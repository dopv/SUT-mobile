import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

interface HomePageProps {
  navigation: any;
  route: any;
}

export default function HomePage(props: HomePageProps) {

  const {navigation, route } = props;

  return (
    <View>
      <Text>Home</Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>goback</Text>
      </TouchableOpacity>
    </View>
  );
}
