import React, { useEffect, useState } from "react";
import citiesData from "./cities.json";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import EachCity from "./pages/EachCity";
import Error from "./pages/Error";
// Imports from utils
import getFormattedTime from "./utils/getFormatedTime";
import getCurrentDateTimeString from "./utils/getCurrentDateTimeString";
import getCachedCityDetails from "./utils/getCachedCityDetails";
import setCachedCityDetails from "./utils/setCachedCityDetails"
// Import the APIHelper module
import APIHelper from "./api/APIHelper"; 

function App() {
  const [allCityDetails, setAllCityDetails] = useState([]);
  
  const fetchCityDetails = async (cityId) => {
    try {
      const weatherDetails  = await APIHelper.getWeatherDetails(cityId) // Call getWeatherDetails function from api folder
      const cityDetail = {
        id: weatherDetails.sys.country,
        name: weatherDetails.name,
        code: weatherDetails.sys.country,
        description: weatherDetails.weather[0].description,
        temp: Math.round(weatherDetails.main.temp),
        temp_min: Math.round(weatherDetails.main.temp_min),
        temp_max: Math.round(weatherDetails.main.temp_max),
        pressure: weatherDetails.main.pressure,
        humidity: weatherDetails.main.humidity,
        visibility: (weatherDetails.visibility / 1000).toFixed(1), // toFixed will only show till 1st decimal.
        wind_speed: weatherDetails.wind.speed.toFixed(1),
        wind_degre: weatherDetails.wind.deg,
        date_Time_String: getCurrentDateTimeString(),
        sunrise: getFormattedTime(weatherDetails.sys.sunrise, weatherDetails.sys.timezone),
        sunset: getFormattedTime(weatherDetails.sys.sunset, weatherDetails.sys.timezone),
        weatherIcon: weatherDetails.weather[0].icon,
        dt: weatherDetails.dt,
      };
      return cityDetail;
    } catch (error) {
      if (error.message.includes("No weather details found")) {
        console.error("No weather details found for the specified city ID.");
        return null;
      }else{
        console.error("An error occurred while fetching weather details:", error);
      }
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cityDetails = await Promise.all(
          citiesData.List.map(async (eachCity) => {
            const cachedCityDetails = getCachedCityDetails(eachCity.CityCode);
            if (cachedCityDetails) {
              return cachedCityDetails;
            } else {
              const newCityDetail = await fetchCityDetails(eachCity.CityCode);
              if (newCityDetail) {
                setCachedCityDetails(eachCity.CityCode, newCityDetail);
                return newCityDetail;
              }
            }
          })
        );
        setAllCityDetails(cityDetails);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home allCityDetails={allCityDetails} />} />
        <Route path="/city/:cityName" element={<EachCity allCityDetails={allCityDetails} />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;