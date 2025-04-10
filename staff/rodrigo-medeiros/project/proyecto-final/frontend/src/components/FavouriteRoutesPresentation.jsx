import React from "react";

const FavouriteRoutesPresentation = ({ routes, onSearchAgain, onDeleteRoute }) => {
  if (!routes || routes.length === 0) {
    return (
      <div className="bg-blue-200 min-h-screen w-full text-blue-900 p-6">
        <h1 className="text-2xl font-bold mb-4">My Favourite Routes</h1>
        <p>You don't have any favorite routes yet.</p>
      </div>
    );
  }

  return (
    <div className="bg-blue-200 min-h-screen w-full text-blue-900 p-6">
      <h1 className="text-2xl font-bold mb-4">My Favourite Routes</h1>
      <ul>
        {routes.map((route, index) => (
          <li
            key={route._id}
            className="border p-4 rounded mb-2 flex justify-between"
          >
            <div>
              <h2 className="font-bold">Favourite Route #{index + 1}</h2>
              <p>
                <strong>From:</strong> {route.from.name} ({route.from.iata_code})
              </p>
              <p>
                <strong>To:</strong> {route.to.name} ({route.to.iata_code})
              </p>
              <p>
                <strong>Departure Date:</strong> {route.departureDate}
              </p>
              {route.returnDate && (
                <p>
                  <strong>Return Date:</strong> {route.returnDate}
                </p>
              )}
              <p>
                <strong>Passengers:</strong> {route.adults} adults,{" "}
                {route.children} children
              </p>
              <p>
                <strong>Class:</strong> {route.cabinClass || "Economy"}
              </p>
            </div>
            <div>
              <button
                onClick={() => onSearchAgain(route)}
                className="bg-blue-500 text-white p-2 rounded"
              >
                Search Again
              </button>
              <button
                onClick={() => onDeleteRoute(route._id)}
                className="mt-2 bg-red-500 text-white p-2 rounded"
              >
                Delete Route
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavouriteRoutesPresentation;
