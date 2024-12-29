import React from "react";
import ErrorPageButton from "../components/ErrorPageButton";

function ErrorPage() {
  return (
    <div>
      <h1 className="text-center text-9xl text-[#5361E4] font-medium mb-[50px] mt-[150px]">
        404
      </h1>
      <p className="text-center mb-[100px] text-4xl text-[#5361E4] font-thin">
        OOPS! We Can't Find What You Search For
      </p>
      <ErrorPageButton />
    </div>
  );
}

export default ErrorPage;
