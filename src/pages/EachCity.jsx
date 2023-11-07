import React from "react";
import { images } from "../constants";
import Logo from "../components/Logo";
import { Link } from "react-router-dom";
import { MdOutlineArrowBack } from "react-icons/md";
import { RiSendPlaneLine } from "react-icons/ri";
import { BsClouds } from "react-icons/bs";
import Footer from "../components/Footer";

const EachCity = () => {
  return (
    <div className="h-screen bg-[#1f2128] text-white">
      <div className="w-full mt-[-100px]">
        <img
          className="z-10 absolute"
          src={images.headercloud}
          alt="image of a cloud background"
        />
      </div>
      <div className="absolute z-20  left-[40%] top-[50px]">
        <Logo />
      </div>

      {/* Single Weatcer Card */}
      <div className="h-[370px] w-[550px] bg-[#378de7] rounded-lg absolute z-20 top-[200px] absolute-center">
        <div className="top-part h-[60%] flex items-center justify-around">
          <Link to="/">
            <MdOutlineArrowBack
              size={25}
              className="absolute top-2 left-2 hover:cursor-pointer"
            />
          </Link>
          <img
            className="h-[100%] w-[100%] pointer-events-none"
            src={images.oneCloud}
            alt=""
          />
          <div className="absolute left-10">
            <h3 className="text-3xl font-bold ">Colombo, LK</h3>
            <p className="text-center text-sm mb-8 pt-2">9.19am, Feb 8</p>
            <div className="flex gap-[15px]">
              <BsClouds size={30} />
              <p className="my-auto text-lg ">Few Clouds</p>
            </div>
          </div>
          <div className="absolute right-10">
            <h2 className="text-5xl font-medium mb-8">27&#176;c</h2>
            <p className="text-center">Temp Min: 25&#176;c</p>
            <p className="text-center">Temp Max: 28&#176;c</p>
          </div>
        </div>

        <div className="bottom-part bg-[#373b47] h-[40%] rounded-b-lg flex justify-around items-center">
          <div className="1st-col ">
            <p>Pressure: 1018hPa</p>
            <p className="py-1">Humidity: 78%</p>
            <p>Visibility: 8.0km</p>
          </div>
          <div className="virticalRule w-[3px] h-[60px] bg-[#505446]"></div>

          <div className="1st-col">
            <RiSendPlaneLine size={30} className="mx-auto" />
            <p className="pt-2">4.0m/s 120 Degree</p>
          </div>
          <div className="virticalRule w-[3px] h-[60px] bg-[#505446]"></div>

          <div className="3rd-col text-right">
            <p className="pb-1">Sunrise: 6.05am</p>
            <p className="pt-1">Sunset: 6.05am</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EachCity;
