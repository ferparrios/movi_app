import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {CarData, DriverData} from '../../components';
import { useNavigation } from '@react-navigation/native';

export const DriverScreen = () => {

  const navigator = useNavigation()

  return (
    <SafeAreaView>
      <View
         style={{
          height: '100%',
          paddingHorizontal: 16,
          paddingVertical: 10,
        }}
      >
        <View>
          <Text>Foto del conductor</Text>
        </View>

        <DriverData />

        <CarData />

        <TouchableOpacity
          onPress={() => navigator.navigate("ClientsList")}
        >
          <Text>Ver alumnos</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
