import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen';
import JSScreen from '../Screens/JSScreen';
import ReactScreen from '../Screens/ReactScreen';

const Stack = createStackNavigator();

export default function StackNavigation(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={HomeScreen}
                options={{headerShown:false}}
            />

           

            <Stack.Screen name="Javascript" component={JSScreen}
                
            />

            <Stack.Screen name="React" component={ReactScreen}
                options={{
                    headerStyle:{
                        backgroundColor:'yellow',
                        borderBottomColor:'green',
                        borderBottomWidth:3
                    },
                    headerTitleStyle:{
                        color:'green',
                        textAlign:'center'
                    }

                }}
            />

        </Stack.Navigator>

    )
}