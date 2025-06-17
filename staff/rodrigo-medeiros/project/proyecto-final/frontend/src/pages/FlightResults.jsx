// src/pages/FlightResults.jsx
import React from "react";
import FlightResultsContainer from "../components/flightResults/FlightResultsContainer";

const FlightResults = () => {
  return (
    <div className="bg-blue-200 min-h-screen pt-16 flex justify-center">
      <div className="w-full max-w-6xl">
        <FlightResultsContainer />
      </div>
    </div>
  );
};

export default FlightResults;
