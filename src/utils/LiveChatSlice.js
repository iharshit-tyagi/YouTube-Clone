import { createSlice } from "@reduxjs/toolkit";

const liveChatSlice = createSlice({
  name: "Chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      if (state.messages.length === 100) {
        state.messages.splice(-1, 4);
      }
      state.messages.unshift(action.payload);
    },
  },
});
export const { addMessage } = liveChatSlice.actions;
export default liveChatSlice.reducer;
