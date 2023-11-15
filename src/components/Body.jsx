import React from "react";
import WeatherCard from "./WeatherCard";

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
  const colors = ['blue-bg', 'purple-bg', 'green-bg', 'orange-bg', 'red-bg'];
  return colors[index % colors.length];
}


export default Body;
