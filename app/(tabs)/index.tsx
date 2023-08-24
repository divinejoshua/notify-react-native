import { Button, StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { useState } from 'react';

export default function TabOneScreen() {

  // Expo notification 
  const [expoPushToken, setExpoPushToken] = useState<any>('');
  const [notification, setNotification] = useState<any>(false);


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/index.tsx" />

      <View
    style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-around',
    }}>
    <Text>Your expo push token: {expoPushToken}</Text>
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Text>Title: {notification && notification.request.content.title} </Text>
      <Text>Body: {notification && notification.request.content.body}</Text>
      <Text>Data: {notification && JSON.stringify(notification.request.content.data)}</Text>
    </View>
    <Button
      title="Press to schedule a notification"
      onPress={async () => {
        await sendPushNotification(expoPushToken);
      }}
    />
  </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
