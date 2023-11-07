import React from "react";
import Header from "../components/Header";
import Body from "../components/Body";
import Footer from "../components/Footer";

const Home = (props) => {
  return (
    <div>
      <Header />
      <Body allCityDetails={props.allCityDetails}/>
      <Footer />
    </div>
  );
};

export default Home;
