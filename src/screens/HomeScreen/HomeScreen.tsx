import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export const HomeScreen = () => {
  const navigator = useNavigation();
  return (
    <View>
      <Text>Home Screen</Text>
      <TouchableOpacity
        onPress={() => {
          navigator.navigate('DriverScreen');
          // console.log('Perro')
        }}>
        <Text>Go to Driver data</Text>
      </TouchableOpacity>
    </View>
  );
};
