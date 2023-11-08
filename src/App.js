import React, { useEffect, useState } from "react";
import citiesData from "./cities.json";
import axios from "axios";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import EachCity from "./pages/EachCity";

function App() {
  const [allCityDetails, setAllCityDetails] = useState([]);

  useEffect(() => {
    const api_key = "59108cb758efbaac0417df79f1863251";

    const fetchData = async () => {
      try {
        const cityDetails = await Promise.all(
          citiesData.List.map(async (eachCity, index) => {
            const apiUrl = `http://api.openweathermap.org/data/2.5/group?id=${eachCity.CityCode}&units=metric&appid=${api_key}`;
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
            const wind_speed = (res.data.list[0].wind.speed).toFixed(1);
            const wind_degre = res.data.list[0].wind.deg;
            const sunrise_timestamp  = res.data.list[0].sys.sunrise;
            const sunset_timestamp  = res.data.list[0].sys.sunset;
            const last_Update_time = res.data.list[0].dt;
            const weatherIcon = res.data.list[0].weather[0].icon;

            // Get time using the timezone, and Unixtimestamp
            const timezoneOffsetSeconds  = res.data.list[0].sys.timezone;
            
            //Create a datetime object from the timestamp
            //Sunrise
            const date_sunrise = new Date((sunrise_timestamp + timezoneOffsetSeconds) * 1000); // Convert seconds to milliseconds
            const hours_sr = date_sunrise.getHours();
            const minutes_sr = date_sunrise.getMinutes();
            const ampm_sr = hours_sr >= 12 ? 'PM' : 'AM';
            const formattedHours_sr = (hours_sr % 12 || 12).toString().padStart(2, '0'); // Convert 0 to 12 for AM, leave 12 as it is
            const formattedMinutes_sr = minutes_sr.toString().padStart(2, '0');
            const formattedTime_sunrise = `${formattedHours_sr}:${formattedMinutes_sr} ${ampm_sr}`;

            //Sunset
            const date_sunset = new Date((sunset_timestamp + timezoneOffsetSeconds) * 1000); // Convert seconds to milliseconds
            const hours_ss = date_sunset.getHours();
            const minutes_ss = date_sunset.getMinutes();
            const ampm_ss = hours_ss >= 12 ? 'PM' : 'AM';
            const formattedHours_ss = (hours_ss % 12 || 12).toString().padStart(2, '0'); // Convert 0 to 12 for AM, leave 12 as it is
            const formattedMinutes_ss = minutes_ss.toString().padStart(2, '0');
            const formattedTime_sunset = `${formattedHours_ss}:${formattedMinutes_ss} ${ampm_ss}`;
            

            //Date and current time
            const currentDate = new Date(); // Get cur date and time
            const month = currentDate.toLocaleString('default', { month: 'short' }); //Get the short version of month
            const day = currentDate.getDate();
            var hours = currentDate.getHours();
            const minutes = currentDate.getMinutes();
            const ampm = hours >= 12 ? 'PM' : 'AM';
            hours = hours % 12;
            hours = hours ? hours : 12; // Handle midnight (0 hours)
            const timeString = hours + ':' + (minutes < 10 ? '0' + minutes : minutes) + ' ' + ampm;

            const date_Time_String = timeString + ", " + month + " " +  day
            
            return {
              id: eachCity.CityCode,
              name: cityName,
              code: code,
              description: description,
              temp: temp,
              temp_min: temp_min,
              temp_max: temp_max,
              pressure: pressure,
              humidity: humidity,
              visibility: visibility,
              wind_speed:wind_speed,
              wind_degre:wind_degre,
              date_Time_String:date_Time_String,
              sunrise:formattedTime_sunrise,
              sunset:formattedTime_sunset,
              weatherIcon:weatherIcon,
              dt: last_Update_time,
            };
          })
        );
        setAllCityDetails(cityDetails);
        console.log(allCityDetails[0].bgcolor);
      } catch (err) {
        console.error(err);
      }
    };

    // fetchData(); 
  }, []); // Empty dependency array ensures this effect runs once on mount
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home allCityDetails={allCityDetails} />} />
        <Route path={allCityDetails[0]?.name} element={<EachCity allCityDetails={allCityDetails[0]} color="blue-bg"/>} />
        <Route path={allCityDetails[1]?.name} element={<EachCity allCityDetails={allCityDetails[1]} color="purple-bg"/>} />
        <Route path={allCityDetails[2]?.name} element={<EachCity allCityDetails={allCityDetails[2]} color="green-bg"/>} />
        <Route path={allCityDetails[3]?.name} element={<EachCity allCityDetails={allCityDetails[3]} color="orange-bg"/>} />
        <Route path={allCityDetails[4]?.name} element={<EachCity allCityDetails={allCityDetails[4]} color="red-bg"/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


// --------------------------------------------------------------------
