
import React from "react";
import { Header, Footer, SearchFlightsForm } from "../components";

const Home = () => {
  return (
    <div className="bg-blue-200 min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow mt-16 md:mt-20">
        <SearchFlightsForm />
      </div>
    </div>
  );
};

export default Home;
