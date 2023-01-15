import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList,
KeyboardAvoidingView, Image } from "react-native";
import Background from "../../components/Background";
import Logo from "../../components/Logo";
import Header from "../../components/Header";
import Button from "../../components/Button";
import TextInput from "../../components/TextInput";
import BackButton from "../../components/BackButton";
import { theme } from "../../core/theme";
import { Navigation } from "../../types";
import { getStatusBarHeight } from 'react-native-status-bar-height';
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

const PictureScreen = ({ navigation }: Props) => {

  const [image, setImage] = useState();
  const [profilePic, setProfilePic] = useState()
const name = {}
  return (
    <Background style={styles.container}>
     
      <BackButton goBack={() => navigation.navigate("Notify")} />
    
      <View>
      {profilePic ? (
        <Image source={{ uri: profilePic }} style={{ width: 200, height: 200 }} />
      ) : (
        <Text>No profile picture</Text>
      )}
      </View>
       <View>
      {image ? (
        <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
      ) : (
        <Text></Text>
      )}
      </View>
      {/* <TextInput
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
      /> */}

      <Button
        // loading={loading}
        mode="outlined"
        // onPress={_onSignUpPressed}

      >
        Use Camera
      </Button>
      <Button
        // loading={loading}
        mode="outlined"
        // onPress={_onSignUpPressed}
      >
        Select From Gallery
      </Button>
      <Button
        // loading={loading}
        mode="contained"
        // onPress={_onSignUpPressed}
        style={styles.button}
      >
        Upload
      </Button>

      
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
     flex: 1,
    padding: 20,
    width: "100%",
    maxWidth: 340,
    alignItems: "center",
    justifyContent: "flex-end"
  },
  label: {
    color: theme.colors.secondary
  },
  button: {
    marginVertical: 24
  },
   list: {
    position: 'absolute',
    top: 50 + getStatusBarHeight(),
    left: 10,
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

export default PictureScreen;





















