import React, { memo, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Background from "../../components/Background";
import Logo from "../../components/Logo";
import Header from "../../components/Header";
import Button from "../../components/Button";
import TextInput from "../../components/TextInput";
import BackButton from "../../components/BackButton";
import { theme } from "../../core/theme";
import { Navigation } from "../../types";
import {
  emailValidator,
  passwordValidator,
  nameValidator
} from "../../core/utils";
import { signInUser } from "../../api/auth-api";
import Toast from "../../components/Toast";

type Props = {
  navigation: Navigation;
};

const RegisterScreen = ({ navigation }: Props) => {
  const [name, setName] = useState({ value: "", error: "" });
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const _onSignUpPressed = async () => {
    if (loading) return;

    const nameError = nameValidator(name.value);
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    if (emailError || passwordError || nameError) {
      setName({ ...name, error: nameError });
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    }

    setLoading(true);

    const response = await signInUser({
      name: name.value,
      email: email.value,
      password: password.value
    });

    if (response.error) {
      setError(response.error);
    }

    setLoading(false);
  };

  return (
    <Background>
      <BackButton goBack={() => navigation.navigate("HomeScreen")} />

      <Logo />

      <Header>Create Account</Header>

      <TextInput
        label="Name"
        returnKeyType="next"
        value={name.value}
        onChangeText={text => setName({ value: text, error: "" })}
        error={!!name.error}
        errorText={name.error}
      />

      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={text => setEmail({ value: text, error: "" })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        // autoCompleteType="email"
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

      <Button
        // loading={loading}
        mode="contained"
        // onPress={_onSignUpPressed}
        style={styles.button}
      >
        Sign Up
      </Button>

      <View style={styles.row}>
        <Text style={styles.label}>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
      </View>

      <Toast message={error} onDismiss={() => setError("")} />
    </Background>
  );
};

const styles = StyleSheet.create({
  label: {
    color: theme.colors.secondary
  },
  button: {
    marginTop: 24
  },
  row: {
    flexDirection: "row",
    marginTop: 4
  },
  link: {
    fontWeight: "bold",
    color: theme.colors.primary
  }
});

export default memo(RegisterScreen);

























// import React, { useState } from 'react'
// import {
//      KeyboardAvoidingView,
//   TouchableOpacity,
//   TextInput,
//   Text,
//   Alert,
//   View,
// } from "react-native";
// import AsyncStorage from '@react-native-async-storage/async-storage'
// import { Button } from '../../components/MyButton'
// import '../../config/firebase'
// import { styles } from './RegisterScreenStyles'
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import { addDoc, collection,doc,getFirestore, initializeFirestore, serverTimestamp, setDoc } from 'firebase/firestore';

// const auth = getAuth();
// const db = getFirestore()
// const colRef = collection(db, 'users')


// const RegisterScreen = () => {
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')


//   const handleSignUp = async() => {
//     if (email === '' || password === '') {
//      Alert.alert('Email and password are mandatory.')
//       return;
//     }
//     else {
//       try {
//         await createUserWithEmailAndPassword(auth, email, password).
//         then(cred => {
//         console.log(cred.user.uid);
//         console.log(cred.user.email);

//           addDoc(colRef, {
//           user_id: cred.user.uid,
//           email: cred.user.email,
//           })
//         })
//       }
//       catch {
//         return;
//       }
//     }
//   }
//     return (
//       <KeyboardAvoidingView
//       style={styles.container}
//       behavior="padding"
//       >
//         <View style={styles.inputContainer}>
//           <TextInput
//           placeholder="Email"
//           value={email}
//           onChangeText={text => setEmail(text)}
//           style={styles.input}
//           />
//           <TextInput
//           placeholder="Password"
//           value={password}
//           onChangeText={text => setPassword(text)}
//           style={styles.input}
//           secureTextEntry
//           />
//         </View>

//         <View style={styles.buttonContainer}>
//           <TouchableOpacity
//           onPress={handleSignUp}
//           style={styles.button}
//           >
//             <Text style={styles.buttonText}>Register</Text>
//           </TouchableOpacity>
//           <Text style={styles.outlineText}>
//             Already Have an account? {" ->> "}
//           </Text>
//         </View>
//       </KeyboardAvoidingView>
//     )
// }

// export default RegisterScreen
