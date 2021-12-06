import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../Navigations/StackNavigation';
import InicioScreen from '../Screens/InicioScreen';
import GithubScreen from '../Screens/GithubScreen';
import AcercadeScreen from '../Screens/AcercadeScreen';
import Contacto1 from './TopTapNavigator';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Inicio"
      tabBarOptions={{
        activeTintColor: '#ff6600',
        inactiveTintColor: '#060606',
        showLabel: true,
        labelStyle: {
          fontSize: 12,
        },
        style: {
          paddingBottom: 5,
          backgroundColor: '#f3f3f1',
        },
      }}>
      <Tab.Screen 
        name="Inicio"
        component={InicioScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Inicio',
          tabBarIcon: ({ color }) => (
            <Ionicons name={'ios-home'} size={20} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Github"
        component={GithubScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Github',
          tabBarIcon: ({ color }) => (
            <Ionicons name={'logo-github'} size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Programar',
          tabBarIcon: ({ color }) => (
            <Ionicons name={"code-outline"} size={20} color={color}/>
          ),
        }}
      />
      

      <Tab.Screen
      name = "Contactos" 
      component={Contacto1}
      options={{
          headerShown:false,
          tabBarLabel:"Contactos",
          tabBarIcon:({color})=>(
          <Ionicons name={"people-outline"} size={20} color={color}/>
          )
      }}
    />
      <Tab.Screen
        name="Acercade"
        component={AcercadeScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Acerca de',
          tabBarIcon: ({ color }) => (
            <Ionicons name={'help-circle-outline'} size={20} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
