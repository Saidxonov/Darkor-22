import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light",
};

const modeSlice = createSlice({
  name: "mode",
  initialState,
  reducers: {
    toggleLightMode: (state) => {
      state.mode = "light";
    },
    toggleDarkMode: (state) => {
      state.mode = "dark";
    },
  },
});

export const { toggleLightMode, toggleDarkMode } = modeSlice.actions;

export default modeSlice.reducer;
