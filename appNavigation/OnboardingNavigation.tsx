import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../pages/Login/LoginScreen';
import SplashScreen from '../pages/Splash/SplashScreen';
import RegisterScreen from '../pages/Register/RegisterScreen';
import BottomNavigation from './BottomNavigation';
import { OnboardingTabParamList } from '../types'

const onboardingStack = createNativeStackNavigator<OnboardingTabParamList>();

const OnboardingNavigation = () => {
  return (
    <onboardingStack.Navigator
      screenOptions={{ headerShown: false }}>
      <onboardingStack.Screen name="SignIn" component={RegisterScreen} />
      <onboardingStack.Screen name="SignUp" component={LoginScreen} />

    </onboardingStack.Navigator>
  );
};
export default OnboardingNavigation;
