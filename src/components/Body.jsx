import React from "react";
import WeatherCard from "./WeatherCard";

const Body = (props) => {
  return (
    <div className="bg-[#1f2128] text-white h-screen">
      <WeatherCard allCityDetails={props.allCityDetails[0]}/>
    </div>
  );
};

export default Body;
