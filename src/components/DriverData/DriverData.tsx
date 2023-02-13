import React from 'react';
import {View, Text} from 'react-native';

export const DriverData = () => {
  return (
    <View
      style={{
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 1,
        marginVertical: 10,
      }}>
      <View
        style={{
          borderBottomWidth: 1,
          borderColor: 'black',
          backgroundColor: '#eee',
          width: '100%',
          alignItems: 'center',
          padding: 10,
        }}>
        <Text
          style={{
            fontSize: 15,
          }}>
          Datos del Conductor
        </Text>
      </View>

      <View
        style={{
          width: '100%',
          paddingHorizontal: 30,
          paddingVertical: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 5,
          }}>
          <Text>Nombre:</Text>
          <Text>Virginia Davila Salazar</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 5,
          }}>
          <Text>Direccion:</Text>
          <Text>Av. Talara 321 Jesus Maria</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 5,
          }}>
          <Text>Telefonos:</Text>
          <Text>980669209</Text>
        </View>
      </View>
    </View>
  );
};
