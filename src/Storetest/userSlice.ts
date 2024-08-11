import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface User {
  id: string;
  name: string;
  email: string;
}

interface UsersState {
  userList: User[];
}

const initialState: UsersState = {
  userList: [],
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUserList: (state, action: PayloadAction<User[]>) => {
      state.userList = action.payload;
    },
    addUser: (state, action: PayloadAction<User>) => {
      state.userList.push(action.payload);
    },
    updateUser: (state, action: PayloadAction<User>) => {
      const index = state.userList.findIndex(user => user.id === action.payload.id);
      if (index !== -1) {
        state.userList[index] = action.payload;
      }
    },
    removeUser: (state, action: PayloadAction<string>) => {
      state.userList = state.userList.filter(user => user.id !== action.payload);
    },
  },
});

export const { setUserList, addUser, updateUser, removeUser } = userSlice.actions;

export default userSlice.reducer;