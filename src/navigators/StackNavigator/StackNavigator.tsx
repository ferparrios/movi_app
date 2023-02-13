import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  HomeScreen,
  DataScreen,
  DriverScreen,
  ClientsList,
} from '../../screens/index';

export type RootStackParams = {
  HomeScreen: undefined;
  ClientsList: undefined;
  DataScreen: undefined;
  DriverScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="DriverScreen" component={DriverScreen} />
      <Stack.Screen name="ClientsList" component={ClientsList} />
      <Stack.Screen name="DataScreen" component={DataScreen} />
    </Stack.Navigator>
  );
};
