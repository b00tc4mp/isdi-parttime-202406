
import React from "react";
import SearchFlightsFormContainer from "../components/searchFlightsForm/SearchFlightsFormContainer.jsx";
import  HeaderContainer from"../components/header/HeaderContainer.jsx";
const Home = () => {
  return (
    <div className="bg-blue-200 min-h-screen flex flex-col">
      <HeaderContainer />
      <div className="flex-grow mt-16 md:mt-20">
        <SearchFlightsFormContainer />
      </div>
    </div>
  );
};

export default Home;
