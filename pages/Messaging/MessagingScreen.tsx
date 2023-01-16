import React, { useCallback, useLayoutEffect, useState } from 'react';
import { GiftedChat, IMessage } from "react-native-gifted-chat";
import { StackScreenProps } from "@react-navigation/stack";
// import { RootStackParamList } from "../../App";
import { signOut } from 'firebase/auth'
import { collection, query, onSnapshot, addDoc, orderBy } from 'firebase/firestore'
import { auth, db } from "../../config/firebase";
import { TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons'
import { theme } from "../../core/theme";

type Message = {
  id: string
  text: string
  user: string
  created_at: string
}

const Chat = ({ navigation }: StackScreenProps<RootStackParamList>) => {
  const [messages, setMessages] = useState<IMessage[]>([])

  const handleSignOut = () => signOut(auth).catch(err => console.log(err))

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity style={{ marginRight: 10 }} onPress={handleSignOut}>
          <AntDesign name={'logout'} size={24} color={theme.colors.gray} style={{ marginRight: 10 }} />
        </TouchableOpacity>
      )
    })
  }, [navigation])

  useLayoutEffect(() => {
    const collectionRef = collection(db, 'chats')
    const q = query(collectionRef, orderBy('created_at', 'desc'))

    const unsubscribe = onSnapshot(q, snapshot => {
      console.log(snapshot)

      setMessages(snapshot.docs.map(doc => ({
        _id: doc.id,
        user: doc.data().user,
        text: doc.data().text,
        createdAt: doc.data().created_at.toDate()
      })))
    })

    return () => unsubscribe()
  }, [])

  const handleSend = useCallback<(messages: IMessage[]) => void>(messages => {
    setMessages(prevMessages => GiftedChat.append(prevMessages, messages))

    const { _id, createdAt, text, user } = messages[0]

    addDoc(collection(db, 'chats'), { id: _id, created_at: createdAt, text, user })
  }, [])

  return (
    <GiftedChat messages={messages} onSend={messages => handleSend(messages)}
      user={{ _id: auth.currentUser?.uid!, avatar: 'https://i.pravatar.cc/300' }}
      messagesContainerStyle={{ backgroundColor: theme.colors.gray }} />
  );
};

export default Chat;
