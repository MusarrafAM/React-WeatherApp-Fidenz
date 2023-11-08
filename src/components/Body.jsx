import React from "react";
import WeatherCard from "./WeatherCard";

const Body = (props) => {

  return (
      <div className="bg-[#1f2128] text-white lg:pt-[400px] pt-[200px]">
      <div className="lg:grid grid-cols-2 max-w-[1140px] mx-auto gap-[40px] pb-8 pt-[100px] lg:pt-0">
        <WeatherCard allCityDetails={props.allCityDetails[0]} color="blue-bg"/>
        <WeatherCard allCityDetails={props.allCityDetails[1]} color="purple-bg"/>
        <WeatherCard allCityDetails={props.allCityDetails[2]} color="green-bg"/>
        <WeatherCard allCityDetails={props.allCityDetails[3]} color="orange-bg"/>
        <WeatherCard allCityDetails={props.allCityDetails[4]} color="red-bg"/>
        <WeatherCard allCityDetails={props.allCityDetails[5]} color="blue-bg"/>

        
        {/* Easy Method */}
        {/* {Array(6).fill().map((_, i) => (
      <WeatherCard key={i} allCityDetails={props.allCityDetails[i]} color="blue-bg" />
        ))} */}



      </div>
    </div>
  );
};

export default Body;
