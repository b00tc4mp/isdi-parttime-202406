import React from "react";
import DeleteBookingButton from "../buttons/DeleteBookingButton";

function BookingCard({ bookings, onDelete }) {
  return (
    <div>
      <ul>
        {bookings.map((booking) => (
          <li key={booking.id} className="p-4 flex justify-center">
            <div className="relative bg-customBackgroundBlue flex items-center w-full custom-2sm:w-1/2 sm:h-48 border border-gray-300 rounded-2xl shadow-lg sm:p-8">
              <div className="flex justify-between items-center w-full flex-col custom-2xl:flex-row custom-2xl:items-center">
                <div className="flex items-center mr-4">
                  <h2 className="text-black font-bold text-xl sm:text-3xl mb-2 lg:mb-0 ml-2 sm:ml-0">
                    {booking.dogNames}
                  </h2>
                </div>

                <div className="flex flex-row space-x-4 mb-2 sm:mb-0 custom-2xl:mt-4">
                  <div className="w-[117.27px] flex flex-row sm:flex-col items-center border border-gray-300 rounded-lg p-2 bg-customBackground text-black">
                    <span className="mr-2 sm:mr-0">📅</span>
                    <span className="hidden custom-2md:block">
                      {" "}
                      Fecha entrada
                    </span>
                    <p> {booking.startDate}</p>
                  </div>
                  <div className="w-[117.27px] flex flex-row sm:flex-col items-center border border-gray-300 rounded-lg p-2 bg-customBackground text-black">
                    <span className="mr-2 sm:mr-0">📅</span>
                    <span className="hidden custom-2md:block">
                      {" "}
                      Fecha salida
                    </span>
                    <p> {booking.endDate}</p>
                  </div>
                </div>
              </div>
              <DeleteBookingButton onDelete={() => onDelete(booking.id)} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookingCard;
