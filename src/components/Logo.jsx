import React from "react";
import logo from "../assets/logo.png"

const Logo = () => {
  return (
    <div className="flex gap-[25px]">
      <img
        className="w-[60px] h-[50px] pointer-events-none"
        src={logo}
        alt="Logo of the weather app"
      />
      <h2 className="text-white flex items-center md:text-3xl text-2xl">Weather App</h2>
    </div>
  );
};

export default Logo;
