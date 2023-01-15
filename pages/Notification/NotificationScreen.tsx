// import React from 'react';
// import { SafeAreaView, View } from 'react-native';
// import { Button } from '../../components/MyButton';
// import { styles } from './NotificationScreenStyles';
// // import notifee from '@notifee/react-native';

// const NotificationScreen = (): JSX.Element => {
//   const displayNotification = async() => {

//     // Create a channel (required for Android)
//     const channelId = await notifee.createChannel({
//       id: 'default',
//       name: 'Default Channel',
//     });
//     // Display a notification
//     await notifee.displayNotification({
//       title: 'Nordstone App',
//       body: 'You have a new notification',
//       android: {
//         channelId,
//         smallIcon: 'ic_launcher', // optional, defaults to 'ic_launcher'.
//         // pressAction is needed if you want the notification to open the app when pressed
//         pressAction: {
//           id: 'default',
//         },
//       },
//     });
//   }



//   return (
//     <SafeAreaView style={styles.container}>
//     <View>
//       <Button
//         onPress={displayNotification}
//         title="Send"
//         style={styles.circle}
//         textStyle={styles.text}
//       />
//     </View>
//     </SafeAreaView>
//   );
// };

// export default NotificationScreen;

