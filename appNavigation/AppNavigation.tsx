import { View, Text } from 'react-native'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomNavigation from './BottomNavigation';
import React from 'react'

const App = createNativeStackNavigator();
export default function AppNavigation() {
    return (
        <App.Navigator>
            <App.Screen  name="Dashboard" component = {BottomNavigation}/>
        </App.Navigator>
    )
}
