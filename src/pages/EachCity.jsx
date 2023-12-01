import React, { useState, useEffect } from "react";
import Logo from "../components/Logo";
import getColorByIndex from "../utils/getColors";
import { Link, useParams } from "react-router-dom";
import { MdOutlineArrowBack } from "react-icons/md";
import { RiSendPlaneLine } from "react-icons/ri";
import Footer from "../components/Footer";
import headerCloud from "../assets/HeaderCloud.png";
import citiesData from "../cities.json"

import APIHelper from "../api/APIHelper";
import getFormattedTime from "../utils/getFormatedTime";
import getCurrentDateTimeString from "../utils/getCurrentDateTimeString";

const EachCity = (props) => {
  const [freshData, setFreshData] = useState({});
  const { cityName } = useParams();
  const cityCode = (citiesData.List.find((city) => city.CityName === cityName)).CityCode;
  console.log(cityCode);
  const color = getColorByIndex(
    props.allCityDetails.findIndex((city) => city.name === cityName)
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const newData = await APIHelper.getWeatherDetails(cityCode);

        const cityData = {
          id: newData.sys.country,
          name: newData.name,
          code: newData.sys.country,
          description: newData.weather[0].description,
          temp: Math.round(newData.main.temp),
          temp_min: Math.round(newData.main.temp_min),
          temp_max: Math.round(newData.main.temp_max),
          pressure: newData.main.pressure,
          humidity: newData.main.humidity,
          visibility: (newData.visibility / 1000).toFixed(1),
          wind_speed: newData.wind.speed.toFixed(1),
          wind_degre: newData.wind.deg,
          date_Time_String: getCurrentDateTimeString(),
          sunrise: getFormattedTime(
            newData.sys.sunrise,
            newData.sys.timezone
          ),
          sunset: getFormattedTime(newData.sys.sunset, newData.sys.timezone),
          weatherIcon: newData.weather[0].icon,
          dt: newData.dt,
        };
        setFreshData(cityData);
        console.log(newData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);




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
              {freshData?.name}, {freshData.code}
            </h3>
            <p className="text-center md:text-sm text-xs mb-8 lg:pt-2">{freshData.date_Time_String}</p>
          </div>
          <div className="absolute left-[15%] lg:left-[25%] top-[15%] lg:top-[22%]">
            <div className="text-center">
              <div className="pl-[20%]">
              <img src={`https://openweathermap.org/img/wn/${freshData.weatherIcon}@2x.png`} alt="" />
              {/* <img src={`https://openweathermap.org/img/wn/${cityData.weatherIcon}@2x.png`} alt="" /> */}

              </div>
              <p className="my-auto md:text-lg ">{freshData.description}</p>
            </div>
          </div>

          <div className="virticalRule absolute w-[1px] h-[80px] lg:h-[120px] top-[28%] lg:top-[25%] bg-white"></div>

          <div className="absolute right-[22%] lg:right-[32%] top-[24%]">
            <h2 className="md:text-5xl text-4xl font-medium lg:mb-6 mb-2">{freshData.temp}&#176;c</h2>
            <p className="text-center text-sm md:text-base">Temp Min: {freshData.temp_min}&#176;c</p>
            <p className="text-center text-sm md:text-base">Temp Max: {freshData.temp_max}&#176;c</p>
          </div>
        </div>

        <div className="bottom-part bg-[#373b47] h-[40%] rounded-b-lg flex justify-around items-center text-sm md:text-base">
          <div className="1st-col lg:ml-[50px] ml-[15px] ">
            <p>Pressure: {freshData.pressure}hPa</p>
            <p className="py-1">Humidity: {freshData.humidity}%</p>
            <p>Visibility: {freshData.visibility}km</p>
          </div>
          <div className="virticalRule w-[3px] h-[60px] bg-[#505446]"></div>

          <div className="2nd-col">
            <RiSendPlaneLine size={30} className="mx-auto" />
            <p className="pt-2">{freshData.wind_speed}m/s {freshData.wind_degre} Degree</p>
          </div>
          <div className="virticalRule w-[3px] h-[60px] bg-[#505446]"></div>

          <div className="3rd-col text-right lg:mr-[50px] mr-[15px]">
            <p className="pb-1">Sunrise: {freshData.sunrise}</p>
            <p className="pt-1">Sunset: {freshData.sunset}</p>
          </div>
        </div>
      </div>
      <Footer fixed="ture" />
    </div>
  );
};

export default EachCity;
