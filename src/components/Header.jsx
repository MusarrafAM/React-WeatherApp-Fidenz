import React from "react";
import { images } from "../constants";
import Logo from "./Logo";
import Search from "./Search";

const Header = (props) => {
  return (
    <div className="bg-[#1f2128]">
      <div className="w-full mt-[-100px]">
        <img
          className=""
          src={images.headercloud}
          alt="image of a cloud background"
        />
      </div>
      <div className="absolute  left-[40%] top-[50px]">
        <Logo />
      </div>
      <div className="absolute left-[35%] top-[18%] ">
        <Search />
      </div>
    </div>
  );
};

export default Header;
