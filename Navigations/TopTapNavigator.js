import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Contacto1 from '../Screens/Contacto1';
import Contacto2 from '../Screens/Contacto2';
import Constants from 'expo-constants';

const Tab = createMaterialTopTabNavigator();

export default function TopTapNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Contacto1"
      tabBarOptions={{
        activeTintColor: '#5391f5',
        inactiveTintColor: '#FFFFFF',
        showIcon: true,
        showLabel: true,
        labelStyle: {
          fontSize: 11,
        },
        style: {
          paddingTop: Constants.statusBarHeight,
          backgroundColor: '#000000',
        },
      }}>
      <Tab.Screen
        name="Contacto1"
        component={Contacto1}
        options={{
          tabBarLabel: 'Contacto 1',
          tabBarIcon: ({ color }) => (
            <Ionicons name={'person-outline'} size={20} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Contacto2"
        component={Contacto2}
        options={{
          tabBarLabel: 'Contacto 2',
          tabBarIcon: ({ color }) => (
            <Ionicons name={'person-outline'} size={20} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
