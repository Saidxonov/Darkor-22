import React from "react";
import { useSelector } from "react-redux";
import ModeSwitcher from "../components/ModeSwitcher";

function Dark() {
  const mode = useSelector((state) => state.mode.mode);

  return (
    <div
      className="h-[100vh] flex items-center justify-center flex-col"
      style={{
        backgroundColor: mode === "light" ? "#fff" : "#333333",
        color: mode === "light" ? "#5361e4" : "#fff",
      }}
    >
      <h1 className="text-5xl mb-[100px]">
        {mode === "light" ? "Light Mode" : "Dark Mode"}
      </h1>
      <ModeSwitcher />
    </div>
  );
}

export default Dark;
