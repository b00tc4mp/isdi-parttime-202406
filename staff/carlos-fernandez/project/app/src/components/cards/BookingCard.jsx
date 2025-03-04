import React from "react";

function BookingCard({ bookings }) {
  return (
    <div>
      <ul>
        {bookings.map((booking) => (
          <li key={booking.id} className="p-4 flex justify-center">
            <div className="bg-customBackgroundBlue flex items-center w-full sm:w-1/3 sm:h-48 border border-gray-300 rounded-2xl shadow-lg sm:p-8">
              <div className="flex justify-between items-center w-full flex-col sm:flex-row ">
                <div className="flex items-center mr-4">
                  <h2 className="text-black font-bold text-xl sm:text-3xl ml-2 sm:ml-0">
                    {booking.dogNames}
                  </h2>
                </div>

                <div className="flex flex-row space-x-4 mb-2 sm:mb-0">
                  <div className="flex flex-row sm:flex-col items-center border border-gray-300 rounded-lg p-2 bg-customBackground text-black">
                    <span className="mr-2 sm:mr-0">📅</span>{" "}
                    <span className="hidden sm:block"> Fecha entrada</span>{" "}
                    <p> {booking.startDate}</p>
                  </div>
                  <div className="flex flex-row sm:flex-col items-center border border-gray-300 rounded-lg p-2 bg-customBackground text-black">
                    <span className="mr-2 sm:mr-0">📅</span>{" "}
                    <span className="hidden sm:block"> Fecha salida</span>{" "}
                    <p> {booking.endDate}</p>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookingCard;
