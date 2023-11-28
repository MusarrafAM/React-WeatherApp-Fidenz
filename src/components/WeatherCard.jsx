import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { RiSendPlaneLine } from "react-icons/ri";
import oneCloud from "../assets/oneCloud.png"

import { Link } from "react-router-dom";

const WeatherCard = (props) => {
  return (
    <div className={`weatherCard lg:h-[370px] lg:w-[550px] h-[300px] w-[385px] md:w-[450px] mb-[50px] lg:mb-0 mx-auto rounded-lg relative ${props.color ? props.color : 'blue-bg'}`}>
      <Link to={`/${props.eachCityDetails?.name}`}>
        <div className="top-part h-[60%] flex items-center justify-around">
          <AiOutlineClose className="absolute top-2 right-2 hover:cursor-pointer" />
          <img
            className="w-[100%] h-[100%] object-fill pointer-events-none"
            src={oneCloud}
            alt=""
          />
          <div className="absolute left-10">
            <h3 className="text-center md:text-3xl text-2xl font-bold ">{props.eachCityDetails?.name}, {props.eachCityDetails?.code}</h3>
            <p className="text-center md:text-sm text-xs mb-6 pt-2">{props.eachCityDetails?.date_Time_String}</p>
            <div className="flex gap-[15px]">
              <img src={`https://openweathermap.org/img/wn/${props.eachCityDetails?.weatherIcon}.png`} alt="" />
              <p className="my-auto md:text-lg text-base ">{props.eachCityDetails?.description}</p>
            </div>
          </div>
          <div className="absolute right-10">
            <h2 className="md:text-5xl text-4xl font-medium mb-8">{props.eachCityDetails?.temp}&#176;c</h2>
            <p className="text-center text-sm md:text-base">Temp Min: {props.eachCityDetails?.temp_min}&#176;c</p>
            <p className="text-center text-sm md:text-base">Temp Max: {props.eachCityDetails?.temp_max}&#176;c</p>
          </div>
        </div>

        <div className="bottom-part bg-[#373b47] h-[40%] rounded-b-lg flex justify-around items-center text-sm md:text-base">
          <div className="1st-col pl-2">
            <p>Pressure: {props.eachCityDetails?.pressure}hPa</p>
            <p className="py-1">Humidity: {props.eachCityDetails?.humidity}%</p>
            <p>Visibility: {props.eachCityDetails?.visibility}km</p>
          </div>
          <div className="virticalRule w-[3px] h-[60px] bg-[#505446]"></div>

          <div className="1st-col">
            <RiSendPlaneLine size={30} className="mx-auto" />
            <p className="pt-2">{props.eachCityDetails?.wind_speed}m/s {props.eachCityDetails?.wind_degre} Degree</p>
          </div>
          <div className="virticalRule w-[3px] h-[60px] bg-[#505446]"></div>

          <div className="3rd-col text-right pr-2">
            <p className="pb-1">Sunrise: {props.eachCityDetails?.sunrise}</p>
            <p className="pt-1">Sunset: {props.eachCityDetails?.sunset}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default WeatherCard;
