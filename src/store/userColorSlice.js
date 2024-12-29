import { createSlice } from "@reduxjs/toolkit";

const colorSlice = createSlice({
  name: "color",
  initialState: { selectedColor: "#000000" },
  reducers: {
    setColor: (state, action) => {
      state.selectedColor = action.payload;
    },
  },
});

export const { setColor } = colorSlice.actions;
export default colorSlice.reducer;
