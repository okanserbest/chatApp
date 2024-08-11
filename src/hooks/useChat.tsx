import { useEffect, useState } from "react";
import {
  collection,
  query,
  where,
  orderBy,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../Helpers/Firebase";
import { getAuth } from "firebase/auth";
import { RootState } from "../store/store";
import { useSelector } from "react-redux";
import { Message } from "../types/message";

const useChat = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  const message = useSelector((state: RootState) => state.message);
  const selectedUserId = message.selectedMessageId;

  useEffect(() => {
    const auth = getAuth();
    const currentUser = auth.currentUser;
    if (!currentUser || !selectedUserId) return;

    const chatsQuery = query(
      collection(db, "chats"),
      where("senderId", "in", [currentUser.uid, selectedUserId]),
      where("receiverId", "in", [currentUser.uid, selectedUserId]),
      orderBy("timestamp")
    );

    const unsubscribe = onSnapshot(chatsQuery, (snapshot) => {
      const messages = snapshot.docs
        .map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
        .map((message: any) => {
          return {
            ...message,
            isMe: message?.senderId === currentUser.uid,
          };
        }) as unknown as Message[];
      setMessages(messages);
    });

    return () => unsubscribe();
  }, [selectedUserId]);

  return { messages };
};

export default useChat;
