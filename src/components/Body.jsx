import React from "react";
import WeatherCard from "./WeatherCard";

import colors from "../constants/colours";  // Import from the constant file.


const Body = (props) => {

  return (
      <div className="bg-[#1f2128] text-white lg:pt-[400px] pt-[200px]">
      <div className="lg:grid grid-cols-2 max-w-[1140px] mx-auto gap-[40px] pb-8 pt-[100px] lg:pt-0">
      {props.allCityDetails.map((city, index) => (
          <WeatherCard
            key={index}
            allCityDetails={city}
            color={getColorByIndex(index)}
          />
        ))}

      </div>
    </div>
  );
};

function getColorByIndex(index) {
  return colors[index % colors.length];
}


export default Body;
