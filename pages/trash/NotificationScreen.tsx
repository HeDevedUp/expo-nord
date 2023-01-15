import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import notifee from '@notifee/react-native';

// import MyButton from '../components/MyButton';

const NotificationScreen = () => {


const displayNotification = async() => {

    // Create a channel (required for Android)
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });

    // Display a notification
    await notifee.displayNotification({
      title: 'Notification Title',
      body: 'Main body content of the notification',
      android: {
        channelId,
        smallIcon: 'ic_launcher', // optional, defaults to 'ic_launcher'.
        // pressAction is needed if you want the notification to open the app when pressed
        pressAction: {
          id: 'default',
        },
      },
    });
  }




  return (
    <View>
      <Button
      onPress={displayNotification}
        title="Send Notification"
      />
    </View>
  );
};




export default NotificationScreen;
