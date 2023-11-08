import React from "react";
import WeatherCard from "./WeatherCard";

const Body = (props) => {

  return (
    <div className="bg-[#1f2128] text-white">
      <div className="grid grid-cols-2 max-w-[1140px] mx-auto gap-[40px] pb-8">
        <WeatherCard allCityDetails={props.allCityDetails[0]} color="blue-bg"/>
        <WeatherCard allCityDetails={props.allCityDetails[1]} color="purple-bg"/>
        <WeatherCard allCityDetails={props.allCityDetails[2]} color="green-bg"/>
        <WeatherCard allCityDetails={props.allCityDetails[3]} color="orange-bg"/>
        <WeatherCard allCityDetails={props.allCityDetails[4]} color="red-bg"/>

      </div>
    </div>
  );
};

export default Body;
