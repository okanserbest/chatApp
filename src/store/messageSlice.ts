import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface MessageState {
  selectedMessageId: string | null;
}

const initialState: MessageState = {
  selectedMessageId: null,
};

const messageSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    setSelectedMessageId: (state, action: PayloadAction<string>) => {
      state.selectedMessageId = action.payload;
    },
    clearSelectedMessageId: (state) => {
      state.selectedMessageId = null;
    },
  },
});

export const { setSelectedMessageId, clearSelectedMessageId } = messageSlice.actions;

export default messageSlice.reducer;