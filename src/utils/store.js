import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchCacheSlice from "./searchCacheSlice";
import liveChatSlice from "./LiveChatSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    search: searchCacheSlice,
    chat: liveChatSlice,
  },
});
export default store;
