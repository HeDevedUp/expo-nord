import { Avatar, ListItem } from "@rneui/themed";
import {
    collection,
    doc,
    DocumentData,
    onSnapshot,
    orderBy,
    query,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../core/config";

type ListItemProps = {
    id: string;
    chatName: string;
    enterChat: any;
};

export type data = {
    id: string;

    data: DocumentData;
};

const CustomListItem = ({ id, chatName, enterChat }: ListItemProps) => {
    const [chatMessages, setChatMessages] = useState<data[]>([]);

    useEffect(() => {
        const docRef = doc(db, "chats", id);
        const colRef = collection(docRef, "messages");
        const q = query(colRef, orderBy("timestamp", "desc"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const chatarr: data[] = [];
            querySnapshot.forEach((doc) => {
                chatarr.push({ id: doc.id, data: doc.data() });
            });
            setChatMessages(chatarr);
        });
        return unsubscribe;
    }, []);

    return (
        <ListItem onPress={() => enterChat(id, chatName)} key={id} bottomDivider>
            <Avatar rounded source={{ uri: chatMessages?.[0]?.data.photoUrl }} />
            <ListItem.Content>
                <ListItem.Title style={{ fontWeight: "800" }}>
                    {chatName}
                </ListItem.Title>
                <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
                    {chatMessages?.[0]?.data?.displayName}:
                    {chatMessages?.[0]?.data?.message}
                </ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
    );
};

export default CustomListItem;
