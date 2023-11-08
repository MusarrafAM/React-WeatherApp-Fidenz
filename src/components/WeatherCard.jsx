import React from "react";
import { images } from "../constants";
import { AiOutlineClose } from "react-icons/ai";
import { RiSendPlaneLine } from "react-icons/ri";

import { Link } from "react-router-dom";

const WeatherCard = (props) => {

  // const cityName = props.allCityDetails?.name || "City Name Not Available";
  return (
    // <Link to={`/products/${product.id}`}>More info</Link>
    // bg-[${props.color || "#6149cb"}]

    <div className={`lg:h-[370px] lg:w-[550px] h-[300px] w-[400px] md:w-[450px] mb-[50px] lg:mb-0 mx-auto rounded-lg relative ${props.color ? props.color : 'blue-bg'}`}>
      <Link to={`/${props.allCityDetails?.name}`}>
        <div className="top-part h-[60%] flex items-center justify-around">
          <AiOutlineClose className="absolute top-2 right-2 hover:cursor-pointer" />
          <img
            className=" pointer-events-none"
            src={images.oneCloud}
            alt=""
          />
          <div className="absolute left-10">
            <h3 className="text-3xl font-bold ">{props.allCityDetails?.name}, {props.allCityDetails?.code}</h3>
            <p className="text-center text-sm mb-6 pt-2">{props.allCityDetails?.date_Time_String}</p>
            <div className="flex gap-[15px]">
              <img src={`https://openweathermap.org/img/wn/${props.allCityDetails?.weatherIcon}.png`} alt="" />
              <p className="my-auto text-lg ">{props.allCityDetails?.description}</p>
            </div>
          </div>
          <div className="absolute right-10">
            <h2 className="text-5xl font-medium mb-8">{props.allCityDetails?.temp}&#176;c</h2>
            <p className="text-center">Temp Min: {props.allCityDetails?.temp_min}&#176;c</p>
            <p className="text-center">Temp Max: {props.allCityDetails?.temp_max}&#176;c</p>
          </div>
        </div>

        <div className="bottom-part bg-[#373b47] h-[40%] rounded-b-lg flex justify-around items-center">
          <div className="1st-col ">
            <p>Pressure: {props.allCityDetails?.pressure}hPa</p>
            <p className="py-1">Humidity: {props.allCityDetails?.humidity}%</p>
            <p>Visibility: {props.allCityDetails?.visibility}km</p>
          </div>
          <div className="virticalRule w-[3px] h-[60px] bg-[#505446]"></div>

          <div className="1st-col">
            <RiSendPlaneLine size={30} className="mx-auto" />
            <p className="pt-2">{props.allCityDetails?.wind_speed}m/s {props.allCityDetails?.wind_degre} Degree</p>
          </div>
          <div className="virticalRule w-[3px] h-[60px] bg-[#505446]"></div>

          <div className="3rd-col text-right">
            <p className="pb-1">Sunrise: {props.allCityDetails?.sunrise}</p>
            <p className="pt-1">Sunset: {props.allCityDetails?.sunset}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default WeatherCard;
