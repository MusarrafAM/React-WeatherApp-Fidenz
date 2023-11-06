import React from "react";
import { images } from "../constants";

const Logo = () => {
  return (
    <div className="flex gap-[25px]">
      <img
        className="w-[60px] h-[50px]"
        src={images.Logo}
        alt="Logo of the weather app"
      />
      <h2 className="text-white flex items-center">Weather App</h2>
    </div>
  );
};

export default Logo;
