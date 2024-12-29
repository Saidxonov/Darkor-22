import React from "react";
import { useSelector } from "react-redux";

function TextDisplay() {
  const text = useSelector((state) => state.text.text);

  return <h1 className="text-5xl mb-[100px] text-[#5361E4]">{text}</h1>;
}

export default TextDisplay;
