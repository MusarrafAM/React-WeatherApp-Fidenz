import React from "react";
import WeatherCard from "./WeatherCard";

import getColorByIndex from "../utils/getColors";


const Body = (props) => {

  return (
      <div className="bg-[#1f2128] text-white lg:pt-[400px] pt-[200px]">
      <div className="weatherCardsContainer lg:grid grid-cols-2 max-w-[1140px] mx-auto gap-[40px] pb-8 pt-[100px] lg:pt-0">
      {props.allCityDetails.map((city, index) => (
          <WeatherCard
            key={index}
            eachCityDetails={city}
            color={getColorByIndex(index)}
          />
        ))}

      </div>
    </div>
  );
};

export default Body;
