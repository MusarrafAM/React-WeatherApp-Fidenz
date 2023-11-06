import React from "react";
import { images } from "../constants";
import Logo from "./Logo";
import Search from "./Search";

const Header = () => {
  return (
    <div className="">
      <div className="w-full">
        <img className="" src={images.headercloud} alt="image of a cloud background" />
      </div>
      <div className="absolute  right-[48%] top-[10%]">
        <Logo />
      </div>
      <div className="absolute right-[35%] top-[18%] ">
        <Search />
      </div>
    </div>
  );
};

export default Header;
