
import React, { type PropsWithChildren } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    // useColorScheme,
    View,
} from 'react-native';

import CalculatorScreen from './pages/Calculator/CalculatorScreen';
import LoginScreen from './pages/Login/LoginScreen';
import MessagingScreen from './pages/Messaging/MessagingScreen';
import NotificationScreen from './pages/Notification/NotificationScreen';
import PictureScreen from './pages/Picture/PictureScreen';
import RegisterScreen from './pages/Register/RegisterScreen';
import SplashScreen from './pages/Splash/SplashScreen';
import BottomNavigation from './appNavigation/BottomNavigation';
import OnboardingNavigation from './appNavigation/OnboardingNavigation';
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Main from './main';


export default function App() {
    return (
        <>
            <Main />
        </>
    );
};


