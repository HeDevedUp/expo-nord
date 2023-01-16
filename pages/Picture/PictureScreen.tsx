import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TouchableOpacity,
  Image,
  PermissionsAndroid,
} from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import firebase from 'firebase/app';
import Background from "../../components/Background";
import Button from "../../components/Button";

import BackButton from "../../components/BackButton";
import { theme } from "../../core/theme";
import { Navigation } from "../../types";
import { getStatusBarHeight } from 'react-native-status-bar-height';



type Props = {
  navigation: Navigation;
};

const PictureScreen = ({ navigation }: Props) => {
  const [image, setImage] = useState(null);
  const [cameraPhoto, setCameraPhoto] = useState();
  const [galleryPhoto, setGalleryPhoto] = useState();


  // const handleUpload = () => {
  //   ImagePicker.showImagePicker({}, (response) => {
  //     if (response.didCancel) {
  //       console.log('User cancelled image picker');
  //     } else if (response.error) {
  //       console.log('ImagePicker Error: ', response.error);
  //     } else if (response.customButton) {
  //       console.log('User tapped custom button: ', response.customButton);
  //     } else {
  //       const source = { uri: response.uri };
  //       setImage(source);
  //       const file = response.uri;
  //       const name = 'image.jpg';
  //       const metadata = { contentType: 'image/jpeg' };
  //       firebase.storage().ref().child(name).putFile(file, metadata);
  //       firebase.database().ref().child('imageURL').set('image.jpg');
  //       handleRetrieve(); // call handleRetrieve function after uploading the image
  //     }
  //   });
  // };


  let options = {
    saveToPhotos: true,
    mediaType: 'photo',
  };

  const openCamera = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      const result = await launchCamera(options);
      setCameraPhoto(result.assets[0].uri);
    }
  };

  const openGallery = async () => {
    const result = await launchImageLibrary(options);
    setGalleryPhoto(result.assets[0].uri);
  };


  // const handleRetrieve = async () => {
  //   firebase.database().ref().child('imageURL').on('value', (snapshot) => {
  //     let imageName = snapshot.val();
  //     firebase.storage().ref().child(imageName).getDownloadURL()
  //       .then((url) => {
  //         console.log(url);
  //         setImage({ uri: url });
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   });
  // };

  // useEffect(() => {
  //   handleRetrieve();
  // }, [image])

  return (
    <Background style={styles.container}>

      <BackButton goBack={() => navigation.navigate("Notify")} />


      <View style={styles.container}>

        <View style={styles.space}>
          <TouchableOpacity onPress={openCamera} style={styles.button}>
            <Text style={styles.buttonText}>Open Camera</Text>
          </TouchableOpacity>
          <Image style={styles.imageStyle} source={{ uri: cameraPhoto }} />
          <TouchableOpacity onPress={openGallery} style={styles.button}>
            <Text style={styles.buttonText}>Open Gallery</Text>
          </TouchableOpacity>
          <Image style={styles.imageStyle} source={{ uri: galleryPhoto }} />
        </View>
      </View>
    </Background>

      {/* <Button
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
      </Button> */}

  {/* <Button
        // loading={loading}
        mode="contained"
        // onPress={_onSignUpPressed}
        style={styles.button}
      >
        Upload
      </Button> */}
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
  },
  space: {
    marginTop: theme.spacing.mll,
    alignItems: 'center',
  },
  btnBox: {
    position: 'absolute',
    paddingHorizontal: theme.spacing.mll,
    backgroundColor: theme.colors.coral,
    paddingVertical: theme.spacing.sl,
    borderRadius: theme.spacing.sl,
    color: theme.colors.white,
    fontWeight: 'bold',
    marginTop: theme.spacing.sl,
    left: theme.spacing.xxxl,
  },
  button: {
    backgroundColor: theme.colors.coral,
    paddingHorizontal: theme.spacing.xxxl,
    paddingVertical: theme.spacing.sl,
    marginTop: theme.spacing.xxxl,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: theme.spacing.ml,
    color: theme.colors.white,
    fontWeight: 'bold',
  },
  imageStyle: {
    height: 150,
    width: 150,
    marginTop: theme.spacing.mll,
    borderRadius: 5,
  },
});

export default PictureScreen;





















