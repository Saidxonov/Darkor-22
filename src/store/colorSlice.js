import { createSlice } from "@reduxjs/toolkit";
import { generateRandomColor } from "../utils/colorUtils";

const initialState = {
  currentColor: "#000",
};

const colorSlice = createSlice({
  name: "color",
  initialState,
  reducers: {
    setRandomColor: (state) => {
      state.currentColor = generateRandomColor();
    },
  },
});

export const { setRandomColor } = colorSlice.actions;
export default colorSlice.reducer;
