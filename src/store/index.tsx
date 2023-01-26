import { configureStore, Store } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {},
});

export type RootState = ReturnType<typeof store.getState>;
export type ActionPayload = typeof store.dispatch;
