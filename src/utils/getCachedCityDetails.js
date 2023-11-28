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

export default getCachedCityDetails;
