import React from "react";
import Logo from "./Logo";
import Search from "./Search";
import headerCloud from "../assets/HeaderCloud.png"

const Header = () => {
  return (
    <div className="bg-[#1f2128] ">
      <div className="w-full lg:mt-[-100px]">
        <img
          className="absolute w-[100%] h-[100%] md:w-auto md:h-auto object-cover"
          src={headerCloud}
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
