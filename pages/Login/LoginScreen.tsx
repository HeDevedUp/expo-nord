


import React, { useState } from 'react'
import {
  Text,
  View,
  KeyboardAvoidingView,
  Alert,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import Background from "../../components/Background";
import Logo from "../../components/Logo";
import Header from "../../components/Header";
import Button from "../../components/Button";
import TextInput from "../../components/TextInput";
import BackButton from "../../components/BackButton";
import { theme } from "../../core/theme";
import { emailValidator, passwordValidator } from "../../core/utils";
import { Navigation } from "../../types";
// import { loginUser } from "../../api/auth-api";
import Toast from "../../components/Toast";

// import AsyncStorage from '@react-native-async-storage/async-storage'
import '../../config/firebase'
import { styles } from './LoginScreenStyles'
import { StackScreenProps } from "@react-navigation/stack";
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";

const auth = getAuth();


const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const forgotPassword = async () => {
    if (email === "") {
      Alert.alert("Email and password are mandatory.");
    }
    else {
      sendPasswordResetEmail(auth, email)
        .then(() => {
          Alert.alert("reset email sent to " + email);
        })
        .catch((e) => {
          Alert.alert("Something went wrong, try again!!");
          console.log(e)
        });
    }
  }

  const handleSignIn = async () => {
    if (email === '' || password === '') {
      Alert.alert('Email and password are mandatory.')

      return;
    }
    else {
      try {
        await signInWithEmailAndPassword(auth, email, password)
          .then(() => {
            Alert.alert("logged in " + email);
          });
        console.log('Signed in');
      } catch (error) {
        console.log("hi");
      }
    }
  }


  return (
    <KeyboardAvoidingView behavior='padding' style={styles.container}>



      <Background>
        <BackButton goBack={() => navigation.navigate("HomeScreen")} />

        <Logo />
        <Header>Welcome back.</Header>

        <TextInput
          label="Email"
          returnKeyType="next"
          value={email.value}
          onChangeText={text => setEmail({ value: text, error: "" })}
          error={!!email.error}
          errorText={email.error}
          autoCapitalize="none"
          autoCompleteType="email"
          textContentType="emailAddress"
          keyboardType="email-address"
        />
        <TextInput
          label="Password"
          returnKeyType="done"
          value={password.value}
          onChangeText={text => setPassword({ value: text, error: "" })}
          error={!!password.error}
          errorText={password.error}
          secureTextEntry
          autoCapitalize="none"
        />

        <View style={styles.forgotPassword}>
          <TouchableOpacity
            onPress={() => navigation.navigate("ForgotPasswordScreen")}
          >
            <Text style={styles.label}>Forgot your password?</Text>
          </TouchableOpacity>
        </View>
        <Button
          // loading={loading}
          mode="contained"
          onPress={() => navigation.navigate('Dashboard')}
        >
          Login
        </Button>

        <View style={styles.row}>
          <Text style={styles.label}>Don’t have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
            <Text style={styles.link}>Sign up</Text>
          </TouchableOpacity>
        </View>

        {/* <Toast message={error} onDismiss={() => setError("")} /> */}



      </Background>
    </KeyboardAvoidingView>
  )
}

export default LoginScreen
