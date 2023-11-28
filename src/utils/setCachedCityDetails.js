const setCachedCityDetails = (cityCode, cityData) => {
  localStorage.setItem(
    `city_${cityCode}`,
    JSON.stringify({
      data: cityData,
      timestamp: new Date().getTime(),
    })
  );
};

export default setCachedCityDetails;
