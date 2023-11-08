import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="text-center my-auto">
      <h1 className="text-3xl mt-[20%]">Page not Fount 404!</h1>
      <Link to="/">
        <button className="w-[100px] h-[30px] purple-bg">Back</button>
      </Link>
    </div>
  );
};

export default Error;
