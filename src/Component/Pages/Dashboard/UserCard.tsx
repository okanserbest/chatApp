import { useDispatch, useSelector } from "react-redux";
import { User } from "../../../store/userSlice";
import { setSelectedMessageId } from "../../../store/messageSlice";
import { RootState } from "../../../store/store";

type UsersProps = {
    user: User;
};

const UserCard = ({ user }: UsersProps) => {
    const message = useSelector((state: RootState) => state.message);
    const dispatch = useDispatch();
    const onSelectedUser = (user: User) => {
        dispatch(setSelectedMessageId(user.id));
    };

    return (
        <div
            className={`${message.selectedMessageId === user.id ? "bg-slate-200" : ""
                } flex items-center gap-2 p-3 cursor-pointer rounded-lg`}
            key={user.id}
            onClick={() => onSelectedUser(user)}
        >

            <div>
                <h4>{user.name}</h4>
                <h2>{user.email}</h2>
            </div>
        </div>

    );
};

export default UserCard;
