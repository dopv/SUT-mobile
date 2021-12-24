import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import RootNavigator from './src/navigation/RootNavigator';
import {SafeAreaProvider} from 'react-native-safe-area-context'
import { ContainerProvider } from './src/store/stores';
export default function App() {
  return (
    <>
      <ContainerProvider>
        <SafeAreaProvider>
          <StatusBar
            translucent
            backgroundColor="transparent"
            barStyle={"dark-content"}
          />
            <RootNavigator />
        </SafeAreaProvider>
      </ContainerProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
