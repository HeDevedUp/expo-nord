import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { CompositeNavigationProp } from '@react-navigation/native'

export type Navigation = {
  navigate: (scene: string) => void;
};

export interface BottomTabParamList {
  NotificationScreen: undefined
  PictureScreen: undefined
  MessagingScreen: undefined
  CalculatorScreen: undefined
  [key: string]: undefined | object
}
export interface OnboardingTabParamList {
  SignUp: undefined
  SignIn: undefined
  [key: string]: undefined | object
}
export type AuthDetails = {
  email: string;
  password: string;
  name?: string;
};

