export interface Message {
    senderId: string;
    senderMail?: string;
    receiverId: string;
    message: string;
    timestamp: any;
    isMe?: boolean;
  }
  