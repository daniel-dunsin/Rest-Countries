import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFetching } from "../../types";

const initialState: IFetching = {
  loading: false,
  error: true,
  errorText: "",
};

const fetchSlice = createSlice({
  name: "fetch",
  initialState,
  reducers: {
    startLoading: (state: IFetching) => {
      state.loading = true;
    },
    stopLoading: (state: IFetching) => {
      state.loading = false;
    },
    addError: (state: IFetching, action: PayloadAction<string>) => {
      state.error = true;
      state.errorText = action.payload;
    },
    removeError: (state: IFetching) => {
      state.error = false;
    },
  },
});

export const { startLoading, stopLoading, addError, removeError } =
  fetchSlice.actions;
export default fetchSlice.reducer;
