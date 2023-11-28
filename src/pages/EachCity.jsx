import React from "react";
import Logo from "../components/Logo";
import getColorByIndex from "../utils/getColors";
import { Link, useParams } from "react-router-dom";
import { MdOutlineArrowBack } from "react-icons/md";
import { RiSendPlaneLine } from "react-icons/ri";
import Footer from "../components/Footer";
import headerCloud from "../assets/HeaderCloud.png"

const EachCity = (props) => {
  const {cityName} = useParams()
  const cityData = props.allCityDetails.find((city) => city.name === cityName); 
  const color = getColorByIndex(props.allCityDetails.findIndex((city) => city.name === cityName));
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
      <div className={`lg:h-[470px] lg:w-[900px] md:w-[500px] h-[300px] w-[380px]   ${color ? color : 'blue-bg'} rounded-lg absolute z-20 top-[200px] absolute-center`}>
        <div className="top-part h-[60%] flex items-center justify-around">
          <Link to="/">
            <MdOutlineArrowBack
              size={25}
              className="absolute top-2 left-2 hover:cursor-pointer"
            />
          </Link>

          <div className="absolute lg:left-[40%] lg:top-[4%] top-[1%]">
            <h3 className="md:text-3xl text-2xl font-bold ">
              {cityData?.name}, {cityData.code}
            </h3>
            <p className="text-center md:text-sm text-xs mb-8 lg:pt-2">{cityData.date_Time_String}</p>
          </div>
          <div className="absolute left-[15%] lg:left-[25%] top-[15%] lg:top-[22%]">
            <div className="text-center">
              <div className="pl-[20%]">
              <img src={`https://openweathermap.org/img/wn/${cityData.weatherIcon}@2x.png`} alt="" />
              {/* <img src={`https://openweathermap.org/img/wn/${cityData.weatherIcon}@2x.png`} alt="" /> */}

              </div>
              <p className="my-auto md:text-lg ">{cityData.description}</p>
            </div>
          </div>

          <div className="virticalRule absolute w-[1px] h-[80px] lg:h-[120px] top-[28%] lg:top-[25%] bg-white"></div>

          <div className="absolute right-[22%] lg:right-[32%] top-[24%]">
            <h2 className="md:text-5xl text-4xl font-medium lg:mb-6 mb-2">{cityData.temp}&#176;c</h2>
            <p className="text-center text-sm md:text-base">Temp Min: {cityData.temp_min}&#176;c</p>
            <p className="text-center text-sm md:text-base">Temp Max: {cityData.temp_max}&#176;c</p>
          </div>
        </div>

        <div className="bottom-part bg-[#373b47] h-[40%] rounded-b-lg flex justify-around items-center text-sm md:text-base">
          <div className="1st-col lg:ml-[50px] ml-[15px] ">
            <p>Pressure: {cityData.pressure}hPa</p>
            <p className="py-1">Humidity: {cityData.humidity}%</p>
            <p>Visibility: {cityData.visibility}km</p>
          </div>
          <div className="virticalRule w-[3px] h-[60px] bg-[#505446]"></div>

          <div className="2nd-col">
            <RiSendPlaneLine size={30} className="mx-auto" />
            <p className="pt-2">{cityData.wind_speed}m/s {cityData.wind_degre} Degree</p>
          </div>
          <div className="virticalRule w-[3px] h-[60px] bg-[#505446]"></div>

          <div className="3rd-col text-right lg:mr-[50px] mr-[15px]">
            <p className="pb-1">Sunrise: {cityData.sunrise}</p>
            <p className="pt-1">Sunset: {cityData.sunset}</p>
          </div>
        </div>
      </div>
      <Footer fixed="ture" />
    </div>
  );
};

export default EachCity;
