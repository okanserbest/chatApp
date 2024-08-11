import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../Helpers/Firebase";
import { getAuth } from "firebase/auth";
import { RootState } from "../store/store";
import { useSelector } from "react-redux";
import { Message } from "../types/message";

const useSendMessage = () => {
  const message = useSelector((state: RootState) => state.message);
  const selectedUserId = message.selectedMessageId;
  const sendMessage = async (message: string) => {
    const auth = getAuth();
    const currentUser = auth.currentUser;

    if (!currentUser || !selectedUserId) return;
    if (message.trim() !== "") {
      try {
        const chatItem: Message = {
          senderId: currentUser.uid,
          senderMail: currentUser.email ?? "",
          receiverId: selectedUserId,
          message,
          timestamp: serverTimestamp(),
        };
        await addDoc(collection(db, "chats"), chatItem);
      } catch (error) {
        console.error("Message sending error: ", error);
      }
    }
  };

  return { sendMessage };
};

export default useSendMessage;
