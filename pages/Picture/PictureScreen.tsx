import React, { useState, useEffect } from "react";
import {
  View, Text, StyleSheet, TouchableOpacity, FlatList,
  KeyboardAvoidingView, Image
} from "react-native";
import firebase from 'firebase';
import Background from "../../components/Background";
import Button from "../../components/Button";

import BackButton from "../../components/BackButton";
import { theme } from "../../core/theme";
import { Navigation } from "../../types";
import { getStatusBarHeight } from 'react-native-status-bar-height';
import ImagePicker from 'react-native-image-picker';



type Props = {
  navigation: Navigation;
};

const PictureScreen = ({ navigation }: Props) => {
  const [image, setImage] = useState(null);

  const handleUpload = () => {
    ImagePicker.showImagePicker({}, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = { uri: response.uri };
        setImage(source);
        const file = response.uri;
        const name = 'image.jpg';
        const metadata = { contentType: 'image/jpeg' };
        firebase.storage().ref().child(name).putFile(file, metadata);
        firebase.database().ref().child('imageURL').set('image.jpg');
        handleRetrieve(); // call handleRetrieve function after uploading the image
      }
    });
  };

  const handleRetrieve = async () => {
    firebase.database().ref().child('imageURL').on('value', (snapshot) => {
      let imageName = snapshot.val();
      firebase.storage().ref().child(imageName).getDownloadURL()
        .then((url) => {
          console.log(url);
          setImage({ uri: url });
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };

  useEffect(() => {
    handleRetrieve();
  }, [image])

  return (
    <Background style={styles.container}>

      <BackButton goBack={() => navigation.navigate("Notify")} />

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {image && <Image source={image} style={{ width: 100, height: 100 }} />}
      </View>








      <Button
        // loading={loading}
        mode="outlined"
        onPress={handleUpload}

      >
        Use Camera
      </Button>
      <Button
        // loading={loading}
        mode="outlined"
        onPress={handleUpload}
      >
        Select From Gallery
      </Button>
      {/* <Button
        // loading={loading}
        mode="contained"
        // onPress={_onSignUpPressed}
        style={styles.button}
      >
        Upload
      </Button> */}


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





















