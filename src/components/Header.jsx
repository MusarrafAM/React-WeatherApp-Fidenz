import React from "react";
import { images } from "../constants";
import Logo from "./Logo";
import Search from "./Search";

const Header = () => {
  return (
    <div className="bg-[#1f2128]">
      <div className="w-full lg:mt-[-100px]">
        <img
          className=""
          src={images.headercloud}
          alt="image of a cloud background"
        />
      </div>
      <div className="absolute left-[30%]  lg:left-[40%] top-[50px]">
        <Logo />
      </div>
      <div className="absolute left-[20%] lg:left-[35%] top-[16%] lg:top-[22%] ">
        <Search />
      </div>
    </div>
  );
};

export default Header;
