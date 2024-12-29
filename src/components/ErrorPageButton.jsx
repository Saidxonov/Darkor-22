import React from "react";
import { NavLink } from "react-router-dom";

function ErrorPageButton() {
  return (
    <div className="container">
      <NavLink
        to="/"
        className="p-[17px] bg-[#5361E4] text-white rounded-xl ml-[490px]"
      >
        Go To Home Page
      </NavLink>
    </div>
  );
}

export default ErrorPageButton;
