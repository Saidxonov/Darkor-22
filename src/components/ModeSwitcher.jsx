import React from "react";
import { useDispatch } from "react-redux";
import { toggleLightMode, toggleDarkMode } from "../store/modeSlice";

function ModeSwitcher() {
  const dispatch = useDispatch();

  return (
    <div>
      <button className="text-3xl" onClick={() => dispatch(toggleLightMode())}>
        Light Mode
      </button>
      <button
        className="text-3xl ml-[100px]"
        onClick={() => dispatch(toggleDarkMode())}
      >
        Dark Mode
      </button>
    </div>
  );
}

export default ModeSwitcher;
