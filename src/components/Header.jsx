import React from "react";
import { images } from "../constants";
import Logo from "./Logo";
import Search from "./Search";

const Header = () => {
  return (
    <div className="bg-[#1f2128] ">
      <div className="w-full lg:mt-[-100px]">
        <img
          className="absolute w-[100%] h-[100%] md:w-auto md:h-auto object-cover"
          src={images.headercloud}
          alt="cloud background"
        />
      </div>
      <div className="absolute-horizontal-center top-[50px]">
        <Logo />
      </div>
      <div className="absolute-horizontal-center top-[26%] lg:top-[22%] ">
        <Search />
      </div>
    </div>
  );
};

export default Header;
