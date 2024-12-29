import React from "react";
import TextDisplay from "../components/TextDisplay";
import ButtonGroup from "../components/ButtonGroup";

function TextChanger() {
  return (
    <div className="flex flex-col items-center justify-center h-[100vh]">
      <TextDisplay />
      <ButtonGroup />
    </div>
  );
}

export default TextChanger;
