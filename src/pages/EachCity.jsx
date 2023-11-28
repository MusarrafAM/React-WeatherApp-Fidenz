import React from "react";
import Logo from "../components/Logo";
import { Link } from "react-router-dom";
import { MdOutlineArrowBack } from "react-icons/md";
import { RiSendPlaneLine } from "react-icons/ri";
import Footer from "../components/Footer";
import headerCloud from "../assets/HeaderCloud.png"

const EachCity = (props) => {
  return (
    <div className="h-screen bg-[#1f2128] text-white">
      <div className="w-full lg:mt-[-100px]">
        <img
          className="z-10 absolute w-[100%] h-[75%] md:w-auto md:h-auto object-cover"
          src={headerCloud}
          alt="cloud background"
        />
      </div>
      <div className="absolute z-20 absolute-horizontal-center top-[50px]">
        <Logo />
      </div>

      {/* Single Weatcer Card */}
      <div className={`lg:h-[470px] lg:w-[900px] md:w-[500px] h-[300px] w-[380px]   ${props.color ? props.color : 'blue-bg'} rounded-lg absolute z-20 top-[200px] absolute-center`}>
        <div className="top-part h-[60%] flex items-center justify-around">
          <Link to="/">
            <MdOutlineArrowBack
              size={25}
              className="absolute top-2 left-2 hover:cursor-pointer"
            />
          </Link>

          <div className="absolute lg:left-[40%] lg:top-[4%] top-[1%]">
            <h3 className="md:text-3xl text-2xl font-bold ">
              {props.allCityDetails?.name}, {props.allCityDetails?.code}
            </h3>
            <p className="text-center md:text-sm text-xs mb-8 lg:pt-2">{props.allCityDetails?.date_Time_String}</p>
          </div>
          <div className="absolute left-[15%] lg:left-[25%] top-[15%] lg:top-[22%]">
            <div className="text-center">
              <div className="pl-[20%]">
              <img src={`https://openweathermap.org/img/wn/${props.allCityDetails?.weatherIcon}@2x.png`} alt="" />
              {/* <img src={`https://openweathermap.org/img/wn/${props.allCityDetails?.weatherIcon}@2x.png`} alt="" /> */}

              </div>
              <p className="my-auto md:text-lg ">{props.allCityDetails?.description}</p>
            </div>
          </div>

          <div className="virticalRule absolute w-[1px] h-[80px] lg:h-[120px] top-[28%] lg:top-[25%] bg-white"></div>

          <div className="absolute right-[22%] lg:right-[32%] top-[24%]">
            <h2 className="md:text-5xl text-4xl font-medium lg:mb-6 mb-2">{props.allCityDetails?.temp}&#176;c</h2>
            <p className="text-center text-sm md:text-base">Temp Min: {props.allCityDetails?.temp_min}&#176;c</p>
            <p className="text-center text-sm md:text-base">Temp Max: {props.allCityDetails?.temp_max}&#176;c</p>
          </div>
        </div>

        <div className="bottom-part bg-[#373b47] h-[40%] rounded-b-lg flex justify-around items-center text-sm md:text-base">
          <div className="1st-col lg:ml-[50px] ml-[15px] ">
            <p>Pressure: {props.allCityDetails?.pressure}hPa</p>
            <p className="py-1">Humidity: {props.allCityDetails?.humidity}%</p>
            <p>Visibility: {props.allCityDetails?.visibility}km</p>
          </div>
          <div className="virticalRule w-[3px] h-[60px] bg-[#505446]"></div>

          <div className="2nd-col">
            <RiSendPlaneLine size={30} className="mx-auto" />
            <p className="pt-2">{props.allCityDetails?.wind_speed}m/s {props.allCityDetails?.wind_degre} Degree</p>
          </div>
          <div className="virticalRule w-[3px] h-[60px] bg-[#505446]"></div>

          <div className="3rd-col text-right lg:mr-[50px] mr-[15px]">
            <p className="pb-1">Sunrise: {props.allCityDetails?.sunrise}</p>
            <p className="pt-1">Sunset: {props.allCityDetails?.sunset}</p>
          </div>
        </div>
      </div>
      <Footer fixed="ture" />
    </div>
  );
};

export default EachCity;
