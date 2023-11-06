import React, { useState } from "react";

const Search = () => {
  const [searchedCity, setsearchedCity] = useState("");

  const handleInputChange = (e) => {
    setsearchedCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setsearchedCity("")
    console.log(searchedCity);
  };

  return (
    <div className="text-white ">
      <form onSubmit={handleSubmit}>
        <input
          className="bg-[#1f2127] outline-none w-[400px] h-[50px] pl-4 rounded-l-lg"
          type="text"
          name="city"
          value={searchedCity}
          onChange={handleInputChange}
        />
        <button className="bg-[#6b5dd3] w-[130px] h-[50px] rounded-lg">Add City</button>
      </form>
    </div>
  );
};

export default Search;
