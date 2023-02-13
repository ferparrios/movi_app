import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {CarData, DriverData, ClientData} from '../../components/index'

export const DataScreen = () => {
  return (
    <ScrollView bounces={false}>
      <View
        style={{
          height: '100%',
          paddingHorizontal: 16,
          paddingVertical: 10,
        }}>
        <View
          style={{
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 30,
              textAlign: 'center',
            }}>
            Colegio Sagrado Corazon Sophianum
          </Text>
          <Text
            style={{
              fontSize: 20,
              textAlign: 'center',
            }}>
            Movilidad Escolar 2023
          </Text>
        </View>

        <DriverData />

        <CarData />

        <ClientData />
      </View>
    </ScrollView>
  );
};
