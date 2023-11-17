import axios from "axios";

const APIHelper = {
  getWeatherDetails: async (cityId) => {
    const api_key = process.env.REACT_APP_WEATHER_API_KEY;  // Getting api key from .env file
    const apiUrl = `http://api.openweathermap.org/data/2.5/group?id=${cityId}&units=metric&appid=${api_key}`;

    try {
      const res = await axios.get(apiUrl);
      return res.data.list[0];
    } catch (err) {
      console.error(err);
      throw err; // Re-throw the error so that it can be caught by the calling function
    }
  },
};

export default APIHelper;
