import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import UserCard from "./UserCard";
import useFirestoreUsers from "../../../hooks/useFirestoreUsers";

const Sidebar = () => {
  useFirestoreUsers();
  const userList = useSelector((state: RootState) => state.users.userList);
  return (
    <aside
      id="logo-sidebar"
      className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800 mt-14">
        <ul className="space-y-2 font-medium">
          {userList.map((user) => (
            <li key={user.id}>
              <UserCard user={user} />
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
