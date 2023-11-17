import React, { useEffect, useState } from "react";
import citiesData from "./cities.json";
import axios from "axios";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import EachCity from "./pages/EachCity";
import Error from "./pages/Error";

function App() {
  const [allCityDetails, setAllCityDetails] = useState([]);
  const fetchCityDetails = async (cityId) => {

    const api_key = process.env.REACT_APP_WEATHER_API_KEY; // Getting api key from .env file
    const apiUrl = `http://api.openweathermap.org/data/2.5/group?id=${cityId}&units=metric&appid=${api_key}`;

    try {
      const res = await axios.get(apiUrl);
      const cityName = res.data.list[0].name;
      const code = res.data.list[0].sys.country;
      const description = res.data.list[0].weather[0].description;
      const temp = Math.round(res.data.list[0].main.temp);
      const temp_min = Math.round(res.data.list[0].main.temp_min);
      const temp_max = Math.round(res.data.list[0].main.temp_max);
      const pressure = res.data.list[0].main.pressure;
      const humidity = res.data.list[0].main.humidity;
      const visibility = (res.data.list[0].visibility / 1000).toFixed(1); // toFixed will only show till 1st decimal.
      const wind_speed = res.data.list[0].wind.speed.toFixed(1);
      const wind_degre = res.data.list[0].wind.deg;
      const sunrise_timestamp = res.data.list[0].sys.sunrise;
      const sunset_timestamp = res.data.list[0].sys.sunset;
      const last_Update_time = res.data.list[0].dt;
      const weatherIcon = res.data.list[0].weather[0].icon;

      // Get time using the timezone, and Unixtimestamp
      const timezoneOffsetSeconds = res.data.list[0].sys.timezone;

      //Create a datetime object from the timestamp
      //Sunrise
      const date_sunrise = new Date(
        (sunrise_timestamp + timezoneOffsetSeconds) * 1000
      ); // Convert seconds to milliseconds
      const hours_sr = date_sunrise.getHours();
      const minutes_sr = date_sunrise.getMinutes();
      const ampm_sr = hours_sr >= 12 ? "PM" : "AM";
      const formattedHours_sr = (hours_sr % 12 || 12)
        .toString()
        .padStart(2, "0"); // Convert 0 to 12 for AM, leave 12 as it is
      const formattedMinutes_sr = minutes_sr.toString().padStart(2, "0");
      const formattedTime_sunrise = `${formattedHours_sr}:${formattedMinutes_sr} ${ampm_sr}`;

      //Sunset
      const date_sunset = new Date(
        (sunset_timestamp + timezoneOffsetSeconds) * 1000
      ); // Convert seconds to milliseconds
      const hours_ss = date_sunset.getHours();
      const minutes_ss = date_sunset.getMinutes();
      const ampm_ss = hours_ss >= 12 ? "PM" : "AM";
      const formattedHours_ss = (hours_ss % 12 || 12)
        .toString()
        .padStart(2, "0"); // Convert 0 to 12 for AM, leave 12 as it is
      const formattedMinutes_ss = minutes_ss.toString().padStart(2, "0");
      const formattedTime_sunset = `${formattedHours_ss}:${formattedMinutes_ss} ${ampm_ss}`;

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
    } catch (err) {
      console.error(err);
      return null;
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
          <Route key={index} path={city.name} element={<EachCity allCityDetails={city} color={getColorByIndex(index)} />}/>
        ))}
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

// Generate colour for each card
function getColorByIndex(index) {
  const colors = ['blue-bg', 'purple-bg', 'green-bg', 'orange-bg', 'red-bg'];
  return colors[index % colors.length];
}

export default App;


