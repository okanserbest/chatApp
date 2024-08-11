import { useState } from "react";
import { Send } from "lucide-react";
import useSendMessage from "../../../Hooks/useSendMessage";

const Input = () => {
  const { sendMessage } = useSendMessage();
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    sendMessage(message);
    setMessage("");
  };

  const handleKeyDown = (e: any) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className="bg-slate-100 h-16 border-t border-slate-200 flex items-center px-8 gap-4">
      <div className="flex-1">
        <input
          type="text"
          className="w-full rounded-lg h-11 bg-white shadow px-4"
          placeholder="Bir şeyler yazın..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
      <Send
        className="cursor-pointer text-gray-600 w-200 text-4xl"
        style={{ fontSize: 28 }}
        onClick={handleSendMessage}
      />
    </div>
  );
};

export default Input;
