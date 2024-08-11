import useChat from "../../../Hooks/useChat";
import { useEffect, useRef, useState } from "react";
import { Send } from "lucide-react";
import { format } from "date-fns";

const Input = () => {
  const chatRef = useRef<HTMLDivElement | null>(null);
  const { messages } = useChat();

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    chatRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="chats h-[calc(100vh-170px)] pt-4 overflow-y-auto bg-slate-200">
      {messages.map((message) => {
        return (
          <div
            className={`relative flex  ${
              message.isMe ? "justify-end" : "justify-start"
            }`}
            key={message.timestamp}
          >
            <div
              className={`flex items-end shadow mb-1 py-1 px-2 mx-4 rounded-lg max-w-[80%] lg:max-w-[60%] ${
                message.isMe
                  ? "bg-emerald-500 text-white rounded-tr-none"
                  : "bg-white text-slate-600 rounded-tl-none"
              }`}
            >
              <p className="py-1 px-2">{message.message}</p>
              {message.timestamp && (
                <p
                  className={`text-[11px] ${
                    message.isMe ? "text-slate-200" : "text-slate-400"
                  }`}
                >
                  {format(message.timestamp.toDate(), "HH:mm")}
                </p>
              )}
              {!message.isMe && message.senderMail && (
                <p className={`text-[11px] text-slate-400 pl-2`}>
                  {message.senderMail}
                </p>
              )}
            </div>
          </div>
        );
      })}
      <div ref={chatRef}></div>
    </div>
  );
};

export default Input;
