import React, { useEffect, useState } from "react";
import citiesData from "./cities.json";
import axios from "axios";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";

function App() {
  const [cityCode, setCityCode] = useState([]);
  let allCityDetails = [];

  useEffect(() => {
    citiesData.List.forEach((eachCity) => {
      setCityCode((prevCityCode) => [...prevCityCode, eachCity.CityCode]);
    });
  }, []);

  // Openweathermap
  const api_key = "59108cb758efbaac0417df79f1863251";

  // Getting Weather details according the list of cityCodes.
  const getData = () => {
    cityCode.forEach((eachId) => {
      const apiUrl = `http://api.openweathermap.org/data/2.5/group?id=${eachId},&units=metric&appid=${api_key}`;
      axios
        .get(apiUrl)
        .then((res) => {
          let cityName = res.data.list[0].name;
          let description = res.data.list[0].weather[0].description;
          let temp = res.data.list[0].main.temp;
          let time = res.data.list[0].dt;
          let eachCityDetails = {
            id: eachId,
            name: cityName,
            description: description,
            temp: temp,
            dt: time,
          };
          allCityDetails.push(eachCityDetails);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  };

  // getData(); // Caling the function to get the data from openwhethearmap.
  console.log(allCityDetails);

  return (
    <div className="App w-full">
      <Header />
      <Body />
      {/* <Footer />   */}
    </div>
  );
}

export default App;
