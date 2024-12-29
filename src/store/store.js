import { configureStore } from "@reduxjs/toolkit";
import colorReducer from "./colorSlice";
import modeReducer from "./modeSlice";
import textReducer from "./textSlice";
import userColorReducer from "./userColorSlice";

export const store = configureStore({
  reducer: {
    color: colorReducer,
    mode: modeReducer,
    text: textReducer,
    user: userColorReducer,
  },
});
