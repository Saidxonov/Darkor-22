import React from "react";
import { useSelector } from "react-redux";

export function ColorDisplay() {
  const currentColor = useSelector((state) => state.color.currentColor);

  return (
    <div
      className="w-64 h-64 rounded-lg shadow-lg transition-colors duration-300"
      style={{ backgroundColor: currentColor }}
    />
  );
}
