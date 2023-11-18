import React, { useEffect, useState } from "react";
import citiesData from "./cities.json";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import EachCity from "./pages/EachCity";
import Error from "./pages/Error";


import colors from "./constants/colours";  // Import from the constant file.
import APIHelper from "./api/APIHelper"; // Import the APIHelper module


function App() {
  const [allCityDetails, setAllCityDetails] = useState([]);
  
  const fetchCityDetails = async (cityId) => {

    try {
      const weatherDetails  = await APIHelper.getWeatherDetails(cityId) // Call getWeatherDetails function from api folder
      const cityName = weatherDetails.name;
      const code = weatherDetails.sys.country;
      const description = weatherDetails.weather[0].description;
      const temp = Math.round(weatherDetails.main.temp);
      const temp_min = Math.round(weatherDetails.main.temp_min);
      const temp_max = Math.round(weatherDetails.main.temp_max);
      const pressure = weatherDetails.main.pressure;
      const humidity = weatherDetails.main.humidity;
      const visibility = (weatherDetails.visibility / 1000).toFixed(1); // toFixed will only show till 1st decimal.
      const wind_speed = weatherDetails.wind.speed.toFixed(1);
      const wind_degre = weatherDetails.wind.deg;
      const sunrise_timestamp = weatherDetails.sys.sunrise;
      const sunset_timestamp = weatherDetails.sys.sunset;
      const last_Update_time = weatherDetails.dt;
      const weatherIcon = weatherDetails.weather[0].icon;

      // Get time using the timezone, and Unixtimestamp
      const timezoneOffsetSeconds = weatherDetails.sys.timezone;

      // Create a datetime object from the timestamp
      // Sunrise
      const date_sunrise = new Date(sunrise_timestamp * 1000); // Convert seconds to milliseconds

      // Add the timezone offset in milliseconds
      const date_sunrise_with_offset = new Date(date_sunrise.getTime() + timezoneOffsetSeconds * 1000);

      // Format the sunrise time
      const formattedTime_sunrise = date_sunrise_with_offset.toLocaleString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
        timeZone: 'UTC' // Set the desired time zone
      });

      // Sunset
      const date_sunset = new Date(sunset_timestamp * 1000); // Convert seconds to milliseconds

      // Add the timezone offset in milliseconds
      const date_sunset_with_offset = new Date(date_sunset.getTime() + timezoneOffsetSeconds * 1000);

      // Format the sunset time
      const formattedTime_sunset = date_sunset_with_offset.toLocaleString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
        timeZone: 'UTC' // Set the desired time zone
      });

      //Date and current time
      const currentDate = new Date(); // Get cur date and time
      const month = currentDate.toLocaleString("default", { month: "short" }); //Get the short version of month
      const day = currentDate.getDate();
      var hours = currentDate.getHours();
      const minutes = currentDate.getMinutes();
      const ampm = hours >= 12 ? "PM" : "AM";
      hours = hours % 12;
      hours = hours ? hours : 12; // Handle midnight (0 hours)
      const timeString =
        hours + ":" + (minutes < 10 ? "0" + minutes : minutes) + " " + ampm;

      const date_Time_String = timeString + ", " + month + " " + day;

      const cityDetail = {
        id: code,
        name: cityName,
        code: code,
        description: description,
        temp: temp,
        temp_min: temp_min,
        temp_max: temp_max,
        pressure: pressure,
        humidity: humidity,
        visibility: visibility,
        wind_speed: wind_speed,
        wind_degre: wind_degre,
        date_Time_String: date_Time_String,
        sunrise: formattedTime_sunrise,
        sunset: formattedTime_sunset,
        weatherIcon: weatherIcon,
        dt: last_Update_time,
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

  const getCachedCityDetails = (cityId) => {
    const cachedData = localStorage.getItem(`city_${cityId}`);

    if (cachedData) {
      const parsedData = JSON.parse(cachedData);
      const currentTime = new Date().getTime();
      const cacheExpiration = parsedData.timestamp + 5 * 60 * 1000; // 5 minutes in milliseconds

      if (currentTime < cacheExpiration) {
        return parsedData.data;
      }
    }
    return null;
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
                localStorage.setItem(
                  `city_${eachCity.CityCode}`,
                  JSON.stringify({
                    data: newCityDetail,
                    timestamp: new Date().getTime(),
                  })
                );
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

        {/* Dynamically render each city */}
        {allCityDetails.map((city, index) => (
          <Route key={index} path={city?.name} element={<EachCity allCityDetails={city} color={getColorByIndex(index)} />}/>
        ))}
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

// Generate colour for each card
function getColorByIndex(index) {
  return colors[index % colors.length];
}

export default App;


