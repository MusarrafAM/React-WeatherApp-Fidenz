import React from "react";

const Footer = (props) => {
  const d = new Date();
  let year = d.getFullYear();

  return (
    <div
      className={`${
        props.fixed ? "fixed" : ""
      } w-full bg-[#2f333d] h-[100px] bottom-0 text-white flex items-center justify-center`}
    >
      {year} Fidenz Technologies
    </div>
  );
};

export default Footer;
