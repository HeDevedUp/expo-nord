import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

type Props = {
  onPress: () => void;
  title: string;
  style?: object;
  textStyle?: object;
};

export const Button = ({ onPress, title, style, textStyle }: Props): JSX.Element => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
   button: {
    backgroundColor: '#0782F9',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    paddingBottom: 15
  },
  buttonText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#ffffff'
  },
});
