import { configureStore, Store } from "@reduxjs/toolkit";
import fetchingReducer from "./slices/fetchingSlice";
import themeReducer from "./slices/themeSlice";
import countriesReducer from "./slices/countriesSlice";
export const store = configureStore({
  reducer: {
    theme: themeReducer,
    fetch: fetchingReducer,
    countriesSlice: countriesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type ActionPayload = typeof store.dispatch;
