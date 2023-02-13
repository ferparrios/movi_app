import React from 'react';
import {View, Text} from 'react-native';

export const ClientData = () => {
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
        <Text>Datos del Alumno</Text>
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
          <Text>Rolando Chavez</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 5,
          }}>
          <Text>Grado y Seccion:</Text>
          <Text>3ero secundaria</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 5,
          }}>
          <Text>Padre o apoderado:</Text>
          <Text>Sr. Rolando Chavez</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 5,
          }}>
          <Text>Direccion:</Text>
          <Text>Jr. Centenario 137 dptop. 1101</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 5,
          }}>
          <Text>Distrito:</Text>
          <Text>Brena</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 5,
          }}>
          <Text>Telefono:</Text>
          <Text>975033854</Text>
        </View>
      </View>
    </View>
  );
};
