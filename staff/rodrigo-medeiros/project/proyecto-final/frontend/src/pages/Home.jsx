
import React from "react";
import { SearchFlightsFormContainer } from "../pages";
import { Header, Footer} from "../components"

const Home = () => {
  return (
    <div className="bg-blue-200 min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow mt-16 md:mt-20">
        <SearchFlightsFormContainer />
      </div>
    </div>
  );
};

export default Home;
