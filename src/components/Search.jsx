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
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row">
        <input
          className="bg-[#1f2127] outline-none w-[320px] h-[50px] pl-4 lg:rounded-l-lg rounded-lg "
          type="text"
          name="city"
          value={searchedCity}
          onChange={handleInputChange}
        />
        <button className="bg-[#6b5dd3] w-[130px] h-[50px] rounded-lg ml-[30%] md:ml-0 lg:mt-0 mt-[10px] md:mt-0 hover:bg-purple-600 duration-300 hover:text-black">Add City</button>
      </form>
    </div>
  );
};

export default Search;
