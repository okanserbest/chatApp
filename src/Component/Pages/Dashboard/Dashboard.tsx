import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import Input from "./Input";
import Chat from "./Chat";

const Dashboard = () => {
  const message = useSelector((state: RootState) => state.message);

  if (message.selectedMessageId) {
    return (
      <div className="relative">
        <Chat />
        <Input />
      </div>
    );
  }
  return (
    <div className="h-full flex justify-center items-center text-center flex-col">
      <p className="mt-8">Sohbet etmek için bir kullanıcıya tıklayın.</p>
    </div>
  );
};

export default Dashboard;
