import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchCacheSlice from "./searchCacheSlice";
import liveChatSlice from "./LiveChatSlice";
import videoSlice from "./videoSlice";
const store = configureStore({
  reducer: {
    app: appSlice,
    search: searchCacheSlice,
    chat: liveChatSlice,
    video: videoSlice,
  },
});
export default store;
