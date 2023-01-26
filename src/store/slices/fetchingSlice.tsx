import { createSlice } from "@reduxjs/toolkit";
import { IFetching } from "../../types";

const initialState: IFetching = {
  loading: false,
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
  },
});

export const { startLoading, stopLoading } = fetchSlice.actions;
export default fetchSlice.reducer;
