
import React, { type PropsWithChildren, useEffect } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    // useColorScheme,
    View,
} from 'react-native';


import { SafeAreaProvider } from 'react-native-safe-area-context'
import Main from './main';
import { AuthUserProvider } from './contexts/Context'


export default function App() {

    return (

            <AuthUserProvider>
                <Main />
            </AuthUserProvider>
     
    )

};


