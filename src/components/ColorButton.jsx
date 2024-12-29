import React from "react";
import { useDispatch } from "react-redux";
import { setRandomColor } from "../store/colorSlice";
import { Palette } from "lucide-react";

export function ColorButton() {
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => dispatch(setRandomColor())}
      className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300"
    >
      <Palette size={20} />
      Generate Random Color
    </button>          
  );
}
