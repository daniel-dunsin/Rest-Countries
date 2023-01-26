import { configureStore, Store } from "@reduxjs/toolkit";
import themeReducer from "./slices/themeSlice";
export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type ActionPayload = typeof store.dispatch;
