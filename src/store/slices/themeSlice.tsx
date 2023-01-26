import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IThemeSlice } from "../../types";

const initialState: IThemeSlice = {
  mode: "light",
};

const themeSlice = createSlice({
  name: "themeSlice",
  initialState,
  reducers: {
    editTheme: (state: IThemeSlice, action: PayloadAction) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
  },
});

export const { editTheme } = themeSlice.actions;
export default themeSlice.reducer;
