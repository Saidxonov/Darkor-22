import React from "react";
import { useDispatch } from "react-redux";
import { setText } from "../store/textSlice";

function ButtonGroup() {
  const dispatch = useDispatch();

  return (
    <div>
      <button
        className="text-3xl mr-[50px] text-[#5361E4]"
        onClick={() => dispatch(setText("Hello World!"))}
      >
        Hello
      </button>
      <button
        className="text-3xl mr-[50px] text-[#5361E4]"
        onClick={() => dispatch(setText("Redux Toolkit is Awesome!"))}
      >
        Redux
      </button>
      <button
        className="text-3xl text-[#5361E4]"
        onClick={() => dispatch(setText("Goodbye!"))}
      >
        Goodbye
      </button>
    </div>
  );
}

export default ButtonGroup;
