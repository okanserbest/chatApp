import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import messageSlice from './messageSlice';

export const store = configureStore({
  reducer: {
    users: userReducer,
    message: messageSlice,
  },
});

// Store'un tiplerini çıkarın
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;