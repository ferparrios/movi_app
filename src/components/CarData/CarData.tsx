import React from 'react';
import {View, Text} from 'react-native';

export const CarData = () => {
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
        <Text>Datos del Vehiculo</Text>
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
          <Text>Marca:</Text>
          <Text>Changan</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 5,
          }}>
          <Text>Color:</Text>
          <Text>Plata</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 5,
          }}>
          <Text>Placa de Rodaje:</Text>
          <Text>ARN-829</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 5,
          }}>
          <Text>Permiso Municipal:</Text>
          <Text>G00732189</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 5,
          }}>
          <Text>Nro de Poliza Soat:</Text>
          <Text>3022000077495-1</Text>
        </View>
      </View>
    </View>
  );
};
